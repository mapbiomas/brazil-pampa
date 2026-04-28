// MAPBIOMAS PAMPA
// COLLECTION 03
// AUTHOR: Juliano Schirmbeck / Ajustes EVM e MV
// UPDATED: setembro 2025 

var biomas = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/biomas_IBGE_250mil')
var region = biomas.filterMetadata('Bioma','equals', 'Pampa')

//visualizar o contorno do bioma
var blank = ee.Image(0).mask(0);
var outline = blank.paint(region, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline, visPar, 'bioma_1:250mil', false);

// raster do bioma 
var biomes = ee.Image('projects/mapbiomas-workspace/AUXILIAR/biomas-raster-41')
var biome = biomes.mask(biomes.eq(6))

var dirCol = 'projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_coverage_v2'
var colecao_In = ee.Image(dirCol).updateMask(biome)
print(colecao_In)

var dirout = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/'
//var version_out = 'V01'

// Os últimos dois blocos da col9 freq=24 desde 99
var freq_lim = 26,

            anos = ['1999','2000','2001','2002','2003','2004',
                    '2005','2006','2007','2008','2009','2010',
                    '2011','2012','2013','2014','2015','2016',
                    '2017','2018','2019','2020','2021','2022','2023','2024'],      
            bandas_anos = ['classification_1999','classification_2000','classification_2001','classification_2002',
                           'classification_2003','classification_2004','classification_2005','classification_2006',
                           'classification_2007','classification_2008','classification_2009','classification_2010',
                           'classification_2011','classification_2012','classification_2013','classification_2014',
                           'classification_2015','classification_2016','classification_2017','classification_2018',
                           'classification_2019','classification_2020','classification_2021','classification_2022',
                           'classification_2023','classification_2024'],
           sufix = '_99_24';


var year = 2017 // ???

var palettes = require('users/mapbiomas/modules:Palettes.js');
//vis coll 05
var vis = { 'bands':'classification_'+ String(year),'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

Map.addLayer(colecao_In, vis, 'Classes ORIGINAIS', true);
print(colecao_In)

colecao_In = colecao_In.select(bandas_anos)

var colList = ee.List([])

for (var i_ano=0;i_ano<anos.length; i_ano++){
  var ano = anos[i_ano];

  var col_remap = colecao_In.select('classification_'+ano).remap(
        [3,49,11,12,29,50,15,19,39,20,40,62,41,36,46,47,48,9,21,22,23,24,30,25,33,31,75],
        [3, 3,11,12,29,12,21,21,21,21,21,21,21,21,21,21,21,3,21,22,22,22,22,22,33,33,22])
        
  colList = colList.add(col_remap.int8())
};

var collection = ee.ImageCollection(colList)
print(collection)

// var unique = function(arr) {
//     var u = {},
//         a = [];
//     for (var i = 0, l = arr.length; i < l; ++i) {
//         if (!u.hasOwnProperty(arr[i])) {
//             a.push(arr[i]);
//             u[arr[i]] = 1;
//         }
//     }
//     return a;
// };

var getFrenquencyMask = function(collection, classId) {
    var classIdInt = parseInt(classId, 10); // o que é o dez?
    var maskCollection = collection.map(function(image) {
        return image.eq(classIdInt);
    });
    var frequency = maskCollection.reduce(ee.Reducer.sum());
    var frequencyMask = frequency.gte(classFrequency[classId])
        .multiply(classIdInt)
        .toByte();
    frequencyMask = frequencyMask.mask(frequencyMask.eq(classIdInt));
    return frequencyMask.rename('frequency').set('class_id', classId);
};

var lista_image = ee.List([]);
var classFrequency = { "3": freq_lim, "9": freq_lim, "11": freq_lim, "12": freq_lim, 
                      "21": freq_lim, "22": freq_lim, "29": freq_lim, "33": freq_lim}

var frequencyMasks = Object.keys(classFrequency).map(function(classId) {
    return getFrenquencyMask(collection, classId);
});

frequencyMasks = ee.ImageCollection.fromImages(frequencyMasks);
var referenceMap = frequencyMasks.reduce(ee.Reducer.firstNonNull()).clip(pampa);
referenceMap = referenceMap.mask(referenceMap.neq(27)).rename("reference");

var vis = {
    'bands': ['reference'],
    'min': 0,
    'max': 75,
    'palette': palettes.get('brazil')
};

Map.addLayer(referenceMap, vis, 'Classes Persistentes', true);

var erode_reference = referenceMap.eq( 3).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply( 3)
               .blend(referenceMap.eq( 9).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply( 9))
               .blend(referenceMap.eq(11).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply(11))
               .blend(referenceMap.eq(12).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply(12))
               .blend(referenceMap.eq(21).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply(21))
               .blend(referenceMap.eq(22).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply(22))
               .blend(referenceMap.eq(29).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply(29))
               .blend(referenceMap.eq(33).selfMask().unmask().focalMin({radius:10,kernelType:'square'}).selfMask().multiply(33))

Map.addLayer(erode_reference, vis, 'Classes Erode Persistentes', true);

Export.image.toAsset({
    "image": referenceMap.toInt8(),// areas estaveis sem o erode
    "description": 'Pampa_areas_estaveis_col10' + sufix,
    "assetId": dirout + 'Pampa_areas_estaveis_col10' + sufix,
    "scale": 30,
    "pyramidingPolicy": {
        '.default': 'mode'
    },
    "maxPixels": 1e13,
    "region": pampa
});  


var regioesCollection = ee.FeatureCollection("users/evelezmartin/shp/Regioes_Pampa_coll05");
var blank = ee.Image(0).mask(0);
var outline = blank.paint(regioesCollection, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline, visPar, 'Regiao', true);