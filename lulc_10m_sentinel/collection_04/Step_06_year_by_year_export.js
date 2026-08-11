/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometryPampa = /* color: #d63000 */ee.Geometry.Polygon(
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
// COLLECTION 02
// UPDATED: Oct 2024 

//var dirout = 'projects/earthengine-legacy/assets/projects/mapbiomas-workspace/COLECAO9-S2/classificacao' 

var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam-ft'
 
//var image = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_2024/PAMPA/class_s2_col_01_mosaic/PAMPA_07_CF_reclass' )

var image = ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/PAMPA_01_CF_reclass_esp')

var biomas= ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/bioma_2025_e250k_5kbuffer')
  .filter(ee.Filter.eq('NAME','Pampa'))
Map.addLayer(biomas,{},"biome PAMPA",false)

var anos = [//'2017','2018','2019','2020',
           '2021','2022', '2023','2024','2025'
            ];
//anos = ['2018']
  
// Params de visualização
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {
    'min': 0,
    'max': 75,
    'palette': palettes.get('brazil')
};

print(image)
Map.addLayer(image.select(5), vis, "imagem de entrada") ;         

var bioma = 'PAMPA'
var versaoout = '1'//sem o zero antes
var bandout = 'classification'
var source = 'geokarten-ufrgs'
var territory = 'BRAZIL' 

//var classeIds =    [3,11,12,21,22,29,33]
//var newClasseIds = [3,11,12,21,25,29,33,49,50]

for (var i_ano=0;i_ano<anos.length; i_ano++){  
  var ano = anos[i_ano];
  var img_out = image.select('classification_'+ano)
  
  //img_out = img_out.remap(classeIds, newClasseIds)
  
  img_out = img_out.set('biome', bioma)
                    .set('year', parseInt(ano,10))
                    .set('version', versaoout)
                    .set('collection_id', 4)
                    .set('source', source)
                    .set('territory', territory)
                    .rename(bandout)
                    
  Export.image.toAsset({
    'image': img_out.toByte(),
    'description': bioma+'-'+ano+'-'+versaoout,
    'assetId': dirout+'/'+bioma+'-'+ano+'-'+versaoout,
    'pyramidingPolicy': {
        '.default': 'mode'
    },
    'region': geometryPampa,
    'scale': 10,
    'maxPixels': 1e13
  });

}