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
// COLLECTION 10
// AUTHOR: Juliano Schirmbeck
// UPDATE: May 2025 

// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var version= '10'
var vesion_in = version +'_inci'
var versao_out = version + '_ext';
var descricao = 'Área de Transicao Minima'
var col = '10'
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/';

// Define as regiões: [1,2,3,4,5,6,7]
var regioes = [//1,2,3//,
               2// 4,5,6//,7
                ]

// Define o último ano para o filtro de pousio
var lastYear = 2024

// ***************************************************************************************

for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
    var regiao = regioes[i_regiao];
    
var col7 =  ee.Image(dirout+ '0' + String(regiao) +'_RF_col' + col + '_v' +vesion_in)
//Map.addLayer(col7, {}, 'col7', false);


var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {
    'min': 0,
    'max': 62,
    'palette': palettes.get('classification8')
};var vis2 = {
    'bands': 'classification_2022',
    'min': 0,
    'max': 62,
    'palette': palettes.get('classification8')
};


var anos = [1985,1986,1987,1988,1989,1990,
            1991,1992,1993,1994,1995,1996,
            1997,1998,1999,2000,2001,2002,
            2003,2004,2005,2006,2007,2008,
            2009,2010,2011,2012,2013,2014,
            2015,2016,2017,2018,2019,2020,
            2021,2022,2023,2024];

for (var i_ano=0;i_ano<anos.length; i_ano++){
  var ano = anos[i_ano];
  
  var class_ano = col7.select('classification_'+ano)
  var class_nivel0_ano = class_ano.remap([3,11,12, 21,22],
                                         [1, 1, 1, 10,10]).rename('classification_'+ano)

  if (i_ano == 0){ var class_nivel0 = class_nivel0_ano }  
  else {class_nivel0 = class_nivel0.addBands(class_nivel0_ano); }
}

//var nChanges = class_nivel0.reduce(ee.Reducer.countRuns()).subtract(1);
//Map.addLayer(nChanges, {'min': 0,'max': 6, 'palette': ["#ffffff","#fee0d2","#fcbba1",
//            "#fb6a4a","#ef3b2c","#a50f15","#67000d"],'format': 'png'}, 'nChanges',false)


var nivel0_ultimo = class_nivel0.select('classification_2024')
var nivel0_penultimo = class_nivel0.select('classification_2023')

// corrige desmatamentos pequenos no último ano
var desmat = nivel0_ultimo.eq(10).and(nivel0_penultimo.eq(1))

// CUIDADO limite do conected deve ser maior ou igual ao teste seguinte
var conectedDesmat = desmat.selfMask().connectedPixelCount(30,true).reproject('epsg:4326', null, 30);
var desmat1ha = conectedDesmat.lte(22)
var ruido_desmat_penultimo = col7.select('classification_2023').updateMask(desmat1ha)

// corrige REGEN pequenos no último ano
var regen = nivel0_ultimo.eq(1).and(nivel0_penultimo.eq(10))
var conectedRegen = regen.selfMask().connectedPixelCount(30,true).reproject('epsg:4326', null, 30);
var regen1ha = conectedRegen.lte(22)
var ruido_regen_penultimo = col7.select('classification_2023').updateMask(regen1ha)


var nivel0_1985 = class_nivel0.select('classification_1985')
var nivel0_1986 = class_nivel0.select('classification_1986')

// corrige desmatamentos pequenos no primeiro ano
var desmat = nivel0_1985.eq(1).and(nivel0_1986.eq(10))
var conectedDesmat = desmat.selfMask().connectedPixelCount(30,true).reproject('epsg:4326', null, 30);
var desmat1ha = conectedDesmat.lte(22)
var ruido_desmat85 = col7.select('classification_1986').updateMask(desmat1ha)


// corrige REGEN pequenos no primeiro ano
var regen = nivel0_1985.eq(10).and(nivel0_1986.eq(1))
var conectedregen = regen.selfMask().connectedPixelCount(30,true).reproject('epsg:4326', null, 30);
var regen1ha = conectedregen.lte(22)
var ruido_regen85 = col7.select('classification_1986').updateMask(regen1ha)


