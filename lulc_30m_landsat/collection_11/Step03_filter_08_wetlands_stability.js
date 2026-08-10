/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var pampa = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-58.002325738520554, -30.3690718412503],
          [-56.72007815870479, -30.499295222564232],
          [-56.16245902390205, -31.200415614034142],
          [-55.15701247951905, -31.52056495976992],
          [-53.76394503847297, -32.62416660786271],
          [-53.58289929760831, -34.03358717080886],
          [-52.591745055671666, -33.39158320323276],
          [-51.9671866879957, -32.37302487360386],
          [-50.559119353770484, -31.32147088991393],
          [-49.71259257697394, -29.72257756616197],
          [-51.70483040130221, -29.481090891765277],
          [-53.1059501744738, -29.453420604840932],
          [-52.73163486370493, -28.69257522584727],
          [-51.92477114990625, -28.237323479340276],
          [-52.395449754990395, -27.385623119662082],
          [-53.09345232874166, -27.29073889388881],
          [-53.8796175313376, -27.426126162000646],
          [-55.18794051531749, -27.65496334385179],
          [-56.463382710195006, -28.589060140835674]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// MAPBIOMAS PAMPA
// COLLECTION 10  
// AUTHOR: Juliano Schirmbeck
// UPDATE: May 2025 

// estabiliza as áreas pantanosas recentes com alta frequencia para os anos anteriores
// há um problema de comissao em áreas de silvicultura nesse período em algum grau
// para evitar que essa comissão seja aplicada nos anos anteriores com a máscara de estabilidade de áreas umidas
// aplica-se uma remoção na máscara dos locais onde provavelmente são áreas com silvicultura recente

// ***************************************************************************************
// Define as variáveis referentes a versão da coleção ou dos filtros
var col = '11'
var version = '08'
var bioma = "PAMPA"
var versionOut = version + '_umid'
var versionIn = version + '_ext'
var bloco = '85-25'

// Define as regiões: [1,2,3,4,5,6,7]
var regioes = [2,5,6,7//,3,4//1,3,4,5,7
                ]

// ***************************************************************************************


for (var i_regiao=0;i_regiao<regioes.length; i_regiao++){
  var regiao = regioes[i_regiao];
  
  // Define o diretório dos arquivos filtrados e a imagem de entrada para passar o filtro
  var dir_filtros = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + col + '/GENERAL/classification-pam-temp/'

  var imageIn = ee.Image(dir_filtros +  '0' + String(regiao) +'_RF_col'+ col +'_' + bloco + '_v' + versionIn);

var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/Regioes_Pampa_BR_col11_buff')
  var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);

  // Define os parâmetros de visualização
  var palettes = require('users/mapbiomas/modules:Palettes.js');
  var vis = { 'bands': ['classification_2023'], 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};
  var vis2 = {'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

  Map.addLayer(imageIn, vis, 'In');
  
  //-------------------------------------------FILTRO ÁREAS ÚMIDAS-------------------------------------------------------------------

  // Última coleção usada para áreas úmidas
  var dirCol = 'projects/mapbiomas-public/assets/brazil/lulc/collection10_1/mapbiomas_brazil_collection10_1_coverage_v1'

  var imgCol = ee.Image(dirCol)
  
  var mask_reflo = imgCol.select('classification_2013','classification_2014','classification_2015','classification_2016',
                                 'classification_2017','classification_2018','classification_2019','classification_2020',
                                 'classification_2021', 'classification_2022', 'classification_2023', 'classification_2024')
                                 .eq(9).selfMask()
                                 .reduce(ee.Reducer.count())
                                 .gte(1)
                                 .unmask()
                                 .eq(0)//.multiply(11)
// valores 1 = nunca teve silvicultura  e zero   teve pelo menos 1 ano dentre os 12 anos recentes....

  var mask_umid = imageIn.select('classification_2013','classification_2014','classification_2015','classification_2016',
                               'classification_2017','classification_2018','classification_2019','classification_2020',
                               'classification_2021','classification_2022','classification_2023', 'classification_2024')
                               .eq(11)
                               .selfMask()
                               .reduce(ee.Reducer.count())
                               .gt(7)//.selfMask().multiply(11)
  print("Mas Reflo", mask_reflo)
  print("Mask Umid", mask_umid)
  
  Map.addLayer(mask_umid.selfMask(), null, 'Mask_umid');
  //Map.addLayer(mask_umid.selfMask(), {}, 'mask_umid');
  Map.addLayer(mask_reflo, {}, 'mask_reflo');
  
  var mask_umid = mask_umid.multiply(mask_reflo).selfMask().multiply(11)   //
  
  //  aplica area umida onde nunca teve silvicultura.......
  
  Map.addLayer(mask_umid, {}, 'Mask_umid x reflo');
                             

  //-------------------------------BLEND DO FILTRO DE ÁREAS ÚMIDAS------------------------------------------------------------
  
  var anos = [                            '1985','1986','1987','1988','1989','1990',
            '1991','1992','1993','1994','1995','1996','1997','1998','1999','2000',
            '2001','2002','2003','2004','2005','2006','2007','2008','2009','2010',
            '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',
            '2021','2022','2023', '2024', '2025'];
  
  // Pra cada ano faz o blend com as máscaras criadas e joga na var class_out
  for (var i_ano=0;i_ano<anos.length; i_ano++){  
    var ano = anos[i_ano]; 
    
    var blend_umid = imageIn
      .select('classification_' + ano)
      .blend(mask_umid)
      
    // Map.addLayer(blend_umid, vis, 'blend_umid');

    if (i_ano == 0){ var class_out = blend_umid }  
    else {class_out = class_out.addBands(blend_umid); } 
  }

  //class_out = class_out.addBands(imgIn.select('classification_2013','classification_2014','classification_2015','classification_2016',
  //                             'classification_2017','classification_2018','classification_2019','classification_2020',
  //                             'classification_2021','classification_2022'))
  
  for (var i_ano=0;i_ano<anos.length; i_ano++){  
    var ano = anos[i_ano]; 
    class_out = class_out.addBands(class_out.select('classification_'+ano).connectedPixelCount(20,false).rename('connect_'+ano))
  }

  print("Out com umid", class_out) 

  Map.addLayer(class_out, vis, 'Out');
  
  Export.image.toAsset({
    'image': class_out,
    'description': '0' + String(regiao) + '_RF_col' + col +'_' + bloco + '_v' + versionOut,
    'assetId': dir_filtros +  '0' + String(regiao) + '_RF_col' + col +'_' + bloco +  '_v'  + versionOut, 
    'pyramidingPolicy': {
        '.default': 'mode'
    },
    'region': limite.geometry().bounds(),
    'scale': 30,
    'maxPixels': 1e13
  });
}