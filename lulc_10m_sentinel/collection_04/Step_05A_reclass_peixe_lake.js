/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometryPampa = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-58.235066877772624, -30.60692415433937],
          [-55.3812292750718, -31.536184439107085],
          [-53.357137190272624, -34.05923401863392],
          [-49.577840315272624, -30.17098716535918],
          [-49.865449044187244, -29.047801031923346],
          [-50.496256143190635, -28.306864654328834],
          [-52.082723127772624, -27.242150238166413],
          [-53.84697511154161, -27.06728423431273],
          [-55.620320784022624, -27.807229402344642]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// MAPBIOMAS PAMPA
// COLLECTION 02
// AUTHOR: Juliano Schirmbeck
// UPDATED: Oct 2024
 
// Versões:
var version = '01'
var bioma = "PAMPA"
 
var versionIn = 'PAMPA_'+ version+ '_granshade'

var versionOut = 'PAMPA_'+ version+ '_CF_reclass'

// Parâmetros de visualização
//var imageVisParam = {"opacity":1,"min":0,"max":50,"palette":["ffffff","129912","1f4423","006400","00ff00","687537","76a5af","29eee4","77a605","ad4413","bbfcac","45c2a5","b8af4f","f1c232","ffffb2","ffd966","f6b26b","f99f40","e974ed","d5a6bd","c27ba0","fff3bf","ea9999","dd7e6b","aa0000","ff3d3d","0000ff","d5d5e5","dd497f","665a3a","af2a2a","1f0478","968c46","0000ff","4fd3ff","645617","f3b4f1","02106f","02106f","e075ad","982c9e","e787f8","cca0d4","d082de","cd49e4","e04cfa","cca0d4","d082de","cd49e4","6b9932","9dff00"]};
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {'min': 0, 'max': 75,  'palette': palettes.get('brazil')};


// Aplicar a máscara AROC (versão 2)
var arocMask = ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam-temp/Aroc_mask_RF_col3_v02_esp');

// Imagem de entrada

var asset = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/' + versionIn;
var img_in = ee.Image(asset);

var out = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/'


// Anos a corrigir
var anos = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

// Aplica AROC ano a ano
var img = ee.ImageCollection(anos.map(function(ano) {
    var banda = 'classification_' + ano;

// Seleciona a banda do ano
    var bandaAno = img_in.select(banda);

  // Onde arocMask tem valor, substitui pela classe 29, senão mantém original
    var imgComAroc = bandaAno.where(arocMask.neq(0),29);


  // Renomeia a banda corrigida para manter o nome original
    return imgComAroc.rename(banda);
  })).toBands().rename(   // REVISAR
    
    anos.map(function(ano) {     // REVISAR
     return 'classification_' + ano;   //REVISAR
   }) // REVISAR
 );

// Debug
print('Imagem com AROC aplicada:', img);
print('Bandas:', img.bandNames());

Map.addLayer(img_in.select('classification_2020'), vis, 'Sem AROC 2020');
Map.addLayer(arocMask.select('classification'), vis, 'Mask ARoc');
Map.addLayer(img.select('classification_2020'), vis, 'Com AROC 2020');


/// Reclassificação de floresta e campo sobre solos arenosos para restinga arbórea e restinga herbácea
var biomas= ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/bioma_2025_e250k_5kbuffer')
  .filter(ee.Filter.eq('NAME','Pampa'))
print(biomas)  

var solos = ee.FeatureCollection("projects/mapbiomas-workspace/AUXILIAR/RESTINGA/SolosIBGE_SCostMarinhoBR")

var solos_arborea = solos.filterBounds(biomas)//toda floresta na zona costeira somente nos quarzenicos - col 4...em sintonia com col 11
  .filterBounds(biomas)
  .filter(ee.Filter.inList('value_ord', [4, 8, 14]))
  .filter(ee.Filter.neq('id', 114621));

