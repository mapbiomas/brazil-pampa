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
var version = '07'
var version2 = '08'
// Define a versão da classificação de cada região indivivual
//var version_filtros = '042'

var col = '11'
var bioma = "PAMPA"

// COM FILTRO
var step = '_granular'    //_gap, _temp, _temp2, _freq, _inci, _ext, _umid, _esp, _temp_final, _umid_plus, _granular, _granular_plus
var stepOut = 'granular'   //gap,  temp,  temp2,  freq,  inci,  ext,  umid,  esp,  com_filtroF, umid_plus, granular, granular_plus
// Define o local local dos arquivos com filtro
var dir = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'


// // SEM FILTRO
// var step = ''
// var stepOut = 'sem_filtro'
// // Define o local dos arquivos sem filtro
// var dir = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam/'

//projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-11/GENERAL/classification-pam-temp/07_RF_col11_85-25_v05_temp_final
//// **************************************************************************************************************************
var collection = ee.ImageCollection([
                ee.Image(dir + '01_RF_col'+ col +'_85-25_v' + version + step),
                ee.Image(dir + '02_RF_col'+ col +'_85-25_v' + version2 + step),
                ee.Image(dir + '03_RF_col'+ col +'_85-25_v' + version + step),
                ee.Image(dir + '04_RF_col'+ col +'_85-25_v' + version + step),
                ee.Image(dir + '05_RF_col'+ col +'_85-25_v' + version2 + step),
                ee.Image(dir + '06_RF_col'+ col +'_85-25_v' + version2 + step),
                ee.Image(dir + '07_RF_col'+ col +'_85-25_v' + version2 + step)
                 ])
//              .filter(ee.Filter.eq('version', version))/
print(collection)

var image = collection.min()
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = { 'bands': ['classification_'+ ano], 'min': 0, 'max': 62,  'palette': palettes.get('classification8')};
Map.addLayer(image, vis, 'Colecao 11 - ')


image = image.set('version', version)
print(image)
//Map.addLayer(image.select(30), vis, 'imagem' );
Export.image.toAsset({
  'image': image,
  'description': bioma + '_' + version2 + '_' + stepOut,
  'assetId': dir + bioma + '_' + version2 + '_' + stepOut,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'region': geometryPampa,
  'scale': 30,
  'maxPixels': 1e13
});