for (var i_ano=0;i_ano<anos.length; i_ano++){
  var ano = anos[i_ano];
  
  var class_ano = col7.select('classification_'+ano)

  if (ano == 1985) {  var class_corr = class_ano.blend(ruido_desmat85).blend(ruido_regen85)}
  else if (ano == 2024) {  
    class_corr = class_ano.blend(ruido_desmat_penultimo).blend(ruido_regen_penultimo)  }
  else {class_corr = class_ano}

  if (i_ano == 0){ var class_final = class_corr}  
  else {class_final = class_final.addBands(class_corr)}

}

//******************************************************
//******************************************************
// Filtro agua ultimo ano
//******************************************************

Map.addLayer(col7, vis2, 'col9', true);
Map.addLayer(class_final, vis2, 'class_final area minima', true);


var class_2022 = class_final.select('classification_2022')
var class_2023 = class_final.select('classification_2023')
var class_2024 = class_final.select('classification_2024')

var agua_2023 = class_2023.eq(33).selfMask() //mascara de agua em 2023
var agua_2024 = class_2024.eq(33).selfMask() //mascara de agua em 2024
Map.addLayer(agua_2023, {}, 'agua_2023', true);

var corrFor23 = class_2022.mask(agua_2023) //camada que classificação de 2022 para corrigir 2023
var corrFor24 = class_2022.mask(agua_2024) //camada que classificação de 2022 para corrigir 2024
Map.addLayer(corrFor23, vis, 'corrFor23', true);
Map.addLayer(corrFor24, vis, 'corrFor24', true);

var class_2023_corr = class_2023.blend(corrFor23) //camada de 2023 corrigida
var class_2024_corr = class_2024.blend(corrFor24) //camada de 2024 corrigida

Map.addLayer(class_2023_corr, vis, 'class_2023_corr', true);
class_final = class_final
  .addBands(class_2023_corr,['classification_2023'],true)
  .addBands(class_2024_corr,['classification_2024'],true)
print(class_final)

Map.addLayer(class_final.select('classification_2023'), vis, 'class_2023_corr_final', true);

//******************************************************
//******************************************************
// Filtro floresta e areaa umida ultimo ano
//******************************************************

Map.addLayer(col7, vis2, 'col9', true);
Map.addLayer(class_final, vis2, 'class_final area minima', true);

var class_2023 = class_final.select('classification_2023')
var class_2024 = class_final.select('classification_2024')

var mask_floresta = class_2023.neq(3).and(class_2024.eq(3)).selfMask() //mascara de não floresta em 23 e floresta em 24


var mask_umida = class_2023.neq(11).and(class_2024.eq(11)).selfMask() //mascara de não umica em 23 e umida em 24

var corr_floresta = class_2023.mask(mask_floresta) //camada que classificação de 2023 onde havia floresta em 24
var corr_umida = class_2023.mask(mask_umida) //camada que classificação de 2023 onde havia area umida em 24

var class_2024_corr = class_2024.blend(corr_floresta).blend(corr_umida) //camada que classificação de 2024 com camadas de floresta e umida

Map.addLayer(class_2024_corr, vis, 'class_2023_corr', true);

class_final = class_final
  .addBands(class_2024_corr,['classification_2024'],true)
print(class_final)

Map.addLayer(class_final.select('classification_2023'), vis, 'class_2023_corr_final', true);





//******************************************************
//******************************************************
// Filtro anv ano 2003
//******************************************************

Map.addLayer(class_final, vis2, 'class_final_2003', true);


var class_1998 = class_final.select('classification_1995')
var class_2003 = class_final.select('classification_2003')

var anv_1998 = class_1998.eq(22).selfMask().multiply(22) //mascara de anv em 2001
Map.addLayer(anv_1998, {}, 'anv_1998', true);

