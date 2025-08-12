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
    geometry3 = /* color: #5666d6 */ee.Geometry.Point([-52.791566431300126, -30.997863664915837]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var geometry = geometry3;
// MAPBIOMAS PAMPA
// COLLECTION 09
// AUTHOR: Juliano Schirmbeck 
// UPDATE: May 2020

// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var version = '08', regioes = [1,6]
var version = '09', regioes = [3,4,5,7]
var version = '11', regioes = [2]
var col = '10'
var versionOut = version + '_gran'
var versionIn = version + '_temp_pos_inci'// para versao 2 é o _esp_pos_inci

// Define as regiões: [1,2,3,4,5,6,7]


// ***************************************************************************************
var ano_mosaico = 2022

var anos = [                            '1985','1986','1987','1988','1989','1990',
            '1991','1992','1993','1994','1995','1996','1997','1998','1999','2000',
            '2001','2002','2003','2004','2005','2006','2007','2008','2009','2010',
            '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',
            '2021','2022','2023', '2024'];
//var anos = ['2022']

var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'
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
    'max': 62,
    'palette': palettes.get('classification8')
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
                  
                  
  var image_in =  ee.Image(dir_filtros+ '0' + String(regiao) +'_RF_col'+col+'_v' + versionIn);
  

  //print('image_in',image_in)

  var pixelArea = ee.Image.pixelArea();
  //var colList = ee.List([])
  for (var i_ano=0;i_ano<anos.length; i_ano++){
    var ano = anos[i_ano];
    //print('ano',ano)
    var img_ano = image_in.select(['classification_'+ano])
    var objcts_ano = ee.FeatureCollection('projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-10/GENERAL/SAMPLES/PAMPA/SEGMENTS/obj_class21_ano' 
                                                                  + ano + '_reg' + regiao + '_v' + version)
    //print(objcts_ano.limit(5))
    
    var ano_21 = img_ano.eq(21).selfMask()//.mask(img_ano.eq(21));
    //print('ano_21',ano_21)
  //Map.addLayer(mosaicoComp, visParMedian, 'Img_Year_'+anos, true);  
  //Map.addLayer(img_ano,{'min': 0, 'max': 62,'palette': palettes.get('classification8')}, "Col 10",false);
  //Map.addLayer(ano_21,{'min': 0, 'max': 62,'palette': palettes.get('classification8')}, "ano_21",false);
 // Map.addLayer(objcts_ano,{},'todos objetos')
    
    var pequeno_entorno_natural = objcts_ano
                     // .filter(ee.Filter.lt("rel_areaPer", 20))
                     .filter(ee.Filter.gte("pror_natural", 1))
                     .filter(ee.Filter.lt("area", 20000))
                      
                      
    var pequeno_entorno_natural_muda_agua =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'agua_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(33)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
    //Map.addLayer(pequeno_entorno_natural_muda_agua,{'min': 0, 'max': 62,'palette': palettes.get('classification8')},'pequeno_entorno_natural_muda_agua')
    
    
    var pequeno_entorno_natural_muda_campo =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'campo_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(12)
                                  //.updateMask(modulos_fiscais)
                                  //.updateMask(ano_21)
     
    //Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 62,'palette': palettes.get('classification8')},'pequeno_entorno_natural_muda_campo')      
                                  
    pequeno_entorno_natural_muda_campo = pequeno_entorno_natural_muda_campo.updateMask(modulos_fiscais).updateMask(ano_21)
    
    
    //Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 62,'palette': palettes.get('classification8')},'pequeno_entorno_natural_muda_campo mask modulos')      
    
    
    var pequeno_entorno_natural_muda_floresta =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'floresta_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(3)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
    //Map.addLayer(pequeno_entorno_natural_muda_floresta,{'min': 0, 'max': 62,'palette': palettes.get('classification8')},'pequeno_entorno_natural_muda_floresta')   
    
    
    var pequeno_entorno_natural_muda_umida =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'umida_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(11)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
    //Map.addLayer(pequeno_entorno_natural_muda_umida,{'min': 0, 'max': 62,'palette': palettes.get('classification8')},'pequeno_entorno_natural_muda_umida')       
    
                      //.filter(ee.Filter.gt("prop_campo", 1))
    //Map.addLayer(objcts_fill,{color:'red'},'objetos filtrados')
    
    var img_corrigida = img_ano.blend(pequeno_entorno_natural_muda_agua)
                               .blend(pequeno_entorno_natural_muda_campo)
                               .blend(pequeno_entorno_natural_muda_floresta)
                               .blend(pequeno_entorno_natural_muda_umida)
    
    image_in = image_in.addBands(img_corrigida,['classification_'+ano],true)
    //Map.addLayer(image_in.select(['classification_'+ano]),{'min': 0, 'max': 62,'palette': palettes.get('classification8')}, "Class Corrigida",false);

   
  }
//print(image_in)
  Export.image.toAsset({
      'image': image_in,
      'description': + '0' + String(regiao) +'_RF_col'+col+'_v'+versionOut+'4',
      'assetId': dir_filtros + '0' + String(regiao) +'_RF_col'+col+'_v'+versionOut+'4',
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.geometry().bounds(),
      'scale': 30,
      'maxPixels': 1e13
  });
  
  
}
