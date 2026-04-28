// MAPBIOMAS PAMPA
// COLLECTION 03 Sentinel-Embeddings
// AUTHOR: Juliano Schirmbeck 
// UPDATE: Oct 2025

var classification_r1 = ee.ImageCollection('projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/INTEGRATION/classification')
var regiao = 1 
var ano_compara = 2020
var anos = ee.List.sequence(2017, 2024);
var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam-temp/' 
var versionOut = '04_sombra_int'

// Limite PAMPA com buffer
var regioesCollection_CB = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')
var limite = regioesCollection_CB.filter(ee.Filter.eq('ID', regiao));

// Raster limite do PAMPA 
var regioesCollection_SB = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col05')
var limite2 = regioesCollection_SB.filter(ee.Filter.eq('ID', regiao));

var limite_reg_raster = ee.Image().uint32().paint({
    featureCollection: limite2,
    color: 'ID',
}).rename(['limite2']);
var mask_regiao = limite_reg_raster.eq(regiao).selfMask()

//buffer 100m ao redor de aroc
var aroc_buffer = ee.FeatureCollection(
  'users/macleidivarnier/export_aroc_buffer_100m'
);

//eliminando áreas problema
var aroc_buffer_cortado = aroc_buffer.map(function(feature) {
  // Obtém a geometria da feição atual
  var geom = feature.geometry();
  
  // Calcula a diferença entre a feição e a geometria de exclusão
  var diferenca = geom.difference(geometry);
  
  // Retorna a feição com a nova geometria cortada
  return feature.setGeometry(diferenca);
});

// Opcional: Remover feições que ficaram vazias após o corte
var aroc_buffer = aroc_buffer_cortado.filter(ee.Filter.notNull(['system:index']));

var aroc_img = ee.Image()
  .byte()
  .paint({
    featureCollection: aroc_buffer,
    color: 1
  })
  .rename('aroc');
var mask_aroc = aroc_img.eq(1).selfMask();

// Define as paletes e parâmetros de visualização
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

// Classes Mapbiomas BR e PAMPA
var class_in =  [3,49,11,12,29,50,15,19,39,20,40,62,41,36,46,47,48,9,21,22,23,24,30,25,33,31,75]
var class_out = [3, 3,11,12,29,12,21,21,21,21,21,21,21,21,21,21,21,3,21,22,22,22,22,22,33,33,22]

//col 3 int
var col_S3_gran = classification_r1
  .select('classification_'+ano_compara)
  .mosaic()
  .mask(mask_regiao)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)

//col 3 int mascarada por buffer aroc
var col_S3_aroc = col_S3_gran.mask(mask_aroc)

// Carrega o NASADEM
var nasadem = ee.Image('NASA/NASADEM_HGT/001')
.select('elevation').mask(mask_regiao).toFloat();

// Calcula slope 
var slope = ee.Terrain.slope(nasadem)
  .mask(mask_regiao);

//amostras de água em sombra
var sombra_select = col_S3_aroc.eq(33)
  .rename('class')
  .clip(geometry3);

//Análise exploratória sombra
// Gerar 500 amostras
var sombra_samples = sombra_select.selfMask().stratifiedSample({
  numPoints: 500,
  classBand: 'class',
  region: geometry3,
  scale: 10,
  geometries: true,
  seed: 42
});

//Extrair valores de slope pelas amostras
var slope_pts = slope.sampleRegions({
  collection: sombra_samples,      // FeatureCollection de pontos
  properties: ['id'],      // opcional
  scale: 10,
  geometries: false
});