var class_2003_corr = class_2003.blend(anv_1998) //camada de 2023 corrigida

Map.addLayer(class_2003_corr, vis, 'class_2003_corr', true);
class_final = class_final.addBands(class_2003_corr,['classification_2003'],true)
print(class_final)

Map.addLayer(class_final.select('classification_2003'), vis, 'class_2003_corr_final', true);

print('class_final',class_final)

var vis3 = {
    'bands': 'classification_2023',
    'min': 0,
    'max': 62,
    'palette': palettes.get('classification8')
};

//******************************************************
//******************************************************
// Filtro campo 2022-2023 (impede regeneração de campo em pousio)
//******************************************************
//
//var mask_5anos_12 = class_final.select('classification_'+ (parseInt(lastYear) - 6)).eq(21)
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 5)).eq(21))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 4)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 3)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 2)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 1)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear))).eq(12))
//          .multiply(21).selfMask()
//
//Map.addLayer(class_final, vis3, 'class_final '+lastYear, true);
//Map.addLayer(mask_5anos_12,{},'mask_5anos_12')
// 
//class_final = class_final.addBands(class_final.select('classification_'+(parseInt(lastYear) - 4)).blend(mask_5anos_12),
//                                    ['classification_'+(parseInt(lastYear) - 4)],
//                                    true)
//                          .addBands(class_final.select('classification_'+(parseInt(lastYear) - 3)).blend(mask_5anos_12),
//                                      ['classification_'+(parseInt(lastYear) - 3)],
//                                      true)
//                          .addBands(class_final.select('classification_'+(parseInt(lastYear) - 2)).blend(mask_5anos_12),
//                                      ['classification_'+(parseInt(lastYear) - 2)],
//                                      true)
//                          .addBands(class_final.select('classification_'+(parseInt(lastYear) - 1)).blend(mask_5anos_12),
//                                      ['classification_'+(parseInt(lastYear) - 1)],
//                                      true)
//                          .addBands(class_final.select('classification_'+lastYear).blend(mask_5anos_12),
//                                    ['classification_'+lastYear],
//                                    true)
//
//Map.addLayer(class_final, vis3, '2024 mask 21/12 final', true);
//
///// 21 para 12 no final da serie
//var mask_4anos_12 = class_final.select('classification_'+ (parseInt(lastYear) - 5)).eq(21)
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 4)).eq(21))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 3)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 2)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 1)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear))).eq(12))
//          .multiply(21).selfMask()
//
//Map.addLayer(class_final, vis3, 'class_final '+lastYear, true);
//Map.addLayer(mask_4anos_12,{},'mask_4anos_12')
// 
//class_final = class_final.addBands(class_final.select('classification_'+(parseInt(lastYear) - 3)).blend(mask_4anos_12),
//                                    ['classification_'+(parseInt(lastYear) - 3)],
//                                    true)
//                        .addBands(class_final.select('classification_'+(parseInt(lastYear) - 2)).blend(mask_4anos_12),
//                                    ['classification_'+(parseInt(lastYear) - 2)],
//                                    true)
//                        .addBands(class_final.select('classification_'+(parseInt(lastYear) - 1)).blend(mask_4anos_12),
//                                    ['classification_'+(parseInt(lastYear) - 1)],
//                                    true)
//                        .addBands(class_final.select('classification_'+lastYear).blend(mask_4anos_12),
//                                    ['classification_'+lastYear],
//                                    true)
//
//Map.addLayer(class_final, vis3, '2024 mask 21/12 final', true);
//
///// 21 para 12 no final da serie
//var mask_3anos_12 = class_final.select('classification_'+ (parseInt(lastYear) - 4)).eq(21)
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 3)).eq(21))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 2)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 1)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear))).eq(12))
//          .multiply(21).selfMask()
//
//Map.addLayer(class_final, vis3, 'class_final '+lastYear, true);
//Map.addLayer(mask_3anos_12,{},'mask_3anos_12')
// 
//class_final = class_final.addBands(class_final.select('classification_'+(parseInt(lastYear) - 2)).blend(mask_3anos_12),
//                                    ['classification_'+(parseInt(lastYear) - 2)],
//                                    true)
//                        .addBands(class_final.select('classification_'+(parseInt(lastYear) - 1)).blend(mask_3anos_12),
//                                    ['classification_'+(parseInt(lastYear) - 1)],
//                                    true)
//                        .addBands(class_final.select('classification_'+lastYear).blend(mask_3anos_12),
//                                    ['classification_'+lastYear],
//                                    true)
//
//Map.addLayer(class_final, vis3, '2024 mask 21/12 final', true);
//
///// 21 para 12 no final da serie
//var mask_2anos_12 = class_final.select('classification_'+ (parseInt(lastYear) - 3)).eq(21)
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 2)).eq(21))
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 1)).eq(12))
//          .and(class_final.select('classification_'+ (parseInt(lastYear))).eq(12))
//          .multiply(21).selfMask()
//
//Map.addLayer(class_final, vis3, 'class_final '+lastYear, true);
//Map.addLayer(mask_2anos_12,{},'mask_2anos_12')
// 
//class_final = class_final.addBands(class_final.select('classification_'+(parseInt(lastYear) - 1)).blend(mask_2anos_12),
//                                    ['classification_'+(parseInt(lastYear) - 1)],
//                                    true)
//                        .addBands(class_final.select('classification_'+lastYear).blend(mask_2anos_12),
//                                    ['classification_'+lastYear],
//                                    true)
//
//Map.addLayer(class_final, vis3, '2024 mask 21/12 final', true);
//
///// 21 para 12 no final da serie parte 2
//var mask_1ano_12 = class_final.select('classification_'+ (parseInt(lastYear) - 2)).eq(21)
//          .and(class_final.select('classification_'+ (parseInt(lastYear) - 1)).eq(21))
//          .and(class_final.select('classification_'+ (parseInt(lastYear))).eq(12))
//          .multiply(21).selfMask()
//
//Map.addLayer(class_final, vis3, 'class_final 2024 ultimo', true);
//Map.addLayer(mask_1ano_12,{},'mask_1ano_12')
// 
//class_final = class_final.addBands(class_final.select('classification_'+lastYear).blend(mask_1ano_12),
//                                    ['classification_'+lastYear],
//                                    true)
//
//Map.addLayer(class_final, vis3, '2024 mask 21/12 final ultimo', true);

