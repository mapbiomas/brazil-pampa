/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[-53.13111728471025, -30.542600852341007],
         [-53.133949697429976, -30.548810086165208],
         [-53.118500173504195, -30.537795815562102],
         [-53.0928367976497, -30.536021588039603],
         [-53.102020681316695, -30.53661300081491],
         [-53.101505697185836, -30.532916611889803],
         [-50.63103541248074, -29.944429969460117],
         [-50.64648493640652, -29.94175250022477],
         [-51.25924967429422, -29.95847968976124],
         [-50.69781532676041, -30.043247567549145],
         [-50.809934411578936, -30.006676277109925],
         [-50.81053522639827, -30.010392535280346],
         [-50.619055498023855, -29.847571311670954],
         [-55.59377461331169, -28.79009092180177],
         [-55.5950191582946, -28.79340060012058],
         [-54.20276913598777, -28.859542808179636]]),
    geometry2 = /* color: #d63000 */ee.Geometry.MultiPoint(),
    limite = 
    /* color: #4dd66e */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-53.28355940905916, -30.480508213151488],
          [-53.28355940905916, -30.713969327377615],
          [-52.70540389148103, -30.713969327377615],
          [-52.70540389148103, -30.480508213151488]]], null, false),
    geometry3 = /* color: #5666d6 */ee.Geometry.Point([-52.791566431300126, -30.997863664915837]),
    imageVisParam = {"opacity":1,"bands":["first","first","first"],"gamma":1};
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var geometry = geometry3;
// MAPBIOMAS PAMPA
// COLLECTION 09
// AUTHOR: Juliano Schirmbeck 
// UPDATE: May 2020 
 
// versão ajustada com base na coleção 11 para mesmo tipo de correção na coleção 4 Sentinel 
 
// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
//var version = '09', regioes = [6] //1,6
var version = '01', regioes =  [6]//[3,4,5,7]

var col = '4' 
var versionOut = version + '_gran'
var versionIn = version + '_esp_fim'// para versao 2 é o _esp_pos_inci

// Define as regiões: [1,2,3,4,5,6,7]


// ***************************************************************************************
var ano_mosaico = 2022

  var anos = ['2017', '2018','2019','2020','2021','2022','2023','2024', '2025'];
//var anos = ['2017']

var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/';
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')

// Local dos mosaicos
var  dirasset = 'projects/nexgenmap/MapBiomas2/LANDSAT/BRAZIL/mosaics-2-pampa'
// Filtra o mosaico                        
var collection = ee.ImageCollection(dirasset)
    .filter(ee.Filter.eq('version', "2"))
    .filter(ee.Filter.eq('biome', "PAMPA"));

var palettes = require('users/mapbiomas/modules:Palettes.js');

