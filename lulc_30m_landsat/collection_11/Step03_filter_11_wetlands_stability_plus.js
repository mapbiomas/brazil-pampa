// MAPBIOMAS PAMPA
// COLLECTION 10
// AUTHOR: Juliano Schirmbeck
// UPDATE: May 2025  
  
// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var version = '08'
var versioninc = '07'
var col = 11
var bioma = "PAMPA"
var bloco = '85-25'
var versionOut = version + '_umid_plus'
var versionIn = version + '_temp_final'
var versionIncidentes = versioninc +  '_pre_incidentes'

// Define as regiões: [1,2,3,4,5,6,7]
var regioes = [2,5,6,7//,2,3,4
                ]
// ***************************************************************************************

var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/Regioes_Pampa_BR_col11_buff')

var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis1 = { 'bands': 'classification_1987','min': 0, 'max': 75,  'palette': palettes.get('brazil')};

var vis = { 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};


//Calculando frequencias
// General rule
var exp = '100*((b( 0)+b( 1)+b( 2)+b( 3)+b( 4)+b( 5)+b( 6)+b( 7)+b( 8)+b( 9)'+
               '+b(10)+b(11)+b(12)+b(13)+b(14)+b(15)+b(16)+b(17)+b(18)+b(19)'+
               '+b(20)+b(21)+b(22)+b(23)+b(24)+b(25)+b(26)+b(27)+b(28)+b(29)'+
               '+b(30)+b(31)+b(32)+b(33)+b(34)+b(35)+b(36)+b(37)+b(38)+b(39)+b(40))/41)';


for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
    var regiao = regioes[i_regiao];
  
  
  if (regiao == 1)  var aplicar = {freq1: 1, freq2: 1}
  if (regiao == 2)  var aplicar = {freq1: 1, freq2: 1}
  if (regiao == 3)  var aplicar = {freq1: 1, freq2: 1}
  if (regiao == 4)  var aplicar = {freq1: 1, freq2: 1}
  if (regiao == 5)  var aplicar = {freq1: 1, freq2: 1}
  if (regiao == 6)  var aplicar = {freq1: 1, freq2: 1}
  if (regiao == 7)  var aplicar = {freq1: 1, freq2: 1}
  
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);
  
  print(dir_filtros+ '0' + String(regiao) +'_RF_col' + col + '_v' +  versionIncidentes)
  
  var image_incidence = ee.Image(dir_filtros+ '0' + String(regiao) +'_RF_col' + col +'_' + bloco + '_v' +  versionIncidentes)
  
  var image_in = ee.Image(dir_filtros + '0' + String(regiao) +'_RF_col'+col+'_' + bloco +'_v' + versionIn);
  print(image_incidence)
  
  var mode = image_in.reduce(ee.Reducer.mode());
  
  Map.addLayer(image_in,vis1,'MapBio Filtro anterior(input)')
  Map.addLayer(mode,vis,'Moda') 
  
    
  // get frequency
  var florFreq  = image_in.eq( 3).expression(exp);
  var umiFreq   = image_in.eq(11).expression(exp);
  var grassFreq = image_in.eq(12).expression(exp);
  var anvFreq   = image_in.eq(22).expression(exp);
  // var arochFreq = image_in.eq(29).expression(exp);
  var aguaFreq  = image_in.eq(33).expression(exp);
  var agricFreq = image_in.eq(21).expression(exp);  
  
  
  
  //**********************************************
  //******** Reras do filtro de frequencia 1
  //**********************************************
  // problemas associados a floresta em area umida
  if (aplicar.freq1){
      
    //estabiliza alternancia enre 11 e 12, quem tem maioria fica
    var vegMask11 = ee.Image(0)
                             .where((umiFreq.gt(1)
                             .and((umiFreq.add(grassFreq))
                             .gt(99))
                             .and(image_incidence.select('incidence').gt(1))),
                             1)


// quando a area pantanosa é mais frequente que campo                             
    var  vegMap11 = ee.Image(0)
                            .where(vegMask11.eq(1).and(umiFreq.gt(50)), 11)

    vegMap11 = vegMap11.updateMask(vegMap11.neq(0))

    //Map.addLayer(vegMap51,vis,'vegMap 70 - 100')
    //Map.addLayer(vegMask51,vis,'vegMask carrosel 1 - 51')
    image_in = image_in.where(vegMap11, vegMap11)
    
    Map.addLayer(image_in,vis1,'MapBio estabiliza umid over campo')
    
// quando o campo é mais frequente que área pantanosa        
    var  vegMap12 = ee.Image(0)
                          .where(vegMask11.eq(1).and(grassFreq.gt(50)), 12)
    
    vegMap12 = vegMap12.updateMask(vegMap12.neq(0))
    //Map.addLayer(vegMap51,vis,'vegMap 70 - 100')
    //Map.addLayer(vegMask51,vis,'vegMask carrosel 1 - 51')
    image_in = image_in.where(vegMap12, vegMap12)
    
    
      Map.addLayer(image_in,vis1,'MapBio estabiliza campo over umid') 
      }
  

  var Moda11 = mode.eq(11);

Map.addLayer(Moda11, vis, 'Moda umid');


// estabiliza área pantanosa nos casos em que ela é a moda e oscila com campo, água e agricultura
if (aplicar.freq2) {

  var freqMask = agricFreq
    .add(umiFreq)
    .add(grassFreq)
    .add(aguaFreq)
    .gt(99);

  var vegMask = Moda11.and(freqMask);

  var vegMap = ee.Image(0)
    .where(vegMask, 11)
    .updateMask(vegMask);

  image_in = image_in.where(vegMask, 11);

  Map.addLayer(image_in, vis1, 'MapBio estabiliza umidxaguaagricampo');
}
  
//image_hand_class
  
  var image_out = image_in
  Map.addLayer(image_out,vis1,'Output')
  
  
  image_out = image_out
    .set('collection', col)
    .set('version', versionOut)
    .set('biome', bioma)
  
  //print(image_in)
  print(image_out)
  
  
  Export.image.toAsset({
      'image': image_out,
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