//******************************************************
//*********************************************************************
// Filtro restinga arbórea 2023 (impede regeneração restinga arbórea)
//*********************************************************************

// if (regiao == 7){
// var class_49_2022 = class_final.select('classification_2022')
// var class_49_2023 = class_final.select('classification_2023')

// var rarb_2023 = class_49_2023.eq(3).selfMask() //mascara de arb em 2023
// Map.addLayer(rarb_2023, {}, 'rarb_2023', true);

// var corr_49_2022 = class_49_2022.mask(rarb_2023) //camada de classificação de 2022 para corrigir 2023
// Map.addLayer(corr_49_2022, vis, 'corr_49_2022', true);

// var class_49_2023_corr = class_49_2023.blend(corr_49_2022) //camada de 2023 corrigida

// Map.addLayer(class_49_2023_corr, vis, 'class_49_2023_corr', true);
// class_final = class_final.addBands(class_49_2023_corr,['classification_2023'],true)
// print(class_final)

// Map.addLayer(class_final.select('classification_2023'), vis, 'class_49_2023_corr_final', true);
// }

Export.image.toAsset({
    "image": class_final.toInt8(),
    'description':  '0' + String(regiao) +'_RF_col' + col + '_v' + versao_out,
    'assetId': dirout + '0' + String(regiao) +'_RF_col' + col + '_v' + versao_out,
    "scale": 30,
    "pyramidingPolicy": {
        '.default': 'mode'
    },
    "maxPixels": 1e13,
    "region": geometryPampa
});      

}