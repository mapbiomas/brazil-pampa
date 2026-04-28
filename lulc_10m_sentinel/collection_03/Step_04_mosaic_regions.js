// MAPBIOMAS PAMPA
// COLLECTION 03 Sentinel-Embeddings
// AUTHOR: Juliano Schirmbeck
// UPDATED: Oct 2025
 
var ano = '2017' // para visualização apenas

var version = '04'
// versões de classificações da regiões 
// var version_quatro = '04'
// var version_cinco = '05'
// var version_seis = '06'

//var col = '3'
var bioma = "PAMPA"

  
// //--------------------------------------------------------------------------------------------------------
// // Definições para assets sem filtro
// var step = ''
// var stepOut = 'PAMPA_'+ version+ '_SF'
// // // Local dos arquivos sem filtro
// var dir = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/'

//--------------------------------------------------------------------------------------------------------
// Definições para assets com filtro
var step = '_gran'//_gap, _temp, _nat, _freq, _freq2, _ext, _esp_fim
//var stepOut = 'PAMPA_'+ version+ step
var stepOut = 'PAMPA_'+ version+ '_granshade'
// Local dos arquivos com filtro
var dir =  'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam-temp/'

//--------------------------------------------------------------------------------------------------------

var collection = ee.ImageCollection([
                 ee.Image(dir + '01_Emb_RF17a24_v' + version + '_sombra_int'),
 //              ee.Image(dir + '01_Emb_RF17a24_v' + version + step),
                 ee.Image(dir + '02_Emb_RF17a24_v' + version  + step),
                 ee.Image(dir + '03_Emb_RF17a24_v' + version  + step),
                 ee.Image(dir + '04_Emb_RF17a24_v' + version  + step),
                 ee.Image(dir + '05_Emb_RF17a24_v' + version  + step),
                 ee.Image(dir + '06_Emb_RF17a24_v' + version  + step),
                 ee.Image(dir + '07_Emb_RF17a24_v' + version  + step)])
//              .filter(ee.Filter.eq('version', version))/
print(collection)
 
var image = collection.min()
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = { 'bands': ['classification_'+ ano], 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

Map.addLayer(image, vis, 'Colecao 03 -' + ano + '- S2')

var bandnames = ['classification_2017', 'classification_2018',
                 'classification_2019', 'classification_2020', 'classification_2021',
                 'classification_2022', 'classification_2023', 'classification_2024'
]

var out = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam-temp/'       
   
image = image.set('version', version).select(bandnames)
print(image)

Export.image.toAsset({
  'image': image,
  'description': stepOut,
  'assetId': out + stepOut,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'region': geometryPampa,
  'scale': 10,
  'maxPixels': 1e13
});
