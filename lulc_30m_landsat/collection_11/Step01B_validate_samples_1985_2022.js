/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-58.760578206812845, -26.812654150314753],
          [-58.760578206812845, -34.44166906401149],
          [-48.125812581812845, -34.44166906401149],
          [-48.125812581812845, -26.812654150314753]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var out_collection = 11  
var version = '01'

//var outname = 'samples_col11_PAMPA_23_25'
//carregar o asset das amostras do ano x
var dirsamples = 'projects/mapbiomas-workspace/AMOSTRAS/col9/PAMPA/SAMPLES/v02/training_periodos_'

//Bloco temporal 3
var sufix = '_13_22_com_LabGeo', anos = [2013,2014, 2015,2016,2017,2018,2019, 2020,2021,2022];
var image = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/Pampa_areas_estaveis_to_col11_13_24');

// //Bloco temporal 2
// var sufix = '_99_12_com_LabGeo', anos = [1999, 2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012];
// var image = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/Pampa_areas_estaveis_to_col11_99_12');

//Bloco temporal 1
// var sufix = '_85_98'//
// var anos = [1985]
// // var anos = [1985,1986,1987,1988,1989, 1990,1991,1992,1993,1994,1995,1996,1997,1998];
// var image = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/Pampa_areas_estaveis_to_col11_85_98');


var dirout = 'projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/SAMPLES/v01/';



var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = { 'bands': ['reference'], 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};
Map.addLayer(image, vis, 'Classes persistentes', true);


for (var i_ano=0;i_ano<anos.length; i_ano++){
  var ano = anos[i_ano];
  
var outname = 'trainingsamples_col'+ out_collection + '_' + ano + '_v' + version   
var SS_amostras = ee.FeatureCollection(dirsamples + ano + '_FOc8v01')
  
// carregar areas estáveis do bloco temporal x e associar com cada ano correspondente
  
// ============================================
// 2. EXTRAIR VALORES DO RASTER NOS PONTOS
// ============================================

var pontosComValor = image.reduceRegions({
  collection: SS_amostras,
  reducer: ee.Reducer.first(), // pega o valor do pixel no ponto
  scale: 30                    // ajuste para a resolução do seu raster
});

// ============================================
// 3. FILTRAR OS PONTOS
// ============================================

// Exemplo: manter pontos onde o valor do raster > 0
var SS_amostrasF = pontosComValor.filter(
  ee.Filter.gt('first', 0)
 // 'first' é o nome da coluna gerada pelo reducer
);

var SS_amostrasF
  ee.Filter.notNull(['first'])
//Se o ponto cair em área sem dado (nodata), o valor retornado será null — use ee.Filter.notNull(['first']) para remover esses casos

//print('pontosF',pontosFiltrados.first())

Export.table.toAsset(SS_amostrasF,
  outname,
  dirout + outname)

print('Total de pontos originais:'+ano, SS_amostras.size());
print('Total de pontos filtrados:'+ano, SS_amostrasF.size());
// Visualizar no mapa

Map.addLayer(SS_amostras, {color: 'white'}, 'Amostras Originais'+ ano,false);
Map.addLayer(SS_amostrasF, {color: 'red'}, 'Amostras Filtradas' + ano,false);

}
Map.centerObject(SS_amostras, 8);

print('Atributos da amostra', SS_amostrasF.limit(1))
// // Visualizar as amostras filtradas
// // // Adiciona as amostras estáveis no mapa com as respectivas cores
// var dictClass = {
//   3: "Floresta",
//   11: "Area Pantanosa",
//   12: "Campo",
//   21: "Mosaico de Uso",
//   22: "Área não vegetada",
//   29: "Afloramento Rochoso",
//   33: "Água",
// }   

// var listClass = pontosFiltrados.distinct(['reference']).reduceColumns(ee.Reducer.toList(), ['reference']).get('list') 
// listClass.evaluate(function (item) {
//   item.forEach(function (value) {
//     var mySamp = pontosFiltrados.filter(ee.Filter.eq('reference', value))

//     print('Samples ' + dictClass[value], mySamp.size())
    
//     Map.addLayer(mySamp, { "color": palettes.get('brazil')[value] }, 'Samples ' + dictClass[value])
//     print(dictClass[value],mySamp.filter(ee.Filter.eq('reference',value)).limit(1))
//   })
// }) 



 
