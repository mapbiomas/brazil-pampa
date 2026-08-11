/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry3 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-53.362969115693396, -30.886862332389335],
          [-53.36605902047855, -30.89960438899864],
          [-53.36056585641605, -30.904317783742638],
          [-53.33310003610355, -30.89216559083051],
          [-53.32099790902836, -30.870287757288168],
          [-53.322542861420935, -30.862551974473877],
          [-53.31619139047367, -30.854889250458843],
          [-53.31215734811527, -30.839856744215783],
          [-53.30743666024906, -30.835361272645464],
          [-53.29439039560062, -30.832929208451677],
          [-53.27439184518558, -30.81951489889361],
          [-53.26048727365238, -30.808015427790068],
          [-53.24847097726566, -30.79504001308522],
          [-53.24709768625004, -30.785454775229077],
          [-53.26271887155277, -30.779850655140947],
          [-53.2944762262891, -30.812143601440845],
          [-53.32262869210941, -30.82718044812752],
          [-53.34030981393558, -30.84545736498613],
          [-53.353012755830115, -30.868593305876434]]]),
    geometry4 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.MultiPolygon(
        [[[[-53.599401487244904, -30.888620505936483],
           [-53.6074695719617, -30.889504386510783],
           [-53.61227609051639, -30.911156912180054],
           [-53.60695458783084, -30.92426388401433],
           [-53.59133340252811, -30.92941781915356],
           [-53.581377042664826, -30.91130419150115],
           [-53.58532525433475, -30.89318713443348]]],
         [[[-53.55030633343631, -30.933835256759227],
           [-53.560949338807404, -30.942669519664765],
           [-53.536745084657014, -30.960335595781817],
           [-53.52266885174686, -30.951355748635677],
           [-53.533998502625764, -30.939577620520062]]],
         [[[-53.506017698182404, -30.950030781694643],
           [-53.49588967694217, -30.96681233847781],
           [-53.472543729676545, -30.9718167933134],
           [-53.47323037518436, -30.960924408724022],
           [-53.480783475770295, -30.95533053920894]]],
         [[[-53.34259606732303, -30.987858718023805],
           [-53.34860421551639, -30.998012303918305],
           [-53.32491494549686, -31.00080802907399],
           [-53.317705167664826, -30.99197914405973],
           [-53.31719018353397, -30.98197208639606],
           [-53.3328113688367, -30.980500371743307]]],
         [[[-53.64543859382631, -31.466653089654887],
           [-53.65209047218325, -31.463761298140348],
           [-53.657111567459125, -31.463505059141482],
           [-53.656688768053, -31.469021505806992],
           [-53.6549310253701, -31.47129241674861],
           [-53.65012450681541, -31.47129241674861],
           [-53.64480300412986, -31.46818114603822]]],
         [[[-53.41509331952454, -31.83561566992932],
           [-53.41844071637512, -31.838751122739897],
           [-53.407626049627076, -31.846334103013536],
           [-53.37878693829895, -31.843198907900597],
           [-53.369688885320436, -31.844365504576388],
           [-53.35878838788391, -31.837219868398662],
           [-53.3635949064386, -31.835469832321966],
           [-53.41269006024719, -31.83335516111568]]]]),
    geometry = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-53.448112473770685, -30.90706739190397],
          [-53.44854162721307, -30.907343552245983],
          [-53.44892786531121, -30.907859049419034],
          [-53.44920681504876, -30.909055728580437],
          [-53.44847725419671, -30.91003147128333],
          [-53.44628857164056, -30.910326033163127],
          [-53.44066666154534, -30.910749464276837],
          [-53.44055937318475, -30.909460755061072],
          [-53.44349907426507, -30.908098386448398],
          [-53.44774769334466, -30.906920106062408]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var classification_r1 = ee.ImageCollection('projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/INTEGRATION/classification')
var regiao = 1 
var ano_compara = 2020  
var anos = ee.List.sequence(2017, 2025);
var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/'
var versionOut = '01_sombra_int'

// Limite PAMPA com buffer
var regioesCollection_CB = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')
var limite = regioesCollection_CB.filter(ee.Filter.eq('ID', regiao));