// Histograma de slope para pontos
var chartSlopePts = ui.Chart.feature.histogram({
  features: slope_pts,
  property: 'slope',
  maxBuckets: 30   // ajuste o número de classes
})
.setOptions({
  title: 'Histograma de Slope (pontos)',
  hAxis: {
    title: 'Slope'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartSlopePts);


//Flow accumulation
var flowacc = ee.ImageCollection("projects/sat-io/open-datasets/HYDROGRAPHY90/base-network-layers/flow_accumulation")
.mosaic() 
  .mask(mask_regiao)

var flowacc_pts = flowacc.sampleRegions({
  collection: sombra_samples,      
  properties: ['id'],      
  scale: 10,
  geometries: false
});

// Histograma de Flow Accumulation para pontos
var chartFlowAccPts = ui.Chart.feature.histogram({
  features: flowacc_pts,
  property: 'b1',      
  maxBuckets: 30
})
.setOptions({
  title: 'Histograma de Flow Accumulation (pontos)',
  hAxis: {
    title: 'Flow Accumulation'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartFlowAccPts);


//amostras de água em rios/açudes
var rios_select = col_S3_aroc.eq(33)
  .rename('class')
  .clip(geometry4);

// Gerar 200 amostras
var rios_samples = rios_select.selfMask().stratifiedSample({
  numPoints: 500,
  classBand: 'class',
  region: geometry4,
  scale: 10,
  geometries: true,
  seed: 42
});

//Análise exploratória rios/lagos
//slope
var slope_pts = slope.sampleRegions({
  collection: rios_samples,      // FeatureCollection de pontos
  properties: ['id'],      // opcional
  scale: 10,
  geometries: false
});

// Histograma de slope para pontos
var chartSlopePts = ui.Chart.feature.histogram({
  features: slope_pts,
  property: 'slope',
  maxBuckets: 30   // ajuste o número de classes
})
.setOptions({
  title: 'Histograma de Slope (pontos)',
  hAxis: {
    title: 'Slope'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartSlopePts);

//Flow acc
var flowacc_pts = flowacc.sampleRegions({
  collection: rios_samples,      // FeatureCollection de pontos
  properties: ['id'],      // opcional
  scale: 10,
  geometries: false
});

// Histograma de Flow Accumulation para pontos
var chartFlowAccPts = ui.Chart.feature.histogram({
  features: flowacc_pts,
  property: 'b1',      // banda do flow accumulation
  maxBuckets: 30
})
.setOptions({
  title: 'Histograma de Flow Accumulation (pontos)',
  hAxis: {
    title: 'Flow Accumulation'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartFlowAccPts);

var granular = ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam-temp/PAMPA_04_gran')
//definição do filtro
// Definição de kernel 7x7
print(granular,'granular')

var kernel7 = ee.Kernel.square({
  radius: 3,
  units: 'pixels'
});

var aplicarFiltroAno = function(ano) {
  ano = ee.Number(ano).toInt();

  var col_S3_gran = ee.ImageCollection(granular)
    .select(ee.String('classification_').cat(ano))
    .mosaic()                       
    .mask(mask_regiao)
    .remap(class_in, class_out)
    .rename('classification');

  var col_S3_aroc = col_S3_gran.mask(mask_aroc);

  var sem33 = col_S3_gran.updateMask(col_S3_gran.neq(33));

  var moda_sem33 = sem33.reduceNeighborhood({
    reducer: ee.Reducer.mode(),
    kernel: kernel7,
    skipMasked: true
  }).reproject({
    crs: col_S3_gran.projection(),
    scale: col_S3_gran.projection().nominalScale()
  });

  var condicao = slope.gt(15)
    .and(flowacc.lt(1))
    .and(col_S3_gran.eq(33));

  var col_corrigido = col_S3_aroc.where(
    condicao,
    moda_sem33.unmask(col_S3_aroc)
  );

  var col_S3_filter = col_S3_gran.blend(col_corrigido);

  return col_S3_filter
    .rename('classification')
    .set('year', ano);
};

var classification_filtrada = ee.ImageCollection(
  anos.map(aplicarFiltroAno)
);
 print(classification_filtrada)

var classification_nomeada = classification_filtrada.map(function(img) {
  var ano = ee.Number(img.get('year')).format('%d');
  return img.rename(ee.String('classification_').cat(ano));
});

// stack atual 
var stack_com_indice = classification_nomeada.toBands();

// Remover o prefixo 
var bandNames = stack_com_indice.bandNames();

var bandNames_limpas = bandNames.map(function(b) {
  b = ee.String(b);
 
  return b.split('_').slice(1).join('_');
});

// Aplicar os novos nomes
var stack_final = stack_com_indice.rename(bandNames_limpas);

var stack_final = stack_final.toInt8()

print(stack_final)

// Conferência
print('Bandas finais:', stack_final.bandNames());

Export.image.toAsset({
  image: stack_final,
  description: '0' + regiao + '_Emb_RF17a24_v' + versionOut,
  assetId: dir_filtros + '0' + regiao + '_Emb_RF17a24_v' + versionOut,
  pyramidingPolicy: {
    '.default': 'mode'
  },
  region: limite.geometry().bounds(),
  scale: 10,
  maxPixels: 1e13
});

Map.addLayer(stack_final.select('classification_2024'),vis, 'classification_2024')
Map.addLayer(stack_final.select('classification_2017'),vis, 'classification_2017')