Map.addLayer(solos_arborea, {}, "solos quartzenicos")


var solos_herbacea = solos.filterBounds(biomas)//todo campo na zona costeira, somente em solos quartzênicos
                              .filter(ee.Filter.or(ee.Filter.eq('value_ord', 4),
                              ee.Filter.eq('value_ord', 8),
                              ee.Filter.eq('value_ord', 14)))
                              .filter(ee.Filter.neq('id',114621))
  
var herbacea_raster = ee.Image().uint32().paint({
    featureCollection: solos_herbacea,
    color: 50
}).rename(['herbacea']);
                              
var arborea_raster = ee.Image().uint32().paint({
    featureCollection: solos_arborea,
    color: 49
}).rename(['arborea']);

var herbacea = herbacea_raster.eq(50).and(img.eq(12)).multiply(50).selfMask()
var arborea = arborea_raster.eq(49).and(img.eq(3)).multiply(49).selfMask()


// Reclass nas Marismas = a classe 11 dentro dos poligonos do shape viram classe id: 84
// Salt Marsh #f7af11
var marismasAsset =  ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/RESTINGA/marismasMB_RS2018_llw84')
Map.addLayer(marismasAsset, {}, "Marismas Reg")

var marismas_raster = ee.Image().uint32().paint({
    featureCollection: marismasAsset,
    color: 84
}).rename(['marismas']);
                         
var marismas = marismas_raster.eq(84).and(img.eq(11)).multiply(84).selfMask()

var marismasAsset2 =  ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/RESTINGA/marismasMB_semB_RS2018_llw84')
Map.addLayer(marismasAsset2, {}, "Marismas Reg2")

var marismas_raster2 = ee.Image().uint32().paint({
    featureCollection: marismasAsset2,
    color: 84
}).rename(['marismas']);

var marismas2 = marismas_raster2.eq(84).and(img.eq(21)).multiply(84).selfMask()

/////////////////////////////////////////////////////////////

var nao_veg = img.eq(22).multiply(25).selfMask()

//// aplica os ajustes na coleção
img = img.blend(herbacea).blend(arborea).blend(marismas).blend(marismas2).blend(nao_veg)
var ano = 2020
Map.addLayer(img.select('classification_' + ano), vis, 'IN Restinga + Marismas ' + ano)


// Reclassifica áreas antropizadas dentro da poligonal do PARNA Lagoa do Peixe 
var lPeixe = ee.FeatureCollection('users/evelezmartin/shp/bLPeixe_col8')
var banhados_R6 = ee.FeatureCollection('projects/ee-geokarten/assets/banhados_R6')

var pol_remap = lPeixe.merge(banhados_R6)
print(pol_remap)

var pol_remap_raster = ee.Image().uint32().paint({
    featureCollection: pol_remap,
    color: 1
}).rename(['peixe']);

Map.addLayer(pol_remap_raster, {}, "remapped")

var lpx = pol_remap_raster.eq(1).and(img.eq(21)).multiply(11).selfMask()
img = img.blend(lpx)
  

Map.addLayer(img.select('classification_' + ano), vis, 'OUT ' + ano)

// Map.addLayer(herbacea,vis,'herbacea')
// Map.addLayer(arborea,vis,'arborea')

print(img)
//Map.addLayer(image.select(30), vis, 'imagem' );

// Lista todas as bandas da imagem final
var bandas = img.bandNames();
print('Bandas exportadas:', bandas);

// Filtra só as bandas de classificação e extrai os anos
var anos = bandas
  .filter(ee.Filter.stringContains('item', 'classification_'))
  .map(function(b) {
    return ee.String(b).split('_').get(1);
  });

print('Anos exportados:', anos);


Export.image.toAsset({
  'image': img,
  'description': versionOut,
  'assetId': out + versionOut,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'region': geometryPampa,
  'scale': 10,
  'maxPixels': 1e13
});

