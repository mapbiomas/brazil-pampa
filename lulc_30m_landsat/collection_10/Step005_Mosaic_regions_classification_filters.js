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
// COLLECTION 10 
// AUTHOR: Juliano Schirmbeck
// UPDATE: May 2025

// *********************************************************************************************************************************
// Define um ano para visualização no mapa apenas
var ano = '2021'

// Define a versão do mosaico de saída
var version = '11' // 05

// Define a versão da classificação de cada região indivivual
//var version_filtros = '042'

var col = '10'
var bioma = "PAMPA"

// COM FILTRO
var step = '_gran4'//_final1'//'_gran2'//'_temp_pos_inci'//'_gran1'//
var stepOut = 'gran4'//com_filtroF'// 'com_filtro'//'com_filtroG1'//
//Define o local local dos arquivos com filtro
var dir = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'

// // SEM FILTRO
//var step = ''
//var stepOut = 'sem_filtro'
// // Define o local dos arquivos sem filtro
//var dir = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam/'


//// **************************************************************************************************************************
var collection = ee.ImageCollection([
                // ee.Image(dir + '01_RF_col'+ col +'_v' + version_filtros + step),
                // ee.Image(dir + '02_RF_col'+ col +'_v' + version_filtros + step),
                // ee.Image(dir + '03_RF_col'+ col +'_v' + version_filtros + step),
                // ee.Image(dir + '04_RF_col'+ col +'_v' + version_filtros + step),
                // ee.Image(dir + '05_RF_col'+ col +'_v' + version_filtros + step),
                // ee.Image(dir + '06_RF_col'+ col +'_v' + version_filtros + step),
                // ee.Image(dir + '07_RF_col'+ col +'_v' + version_filtros + step)
                 ee.Image(dir + '01_RF_col'+ col +'_v08' + step),
                 ee.Image(dir + '02_RF_col'+ col +'_v11' + step),
                 ee.Image(dir + '03_RF_col'+ col +'_v09' + step),
                 ee.Image(dir + '04_RF_col'+ col +'_v09' + step),
                 ee.Image(dir + '05_RF_col'+ col +'_v09' + step),
                 ee.Image(dir + '06_RF_col'+ col +'_v08' + step),
                 ee.Image(dir + '07_RF_col'+ col +'_v09' + step)

                 ])
//              .filter(ee.Filter.eq('version', version))/
print(collection)

var image = collection.min()
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = { 'bands': ['classification_'+ ano], 'min': 0, 'max': 62,  'palette': palettes.get('classification8')};
Map.addLayer(image, vis, 'Colecao 10 - ')


image = image.set('version', version)
print(image)
//Map.addLayer(image.select(30), vis, 'imagem' );
Export.image.toAsset({
  'image': image,
  'description': bioma + '_' + version + '_' + stepOut,
  'assetId': dir + bioma + '_' + version + '_' + stepOut,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'region': geometryPampa,
  'scale': 30,
  'maxPixels': 1e13
});
