// Coleção 3 embeddings 
// Script para fazer ajuste fino da classificação das regiões
//
// Baseado na versao R0X feita pelo Juliano 
// versão original usada na Col2 Sentinel
// ajustada por JS para embeddings e outras funcionalidades por EVM e MV em setembro 2025
// =================================================================================================================
//                                DEFINITIONS:
// =================================================================================================================

// Região e coleção do Sentinel
// -----------------------------------------------------------------------
var regiao = 1;
var collection_out = 3;
var version_out = '04'; // mudar a cada nova versao que for exportada
var bioma = 'PAMPA';

//Parâmetros do classificador
// -----------------------------------------------------------------------
var nSamplesMin = 60;
var nSamplesMax = 1000;
var Quantidade_amostras = 0; //1 // quantidade final de amostra SS + complementares por classe
var RFtrees = 100; //60, 100

// Ativação de funcionalidades
// -----------------------------------------------------------------------
var exporta_colecao = 1; //ativar a geometria do bioma antes de dar o Run (0/1)
var debug = 1; //variavel para uso de debug, habilita os prints e os addLayers
var debug_SS = 0; //1
var calc_area = 1; //ativa os gráficos comparados
//ATENÇÂO: três definiões de anos 1. Ano de comparação entre class. e mapa ref, 2. anos de classficação
// 3. anos da classificação para calcular área a ser inserida no gráfico 

// Comparação com mapas de referencia
// Define ano de comparação e classe - imagem de diferença
// -----------------------------------------------------------------------
var ano_compara = 2020; // lembrar de ajustar este ano no cálculo do gráfico de área
// Define as classes a serem comparadas
var classes_list = [22 //3,11, 12, 21, 22, 33, 29
];

// Define a versão do s2 anterior para plotar nos gráficos
var versao_ante = "3"; // verificar pois correponde a uma tabela de áreas exportadas anteriomente

