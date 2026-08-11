/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometryPampa = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-58.235066877772624, -30.60692415433937],
          [-55.3812292750718, -31.536184439107085],
          [-53.357137190272624, -34.05923401863392],
          [-49.577840315272624, -30.17098716535918],
          [-49.865449044187244, -29.047801031923346],
          [-50.496256143190635, -28.306864654328834],
          [-52.082723127772624, -27.242150238166413],
          [-53.84697511154161, -27.06728423431273],
          [-55.620320784022624, -27.807229402344642]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// MAPBIOMAS PAMPA
// COLLECTION 03
// AUTHOR: Juliano Schirmbeck 
// UPDATED: Dec 2025
 
var ano = '2017' // para visualização apenas

var version = '01'
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
var dir =  'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/'

//--------------------------------------------------------------------------------------------------------

var collection = ee.ImageCollection([
                 ee.Image(dir + '01_Emb_RF17a25_v' + version + '_sombra_int'),
 //              ee.Image(dir + '01_Emb_RF17a24_v' + version + step),
                 ee.Image(dir + '02_Emb_RF17a25_v' + version  + step),
                 ee.Image(dir + '03_Emb_RF17a25_v' + version  + step),
                 ee.Image(dir + '04_Emb_RF17a25_v' + version  + step),
                 ee.Image(dir + '05_Emb_RF17a25_v' + version  + step),
                 ee.Image(dir + '06_Emb_RF17a25_v' + version  + step),
                 ee.Image(dir + '07_Emb_RF17a25_v' + version  + step)])
//              .filter(ee.Filter.eq('version', version))/
print(collection)
 
var image = collection.min()
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = { 'bands': ['classification_'+ ano], 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

Map.addLayer(image, vis, 'Colecao 04 -' + ano + '- S2')

var bandnames = ['classification_2017', 'classification_2018',
                 'classification_2019', 'classification_2020', 'classification_2021',
                 'classification_2022', 'classification_2023', 'classification_2024', 'classification_2025'
]

var out = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/'       
   
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
