// MAPBIOMAS PAMPA
// COLLECTION 10
// AUTHOR: Juliano Schirmbeck
// UPDATE: May 2025  

 
// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var col = '11'
var version = '08'
var bioma = "PAMPA"
var versionOut = version + '_esp'
var versionIn = version + '_umid'
var bloco = '85-25'  
// Define as regiões: [1,2,3,4,5,6,7]
var regioes = [2, 5, 6, 7//1,2//5,7//1,3,4,5,7
]

// ***************************************************************************************

for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
    var regiao = regioes[i_regiao];

  // 1985 é processado a parte
  var anos = ['1986','1987','1988','1989','1990',
            '1991','1992','1993','1994','1995','1996','1997','1998','1999','2000',
            '2001','2002','2003','2004','2005','2006','2007','2008','2009','2010',
            '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',
            '2021','2022','2023', '2024', '2025'];

  var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'
  
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/Regioes_Pampa_BR_col11_buff')
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);
  
  var image_in = ee.Image(dir_filtros +  '0' + String(regiao) +'_RF_col'+ col +'_' + bloco + '_v' + versionIn);
   
  var palettes = require('users/mapbiomas/modules:Palettes.js');
  var vis = { 'bands': ['classification_1985'], 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};
  var vis2 = {'min': 0, 'max': 75,  'palette': palettes.get('brazil')};
  

  
  var ano = '1985'
//var mask_85 = image_in.select('connect_'+ano)
  var moda_85 = image_in.select('classification_'+ano).focal_mode(1, 'square', 'pixels')
Map.addLayer(moda_85, vis, 'moda_85_1');
  moda_85 = moda_85.mask(image_in.select('connect_'+ano).lte(6))
Map.addLayer(moda_85, vis, 'moda_85_2');

  var class_outTotal = image_in.select('classification_'+ano).blend(moda_85)


//Map.addLayer(image_in, vis, 'image_in');   
Map.addLayer(image_in, vis, 'image_in');  
Map.addLayer(class_outTotal, vis2, 'class1985 MODA');
//Map.addLayer(moda_85, null, 'moda85'); 
  
  for (var i_ano=0;i_ano<anos.length; i_ano++){  
    var ano = anos[i_ano]; 
    var moda = image_in.select('classification_'+ano).focal_mode(1, 'square', 'pixels')
    moda = moda.mask(image_in.select('connect_'+ano).lte(6))
    var class_out = image_in.select('classification_'+ano).blend(moda)
    class_outTotal = class_outTotal.addBands(class_out)
  }
  // print("class_outTotal", class_outTotal, "image_in", image_in)
  
  
  
  
  
  Export.image.toAsset({
      'image': class_outTotal,
      'description': '0' + String(regiao) + '_RF_col' + col +'_' + bloco + '_v' + versionOut,
      'assetId': dir_filtros +  '0' + String(regiao) + '_RF_col' + col +'_' + bloco +  '_v'  + versionOut,
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.geometry().bounds(),
      'scale': 30,
      'maxPixels': 1e13
    });
}