var vis = {
    'min': 0,
    'max': 75,
    'palette': palettes.get('brazil')
};
var visParMedian = {'bands':['swir1_median','nir_median','red_median'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
var visParMedian2 = {'bands':['nir_median','swir1_median','red_median'], 'gain':[0.06, 0.08,0.2],'gamma':0.5 };


//editar os parametros
var classeIds =    [3,11,12,21,22,29,33]
var newClasseIds = [3,11,12,21,22,29,33]



var modulos_fiscais = ee.FeatureCollection('projects/ee-geokarten/assets/sdAREA_IMOVEL_Pampa80ha4MF')
//Map.addLayer(modulos_fiscais)
//print(modulos_fiscais.limit(5))

                             
var modulos_fiscais = modulos_fiscais
                             .reduceToImage(['ID'], ee.Reducer.first())
                             .gt(0)
                             .unmask()
                             .eq(0)
                             .selfMask()
//Map.addLayer(modulos_fiscais)
//stop


for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
    var regiao = regioes[i_regiao];
  ///print('regiao',regiao)
  
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);
  
  var mosaicoComp = collection.filter(ee.Filter.eq('year', ano_mosaico))
                  .filterBounds(limite)
                  .mosaic()
                  
                  
  var image_in =  ee.Image(dir_filtros+ '0' + String(regiao) +'_Emb_RF17a25_v' + versionIn);
  

  //print('image_in',image_in)

//  var pixelArea = ee.Image.pixelArea();
  //var colList = ee.List([])
  for (var i_ano=0;i_ano<anos.length; i_ano++){
    var ano = anos[i_ano];
    //print('ano',ano)
    var img_ano = image_in.select(['classification_'+ano])
    // var objcts_ano = ee.FeatureCollection('projects/mapbiomas-workspace/AMOSTRAS/S2_Coll04/PAMPA/SEGMENTS/obj_class_' 
    //                                                               + ano + '_reg' + regiao + '_v' + version)
    
//usar este caminho para regioes com muitas geometrias e que foram divididas para poder rodar
    var objcts_anoA = ee.FeatureCollection('projects/mapbiomas-workspace/AMOSTRAS/S2_Coll04/PAMPA/SEGMENTS/obj_class_' 
                                                                  + ano + '_reg' + regiao + 'A_v' + version)
    var objcts_anoB = ee.FeatureCollection('projects/mapbiomas-workspace/AMOSTRAS/S2_Coll04/PAMPA/SEGMENTS/obj_class_' 
                                                                  + ano + '_reg' + regiao + 'B_v' + version)
    var objcts_ano = objcts_anoA.merge(objcts_anoB)


    //print(objcts_ano.limit(5))
    
    var ano_21 = img_ano.eq(21).selfMask()//.mask(img_ano.eq(21));
    //print('ano_21',ano_21)
  Map.addLayer(mosaicoComp, visParMedian, 'Img_Year_', true);  
  Map.addLayer(img_ano,{'min': 0, 'max': 75,'palette': palettes.get('brazil')}, 'class'+ ano,false);
  Map.addLayer(ano_21,{'min': 0, 'max': 75,'palette': palettes.get('brazil')}, "ano_21",false);
  Map.addLayer(objcts_ano,{},'todos objetos')
    
    print(objcts_ano.limit(10))
    
    
/////REGRA 1    
    var pequeno_entorno_natural = objcts_ano
                     // .filter(ee.Filter.lt("rel_areaPer", 20))
                     .filter(ee.Filter.gte("pror_natural", 0.7))
                     .filter(ee.Filter.lt("area", 10000))
                     
                     
    //adicionado na col 4
/////REGRA 2       
    var muito_pequeno = objcts_ano
                     // .filter(ee.Filter.lt("rel_areaPer", 20))
                     //.filter(ee.Filter.gte("pror_natural", 0.7))
                     .filter(ee.Filter.lt("area", 1000))
    
    
/////REGRA 3        
    var pequeno_entorno_banhado = objcts_ano
                     // .filter(ee.Filter.lt("rel_areaPer", 20))
                     .filter(ee.Filter.gte("prop_umida", 0.6))
 //                    .filter(ee.Filter.lt("area", 20000))                 
                     
//////////////////////////////////////////////////////////////////////                     
/////Aplica REGRA 1    
    var pequeno_entorno_natural_muda_agua =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'agua_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(33)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
//    Map.addLayer(pequeno_entorno_natural_muda_agua,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_agua')
    
    
    var pequeno_entorno_natural_muda_campo =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'campo_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(12)
                                  //.updateMask(modulos_fiscais)
                                  //.updateMask(ano_21)
     
//    Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_campo')      
                                  
    pequeno_entorno_natural_muda_campo = pequeno_entorno_natural_muda_campo.updateMask(modulos_fiscais).updateMask(ano_21)
    
    
 //   Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_campo mask modulos')      
    
    
    var pequeno_entorno_natural_muda_floresta =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'floresta_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(3)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
//    Map.addLayer(pequeno_entorno_natural_muda_floresta,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_floresta')   
    
    
    var pequeno_entorno_natural_muda_umida =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'umida_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(11)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
//    Map.addLayer(pequeno_entorno_natural_muda_umida,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_umida')       




//////////////////////////////////////////////////////////////////////                     
/////Aplica REGRA 2 
    var muito_pequeno_muda_agua =     muito_pequeno  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'agua_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(33)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
//    Map.addLayer(pequeno_entorno_natural_muda_agua,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_agua')
    
    
    var muito_pequeno_muda_campo =     muito_pequeno  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'campo_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(12)
                                  //.updateMask(modulos_fiscais)
                                  //.updateMask(ano_21)
     
//    Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_campo')      
                                  
    muito_pequeno_muda_campo = muito_pequeno_muda_campo.updateMask(modulos_fiscais).updateMask(ano_21)
    
    
 //   Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_campo mask modulos')      
    
    
    var muito_pequeno_muda_floresta =     muito_pequeno 
                                  .filter(ee.Filter.eq("moda_nat_buff", 'floresta_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(3)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
//    Map.addLayer(pequeno_entorno_natural_muda_floresta,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_floresta')   
    
    
    var muito_pequeno_muda_umida =     muito_pequeno 
                                  .filter(ee.Filter.eq("moda_nat_buff", 'umida_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(11)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)

/////////////////////////////////////////////////
/////Aplica REGRA 3    
    var pequeno_entorno_banhado_muda_umida =     pequeno_entorno_banhado  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'umida_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(11)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)  

                    //.filter(ee.Filter.gt("prop_campo", 1))
    //Map.addLayer(objcts_fill,{color:'red'},'objetos filtrados')

////////////////////////////////    
    var img_corrigida = img_ano.blend(pequeno_entorno_natural_muda_agua)
                               .blend(pequeno_entorno_natural_muda_campo)
                               .blend(pequeno_entorno_natural_muda_floresta)
                               .blend(pequeno_entorno_natural_muda_umida)
                               .blend(pequeno_entorno_banhado_muda_umida)// adicionado na v2
                               .blend(muito_pequeno_muda_agua)
                               .blend(muito_pequeno_muda_campo)
                               .blend(muito_pequeno_muda_floresta)
                               .blend(muito_pequeno_muda_umida)
                     
                               
    
    image_in = image_in.addBands(img_corrigida,['classification_'+ano],true)
    Map.addLayer(image_in.select(['classification_'+ano]),{'min': 0, 'max': 75,'palette': palettes.get('brazil')}, "Class Corrigida",false);
   
  }
  Map.addLayer(modulos_fiscais)
  print(image_in)
//print(image_in)

  Export.image.toAsset({
      'image': image_in,
      'description': '0' + String(regiao) +'_Emb_RF17a25_v' + versionOut,
      'assetId': dir_filtros + '0' + String(regiao) +'_Emb_RF17a25_v' + versionOut,
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.geometry().bounds(),
      'scale': 10,
      'maxPixels': 1e13
  });
  
  
}
