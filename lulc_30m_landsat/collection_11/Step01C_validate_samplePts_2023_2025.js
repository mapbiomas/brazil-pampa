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

var dirout = 'projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/';

var outname = 'samples_col11_PAMPA_23_25'

var pontos = ee.FeatureCollection('projects/mapbiomas-workspace/AMOSTRAS/col9/PAMPA/samples_col9_PAMPA_13_22_com_LabGeo');
print('pontos',pontos.first())


var image = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/Pampa_areas_estaveis_to_col11_13_24');

var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = { 'bands': ['reference'], 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

Map.addLayer(image, vis, 'Classes persistentes', true);

// ============================================
// 2. EXTRAIR VALORES DO RASTER NOS PONTOS
// ============================================

var pontosComValor = image.reduceRegions({
  collection: pontos,
  reducer: ee.Reducer.first(), // pega o valor do pixel no ponto
  scale: 30                    // ajuste para a resolução do seu raster
});

// ============================================
// 3. FILTRAR OS PONTOS
// ============================================

// Exemplo: manter pontos onde o valor do raster > 0
var pontosFiltrados = pontosComValor.filter(
  ee.Filter.gt('first', 0)
 // 'first' é o nome da coluna gerada pelo reducer
);

var pontosFiltrados
  ee.Filter.notNull(['first'])
//Se o ponto cair em área sem dado (nodata), o valor retornado será null — use ee.Filter.notNull(['first']) para remover esses casos
print('pontosF',pontosFiltrados.first())

// ============================================
// 4. VISUALIZAR E EXPORTAR
// ============================================

print('Total de pontos originais:', pontos.size());
print('Total de pontos filtrados:', pontosFiltrados.size());

// Visualizar no mapa
Map.centerObject(pontos, 8);
Map.addLayer(pontos, {color: 'white'}, 'Pontos Originais');
Map.addLayer(pontosFiltrados, {color: 'red'}, 'Pontos Filtrados');



// // Adiciona as amostras estáveis no mapa com as respectivas cores
var dictClass = {
  3: "Floresta",
  11: "Area Pantanosa",
  12: "Campo",
  21: "Mosaico de Uso",
  22: "Área não vegetada",
  29: "Afloramento Rochoso",
  33: "Água",
}   

var listClass = pontosFiltrados.distinct(['reference']).reduceColumns(ee.Reducer.toList(), ['reference']).get('list') 
listClass.evaluate(function (item) {
  item.forEach(function (value) {
    var mySamp = pontosFiltrados.filter(ee.Filter.eq('reference', value))

    print('Samples ' + dictClass[value], mySamp.size())
    
    Map.addLayer(mySamp, { "color": palettes.get('brazil')[value] }, 'Samples ' + dictClass[value])
    print(dictClass[value],mySamp.filter(ee.Filter.eq('reference',value)).limit(1))
  })
}) 

Export.table.toAsset(pontosFiltrados,
  outname,
  dirout + outname)
  
