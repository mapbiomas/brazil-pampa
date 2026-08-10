/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometryPampa = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-58.60860203402261, -30.436571837742218],
          [-55.3812292750718, -31.536184439107085],
          [-53.35713719027261, -34.40439265236676],
          [-49.577840315272624, -30.17098716535918],
          [-49.865449044187244, -29.047801031923346],
          [-50.496256143190635, -28.306864654328834],
          [-52.082723127772624, -27.242150238166413],
          [-53.84697511154161, -26.832246261395174],
          [-55.62032078402261, -27.554277284914132]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// MAPBIOMAS PAMPA
// COLLECTION 09 
// AUTHOR: Juliano Schirmbeck
// UPDATE: May 2024 

var versionClass = "08"
var col = 11

// ***************************************************************************************
// Define o diretório de saída e a versão final mosaicada da coleção
var dirin = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/' 
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-ft/' 

var image = ee.Image(dirin+ 'PAMPA_'+versionClass+'_granular_plus_reclass')
 
//var biomes = ee.Image('projects/mapbiomas-workspace/AUXILIAR/biomas-raster-41')
//var limBioma = biomes.mask(biomes.eq(6)); //bioma 6 igual a Pampa
//Map.addLayer(limBioma,{},"biome PAMPA",false)

var biomes = ee.Image('projects/mapbiomas-workspace/AUXILIAR/ESTATISTICAS/COLECAO7/biome-raster')
var limBioma = biomes.mask(biomes.eq(6)); //bioma 6 igual a Pampa

var anos = [
  
  '1985','1986','1987','1988','1989','1990',
            '1991','1992','1993','1994','1995','1996',
            '1997','1998','1999','2000','2001','2002',
            '2003','2004','2005',
            
            // '2006','2007','2008',
            // '2009','2010','2011','2012','2013','2014',
            // '2015','2016','2017','2018','2019','2020',
            // '2021','2022','2023', '2024', '2025'
            ];
//anos = ['2018']


var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {
    'min': 0,
    'max': 75,
    'palette': palettes.get('brazil')
};

print(image)
Map.addLayer(image.select(15), vis, "imagem de entrada") ;         

var bioma = 'PAMPA'
var versaoout = '8'//se exportar de novo não colocar o zero!!!
var bandout = 'classification'
var source = 'ufrgs-geokarten'
var territory = 'BRAZIL' 

for (var i_ano=0;i_ano<anos.length; i_ano++){  
  var ano = anos[i_ano];
  var img_out = image.select('classification_'+ano)

  img_out = img_out.set('biome', bioma)
                    .set('year', parseInt(ano,10))
                    .set('version', versaoout)
                    .set('collection_id', 11)
                    .set('source', source)
                    .set('territory', territory)
                    .rename(bandout)
  
  
  Export.image.toAsset({
    'image': img_out.toByte(),
    'description': bioma +'-'+ ano + '-'+ versaoout,
    'assetId': dirout + bioma + '-' + ano + '-' + versaoout,
    'pyramidingPolicy': {
        '.default': 'mode'
    },
    'region': geometryPampa,
    'scale': 30,
    'maxPixels': 1e13
  });

}
Map.addLayer(img_out, vis, "imagem de saida") ;  
Map.addLayer(limBioma,{},"biome",false)