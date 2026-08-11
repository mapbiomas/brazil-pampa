// MAPBIOMAS PAMPA
// Sentinel Coll 03 2025 

// Parâmetros para usar na exportação das amostras
var versao_out = 'S2_embed_v1' 

var sufix = '_99_24'
var dirout = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/SAMPLES/';

// Define os parâmetros de visualização
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {
    'min': 0,
    'max': 75,
    'palette': palettes.get('brazil')
};
var visParamsEmb = {min: -0.3, max: 0.3, bands: ['A01', 'A16', 'A09']};

// Região de estudo
var bioma250mil = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/biomas_IBGE_250mil')
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')

// Pontos estáveis durante o último período da coleção 9
var pts = ee.FeatureCollection('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/samples_col10_PAMPA_S2' + sufix)

// Asset contendo os mosaicos de Embedding
var asset = 'GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL'

// Asset contendo os mosaicos de Sentinel-2 2017 - 2023
var asset_s2 = ee.ImageCollection('projects/mapbiomas-mosaics/assets/SENTINEL/BRAZIL/mosaics-3');
print('Total de imagens:', asset_s2.size());

// Asset contendo os mosaicos de Sentinel-2 2024
var asset_s2_2024 = ee.ImageCollection('projects/nexgenmap/MapBiomas2/SENTINEL/mosaics-3')
var c24 = asset_s2_2024.filter(ee.Filter.eq('year', 2024))

// Unir 
var s2_all = asset_s2.merge(c24);
print('Total de imagens:', s2_all.size());

// Asset mosaicos com clusters
var cluster_evi_80 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_2024/PAMPA/S2_clusters_2016_2023_evi_80')
cluster_evi_80 = cluster_evi_80.addBands(cluster_evi_80.select('clusters_2023').rename('clusters_2024'))
cluster_evi_80 = cluster_evi_80.addBands(cluster_evi_80.select('evi_median_2023').rename('evi_median_2024'))

var cluster_ndvi_20 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_2024/PAMPA/S2_clusters_2016_2023_ndvi_20')
cluster_ndvi_20 = cluster_ndvi_20.addBands(cluster_ndvi_20.select('clusters_2023').rename('clusters_2024'))
cluster_ndvi_20 = cluster_ndvi_20.addBands(cluster_ndvi_20.select('ndvi_median_2023').rename('ndvi_median_2024'))

// ===========================================================================================================
// Inspecionar mosaicos para um ano específico 
var ano_v = 2024
var collection_v = ee.ImageCollection(s2_all)
    .filterMetadata('year', 'equals', ano_v)
    .filterMetadata('version', 'equals', '3')
    .filterMetadata('biome','equals','PAMPA');
print(collection_v)

var mosaicoTotal_v = collection_v.mosaic()

Map.addLayer(mosaicoTotal_v, {'bands': ['swir1_median', 'nir_median', 'red_median'],
    'gain': [0.08, 0.07, 0.2],'gamma': 0.85}, 'Sentinel 2', false);

// Adiciona bandas calculadas pela Caatinga e variáveis complementares
var addIndexComplem = require('users/schirmbeckj/MapBiomas:ASentinel/Coll03/1. Samples/CalculateIndices.js');

// =====================================================================================================================

// Gerar as amostras de treinamento para cada ano e cada região
var anos = [2017,2018,2019,2020,2021,2022,2023,2024];

// Itera sobre a lista de anos
for (var i_ano=0; i_ano<anos.length; i_ano++){
  
  var ano = anos[i_ano];

  // Embedding anual
  var col_mosaicos = ee.ImageCollection(asset)//////////
      .filterDate(ano+'-01-01', ano+'-12-31');///////////
      
  // Itera sobre as regiões
  var regioes_lista = [1,2,3,4,5,6,7];
  for (var i_regiao=0; i_regiao<regioes_lista.length; i_regiao++){
    
    var regiao = regioes_lista[i_regiao];
    var limite = regioesCollection.filterMetadata('ID', "equals", regiao);

    // EMBEDDINGS
    var emb_mosaic = col_mosaicos.filterBounds(limite).mosaic();///////// 

    // Sentinel-2 por ano
    var s2_mosaic = s2_all
        .filter(ee.Filter.eq('year', ano))
        .filterBounds(limite)
        .mosaic();

    // Índices Caatinga + complementares )
    var s2_idx = addIndexComplem.getIndices(s2_mosaic);

    // Adiciona clusters EVI e NDVI
    var s2_idx_clus = s2_idx
      .addBands(cluster_evi_80
        .select(['clusters_'+ano, 'evi_median_'+ano])
        .rename(['clusters_evi_80_'+ano, 'evi_median_cluster_'+ano])
      )
      .addBands(cluster_ndvi_20
        .select(['clusters_'+ano, 'ndvi_median_'+ano])
        .rename(['clusters_ndvi_20_'+ano, 'ndvi_median_cluster_'+ano])
      );

    // Mosaico final EMB + S2 + Índices + Clusters
    var mosaico_final = emb_mosaic.addBands(s2_idx_clus);

    // Seleciona pontos da região
    var pts_reg = pts.filterMetadata('ID', 'equals', regiao);

    // Extrai amostras
    var training = mosaico_final.sampleRegions({
        'collection': pts_reg,
        'scale': 10,
        'tileScale': 4,
        'geometries': true
    });

    // Mergeia as regiões daquele ano
    if (i_regiao === 0){ var training_reg = training }  
    else { training_reg = training_reg.merge(training); }
  }
  
   print(training_reg.limit(1), "train")

  Export.table.toAsset(
    training_reg,
    'pontos_train_mosaic_and_embedding_'+versao_out+'_'+ano,
    dirout + 'pontos_train_mosaic_and_embedding_'+versao_out+'_'+ano
  )   
  print(training_reg.limit(1), "train")
  
}




