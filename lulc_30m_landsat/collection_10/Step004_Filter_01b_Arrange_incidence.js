// MAPBIOMAS PAMPA
// COLLECTION 10
// AUTHOR: Juliano Schirmbeck 
// UPDATE: May 2025 

// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var version = '11'
var col = '10'
var versionOut = version + '_pre_incidentes'
var versionIn = version + '_gap'

// Define as regiões: [1,2,3,4,5,6,7]
var regioes = [//1,2,3//,
               2// 4,5,6//,7
                ]

// ***************************************************************************************


var anos = [                            '1985','1986','1987','1988','1989','1990',
            '1991','1992','1993','1994','1995','1996','1997','1998','1999','2000',
            '2001','2002','2003','2004','2005','2006','2007','2008','2009','2010',
            '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',
            '2021','2022','2023','2024'];

var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')

var palettes = require('users/mapbiomas/modules:Palettes.js');

var vis = {
    'min': 0,
    'max': 62,
    'palette': palettes.get('classification8')
};
var visParMedian = {'bands':['median_swir1','median_nir','median_red'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };

//editar os parametros
var classeIds =    [3,11,12,21,22,33]
var newClasseIds = [3,11,12,21,22,33]


for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
    var regiao = regioes[i_regiao];
  
  
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);
  
  var image_in =  ee.Image(dir_filtros+ '0' + String(regiao) +'_RF_col'+col+'_v' + versionIn);
  
  var colList = ee.List([])
  for (var i_ano=0;i_ano<anos.length; i_ano++){
    var ano = anos[i_ano];
    var colList = colList.add(image_in.select(['classification_'+ano],['classification']))
  }
  var imc_carta = ee.ImageCollection(colList)
  //print('imc_carta',imc_carta)
  var img1 =  ee.Image(imc_carta.first());
  
  var imc_carta4 = imc_carta.map(function(image) {
      image = image.remap(classeIds, newClasseIds)
      image = image.mask(image.neq(27));
      return image.rename('classification');
  });
  
  var image_moda = imc_carta4.reduce(ee.Reducer.mode());
  var image_incidence = imc_carta.reduce(ee.Reducer.countRuns()).subtract(1).rename('incidence');
  var states = imc_carta.reduce(ee.Reducer.countDistinctNonNull());
  
  
  // ******* incidence **********
  
  var vis2 = {
      'bands': 'classification_1987',
      'min': 0,
      'max': 62,
      'palette': palettes.get('classification8')
  };
  
  var palette_incidence = ["#C8C8C8","#FED266","#FBA713","#cb701b", "#cb701b", "#a95512", "#a95512", "#662000",  "#662000", "#cb181d"]

  Map.addLayer(image_in, vis2, 'MapBiomas');
  
  Map.addLayer(image_incidence, {}, "incidents original");
  
  image_incidence = image_incidence.addBands(image_incidence.mask(image_incidence.gt(6)).where(image_incidence.gt(6),1).rename('valor1'))
  image_incidence = image_incidence.addBands(image_incidence.select('valor1').connectedPixelCount(100,false).rename('connect'))
  image_incidence = image_incidence.addBands(image_moda)
  image_incidence = image_incidence.addBands(states.rename('states'))
  
  print('image_incidence',image_incidence)
  Map.addLayer(image_incidence, {}, "incidents final");
  Map.addLayer(image_incidence.select('classification_mode'),vis,'moda' + regiao)
  
  
  Export.image.toAsset({
      'image': image_incidence,
      'description': '0' + String(regiao) + '_RF_col' + col + '_v' + versionOut,
      'assetId': dir_filtros +  '0' + String(regiao) + '_RF_col' + col + '_v'  + versionOut,
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.geometry().bounds(),
      'scale': 30,
      'maxPixels': 1e13
  });
}
//prepara_incidente_outros