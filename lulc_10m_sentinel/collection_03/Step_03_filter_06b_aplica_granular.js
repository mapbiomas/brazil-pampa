// MAPBIOMAS PAMPA
// COLLECTION 03 Sentinel-Embeddings
// AUTHOR: Juliano Schirmbeck 
// UPDATE: Oct 2025

var geometry = geometry3;
// *************************************************************************************** 
// Define as variáveis referentes a versão da coleção ou dos filtros
//var version = '09', regioes = [6] //1,6
var version = '04', regioes =  [6]//[3,4,5,7]
//var version = '12', regioes = [2]
//var col = '10'
var versionOut = version + '_gran'
var versionIn = version + '_esp_fim'// para versao 2 é o _esp_pos_inci

// Define as regiões: [1,2,3,4,5,6,7]


// ***************************************************************************************
var ano_mosaico = 2022

var anos = ['2017','2018','2019','2020',
            '2021','2022','2023', '2024'];
//var anos = ['2022']

var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam-temp/'
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
                  
                  
  var image_in =  ee.Image(dir_filtros+ '0' + String(regiao) +'_Emb_RF17a24_v' + versionIn);
  

  //print('image_in',image_in)

  var pixelArea = ee.Image.pixelArea();
  //var colList = ee.List([])
  for (var i_ano=0;i_ano<anos.length; i_ano++){
    var ano = anos[i_ano];
    //print('ano',ano)
    var img_ano = image_in.select(['classification_'+ano])
    var objcts_ano = ee.FeatureCollection('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/SEGMENTS/obj_class_' 
                                                                  + ano + '_reg' + regiao + '_v' + version)
    //print(objcts_ano.limit(5))
    
    var ano_21 = img_ano.eq(21).selfMask()//.mask(img_ano.eq(21));
    //print('ano_21',ano_21)
  Map.addLayer(mosaicoComp, visParMedian, 'Img_Year_', true);  
  Map.addLayer(img_ano,{'min': 0, 'max': 75,'palette': palettes.get('brazil')}, 'class'+ ano,false);
  Map.addLayer(ano_21,{'min': 0, 'max': 75,'palette': palettes.get('brazil')}, "ano_21",false);
  Map.addLayer(objcts_ano,{},'todos objetos')
    
    print(objcts_ano.limit(10))
    
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
                                  
    Map.addLayer(pequeno_entorno_natural_muda_agua,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_agua')
    
    
    var pequeno_entorno_natural_muda_campo =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'campo_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(12)
                                  //.updateMask(modulos_fiscais)
                                  //.updateMask(ano_21)
     
    Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_campo')      
                                  
    pequeno_entorno_natural_muda_campo = pequeno_entorno_natural_muda_campo.updateMask(modulos_fiscais).updateMask(ano_21)
    
    
    Map.addLayer(pequeno_entorno_natural_muda_campo,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_campo mask modulos')      
    
    
    var pequeno_entorno_natural_muda_floresta =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'floresta_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(3)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
    Map.addLayer(pequeno_entorno_natural_muda_floresta,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_floresta')   
    
    
    var pequeno_entorno_natural_muda_umida =     pequeno_entorno_natural  
                                  .filter(ee.Filter.eq("moda_nat_buff", 'umida_area'))
                                  .reduceToImage(['count'], ee.Reducer.first())
                                  .gt(0).selfMask()
                                  .multiply(11)
                                  .updateMask(modulos_fiscais)
                                  .updateMask(ano_21)
                                  
    Map.addLayer(pequeno_entorno_natural_muda_umida,{'min': 0, 'max': 75,'palette': palettes.get('brazil')},'pequeno_entorno_natural_muda_umida')       
    
                      //.filter(ee.Filter.gt("prop_campo", 1))
    //Map.addLayer(objcts_fill,{color:'red'},'objetos filtrados')
    
    var img_corrigida = img_ano.blend(pequeno_entorno_natural_muda_agua)
                               .blend(pequeno_entorno_natural_muda_campo)
                               .blend(pequeno_entorno_natural_muda_floresta)
                               .blend(pequeno_entorno_natural_muda_umida)
    
    image_in = image_in.addBands(img_corrigida,['classification_'+ano],true)
    Map.addLayer(image_in.select(['classification_'+ano]),{'min': 0, 'max': 75,'palette': palettes.get('brazil')}, "Class Corrigida",false);
   
  }
  
  print(image_in)
//print(image_in)

  Export.image.toAsset({
      'image': image_in,
      'description': '0' + String(regiao) +'_Emb_RF17a24_v' + versionOut,
      'assetId': dir_filtros + '0' + String(regiao) +'_Emb_RF17a24_v' + versionOut,
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.geometry().bounds(),
      'scale': 10,
      'maxPixels': 1e13
  });
  
  
}