// Raster limite do PAMPA 
var regioesCollection_SB = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col05')
var limite2 = regioesCollection_SB.filter(ee.Filter.eq('ID', regiao));

var limite_reg_raster = ee.Image().uint32().paint({
    featureCollection: limite2,
    color: 'ID',
}).rename(['limite2']);
var mask_regiao = limite_reg_raster.eq(regiao).selfMask()

//buffer 100m ao redor de aroc
var aroc_buffer = ee.FeatureCollection(
  'users/macleidivarnier/export_aroc_buffer_100m'
);

//eliminando áreas problema
var aroc_buffer_cortado = aroc_buffer.map(function(feature) {
  // Obtém a geometria da feição atual
  var geom = feature.geometry();
  
  // Calcula a diferença entre a feição e a geometria de exclusão
  var diferenca = geom.difference(geometry);
  
  // Retorna a feição com a nova geometria cortada
  return feature.setGeometry(diferenca);
});

// Opcional: Remover feições que ficaram vazias após o corte
var aroc_buffer = aroc_buffer_cortado.filter(ee.Filter.notNull(['system:index']));

var aroc_img = ee.Image()
  .byte()
  .paint({
    featureCollection: aroc_buffer,
    color: 1
  })
  .rename('aroc');
var mask_aroc = aroc_img.eq(1).selfMask();

// Define as paletes e parâmetros de visualização
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

// Classes Mapbiomas BR e PAMPA
var class_in =  [3,49,11,12,29,50,15,19,39,20,40,62,41,36,46,47,48,9,21,22,23,24,30,25,33,31,75]
var class_out = [3, 3,11,12,29,12,21,21,21,21,21,21,21,21,21,21,21,3,21,22,22,22,22,22,33,33,22]

//col 3 int
var col_S3_gran = classification_r1
  .select('classification_'+ano_compara)
  .mosaic()
  .mask(mask_regiao)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)

//col 3 int mascarada por buffer aroc
var col_S3_aroc = col_S3_gran.mask(mask_aroc)

// Carrega o NASADEM
var nasadem = ee.Image('NASA/NASADEM_HGT/001')
.select('elevation').mask(mask_regiao).toFloat();

// Calcula slope 
var slope = ee.Terrain.slope(nasadem)
  .mask(mask_regiao);

//amostras de água em sombra
var sombra_select = col_S3_aroc.eq(33)
  .rename('class')
  .clip(geometry3);

//Análise exploratória sombra
// Gerar 500 amostras
var sombra_samples = sombra_select.selfMask().stratifiedSample({
  numPoints: 500,
  classBand: 'class',
  region: geometry3,
  scale: 10,
  geometries: true,
  seed: 42
});

//Extrair valores de slope pelas amostras
var slope_pts = slope.sampleRegions({
  collection: sombra_samples,      // FeatureCollection de pontos
  properties: ['id'],      // opcional
  scale: 10,
  geometries: false
});