// Define os parâmetros de visualização
// ----------------------------------------------------------------------
var palettes = require('users/mapbiomas/modules:Palettes.js');
// Vis coll 08
var vis = { 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

var visParMedian2 = {'bands':['nir_median','swir1_median','red_median'], 'gain':[0.06, 0.08,0.2],'gamma':0.5 };
// Parâmetros de visualização da imagem de diferença
var vischange = {"min": 0, "max": 3,
        "palette": "ffffff,ff0000,e6f919,aaaaaa",    //amarelo=e6f919    magenta=bb34c0
        "format": "png"
}

var visParamsEmb = {min: -0.3, max: 0.3, bands: ['A01', 'A16', 'A09']};

// =================================================================================================================
//                                ASSETS:
// =================================================================================================================
// Local dos mosaicos e das amostras
//Embeddings
var dirasset = ee.ImageCollection('GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL')

var cluster_evi_80 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_2024/PAMPA/S2_clusters_2016_2023_evi_80')
cluster_evi_80 = cluster_evi_80.addBands(cluster_evi_80.select('clusters_2023').rename('clusters_2024'));
cluster_evi_80 = cluster_evi_80.addBands(cluster_evi_80.select('evi_median_2023').rename('evi_median_2024'))
  
var cluster_ndvi_20 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_2024/PAMPA/S2_clusters_2016_2023_ndvi_20')
cluster_ndvi_20 = cluster_ndvi_20.addBands(cluster_ndvi_20.select('clusters_2023').rename('clusters_2024'));
cluster_ndvi_20 = cluster_ndvi_20.addBands(cluster_ndvi_20.select('ndvi_median_2023').rename('ndvi_median_2024'))
  
//Mosaico
// Asset contendo os mosaicos de Sentinel-2 2017 - 2023
var asset_s2 = ee.ImageCollection('projects/mapbiomas-mosaics/assets/SENTINEL/BRAZIL/mosaics-3')
  
// Asset contendo os mosaicos de Sentinel-2 2024
var asset_s2_2024 = ee.ImageCollection('projects/nexgenmap/MapBiomas2/SENTINEL/mosaics-3')
  
var c24 = asset_s2_2024.filter(ee.Filter.eq('year', 2024));

// Junção dos mosaicos Sentinel-2
var s2_all = asset_s2.merge(c24)
  .filter(ee.Filter.eq('version', "3"))
  .filter(ee.Filter.eq('biome', "PAMPA"));

//amostras
var dirsamples = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/SAMPLES/';
//pontos estaveis com propriedades
var versao_pt = 'mosaic_and_embedding_S2_embed_v1';

// Variáveis para usar ao exportar o asset
//var dirout = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/';
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam/'

// Limites do PAMPA com buffer
// ----------------------------------------------------------------------
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff');
var limite = regioesCollection.filter(ee.Filter.eq('ID', regiao));

// Limite sem o buffer
var regioesCollection2 = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col05');
var limite2 = regioesCollection2.filter(ee.Filter.eq('ID', regiao));

// Raster limite do PAMPA
var limite_reg_raster = ee.Image().uint32().paint({
  featureCollection: limite,
  color: 'ID',
}).rename(['limite']);
var mask_regiao = limite_reg_raster.eq(regiao).selfMask();

Map.centerObject(limite2, 7);

if (exporta_colecao == 1) {
  debug = 0;
  limite = geom_limite; // aqui usa o limite simplificado
  var anos = [
    2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
  ];
} else {
  var anos = [ano_compara]; //[ano_compara]//[2017,2024]
  limite = geom_limite; //limite.geometry() //aqui usa o limite da regiao com buffer
}

// =================================================================================================================
//                                CLASSIFICATION:
// =================================================================================================================

for (var i_ano = 0; i_ano < anos.length; i_ano++) {
  var ano = anos[i_ano];
  var anoStr = String(ano); // Converte o ano para string uma vez

  // Define o percentual de cada classe x ano
  if (ano <= 2019) {
    var percent_Flo = 15;
    var percent_Umi = 6;
    var percent_Cam = 31;
    var percent_Agr = 41;
    var percent_Anv = 14;
   // var percent_Afr = 7;
    var percent_Agu = 30;
  }

  if (ano > 2019 && ano <= 2022) {
    var percent_Flo = 15; //48 v1
    var percent_Umi = 7;
    var percent_Cam = 25;
    var percent_Agr = 45;
    var percent_Anv = 14;
    //var percent_Afr = 7;
    var percent_Agu = 30;
  }

  if (ano > 2022) {
    var percent_Flo = 15;
    var percent_Umi = 7;
    var percent_Cam = 25;
    var percent_Agr = 45;
    var percent_Anv = 14;
    //var percent_Afr = 7;
    var percent_Agu = 30;
  }

  //nome das bandas dos mosaicos 
  // var bandNames_selected = ee.List([
  //   'longitude', 'ana_slope', /*'evi_median_'+anoStr,*/ 'latitude', 'blue_median', 'evi_median',
  //   /*'ndvi_median_'+anoStr,*/ 'gcvi_median_wet', 'gvmi_median_dry', 'hand', 'ndvi_median_dry',
  //   'red_edge_3_median_wet', 'brba_median', 'evi_median_dry', 'gemi_median', 'swir1_stdDev',
  //   'ui_median', 'brba_median_dry', 'evi_median_wet', 'gcvi_median_dry', 'mbi_median_dry',
  //   'mbi_median_wet', 'msi_median_dry', 'ratio_median_wet', 'red_edge_1_median_dry',
  //   'red_edge_4_stdDev', 'rvi_median', 'wetness_median', 'bsi_median', 'cvi_median',
  //   'green_median_texture', 'green_min', 'gvmi_median_1', 'gvmi_median_dry_1', 'nddi_median',
  //   'osavi_median_wet', 'ratio_median', 'red_median_dry', 'ri_median', 'shape_median',
  //   'spri_median', 'swir2_stdDev', 'wetness_median_dry', 'avi_median_dry', 'brba_median_wet',
  //   'brightness_median', 'dswi5_median_wet', 'gemi_median_dry', 'gli_median_wet', 'gvmi_median_wet_1',
  //   'iia_median', 'iia_median_dry', 'iia_median_wet', 'lai_median', 'lswi_median_dry', 'lswi_median_wet',
  //   'mbi_median', 'nddi_median_dry', 'ndvi_median', 'ndwi_median_wet', 'nir_median_wet', 'ratio_median_dry',
  //   'red_edge_1_median_wet', 'red_edge_1_stdDev', 'red_edge_4_median_dry', 'rvi_median_1', 'shape_median_wet',
  //   'swir1_median_dry', 'swir1_median_wet', 'swir2_median_wet', 'ui_median_dry'
  //   ]);

    //   // 20 mais importantes
    //   var bandNames_selected = ee.List([
    //   'lswi_median_dry', 'spri_median_wet', 'dswi5_median', 'swir1_median_wet', 'brightness_median_wet',
    // 'shape_median_dry', 'ri_median_dry', 'gvmi_median_dry_1', 'green_stdDev', 'red_edge_3_median',
    // 'evi_median_wet', 'shape_median', 'nddi_median_wet', 'red_median_dry', 'gvmi_median_dry',
    // 'rvi_median_1', 'hand', 'swir2_median_dry', 'iia_median_wet', 'latitude'
    //     ]);

  // 40 mais importantes
  var bandNames_selected = ee.List([
  'lswi_median_dry', 'spri_median_wet', 'dswi5_median', 'swir1_median_wet', 'brightness_median_wet',
    'shape_median_dry', 'ri_median_dry', 'gvmi_median_dry_1', 'green_stdDev', 'red_edge_3_median',
    'evi_median_wet', 'shape_median', 'nddi_median_wet', 'red_median_dry', 'gvmi_median_dry',
    'rvi_median_1', 'hand', 'swir2_median_dry', 'iia_median_wet', 'latitude',
    'gcvi_median_wet', /*'evi_median_cluster',*/ 'red_edge_1_stdDev', 'green_median', 'green_median_dry',
    'wetness_median_wet', 'red_edge_4_median_dry', 'red_edge_1_median_wet', 'rvi_median', 'gli_median_dry',
    'afvi_median_wet', /*'ndvi_median_cluster',*/ 'ui_median_wet', 'avi_median_dry', 'msi_median',
    'evi_median_dry', 'gvmi_median_wet_1', 'evi_median', 'co2flux_median', 'nir_median'

    ]);


  // Sequência das bandas dos embeddings 
  var bands_sequence = ee.List.sequence(0, 63, 1);
  var bandNames = bands_sequence.map(function(index) {
    return ee.String('A').cat(ee.Number(index).format('%02.0f'));
  });

  // Bandas dos clusters 
  var bandNames_clusters = ee.List([
    //'clusters_evi_80_' + anoStr,   
    'evi_median_cluster_' + anoStr,
    //'clusters_ndvi_20_' + anoStr,  
    'ndvi_median_cluster_' + anoStr
  ]);

  // Mosaicos + embeddings + clusters 
  var bandNames_all = bandNames_selected
    .cat(bandNames)
    .cat(bandNames_clusters);
    
    print(bandNames_all.size())

  // Mosaico sentinel-2 e indices
  // Seleciona mosaico S2 do ano
  var mosaic_s2_col = s2_all
    .filter(ee.Filter.eq('year', ano))
    .filter(ee.Filter.eq('version', "3"))
    .filter(ee.Filter.eq('biome', "PAMPA"))
    .filterBounds(limite);

  var mosaicoS2 = mosaic_s2_col.mosaic();
  //print(mosaicoS2.bandNames().size())

  // Adiciona índices calculadas Caatinga + variáveis
  var addIndexComplem = require('users/schirmbeckj/MapBiomas:ASentinel/Coll03/1. Samples/CalculateIndices.js')
  var mosaico138 = addIndexComplem.getIndices(mosaicoS2);
  
  //mosaicos e clusters
var mosaicoWithClusters = mosaico138
  .addBands(cluster_evi_80.select(['clusters_' + anoStr]).rename(['clusters_evi_80_' + anoStr]))
  .addBands(cluster_evi_80.select(['evi_median_' + anoStr]).rename(['evi_median_cluster_' + anoStr]))
  .addBands(cluster_ndvi_20.select(['clusters_' + anoStr]).rename(['clusters_ndvi_20_' + anoStr]))
  .addBands(cluster_ndvi_20.select(['ndvi_median_' + anoStr]).rename(['ndvi_median_cluster_' + anoStr]));

  // adiconado os embeddings ao mosaico
  var mosaicoEmb = dirasset
  .filterDate(anoStr + '-01-01', anoStr + '-12-31')
  .filterBounds(limite)
  .mosaic();

  // Mosaico Total
  var mosaicoTotal = mosaicoWithClusters.addBands(
    mosaicoEmb.select(bandNames)
  );

  mosaicoTotal = ee.Image(mosaicoTotal);

  // seleciona apenas as bandas desejadas
  mosaicoTotal = mosaicoTotal.select(bandNames_all);
  print('Bandas após select final:', mosaicoTotal.bandNames());

  // Importa e seleciona as amostras estáveis
  var SS_amostras = ee.FeatureCollection(dirsamples + 'pontos_train_' + versao_pt + '_'+ String(ano))
      .filter(ee.Filter.eq('ID', regiao))
      //.filterBounds(limite) 
  
  // permite remover amostras estáveis dentro de polígono digitalizados em tela
  var SS_amostrasF = SS_amostras.filter(ee.Filter.bounds(remover_SS).not())

  // Filtra cada classe
  var SS_Flo = SS_amostrasF.filter(ee.Filter.eq('reference', 3))
  var SS_Umi = SS_amostrasF.filter(ee.Filter.eq('reference', 11))
  var SS_Cam = SS_amostrasF.filter(ee.Filter.eq('reference', 12))
  var SS_Agr = SS_amostrasF.filter(ee.Filter.eq('reference', 21))
  var SS_Anv = SS_amostrasF.filter(ee.Filter.eq('reference', 22))
  //var SS_Afr = SS_amostrasF.filter(ee.Filter.eq('reference', 29))
  var SS_Agu = SS_amostrasF.filter(ee.Filter.eq('reference', 33))

  var n_samples_Flo = ee.Number(SS_Flo.size().multiply(percent_Flo).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Umi = ee.Number(SS_Umi.size().multiply(percent_Umi).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Cam = ee.Number(SS_Cam.size().multiply(percent_Cam).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Agr = ee.Number(SS_Agr.size().multiply(percent_Agr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Anv = ee.Number(SS_Anv.size().multiply(percent_Anv).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  //var n_samples_Afr = ee.Number(SS_Afr.size().multiply(percent_Afr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Agu = ee.Number(SS_Agu.size().multiply(percent_Agu).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  
  // Seleciona a quantidade de amostras
  var SS_Flo_samples = SS_Flo.randomColumn().sort('random').limit(n_samples_Flo)
  var SS_Umi_samples = SS_Umi.randomColumn().sort('random').limit(n_samples_Umi)
  var SS_Cam_samples = SS_Cam.randomColumn().sort('random').limit(n_samples_Cam)
  var SS_Agr_samples = SS_Agr.randomColumn().sort('random').limit(n_samples_Agr)
  var SS_Anv_samples = SS_Anv.randomColumn().sort('random').limit(n_samples_Anv)
  //var SS_Afr_samples = SS_Afr.randomColumn().sort('random').limit(n_samples_Afr)
  var SS_Agu_samples = SS_Agu.randomColumn().sort('random').limit(n_samples_Agu)

  //print('SS_Flo_samples',SS_Flo_samples)
  // print('SS_Flo',SS_Flo)
  // Map.addLayer(SS_Flo,{color:'0000ff'},'todos')
  // Map.addLayer(SS_Flo_samples,{color:'ff0000'},'selecao')
  
  // Cria variavel com todas as amostras estáveis
  var SS_amostrasClas = SS_Flo_samples
          .merge(SS_Umi_samples)
          .merge(SS_Cam_samples)
          .merge(SS_Agr_samples)
          .merge(SS_Anv_samples)
          //.merge(SS_Afr_samples)
          .merge(SS_Agu_samples)
  
  // print('SS_Flo_samples',SS_Flo_samples.size())
  // print('SS_Umi_samples',SS_Umi_samples.size())
  // print('SS_Cam_samples',SS_Cam_samples.size())
  // print('SS_Agr_samples',SS_Agr_samples.size())
  // print('SS_Anv_samples',SS_Anv_samples.size())
  // print('SS_Afr_samples',SS_Afr_samples.size())
  // print('SS_Agu_samples',SS_Agu_samples.size())

  // Amostras complementares
  var pontos_complementares = floresta
              .merge(aumi)
              .merge(campo)
              .merge(agric)
              .merge(anv)
              //.merge(arocho)
              .merge(agua)
              
  // Samples
  var trainingComp = mosaicoTotal.sampleRegions({
      'collection': pontos_complementares,
      'properties': ['reference'],
      'scale': 10
  });
  var complementares = trainingComp//.map(function (feature) {return feature.set('comp_coll', '7')});
  
  // Faz o merge das amostras estáveis com as complementares
  var training = SS_amostrasClas.merge(complementares)
  
  if (debug_SS == 1){
     // Verifica amostras ao longo do processo
  print('SS_amostras',SS_amostras.size())
  print('SS_amostrasF',SS_amostrasF.size())
  print('SS_amostrasClas',SS_amostrasClas.size())
  print('Training',training.size())
  
// Verificar quantas amostras de cada classe são usadas na classificação  
  var SS_03 = training.filter(ee.Filter.eq('reference', 3))
  var SS_11 = training.filter(ee.Filter.eq('reference', 11))
  var SS_12 = training.filter(ee.Filter.eq('reference', 12))
  var SS_21 = training.filter(ee.Filter.eq('reference', 21))
  var SS_22 = training.filter(ee.Filter.eq('reference', 22))
  //var SS_29 = training.filter(ee.Filter.eq('reference', 29))
  var SS_33 = training.filter(ee.Filter.eq('reference', 33))          
 
  var dict = ee.Dictionary();
  if (Quantidade_amostras == 1){
        dict = dict.set('03-Floresta', SS_03.size());
        dict = dict.set('11-Área Pantanosa',SS_11.size());
        dict = dict.set('12 - F. Campestre', SS_12.size());
        dict = dict.set('21 - Mosaico de Usos', SS_21.size());
        dict = dict.set('22 - ANV',SS_22.size());
        //dict = dict.set('29 - Afl.Rochoso',SS_29.size());
        dict = dict.set('33 - Água',SS_33.size());
 print('N_amostras_classe', dict )
  }
} //fecha o debug

    // Classificador sem informações de importância e arvores 
var classifier = ee.Classifier.smileRandomForest({numberOfTrees: RFtrees, variablesPerSplit:1}).train(training, 'reference', bandNames_all);
  
  // testar o Gradient Tree Booster
  
  // Classifica o mosaico
  var classified = mosaicoTotal.classify(classifier)//.mask(mosaicoTotal.select('red_m'));
  classified = classified.select(['classification'],['classification_'+ano]).updateMask(mask_regiao).toInt8()
  // if (debug == 1){print('classified',classified)}
  
  if (i_ano === 0){ var classified16a23 = classified }  
  else {classified16a23 = classified16a23.addBands(classified);
  }
  
  // // ==============================================================================================================
  //                                        VERIFICA A IMPORTÂNCIA DAS BANDAS:
  
  // Classificador com informações de importância e arvores 
  // Código para obter a importância ordenada de cada variável
  var exp = classifier.explain()
  // print('Explain', exp)
  var importance = ee.Dictionary(exp.get('importance'))
  var keys = importance.keys().sort(importance.values()).reverse()
  // print("keys", keys)
  var values = importance.values(keys);
  // print("values", values)
  var rows = keys.zip(values)
  // print("rows", rows)
  var map_teste = rows.map(function(list) {
    return {c: ee.List(list).map(function(n) { return {v: n}; })}
  })
  // Definições para gerar o gráfico
  var dataTable = {
    cols: [{id: 'band', label: 'Band', type: 'string'},
          {id: 'importance', label: 'Importance', type: 'number'}],
    rows: map_teste.slice(0,50)
  };
  // Gera o gráfico de importância das variáveis
  ee.Dictionary(dataTable).evaluate(function(result) {
    var chart = ui.Chart(result)
      .setChartType('ColumnChart')
      .setOptions({
        title: 'Random Forest Band Importance',
        legend: {position: 'none'},
        hAxis: {title: 'Bands'},
        vAxis: {title: 'Importance'}
      });
    print(chart);
  })

} //finaliza o loop dos anos

// =================================================================================================================
//                                   PRINTA E EXPORTA A COLEÇÃO
// =================================================================================================================

//adiciona metadados para na exportação do raster
classified16a23 = classified16a23
    .set('collection', collection_out)
    .set('version', version_out)
    .set('biome', bioma)

// Exporta a coleção
Export.image.toAsset({
  'image': classified16a23.toInt8(),
  'description': regiao+'-'+'Emb_RF17a24_v'+version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'Emb_RF17a24_v'+version_out,
  'scale': 10,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'maxPixels': 1e13,
  'region': limite // cria espaço para armazenar a imagem delimitado por esta geometria
});      

//classified16a23 = classified16a23.mask(limite_reg_raster.eq(regiao))

if (debug == 1){
// =================================================================================================================
//                                    PLOTA CAMADAS DE APOIO
// =================================================================================================================

// Classes Mapbiomas BR e PAMPA
var class_in =  [3,49,11,12,29,50,15,19,39,20,40,62,41,36,46,47,48,9,21,22,23,24,30,25,33,31,75]
var class_out = [3, 3,11,12,29,12,21,21,21,21,21,21,21,21,21,21,21,3,21,22,22,22,22,22,33,33,22]

// Carrega a coleção Landsat e reclassificada para as classes do PAMPA
var colLandsat = ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_coverage_v2')
  .mask(mask_regiao)
  .select('classification_'+ano_compara)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)

// ---------------------------------------------------------------------------------
// Mosaicos

var mosaico_sentinel = ee.ImageCollection('projects/mapbiomas-mosaics/assets/SENTINEL/BRAZIL/mosaics-3')
    .filter(ee.Filter.eq('version', "3"))
    .filter(ee.Filter.eq('biome', "PAMPA"));
                      
var mosaico_firstY = mosaico_sentinel.filter(ee.Filter.eq('year', 2017))
                  .filterBounds(limite)
                  .mosaic()
var mosaicoComp = mosaico_sentinel.filter(ee.Filter.eq('year', ano_compara))
                  .filterBounds(limite)
                  .mosaic()
var mosaico_lastY = mosaico_sentinel.filter(ee.Filter.eq('year', 2023))
                  .filterBounds(limite)
                  .mosaic()
                  
                      
var embedding_firstY= dirasset.filterDate('2017-01-01', '2017-12-31')
                  .filterBounds(limite)
                  .mosaic()
var embeddingComp = dirasset.filterDate(ano_compara+'-01-01', ano_compara+'-12-31')
                  .filterBounds(limite)
                  .mosaic()
var embedding_lastY = dirasset.filterDate('2023-01-01', '2023-12-31')
                  .filterBounds(limite)
                  .mosaic()                  
                  
// --------------------------------------------------------------------------------- 

// Adiciona os layers no mapa
Map.addLayer(mosaico_firstY, visParMedian2, 'Img_Year_2017', false);  
Map.addLayer(mosaicoComp, visParMedian2, 'Img_Year_'+ano_compara, false); 
Map.addLayer(mosaico_lastY, visParMedian2, 'Img_Year_2024', false);
Map.addLayer(embedding_firstY, visParamsEmb, 'embedding_2017', false);  
Map.addLayer(embeddingComp, visParamsEmb, 'embedding_'+ano_compara, false); 
Map.addLayer(embedding_lastY, visParamsEmb, 'embedding_2024', false);

Map.addLayer(colLandsat, vis, 'Colecao 10 - ' + ano_compara, false)

// =================================================================================================================
//                                    CALCULATE DIFFERENCE :
// =================================================================================================================

// Sentinel col beta - camadas usada para imagem diferença
var col_Sentinel = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/01_Emb_RF17a24_v03')
  .mask(mask_regiao)
  .select('classification_'+ano_compara)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)
// print(col_beta, "S2 Col2")

var class_atual = classified16a23.select('classification_'+ano_compara)

// Coleção para comparar                 
Map.addLayer(col_Sentinel, vis, 'Sentinel Col2 - ' + ano_compara, false)
Map.addLayer(class_atual, vis, 'Emb_RF_teste ' + ano_compara + ' regiao 0' + regiao, false)

// Define variáveis para o mapa de diferença
var diferenca = require('users/schirmbeckj/MapBiomas:ASentinel/Coll03/4. Inspection/Mapa_Diferencas_Classe_v02.js').diferenca

// Itera sobre a lista de classes
for (var i_classe=0;i_classe<classes_list.length; i_classe++){
  var classe = classes_list[i_classe]
  
  // Gera mapa de diferença
  var img_dif = diferenca(col_Sentinel, class_atual, classe)
    .updateMask(mask_regiao)
 
  Map.addLayer(img_dif, vischange, 'Diferença classe ' + String(classe) + ' - ' + ano_compara, false)
}

 if (debug_SS == 1){
//Visualiza amostras SS, SS filtradas, SS usadas na classificação e SS coloridas
 Map.addLayer(SS_amostras, {} , 'Amostras SS', false) // colorir as amostras de acordo com a classe....
 Map.addLayer(SS_amostrasF, {} , 'Amostras SS Filt', false) //
 Map.addLayer(SS_amostrasClas, {} , 'Amostras SS Clas', false) //

var listClass = SS_amostrasClas.distinct(['reference']).reduceColumns(ee.Reducer.toList(), ['reference']).get('list') 
listClass.getInfo().forEach(function(classe) {
  var SS_color = SS_amostrasClas.filter(ee.Filter.eq('reference', classe))
//  print('Samples classe ' + item, SS_color.size())
  Map.addLayer(SS_color, { "color": palettes.get('brazil')[classe]}, 'Samples classe ' + classe, false)
//  print(item, SS_color.filter(ee.Filter.eq('reference',item)).limit(1))
}) 
}

var blank = ee.Image(0).mask(0);
var outline = blank.paint(limite, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline, visPar, 'Limite buffer região 0' + String(regiao), false)

var blank = ee.Image(0).mask(0);
var outline2 = blank.paint(limite2, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline2, visPar, 'Limite região 0' + String(regiao), false)


// =================================================================================================================
//                                    CALCULATE AREA:
// =================================================================================================================
// Calcula área on the fly para o ano da classificação

if (calc_area == 1) {
  var years = [''+ano_compara];
//  ['2020'//2017', '2018', '2019', '2020', '2021', '2022', '2023'
// ];
  
  // Função para converter resultados em FeatureCollection
  var convert2featCollection = function (item, year) { 
      item = ee.Dictionary(item);
      var feature = ee.Feature(ee.Geometry.Point([0, 0]))
          .set('classe', item.get('class'))
          .set('area', item.get('sum')) 
          .set('year', year); 
      return feature;
  };
  
  // Função para calcular a área de cada classe (km²)
  var calculateArea = function (image, geometry, year) {
      var pixelArea = ee.Image.pixelArea().divide(10000); // Área em ha (10000) e em km² (1000000)
      var reducer = ee.Reducer.sum().group(1, 'class'); 
      var areas = pixelArea.addBands(image)
          .reduceRegion({
              reducer: reducer,
              geometry: geometry,
              scale: 90,// 10 
              bestEffort: true,
              maxPixels: 1e12,
              tileScale: 4
          });
  
      var areasList = ee.List(areas.get('groups')).map(function(item) {
          return convert2featCollection(item, year); 
      });
      return ee.FeatureCollection(areasList);
  };
    
  // Gera gráficos de área da classificação atual comparado com outras classificações de referência
  //-------------------------
  // Função para calcular as áreas para cada ano e criar uma FeatureCollection
  var areasByYear_s2 = years.map(function(year) {
      var image = classified16a23.select('classification_' + year); 
      var areaClass = calculateArea(image, geom_limite, year); 
      return areaClass; 
  });
  // Unir todas as FeatureCollections em uma única coleção
  var allAreas_s2 = ee.FeatureCollection(areasByYear_s2).flatten();
  // print('Áreas por ano e classe S2:', allAreas_s2);
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/areas_col10L_col2S_col3S_v02_r1_v2'

  var colls_area = ee.FeatureCollection(asset_area)
  
  // Função para criar um gráfico de comparação para uma classe específica
  var createComparisonChart = function(classNumber) {
      var filteredFeatures1 = allAreas_s2.filter(ee.Filter.eq('classe', classNumber)).map(function(ft){
        return ft.set('col', 'Col3_EmbS2_v'+version_out)
      })
  
      var filteredFeatures2 = colls_area
        .filter(ee.Filter.eq('ID_region', regiao))
        .filter(ee.Filter.eq('col', 'Col2_sf'))
        .filter(ee.Filter.eq('classe', classNumber))
      
      var filteredFeatures3 = colls_area
        .filter(ee.Filter.eq('ID_region', regiao))
        .filter(ee.Filter.eq('col', 'Col10_INT'))
        .filter(ee.Filter.eq('classe', classNumber))
      
       var filteredFeatures4 = colls_area
         .filter(ee.Filter.eq('ID_region', regiao))
         .filter(ee.Filter.eq('col', 'Col3_sf_v02'))
         .filter(ee.Filter.eq('classe', classNumber))
  
      var feat_colls = filteredFeatures1.merge(filteredFeatures2).merge(filteredFeatures3).merge(filteredFeatures4)
      // Criar o gráfico
      var chart = ui.Chart.feature.groups({
          features: feat_colls, 
          xProperty: 'year', 
          yProperty: 'area',
          seriesProperty: 'col'
      })
      .setChartType('LineChart') // Gráfico de linhas
      .setOptions({
          title: 'Comparação da Área da Classe ' + classNumber,
          hAxis: {title: 'Ano'},
          vAxis: {title: 'Área (ha)', viewWindow: {min: 0}},
          lineWidth: 2,
          pointSize: 3,
          series: {
              0: {color: 'orange', label: 'Col3_EmbS2_v'+version_out},
              1: {color: 'green', label: 'Col2_S2'},
              2: {color: 'orangered', label: 'Col10_INT'},
              3: {color: 'brown', label: 'Col3_S2'}
          },
          legend: {position: 'bottom'}
      });
      return chart;
  };
  // Gerar gráficos para comparação de todas as classes
  classes_list.forEach(function(classNumber) {
      var chart = createComparisonChart(classNumber);
      print(chart);
  });
}
} //fecha o debug