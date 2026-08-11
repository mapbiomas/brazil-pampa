/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var area_teste = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-53.662708631477386, -30.689029843175327],
          [-53.662708631477386, -31.103830988353632],
          [-53.096912733039886, -31.103830988353632],
          [-53.096912733039886, -30.689029843175327]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// MAPBIOMAS PAMPA
// COLLECTION 02
// AUTHOR: Juliano Schirmbeck
// UPDATED: Oct 2024 

// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var col = '4'
var versionIn = '01'
var bioma = "PAMPA"
var versionOut = 'PAMPA_'+versionIn + '_CF_reclass_esp'
var versionIn = 'PAMPA_'+versionIn + '_CF_reclass'
 
  // primeiro ano é processado a parte // por que?????
  var anos = ['2017', '2018','2019','2020','2021','2022','2023','2024','2025'];

//  var dir_filtros = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding_filters/'
  var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/';
  
  var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')
  var limite = regioesCollection.union()//filterMetadata('ID', 'equals', regiao);
  
  var img_in =  ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/'  + versionIn);
  
  var palettes = require('users/mapbiomas/modules:Palettes.js');
  var vis = {'bands': ['classification_2022'], 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};
  var vis2 = {'min': 0, 'max': 75,  'palette': palettes.get('brazil')};
  
  Map.addLayer(img_in, vis, 'img_in');
  
  var ano = '2017'//porque separado dos demais...
  //var mask_85 = img_in.select('connect_'+ano)
  var moda_85 = img_in.select('classification_'+ano).focal_mode(1, 'square', 'pixels')
  // Map.addLayer(moda_85, vis, 'moda_85_1');
  moda_85 = moda_85.mask(img_in.select('classification_'+ano).connectedPixelCount(10,true).lte(6))
  // Map.addLayer(moda_85, vis, 'moda_85_2');
  var class_outTotal = img_in.select('classification_'+ano).blend(moda_85)
  
  // Map.addLayer(class_outTotal, vis, 'class4 MODA');
   
  var i_init = 1
  
  for (var i_ano=i_init;i_ano<anos.length; i_ano++){  
    var ano = anos[i_ano]; 
    var moda = img_in.select('classification_'+ano).focal_mode(1, 'square', 'pixels')
    moda = moda.mask(img_in.select('classification_'+ano).connectedPixelCount(10,true).lte(6))
    var class_out = img_in.select('classification_'+ano).blend(moda)
    class_outTotal = class_outTotal.addBands(class_out)
  }
  
  print("class_outTotal", class_outTotal, "img_in", img_in)
  Map.addLayer(class_outTotal, vis, 'filtro espacial aplicado')
  
  //Contagem de pixels afetados em uma janela menor 
  // Pixels que mudaram (1 = mudou, 0 = não mudou)
var pixelsMudaram = img_in
  .select('classification_2020')
  .neq(class_outTotal).select('classification_2020')
  .selfMask();

Map.addLayer(
  pixelsMudaram,
  {min: 0, max: 1, palette: ['red']},
  'Pixels alterados pelo filtro'
);

var contagemTeste = pixelsMudaram.reduceRegion({
  reducer: ee.Reducer.count(),
  geometry: area_teste,
  scale: 10,
  maxPixels: 1e13
});

print('Pixels alterados (teste):', contagemTeste);
  
  Export.image.toAsset({
      'image': class_outTotal,
      'description': versionOut,
      'assetId': dir_filtros + versionOut,
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.bounds(),
      'scale': 10,
      'maxPixels': 1e13
  });
//}