// Histograma de slope para pontos
var chartSlopePts = ui.Chart.feature.histogram({
  features: slope_pts,
  property: 'slope',
  maxBuckets: 30   // ajuste o número de classes
})
.setOptions({
  title: 'Histograma de Slope (pontos)',
  hAxis: {
    title: 'Slope'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartSlopePts);


//Flow accumulation
var flowacc = ee.ImageCollection("projects/sat-io/open-datasets/HYDROGRAPHY90/base-network-layers/flow_accumulation")
.mosaic() 
  .mask(mask_regiao)

var flowacc_pts = flowacc.sampleRegions({
  collection: sombra_samples,      
  properties: ['id'],      
  scale: 10,
  geometries: false
});

// Histograma de Flow Accumulation para pontos
var chartFlowAccPts = ui.Chart.feature.histogram({
  features: flowacc_pts,
  property: 'b1',      
  maxBuckets: 30
})
.setOptions({
  title: 'Histograma de Flow Accumulation (pontos)',
  hAxis: {
    title: 'Flow Accumulation'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartFlowAccPts);


//amostras de água em rios/açudes
var rios_select = col_S3_aroc.eq(33)
  .rename('class')
  .clip(geometry4);

// Gerar 200 amostras
var rios_samples = rios_select.selfMask().stratifiedSample({
  numPoints: 500,
  classBand: 'class',
  region: geometry4,
  scale: 10,
  geometries: true,
  seed: 42
});

//Análise exploratória rios/lagos
//slope
var slope_pts = slope.sampleRegions({
  collection: rios_samples,      // FeatureCollection de pontos
  properties: ['id'],      // opcional
  scale: 10,
  geometries: false
});

// Histograma de slope para pontos
var chartSlopePts = ui.Chart.feature.histogram({
  features: slope_pts,
  property: 'slope',
  maxBuckets: 30   // ajuste o número de classes
})
.setOptions({
  title: 'Histograma de Slope (pontos)',
  hAxis: {
    title: 'Slope'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartSlopePts);

//Flow acc
var flowacc_pts = flowacc.sampleRegions({
  collection: rios_samples,      // FeatureCollection de pontos
  properties: ['id'],      // opcional
  scale: 10,
  geometries: false
});

// Histograma de Flow Accumulation para pontos
var chartFlowAccPts = ui.Chart.feature.histogram({
  features: flowacc_pts,
  property: 'b1',      // banda do flow accumulation
  maxBuckets: 30
})
.setOptions({
  title: 'Histograma de Flow Accumulation (pontos)',
  hAxis: {
    title: 'Flow Accumulation'
  },
  vAxis: {
    title: 'Frequência'
  },
  legend: { position: 'none' }
});

print(chartFlowAccPts);

var granular = ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/01_Emb_RF17a25_v01_gran')
//definição do filtro
// Definição de kernel 7x7
print(granular,'granular')

var kernel7 = ee.Kernel.square({
  radius: 3,
  units: 'pixels'
});

var aplicarFiltroAno = function(ano) {
  ano = ee.Number(ano).toInt();

  var col_S3_gran = ee.ImageCollection(granular)
    .select(ee.String('classification_').cat(ano))
    .mosaic()                       
    .mask(mask_regiao)
    .remap(class_in, class_out)
    .rename('classification');

  var col_S3_aroc = col_S3_gran.mask(mask_aroc);

  var sem33 = col_S3_gran.updateMask(col_S3_gran.neq(33));

  var moda_sem33 = sem33.reduceNeighborhood({
    reducer: ee.Reducer.mode(),
    kernel: kernel7,
    skipMasked: true
  }).reproject({
    crs: col_S3_gran.projection(),
    scale: col_S3_gran.projection().nominalScale()
  });

  var condicao = slope.gt(15)
    .and(flowacc.lt(1))
    .and(col_S3_gran.eq(33));

  var col_corrigido = col_S3_aroc.where(
    condicao,
    moda_sem33.unmask(col_S3_aroc)
  );

  var col_S3_filter = col_S3_gran.blend(col_corrigido);

  return col_S3_filter
    .rename('classification')
    .set('year', ano);
};

var classification_filtrada = ee.ImageCollection(
  anos.map(aplicarFiltroAno)
);
 print(classification_filtrada)

var classification_nomeada = classification_filtrada.map(function(img) {
  var ano = ee.Number(img.get('year')).format('%d');
  return img.rename(ee.String('classification_').cat(ano));
});

// stack atual 
var stack_com_indice = classification_nomeada.toBands();

// Remover o prefixo 
var bandNames = stack_com_indice.bandNames();

var bandNames_limpas = bandNames.map(function(b) {
  b = ee.String(b);
 
  return b.split('_').slice(1).join('_');
});

// Aplicar os novos nomes
var stack_final = stack_com_indice.rename(bandNames_limpas);

var stack_final = stack_final.toInt8()

print(stack_final)

// Conferência
print('Bandas finais:', stack_final.bandNames());

Export.image.toAsset({
  image: stack_final,
  description: '0' + regiao + '_Emb_RF17a25_v' + versionOut,
  assetId: dir_filtros + '0' + regiao + '_Emb_RF17a25_v' + versionOut,
  pyramidingPolicy: {
    '.default': 'mode'
  },
  region: limite.geometry().bounds(),
  scale: 10,
  maxPixels: 1e13
});

Map.addLayer(stack_final.select('classification_2024'),vis, 'classification_2024 Sombra')
Map.addLayer(granular.select('classification_2024'),vis, 'classification_2024 Gran')


