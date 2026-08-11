/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var pol = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.MultiPoint();
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// MAPBIOMAS PAMPA 
// COLLECTION 02
// AUTHOR: Juliano Schirmbeck 
// UPDATED: Oct 2024

// verificar por que este filtro é necessário e não funcionou o anterior....


var regioes = [1,2,3,4,5,6,7//, 3,4,5,6,7
//,3,4,5,6,7
  ]
  
for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
  var regiao = regioes[i_regiao];
 
  var version = '01'
  var version_hand = '01'
  
  var bioma = "PAMPA"
 
  var versionOut =  version + '_freq2'
  var versionIn = version + '_freq'
  var versionIncidentes = version +  '_pre_incidentes'
  
  var dircol_in = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/';
  
  //'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding_filters/'

  var dir_filtros = dircol_in
  
  var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);
  
  
  var image_hand_class = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col6/PAMPA/class_col6_filtros/' + 'classes_hand' + version_hand)
  var image_incidence = ee.Image(dir_filtros+ '0' + String(regiao) + '_Emb_RF17a25_v'  +  versionIncidentes)
  var image_in = ee.Image(dir_filtros + '0' + String(regiao) +'_Emb_RF17a25_v' + versionIn);
  var image_gap = ee.Image(dircol_in +  '0' + String(regiao) +'_Emb_RF17a25_v' + version + '_gap');

  var palettes = require('users/mapbiomas/modules:Palettes.js');
  var vis1 = { 'bands': 'classification_2017','min': 0, 'max': 75,  'palette': palettes.get('brazil')};
  Map.addLayer(image_in,vis1,'MapBio Temporal')
  
  //Map.addLayer(image_gap,vis1,'MapBio GAP')
  var vis = { 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};


  //Calculando frequencias
  // General rule
  var exp = '100*((b( 0)+b( 1)+b( 2)+b( 3)+b( 4)+b( 5)+b( 6)+b( 7))/8)';
  
  // get frequency
  var florFreq  = image_in.eq( 3).expression(exp);
  var umiFreq   = image_in.eq(11).expression(exp);
  var grassFreq = image_in.eq(12).expression(exp);
  var anvFreq   = image_in.eq(22).expression(exp);
  var arochFreq = image_in.eq(29).expression(exp);
  var aguaFreq  = image_in.eq(33).expression(exp);
  var agricFreq = image_in.eq(21).expression(exp);  
 
  //afloramento rochoso + agricFreq
  var vegMask = ee.Image(0)
                         .where((arochFreq
                         .add(agricFreq))
                         .gt(95).and(agricFreq.gt(1))
                         .and(arochFreq.gt(45)),
                         1)
  Map.addLayer(vegMask.selfMask(),{},'mask arochFreq + agricFreq')
  
  /////Mapa base: 
  var vegMap = ee.Image(0)
        .where(vegMask.eq(1),image_incidence.select('classification_mode'))
                         
  vegMap = vegMap.updateMask(vegMap.neq(0))//.clip(BiomaPA)
  image_in = image_in.where(vegMap, vegMap)
  Map.addLayer(image_in,vis1,'filtro arochFreq + agricFreq')

  //anvFreq + agricFreq
  var vegMask = ee.Image(0)
                         .where((anvFreq
                         .add(agricFreq))
                         .gt(95).and(agricFreq.gt(1))
                         .and(anvFreq.gt(45)),
                         1)
  Map.addLayer(vegMask.selfMask(),{},'mask anvFreq + agricFreq')
  /////Mapa base: 
  var vegMap = ee.Image(0)
        .where(vegMask.eq(1),image_incidence.select('classification_mode'))
                         
  vegMap = vegMap.updateMask(vegMap.neq(0))//.clip(BiomaPA)
  image_in = image_in.where(vegMap, vegMap)
  Map.addLayer(image_in,vis1,'filtro anvFreq + agricFreq')

  var image_out = image_in
  
  image_out = image_out
    .set('collection', 3)
    .set('version', versionOut)
    .set('biome', bioma)
  
  //print(image_in)
  print(image_out)
  
  
  Export.image.toAsset({
      'image': image_out,
      'description': + '0' + String(regiao) +'_Emb_RF17a25_v'+versionOut,
      'assetId': dir_filtros + '0' + String(regiao) +'_Emb_RF17a25_v'+versionOut,
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.geometry().bounds(),
      'scale': 10,
      'maxPixels': 1e13
  });
}
