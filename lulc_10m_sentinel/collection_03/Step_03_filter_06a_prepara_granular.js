// MAPBIOMAS PAMPA
// COLLECTION 03 Sentinel-Embeddings
// AUTHOR: Juliano Schirmbeck 
// UPDATE: Oct 2025
 
// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var version = '04'
//var col = '10'
//var versionOut = version + '_final'
var versionIn = version + '_esp_fim'

// Define as regiões: [1,2,3,4,5,6,7]

// rodar somente as regiões 3, 4, 5 e 7
var regioes = [6]

// ***************************************************************************************


var anos = ['2017','2018','2019','2020',
            '2021','2022','2023', '2024'];
//var anos = ['1986']



var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam-temp/'
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')

var palettes = require('users/mapbiomas/modules:Palettes.js');

var vis = {
    'min': 0,
    'max': 62,
    'palette': palettes.get('classification8')
};
var visParMedian = {'bands':['median_swir1','median_nir','median_red'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };

//editar os parametros
var classeIds =    [3,11,12,21,22,29,33]
var newClasseIds = [3,11,12,21,22,29,33]


for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
    var regiao = regioes[i_regiao];
  print('regiao',regiao)
  
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);
  
  var image_in =  ee.Image(dir_filtros+ '0' + String(regiao) +'_Emb_RF17a24_v' + versionIn);
                                      ///0               1     _Emb_RF17a24_v   03_esp_fim

  //print('image_in',image_in)

  var pixelArea = ee.Image.pixelArea();
  //var colList = ee.List([])
  for (var i_ano=0;i_ano<anos.length; i_ano++){
    var ano = anos[i_ano];
    print('ano',ano)
    var img_ano = image_in.select(['classification_'+ano])
    //************************************************************
    var ano_21 = img_ano.eq(21).selfMask()//.mask(img_ano.eq(21));
    //print('ano_21',ano_21)
   // Map.addLayer(ano_21,{'min': 0, 'max': 62,'palette': palettes.get('classification8')}, "ano_21",false);
    //Map.addLayer(img_ano,{'min': 0, 'max': 62,'palette': palettes.get('classification8')}, "img_ano",false);
  
    
    //************************************************************  
    var con_ano = ano_21.connectedPixelCount(101,false).selfMask()
    con_ano = con_ano.updateMask(con_ano.lt(101))
    //var con_ano = image_in.select('con_ano')
    //print('con_ano',con_ano)
    //Map.addLayer(con_ano.randomVisualizer(),{}, "con_ano",false);
    
    var obj = con_ano.reduceToVectorsStreaming({
    geometry: limite.geometry().bounds(), 
    scale: 10, 
    bestEffort: true, 
    maxPixels: 1e13, 
  });
  
  //obj = obj.filterBounds(geometry)
  //print(obj.first())  
  
  
  var morp_props = function (f) {
  //var f = obj.first()
    var f_buff = f.geometry().buffer(30)
    //print('f_buff',f_buff)
    var area = f.area(10);
    var area_bufer = f_buff.area(10).subtract(area);
    var perimetro = f.perimeter(10);
    var ratio = ee.Number(area).divide(ee.Number(perimetro));
    
    var campo_area = ee.Number(
        ee.Image.pixelArea()
        .updateMask(img_ano.eq(12))
        .reduceRegion({
            reducer: ee.Reducer.sum(),
            geometry: f_buff,
            scale: 10,
            bestEffort: true,
            maxPixels: 1e12
        }).get('area')
        );
    var floresta_area = ee.Number(
        ee.Image.pixelArea()
        .updateMask(img_ano.eq(3))
        .reduceRegion({
            reducer: ee.Reducer.sum(),
            geometry: f_buff,
            scale: 10,
            bestEffort: true,
            maxPixels: 1e12
        }).get('area')
        );
    var umida_area = ee.Number(
        ee.Image.pixelArea()
        .updateMask(img_ano.eq(11))
        .reduceRegion({
            reducer: ee.Reducer.sum(),
            geometry: f_buff,
            scale: 10,
            bestEffort: true,
            maxPixels: 1e12
        }).get('area')
        );
    var agua_area = ee.Number(
        ee.Image.pixelArea()
        .updateMask(img_ano.eq(33))
        .reduceRegion({
            reducer: ee.Reducer.sum(),
            geometry: f_buff,
            scale: 10,
            bestEffort: true,
            maxPixels: 1e12
        }).get('area')
        );  
    var prop_campo = campo_area.divide(area_bufer)
    var prop_floresta = floresta_area.divide(area_bufer)
    var prop_umida = umida_area.divide(area_bufer)
    var prop_agua = agua_area.divide(area_bufer)
    
    
    
    var natural_area = campo_area.add(floresta_area).add(umida_area).add(agua_area)
    var pror_natural = prop_campo.add(prop_floresta).add(prop_umida).add(prop_agua)
    
    var keys = ee.List(['campo_area','floresta_area','umida_area','agua_area'])
    var lista = ee.List([campo_area,floresta_area,umida_area,agua_area])
    var maxValue = lista.reduce(ee.Reducer.max());
    var maxIndex = lista.indexOf(maxValue);
    var maxKey = keys.get(maxIndex);
    
    //var pais = paisDict.get(maxKey);
      
    return f.set('area', area)
    .set('area_bufer', area_bufer)
    .set('perimetro',  perimetro)
    .set('rel_areaPer',  ratio)
    .set('campo_area',  campo_area)
    .set('floresta_area',  floresta_area)
    .set('umida_area',  umida_area)
    .set('agua_area',  agua_area)
    .set('natural_area',  natural_area)
    .set('prop_campo', prop_campo)
    .set('prop_floresta',prop_floresta)
    .set('prop_umida', prop_umida)
    .set('prop_agua', prop_agua)
    .set('pror_natural', pror_natural)
    .set('moda_nat_buff',maxKey)
    
 //   print('f',f)
   // stop
  }
    
    
    var prop_table = obj
          .map(morp_props)
    //print('prop_table',prop_table)
    //var con_ano_area = con_ano.select(0).multiply(pixelArea);
    
    /*
    var con_ano_area = image_in.select('con_ano_area')
    print('con_ano_area',con_ano_area)
    Map.addLayer(con_ano_area,{},'Object area m^2',false);
  
    //************************************************************
    //var con_id = con_ano.connectedComponents(ee.Kernel.plus(1),100)
    var con_id = image_in.select('con_id')
    print('con_id',con_id)
    Map.addLayer(con_id.randomVisualizer(),{}, "conected_id",false);
    
    //************************************************************
    var kernel = ee.Kernel.plus(1);
    var obj_buffer = con_id
             .focalMin({kernel: kernel, iterations: 1})
             .focalMax({kernel: kernel, iterations: 1})
             //.mask(con_id.unmask().eq(0))
             .selfMask()
             .reproject('epsg:4326', null, 10);
   //var obj_buffer = image_in.select('obj_buffer')
   print('obj_buffer',obj_buffer)          
   Map.addLayer(obj_buffer.randomVisualizer(), {}, 'buffer',false);    
   
   //************************************************************
   
   Map.addLayer(obj_buffer.updateMask(con_id.unmask().eq(0)).randomVisualizer(), {}, 'buffer recortado',false);    
   
   
   var obj_buffer_count = obj_buffer.connectedPixelCount(200,false).selfMask()
   //var obj_buffer_count = image_in.select('obj_buffer_count')
   print('obj_buffer_count',obj_buffer_count)
   Map.addLayer(obj_buffer_count, {}, 'obj_buffer_count',false);
   
   var obj_buffer_count_area = obj_buffer_count.select(0).multiply(pixelArea);
   //var obj_buffer_count_area = image_in.select('obj_buffer_count_area')
   print('obj_buffer_count_area',obj_buffer_count_area)
   Map.addLayer(obj_buffer_count_area,{},'Object buffer area m^2',false);
             
   
   //************************************************************
   var perimetro = obj_buffer_count_area.subtract(con_ano_area).divide(30)
   Map.addLayer(perimetro,{},'perimetro',false);
   
   //************************************************************
   var area_per = con_ano_area.divide(perimetro)
   Map.addLayer(area_per,{},'area_per',false);
   
   
   var img_out = con_ano.select(0).rename('con_ano')
                    .addBands(con_id.select(0).rename('con_id'))
                    .addBands(obj_buffer.select(0).rename('obj_buffer'))
                    .addBands(obj_buffer_count.select(0).rename('obj_buffer_count'))
                    .addBands(con_ano_area.select(0).rename('con_ano_area'))
                    .addBands(obj_buffer_count_area.select(0).rename('obj_buffer_count_area'))
   
     Export.image.toAsset({
    'image': img_out,
    'description': 'teste_filtro_1986',
    'assetId': 'users/schirmbeckj/teste_filtro_1986',
    'scale': 30,
    'maxPixels': 1e13,
    'region': limite
    });
   
  */
  //print(prop_table.limit(2))
   Export.table.toAsset(prop_table, 
  ' PAMPA_obj_' + ano + '_r' + regiao + '_v' + version, 
   'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/SEGMENTS/obj_class_' 
                                                                  + ano + '_reg' + regiao + '_v' + version);
   
    //var dist = con_id.distance(ee.Kernel.euclidean(30, 'meters'), false).mask(con_ano.unmask().eq(0)).selfMask()
    // print('dist',dist)
   // Map.addLayer(dist,{}, "dist");

  }
}
