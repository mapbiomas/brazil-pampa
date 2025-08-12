// MAPBIOMAS PAMPA
// COLLECTION 10 
// AUTHOR: Juliano Schirmbeck
// UPDATE: May 2025 


// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var version = '11'
var col = '10'
var bioma = "PAMPA"
var versionOut = version + '_temp2'
var versionIn = version + '_temp'

// Define as regiões: [1,2,3,4,5,6,7]
var regioes = [//1,2,3//,
               2// 4,5,6//,7
                ]

// ***************************************************************************************

var anos3 = ['1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999',
'2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'
,'2016','2017','2018','2019','2020','2021','2022', '2023'];
var anos4 = ['1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999',
'2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015',
'2016','2017','2018','2019','2020','2021', '2022'];
var anos5 = ['1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999',
'2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015',
'2016','2017','2018','2019','2020', '2021'];

                 
for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
  var regiao = regioes[i_regiao];
  
  var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'
  var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);
  
  var image_in = ee.Image(dir_filtros+ '0' + String(regiao) +'_RF_col' + col + '_v' + versionIn);
  print(image_in)
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {'min': 0, 'max': 62,  'palette': palettes.get('classification8')};
var vis = {'bands': 'classification_2015','min': 0, 'max': 62,  'palette': palettes.get('classification8')};
  

  //put "classification_2019 in the end of bands after gap fill
  var original = image_in.select('classification_1985')
  for (var i_ano=0;i_ano<anos3.length; i_ano++){  
    var ano = anos3[i_ano]; 
    original = original.addBands(image_in.select('classification_'+ano)) 
  }
  original = original.addBands(image_in.select('classification_2024'))
  
  var filtered = original
  
  var vis = {'bands': 'classification_2003','min': 0, 'max': 62,  'palette': palettes.get('classification8')};
  
  Map.addLayer(original, vis, 'original',false);
//  Map.addLayer(filtered, vis, 'pre inv');

//*********************************************************
//Absense Filter
//**************************************************************  
  var window5years_abs = function(imagem, valor){
     for (var i_ano=0;i_ano<anos5.length; i_ano++){  
        var ano = anos5[i_ano];  
        var mask = imagem.select('classification_1985').neq (valor).and(imagem.select('classification_2024').neq (valor)) 
            .and(imagem.select('classification_'+ (parseInt(ano) - 1)).neq (valor))
            .and(imagem.select('classification_'+ (ano)              ).eq(valor))
            .and(imagem.select('classification_'+ (parseInt(ano) + 1)).eq(valor))
            .and(imagem.select('classification_'+ (parseInt(ano) + 2)).eq(valor))
            .and(imagem.select('classification_'+ (parseInt(ano) + 3)).neq (valor))
      imagem = imagem.addBands(imagem.select('classification_'+ (ano)              )
                                  .blend(mask.selfMask()
                                  .multiply(imagem.select('classification_' + (parseInt(ano) + 3)))),['classification_'+ (ano)          ],true)
      imagem = imagem.addBands(imagem.select('classification_'+ (parseInt(ano) + 1))
                                  .blend(mask.selfMask()
                                  .multiply(imagem.select('classification_' + (parseInt(ano) + 3)))),['classification_'+ (parseInt(ano)+1)],true)
      imagem = imagem.addBands(imagem.select('classification_'+ (parseInt(ano) + 2))
                                  .blend(mask.selfMask()
                                  .multiply(imagem.select('classification_' + (parseInt(ano) + 3)))),['classification_'+ (parseInt(ano)+2)],true)
     }
     return imagem
  }
  
  var window4years_abs = function(imagem, valor){
     for (var i_ano=0;i_ano<anos4.length; i_ano++){  
       var ano = anos4[i_ano];  
        var mask = imagem.select('classification_1985').neq (valor).and(imagem.select('classification_2024').neq (valor)) 
            .and(imagem.select('classification_'+ (parseInt(ano) - 1)).neq (valor))
            .and(imagem.select('classification_'+ (ano)              ).eq(valor))
            .and(imagem.select('classification_'+ (parseInt(ano) + 1)).eq(valor))
            .and(imagem.select('classification_'+ (parseInt(ano) + 2)).neq(valor))
      imagem = imagem.addBands(imagem.select('classification_'+ (ano)              )
                                  .blend(mask.selfMask()
                                  .multiply(imagem.select('classification_' + (parseInt(ano) + 2)))),['classification_'+ (ano)          ],true)
      imagem = imagem.addBands(imagem.select('classification_'+ (parseInt(ano) + 1))
                                  .blend(mask.selfMask()
                                  .multiply(imagem.select('classification_' + (parseInt(ano) + 2)))),['classification_'+ (parseInt(ano)+1)],true)
      imagem = imagem.addBands(imagem.select('classification_'+ (parseInt(ano) + 2))
                                  .blend(mask.selfMask()
                                  .multiply(imagem.select('classification_' + (parseInt(ano) + 2)))),['classification_'+ (parseInt(ano)+2)],true)
     }
     return imagem
  }


  var window3years_abs = function(imagem, valor){
     for (var i_ano=0;i_ano<anos3.length; i_ano++){  
       var ano = anos3[i_ano];  
        var mask = imagem.select('classification_1985').neq (valor).and(imagem.select('classification_2024').neq (valor)) 
            .and(imagem.select('classification_'+ (parseInt(ano) - 1)).neq (valor))
            .and(imagem.select('classification_'+ (ano)              ).eq(valor))
            .and(imagem.select('classification_'+ (parseInt(ano) + 1)).neq(valor))
      imagem = imagem.addBands(imagem.select('classification_'+ (ano)              )
                                  .blend(mask.selfMask()
                                  .multiply(imagem.select('classification_' + (parseInt(ano) + 1)))),['classification_'+ (ano)          ],true)
     }
     return imagem
  }


  var ordem_exec_5y_abs= [3];
  var ordem_exec_4y_abs = [3];
  var ordem_exec_3y_abs = [3];

  for (var i_class=0;i_class<ordem_exec_5y_abs.length; i_class++){  
     var id_class = ordem_exec_5y_abs[i_class]; 
     filtered = window5years_abs(filtered, id_class)
  }
  for (var i_class=0;i_class<ordem_exec_4y_abs.length; i_class++){  
     var id_class = ordem_exec_4y_abs[i_class]; 
     filtered = window4years_abs(filtered, id_class)
  }
  for (var i_class=0;i_class<ordem_exec_3y_abs.length; i_class++){  
     var id_class = ordem_exec_3y_abs[i_class]; 
     filtered = window3years_abs(filtered, id_class)
  }

  //**************************************************************
  //**************************************************************
  //**************************************************************
  
  //print('filtered_inv',filtered_inv);

  Map.addLayer(filtered, vis, 'filtered',false);
  
  filtered = filtered.set('version', versionOut)
  
  Export.image.toAsset({
      'image': filtered,
      'description': '0' + String(regiao) + '_RF_col' + col + '_v' + versionOut,
      'assetId': dir_filtros +  '0' + String(regiao) + '_RF_col' + col + '_v'  + versionOut,  
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': limite.geometry().bounds(),
      'scale': 30,
      'maxPixels': 1e13
  });
}