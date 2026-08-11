/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = 
    /* color: #ea9999 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.72010065585982, -31.586565500650998]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.718169465369094, -31.586291319550785]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.71628119022261, -31.582507537983837]),
            {
              "reference": 22,
              "system:index": "2"
            })]),
    arocho = 
    /* color: #ff8c00 */
    /* shown: false */
    ee.FeatureCollection([]),
    agua = 
    /* color: #0000ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.035263410525246, -31.872556361201113]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.03513466449253, -31.872556361201113]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.01067291827671, -31.886550090250932]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.01153122516148, -31.888189841218985]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94048065052799, -31.100323057049284]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.943527639968906, -31.095821458594997]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94361347065738, -31.094241255083272]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.937583864791904, -31.10651470309574]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.939536512954746, -31.102950422034922]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93897861347965, -31.10370370907809]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41732275892659, -31.61999064924765]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41749442030354, -31.620483996078562]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41809523512288, -31.62239340638419]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41843855787678, -31.622905012059498]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41844928671284, -31.621388458475632]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.418148879303175, -31.621790438941442]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.42310756003626, -31.62404366715581]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.42209904944666, -31.624518721236406]),
            {
              "reference": 33,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.42229753291376, -31.62434514406508]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.42356353556879, -31.62461921313495]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.420698936340884, -31.624418229229313]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.410660887135734, -31.624570188007393]),
            {
              "reference": 33,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.412120008839835, -31.62442401786023]),
            {
              "reference": 33,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41128315962719, -31.624853392014046]),
            {
              "reference": 33,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41078963316845, -31.62702763922183]),
            {
              "reference": 33,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41046776808666, -31.624012913090244]),
            {
              "reference": 33,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.40980258025097, -31.623154155044034]),
            {
              "reference": 33,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.410864735020866, -31.624780307191624]),
            {
              "reference": 33,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41024246252941, -31.623537856427166]),
            {
              "reference": 33,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.40618805786609, -31.62360430708177]),
            {
              "reference": 33,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.405769633259766, -31.623311963523122]),
            {
              "reference": 33,
              "system:index": "30"
            })]),
    floresta = 
    /* color: #006400 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.092606562886566, -31.89714222752847]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52265255106975, -31.01897169584448]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52127926005412, -31.019891149134203]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54702846659709, -31.01569837011876]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.842400962362184, -31.994859101272215]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85323708678235, -31.991747163430517]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85450308943738, -31.99189275352014]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.854867869863405, -31.992056542094726]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84823744917859, -31.993858197111166]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5676078994751, -30.483127957743957]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.566492100524904, -30.483275891729086]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56477548675537, -30.48246225202853]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56426050262451, -30.483349858637336]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.57009698944092, -30.48601262989796]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.568938275146486, -30.485568839746886]),
            {
              "reference": 3,
              "system:index": "14"
            })]),
    aumi = 
    /* color: #45c2a5 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.05632638107988, -31.83894793020483]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51658608011333, -30.285251274887298]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.519161000767625, -30.28651125544127]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.522422566929734, -30.267090934723793]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51761604837505, -30.289846419971358]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.521650090733445, -30.267461587498474]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.519927696065835, -30.28929549879957]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51188106902116, -30.289591954046266]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51857586272233, -30.28299561300648]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51681633360856, -30.288906399928596]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5142843282985, -30.291518891310538]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56346478416453, -30.367264975914377]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.565825128097636, -30.36767227726274]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56550326301585, -30.36569129567416]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74270944774394, -31.20625185343914]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73927622020488, -31.204122891590483]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.524128991956175, -30.26253472896205]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5214682406134, -30.26420273282841]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52030952631897, -30.26490699262024]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.521124917859495, -30.2656483132598]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52357109248108, -30.265944839948443]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51906498133606, -30.26646375949867]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.519107896680296, -30.267983436689956]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5194512194342, -30.26831702121761]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.519622880811156, -30.26894712223281]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52029879748291, -30.277416028652507]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51970871149963, -30.276054010956713]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.038129956523775, -30.820746727844398]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.038644940654635, -30.8231053932983]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.035640866557955, -30.82262629406661]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.039117009441256, -30.820378181134114]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52364168541216, -30.26948311323644]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56758040740966, -30.290740004697945]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56758040740966, -30.291036455578926]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.567387288360585, -30.292203722213102]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56573504760741, -30.29224077806922]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.566679185180654, -30.292629863713273]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.565670674591054, -30.290128571926257]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56532735183715, -30.288108963867806]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56760186508178, -30.29368594553793]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04530632814757, -30.818569361672953]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04592860063902, -30.819804010838702]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.046658161491074, -30.821978428985226]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04878247103087, -30.82179415817032]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04880392870299, -30.81954602575762]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.047409180015244, -30.819490743150084]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04616463503233, -30.821172241559488]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04571402391783, -30.820803696482177]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.045370701163925, -30.823143933698468]),
            {
              "reference": 11,
              "system:index": "48"
            })]),
    campo = 
    /* color: #b8af4f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.093100089345306, -31.898763572677744]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08992435387167, -31.898399227940704]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.09031059196982, -31.901496112239574]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08943082741293, -31.901350378844043]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.09642602852377, -31.89985659823654]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.09700538567099, -31.898399227940704]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.09992362907919, -31.89506540663481]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.152103542662225, -31.811895116925708]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.154120563841424, -31.818021662331176]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.154335140562615, -31.81929797480112]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15279018817004, -31.821558827873066]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.212986972582435, -31.691909442794284]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.08733976365704, -30.894913982777425]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.08562314988751, -30.899701257005763]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.08811223985333, -30.899922202345127]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07408544918594, -30.8896832232487]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.066466429799, -30.893332228621063]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.065618851750294, -30.8920893189132]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05712505567837, -30.883559762965973]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05493637312222, -30.8785875200786]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11297013768152, -30.92369778321441]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11198308476404, -30.928152298385257]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51591484202434, -31.01010106945443]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51791040553142, -31.0118481857365]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.516451283827315, -31.014680285147655]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53574173106242, -31.009714860480667]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51029293192912, -31.010744747599986]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.508705064192306, -31.01164588970111]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84505833627204, -31.984302116538128]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41823802514502, -31.631025081980294]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.40863571687171, -31.62637525424477]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41364638791924, -31.619614762058923]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.40845363126641, -31.618189517432555]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41665046201592, -31.638652474783513]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.96352608505462, -30.917031710244004]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.976786926424246, -30.91099343364548]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.98618538681243, -30.915117175994965]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.50683441962328, -30.768499640758606]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51618996466723, -30.76824151796506]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.517949493780996, -30.76942150222664]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.506233604803946, -30.77580054157894]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5492370671699, -30.77640369306257]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.554816061920874, -30.773158936986373]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54647975630259, -30.781846709962107]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.546844536728614, -30.78197575319587]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54811053938364, -30.78219696976527]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56291073279369, -30.475094470142853]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56986301856029, -30.471839597013734]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.57059257941234, -30.47272730047548]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56321114020336, -30.48079023630335]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56565731482494, -30.478275263759162]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.690184290718655, -30.812046065717045]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6901199177023, -30.810534878338615]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68854277880154, -30.80885780110394]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.689894612145046, -30.80953969318146]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69182580263577, -30.80961341095403]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.694894249748806, -30.808710364342772]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68708339764486, -30.80614327554156]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68847278191458, -30.80444769122866]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.687775407570705, -30.805138829750934]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.688343329790634, -30.810971728089807]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.688793940905136, -30.811395598191588]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.688815398577255, -30.81066764621256]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.97881757943725, -30.91105048718625]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.97946130960082, -30.91256009116035]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.97019159524535, -30.916241952189008]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.96332514016723, -30.920439100931308]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.950665113616935, -30.925077840556263]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.953154203582756, -30.922206266363]),
            {
              "reference": 12,
              "system:index": "68"
            })]),
    agric = 
    /* color: #ffefc3 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.02879062208024, -31.84530483097681]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.02947726758805, -31.8428987336685]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.02827563794938, -31.8469453158869]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.026859431589514, -31.846835951133908]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.09832967727521, -31.7893268321179]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.09837259261945, -31.791661372209475]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.098930492094546, -31.795017170299975]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05551690273578, -31.884170656978696]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05433673076923, -31.884844797771454]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0506030958205, -31.881656250501326]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05476588421161, -31.880399021524]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05006665401752, -31.884881237673742]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05165452175434, -31.88806967330167]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.04925126247699, -31.887523092176433]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.13895990545159, -31.501131480273315]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.14260770971185, -31.49425213738099]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.148615857905206, -31.499704424152206]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.12205125982171, -31.49750791209548]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.12805940801507, -31.499813199927747]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.114712735956964, -31.50808249495317]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.11282446081048, -31.509143546227275]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.12029173070794, -31.51013141072351]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.13857366735345, -31.510460696568625]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.14604093725091, -31.513497389120687]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15252115423089, -31.505704232825583]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.138144513911065, -31.495848914916]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.066746320367244, -30.897153691478696]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06309851610699, -30.89822161764508]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06116732561627, -30.901462148267555]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05966528856793, -30.91007848012446]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05567416155377, -30.907979701517743]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.815676062469315, -31.267913695108017]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.818680136565995, -31.272718898330048]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82078298843367, -31.276240113232546]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82322916305525, -31.279724519412863]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.841897337798905, -31.27022462491534]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.84305605209334, -31.272865618241912]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83468755996687, -31.270481391399933]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.829881041412186, -31.268390558274515]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56128641249115, -31.394749249122384]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55750986219818, -31.402368494755795]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53622385145599, -31.383026125283102]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.518714391006775, -31.3557642066161]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.48918863417084, -31.407642994819984]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.48232217909271, -31.397093698262307]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.212813817276306, -31.290655412896207]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.31890054823334, -31.38595704344311]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22036691786224, -31.291828942570103]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.762130223526306, -31.376870899454577]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70204874159271, -31.397093698262307]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65020700575287, -31.370128998913838]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59115549208099, -31.452464273073623]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.61862131239349, -31.444556192895224]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.44936319471771, -31.478526920988717]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05296139668808, -31.6657007129717]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.98861088654354, -31.691589529044073]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.01312210396533, -31.68899684536221]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.01170589760547, -31.683701702981796]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.00419571236377, -31.683080873401796]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.10916826513477, -31.676834755477234]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.09243128088184, -31.715905034092533]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08925554540821, -31.707143038457474]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.070329878599125, -31.71316699939548]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06998655584522, -31.716160579872046]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0605451801128, -31.70710652841033]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05754110601612, -31.70747162823503]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08985636022754, -31.710173322266535]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.03406641271778, -31.710538410017797]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.297967433214914, -31.377835529563978]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2833762161739, -31.37461123580571]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28389120030476, -31.376369955209196]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2822604172237, -31.37776225138922]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.328721732081775, -31.39619788834435]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.30717822927416, -31.396710733682976]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92237011931209, -31.095535066081283]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.91687695524959, -31.09362411321228]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.820572024670675, -31.09303625059862]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.815593844739034, -31.094359230249893]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81078732618435, -31.089508214795288]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83945477613552, -31.07274825591663]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.48037781223465, -31.082987621068188]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.47642960056473, -31.080635363032716]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.48535599216629, -31.078577089499255]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5490423630159, -31.1284041829418]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54457916721512, -31.128991957166917]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.676263598536956, -31.21476744151339]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67523363027524, -31.215391382303995]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.669568804835784, -31.213886576917165]),
            {
              "reference": 21,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.670255450343596, -31.221410364350206]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.896381888323745, -31.15577423057177]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.89209035389992, -31.14695972454123]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.99363269836426, -30.932015915938504]),
            {
              "reference": 21,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.99037113220215, -30.92855554129001]),
            {
              "reference": 21,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.99243106872559, -30.923254298980577]),
            {
              "reference": 21,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75234963565179, -31.14475603654372]),
            {
              "reference": 21,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7475431170971, -31.139319889586424]),
            {
              "reference": 21,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75063302188226, -31.140642224286587]),
            {
              "reference": 21,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.9616323831667, -31.826087122094346]),
            {
              "reference": 21,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.96695388585225, -31.822951239036794]),
            {
              "reference": 21,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.948543203174026, -31.822440736364687]),
            {
              "reference": 21,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.94815696507588, -31.823133560735595]),
            {
              "reference": 21,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.96210445195332, -31.826852844799543]),
            {
              "reference": 21,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95463718205586, -31.829332284262073]),
            {
              "reference": 21,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93815768986836, -31.831811657123843]),
            {
              "reference": 21,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.939359319507034, -31.831045975554137]),
            {
              "reference": 21,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.94150508671895, -31.840926425950748]),
            {
              "reference": 21,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.92601264744893, -31.843040923647955]),
            {
              "reference": 21,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.98212421722411, -31.864960879828633]),
            {
              "reference": 21,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.981008418273916, -31.865908517085575]),
            {
              "reference": 21,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.98083675689696, -31.861097334801652]),
            {
              "reference": 21,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.979806788635244, -31.861972113894403]),
            {
              "reference": 21,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.99439800567626, -31.858181344542682]),
            {
              "reference": 21,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.96251190490722, -31.851109685172876]),
            {
              "reference": 21,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.97667396850585, -31.853552020590264]),
            {
              "reference": 21,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.79766654232789, -31.88598594519476]),
            {
              "reference": 21,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.797022812164315, -31.88693336622979]),
            {
              "reference": 21,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.79959773281861, -31.883908872667792]),
            {
              "reference": 21,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.802000992095955, -31.885694429069368]),
            {
              "reference": 21,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.80071353176881, -31.887079122447048]),
            {
              "reference": 21,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.798267357147225, -31.88948406672671]),
            {
              "reference": 21,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.248955540032654, -31.7935142949646]),
            {
              "reference": 21,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.246895603509216, -31.7935142949646]),
            {
              "reference": 21,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24483566698578, -31.794061433302343]),
            {
              "reference": 21,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24509315905121, -31.795411027354593]),
            {
              "reference": 21,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24633770403412, -31.794608568401337]),
            {
              "reference": 21,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.97531636845704, -31.612501759833773]),
            {
              "reference": 21,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.97776254307862, -31.613488530275415]),
            {
              "reference": 21,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.976131759997564, -31.613525077127914]),
            {
              "reference": 21,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.97574552189942, -31.61491384689038]),
            {
              "reference": 21,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.03197703834815, -31.621397710281148]),
            {
              "reference": 21,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.03073249336524, -31.622274756244163]),
            {
              "reference": 21,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.02948794838233, -31.62351722387467]),
            {
              "reference": 21,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.02884421821876, -31.62318833699879]),
            {
              "reference": 21,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.99914680000587, -31.632689045093702]),
            {
              "reference": 21,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.99854598518653, -31.6325428877026]),
            {
              "reference": 21,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.041675906146004, -31.629838934542445]),
            {
              "reference": 21,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.04219089027686, -31.627938812327297]),
            {
              "reference": 21,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.789708481987674, -31.177992929958524]),
            {
              "reference": 21,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.78507362480994, -31.177038288660412]),
            {
              "reference": 21,
              "system:index": "138"
            })]),
    geom_limite = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-54.66864130560269, -30.205264512163527],
          [-54.72082636419644, -30.32150579532849],
          [-54.85540888372769, -30.447081062382164],
          [-55.13006708685269, -30.754410885813872],
          [-55.12457392279019, -30.85113543176813],
          [-55.18225214544644, -30.952473561908217],
          [-55.09985468450894, -31.241754178708785],
          [-54.87188837591519, -31.480975667548215],
          [-54.77026484075894, -31.452863576116005],
          [-54.61370966497769, -31.476290905224626],
          [-54.51483271185269, -31.569941565855707],
          [-54.48187372747769, -31.658822659679622],
          [-54.23193476263394, -31.847996074924524],
          [-54.09460566107144, -31.95059473274715],
          [-54.02868769232144, -31.919127760890696],
          [-53.975129342712066, -31.96690669895937],
          [-53.89959833685269, -32.01466078537585],
          [-53.862519479430816, -32.0623899999106],
          [-53.77325556341519, -32.10078811751355],
          [-53.72656366888394, -32.17172396660816],
          [-53.65789911810269, -32.08682703211134],
          [-53.56451532904019, -32.03328978060587],
          [-53.52331659857144, -31.993698638260202],
          [-53.52606318060269, -31.958751078007218],
          [-53.59198114935269, -31.942437663280113],
          [-53.64965937200894, -31.962246432826223],
          [-53.68811152044644, -31.90747059378258],
          [-53.730683541930816, -31.88181962793702],
          [-53.54528925482144, -31.575791613787633],
          [-53.58923456732144, -31.55472972350657],
          [-53.631806588805816, -31.585150926908007],
          [-53.758149362243316, -31.51961600555351],
          [-53.69143121092605, -31.446936946558505],
          [-53.9248906835823, -31.278076663030046],
          [-54.08144585936355, -31.282771320339478],
          [-54.2764531835823, -31.202930377591752],
          [-54.5126592382698, -30.934736776805643],
          [-54.5126592382698, -30.807434135199067],
          [-54.4302617773323, -30.82158722054178],
          [-54.3863164648323, -30.78148139727577],
          [-54.3094121679573, -30.828662981165937],
          [-54.26821343748855, -30.809793127562582],
          [-54.3203984960823, -30.64216089488993],
          [-54.2215215429573, -30.519203303107382],
          [-54.19680230467605, -30.410303286529906],
          [-54.5346318945198, -30.139896997130435]]]),
    remover_SS = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.MultiPoint();
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Coleção 3 embeddings 
// Script para fazer ajuste fino da classificação das regiões
//
// Baseado na versao R0X feita pelo Juliano
// versão original usada na Col2 Sentinel 
// ajustada por JS para embeddings e outras funcionalidades por EVM e MV em setembro 2025
// =================================================================================================================
//                                DEFINITIONS:
// =================================================================================================================

// Região e coleção do Sentinel
// -----------------------------------------------------------------------
var regiao = 2;
var collection_out = 4;
var version_out = '01'; // mudar a cada nova versao que for exportada
var bioma = 'PAMPA';

//Parâmetros do classificador
// -----------------------------------------------------------------------
var nSamplesMin = 60;
var nSamplesMax = 1000;
var Quantidade_amostras = 0; //1 // quantidade final de amostra SS + complementares por classe
var RFtrees = 100; //60, 100

// Ativação de funcionalidades
// -----------------------------------------------------------------------
var exporta_colecao = 1; //ativar a geometria do bioma antes de dar o Run (0/1)
var debug = 1; //variavel para uso de debug, habilita os prints e os addLayers
var debug_SS = 0; //1
var calc_area = 1; //ativa os gráficos comparados
//ATENÇÂO: três definiões de anos 1. Ano de comparação entre class. e mapa ref, 2. anos de classficação
// 3. anos da classificação para calcular área a ser inserida no gráfico 

// Comparação com mapas de referencia
// Define ano de comparação e classe - imagem de diferença
// -----------------------------------------------------------------------
var ano_compara = 2025; // lembrar de ajustar este ano no cálculo do gráfico de área
// Define as classes a serem comparadas
var classes_list = [3 //3,11, 12, 21, 22, 33, 29
];

// Define a versão do s2 anterior para plotar nos gráficos
var versao_ante = "1"; // verificar pois correponde a uma tabela de áreas exportadas anteriomente

// Define os parâmetros de visualização
// ----------------------------------------------------------------------
var palettes = require('users/mapbiomas/modules:Palettes.js');
// Vis coll 08
var vis = { 'min': 0, 'max': 75,  'palette': palettes.get('brazil')};

var visParMedian2 = {'bands':['nir_median','swir1_median','red_median'], 'gain':[0.06, 0.08,0.2],'gamma':0.5 };
// Parâmetros de visualização da imagem de diferença
var vischange = {"min": 0, "max": 3,
        "palette": "ffffff,ff0000,e6f919,aaaaaa",    //amarelo=e6f919    magenta=bb34c0
        "format": "png"
}

var visParamsEmb = {min: -0.3, max: 0.3, bands: ['A01', 'A16', 'A09']};

// =================================================================================================================
//                                ASSETS:
// =================================================================================================================
// Local dos mosaicos e das amostras
//Embeddings
var dirasset = ee.ImageCollection('GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL')

var cluster_evi_80 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_2024/PAMPA/S2_clusters_2017_2025_evi_median_80')

var cluster_ndvi_20 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_2024/PAMPA/S2_clusters_2017_2025_ndvi_median_20')
  
//Mosaico
// Asset contendo os mosaicos de Sentinel-2 2017 - 2023
var asset_s2 = ee.ImageCollection('projects/mapbiomas-mosaics/assets/SENTINEL/BRAZIL/mosaics-3')
  
// Asset contendo os mosaicos de Sentinel-2 2024
var asset_s2_2024 = ee.ImageCollection('projects/nexgenmap/MapBiomas2/SENTINEL/mosaics-3')
  
//var c24 = asset_s2_2024.filter(ee.Filter.eq('year', 2024));

// Junção dos mosaicos Sentinel-2
var s2_all = asset_s2.merge(asset_s2_2024)
  .filter(ee.Filter.eq('version', "3"))
  .filter(ee.Filter.eq('biome', "PAMPA"));

//amostras
var dirsamples = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/SAMPLES/';
//pontos estaveis com propriedades
var versao_pt = 'mosaic_and_embedding_S2_embed_v1';

// Variáveis para usar ao exportar o asset
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-4/GENERAL/classification-pam/'

// Limites do PAMPA com buffer
// ----------------------------------------------------------------------
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff');
var limite = regioesCollection.filter(ee.Filter.eq('ID', regiao));

// Limite sem o buffer
var regioesCollection2 = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col05');
var limite2 = regioesCollection2.filter(ee.Filter.eq('ID', regiao));

// Raster limite do PAMPA
var limite_reg_raster = ee.Image().uint32().paint({
  featureCollection: limite,
  color: 'ID',
}).rename(['limite']);
var mask_regiao = limite_reg_raster.eq(regiao).selfMask();

Map.centerObject(limite2, 7);

if (exporta_colecao == 1) {
  debug = 0;
  limite = geom_limite; // aqui usa o limite simplificado
  var anos = [
    2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025
  ];
} else {
  var anos = [ano_compara]; //[ano_compara]//[2017,2024]
  limite = geom_limite; //limite.geometry() //aqui usa o limite da regiao com buffer
}

// =================================================================================================================
//                                CLASSIFICATION:
// =================================================================================================================

for (var i_ano = 0; i_ano < anos.length; i_ano++) {
  var ano = anos[i_ano];
  var anoStr = String(ano); // Converte o ano para string uma vez

  // Define o percentual de cada classe x ano
 if (ano <= 2019){
  // Define o percentual de cada classe
  //var percent_Flo =  -53.06	   + 4 + ano * 	 0.02969
  var percent_Flo =  11
  var percent_Umi = 7
  //var percent_Cam = 1286.55	   + -8 + ano * -0.61389
  var percent_Cam = 40
  //var percent_Agr =-1062.50	   + 10 + ano *  0.54669
  var percent_Agr = 50
  var percent_Anv = 14 //260 amostras
  var percent_Agu =  13
  }
  
  if (ano > 2019 && ano <= 2021){ 
  //var percent_Flo =  -53.06	   + 5 + ano * 	 0.02969
  var percent_Flo =  11
  var percent_Umi = 9
  //var percent_Cam = 1286.55	   + -11 + ano * -0.61389
  var percent_Cam = 36
  //var percent_Agr =-1062.50	   + 13 + ano *  0.54669
  var percent_Agr = 53
  var percent_Anv = 9 //260 amostras
  var percent_Agu =  13 
  }
  
  if (ano > 2021){
  //var percent_Flo =  -53.06	   + 5 + ano * 	 0.02969
  var percent_Flo =  11
  var percent_Umi = 9
  //var percent_Cam = 1286.55	   + -18 + ano * -0.61389
  var percent_Cam = 35
  //var percent_Agr =-1062.50	   + 18 + ano *  0.54669
  var percent_Agr = 54
  var percent_Anv = 13 //260 amostras
  var percent_Agu =  13
  }

  //nome das bandas dos mosaicos 
  // var bandNames_selected = ee.List([
  //   'longitude', 'ana_slope', /*'evi_median_'+anoStr,*/ 'latitude', 'blue_median', 'evi_median',
  //   /*'ndvi_median_'+anoStr,*/ 'gcvi_median_wet', 'gvmi_median_dry', 'hand', 'ndvi_median_dry',
  //   'red_edge_3_median_wet', 'brba_median', 'evi_median_dry', 'gemi_median', 'swir1_stdDev',
  //   'ui_median', 'brba_median_dry', 'evi_median_wet', 'gcvi_median_dry', 'mbi_median_dry',
  //   'mbi_median_wet', 'msi_median_dry', 'ratio_median_wet', 'red_edge_1_median_dry',
  //   'red_edge_4_stdDev', 'rvi_median', 'wetness_median', 'bsi_median', 'cvi_median',
  //   'green_median_texture', 'green_min', 'gvmi_median_1', 'gvmi_median_dry_1', 'nddi_median',
  //   'osavi_median_wet', 'ratio_median', 'red_median_dry', 'ri_median', 'shape_median',
  //   'spri_median', 'swir2_stdDev', 'wetness_median_dry', 'avi_median_dry', 'brba_median_wet',
  //   'brightness_median', 'dswi5_median_wet', 'gemi_median_dry', 'gli_median_wet', 'gvmi_median_wet_1',
  //   'iia_median', 'iia_median_dry', 'iia_median_wet', 'lai_median', 'lswi_median_dry', 'lswi_median_wet',
  //   'mbi_median', 'nddi_median_dry', 'ndvi_median', 'ndwi_median_wet', 'nir_median_wet', 'ratio_median_dry',
  //   'red_edge_1_median_wet', 'red_edge_1_stdDev', 'red_edge_4_median_dry', 'rvi_median_1', 'shape_median_wet',
  //   'swir1_median_dry', 'swir1_median_wet', 'swir2_median_wet', 'ui_median_dry'
  //   ]);

    //   // 20 mais importantes
    //   var bandNames_selected = ee.List([
    //   'lswi_median_dry', 'spri_median_wet', 'dswi5_median', 'swir1_median_wet', 'brightness_median_wet',
    // 'shape_median_dry', 'ri_median_dry', 'gvmi_median_dry_1', 'green_stdDev', 'red_edge_3_median',
    // 'evi_median_wet', 'shape_median', 'nddi_median_wet', 'red_median_dry', 'gvmi_median_dry',
    // 'rvi_median_1', 'hand', 'swir2_median_dry', 'iia_median_wet', 'latitude'
    //     ]);

  // 40 mais importantes
  var bandNames_selected = ee.List([
  'lswi_median_dry', 'spri_median_wet', 'dswi5_median', 'swir1_median_wet', 'brightness_median_wet',
    'shape_median_dry', 'ri_median_dry', 'gvmi_median_dry_1', 'green_stdDev', 'red_edge_3_median',
    'evi_median_wet', 'shape_median', 'nddi_median_wet', 'red_median_dry', 'gvmi_median_dry',
    'rvi_median_1', 'hand', 'swir2_median_dry', 'iia_median_wet', 'latitude',
    'gcvi_median_wet', /*'evi_median_cluster',*/ 'red_edge_1_stdDev', 'green_median', 'green_median_dry',
    'wetness_median_wet', 'red_edge_4_median_dry', 'red_edge_1_median_wet', 'rvi_median', 'gli_median_dry',
    'afvi_median_wet', /*'ndvi_median_cluster',*/ 'ui_median_wet', 'avi_median_dry', 'msi_median',
    'evi_median_dry', 'gvmi_median_wet_1', 'evi_median', 'co2flux_median', 'nir_median'

    ]);


  // Sequência das bandas dos embeddings 
  var bands_sequence = ee.List.sequence(0, 63, 1);
  var bandNames = bands_sequence.map(function(index) {
    return ee.String('A').cat(ee.Number(index).format('%02.0f'));
  });

  // Bandas dos clusters 
  var bandNames_clusters = ee.List([
    //'clusters_evi_80_' + anoStr,   
    'evi_median_cluster_' + anoStr,
    //'clusters_ndvi_20_' + anoStr,  
    'ndvi_median_cluster_' + anoStr
  ]);

  // Mosaicos + embeddings + clusters 
  var bandNames_all = bandNames_selected
    .cat(bandNames)
    .cat(bandNames_clusters);
    
    print(bandNames_all.size())

  // Mosaico sentinel-2 e indices
  // Seleciona mosaico S2 do ano
  var mosaic_s2_col = s2_all
    .filter(ee.Filter.eq('year', ano))
    .filter(ee.Filter.eq('version', "3"))
    .filter(ee.Filter.eq('biome', "PAMPA"))
    .filterBounds(limite);

  var mosaicoS2 = mosaic_s2_col.mosaic();
  //print(mosaicoS2.bandNames().size())

  // Adiciona índices calculadas Caatinga + variáveis
  var addIndexComplem = require('users/schirmbeckj/MB-Sentinel-Coll03:Coll03/1. Samples/CalculateIndices.js')
  var mosaico138 = addIndexComplem.getIndices(mosaicoS2);
  
  //mosaicos e clusters
var mosaicoWithClusters = mosaico138
  .addBands(cluster_evi_80.select(['clusters_' + anoStr]).rename(['clusters_evi_80_' + anoStr]))
  .addBands(cluster_evi_80.select(['evi_median_' + anoStr]).rename(['evi_median_cluster_' + anoStr]))
  .addBands(cluster_ndvi_20.select(['clusters_' + anoStr]).rename(['clusters_ndvi_20_' + anoStr]))
  .addBands(cluster_ndvi_20.select(['ndvi_median_' + anoStr]).rename(['ndvi_median_cluster_' + anoStr]));

  // adiconado os embeddings ao mosaico
  var mosaicoEmb = dirasset
  .filterDate(anoStr + '-01-01', anoStr + '-12-31')
  .filterBounds(limite)
  .mosaic();

  // Mosaico Total
  var mosaicoTotal = mosaicoWithClusters.addBands(
    mosaicoEmb.select(bandNames)
  );

  mosaicoTotal = ee.Image(mosaicoTotal);

  // seleciona apenas as bandas desejadas
  mosaicoTotal = mosaicoTotal.select(bandNames_all);
  print('Bandas após select final:', mosaicoTotal.bandNames());

  // Importa e seleciona as amostras estáveis
  var SS_amostras = ee.FeatureCollection(dirsamples + 'pontos_train_' + versao_pt + '_'+ String(ano))
      .filter(ee.Filter.eq('ID', regiao))
      //.filterBounds(limite) 
  
  // permite remover amostras estáveis dentro de polígono digitalizados em tela
  var SS_amostrasF = SS_amostras.filter(ee.Filter.bounds(remover_SS).not())

  // Filtra cada classe
  var SS_Flo = SS_amostrasF.filter(ee.Filter.eq('reference', 3))
  var SS_Umi = SS_amostrasF.filter(ee.Filter.eq('reference', 11))
  var SS_Cam = SS_amostrasF.filter(ee.Filter.eq('reference', 12))
  var SS_Agr = SS_amostrasF.filter(ee.Filter.eq('reference', 21))
  var SS_Anv = SS_amostrasF.filter(ee.Filter.eq('reference', 22))
  var SS_Afr = SS_amostrasF.filter(ee.Filter.eq('reference', 29))
  var SS_Agu = SS_amostrasF.filter(ee.Filter.eq('reference', 33))

  var n_samples_Flo = ee.Number(SS_Flo.size().multiply(percent_Flo).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Umi = ee.Number(SS_Umi.size().multiply(percent_Umi).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Cam = ee.Number(SS_Cam.size().multiply(percent_Cam).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Agr = ee.Number(SS_Agr.size().multiply(percent_Agr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Anv = ee.Number(SS_Anv.size().multiply(percent_Anv).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
//  var n_samples_Afr = ee.Number(SS_Afr.size().multiply(percent_Afr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Agu = ee.Number(SS_Agu.size().multiply(percent_Agu).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  
  // Seleciona a quantidade de amostras
  var SS_Flo_samples = SS_Flo.randomColumn().sort('random').limit(n_samples_Flo)
  var SS_Umi_samples = SS_Umi.randomColumn().sort('random').limit(n_samples_Umi)
  var SS_Cam_samples = SS_Cam.randomColumn().sort('random').limit(n_samples_Cam)
  var SS_Agr_samples = SS_Agr.randomColumn().sort('random').limit(n_samples_Agr)
  var SS_Anv_samples = SS_Anv.randomColumn().sort('random').limit(n_samples_Anv)
//  var SS_Afr_samples = SS_Afr.randomColumn().sort('random').limit(n_samples_Afr)
  var SS_Agu_samples = SS_Agu.randomColumn().sort('random').limit(n_samples_Agu)

  //print('SS_Flo_samples',SS_Flo_samples)
  // print('SS_Flo',SS_Flo)
  // Map.addLayer(SS_Flo,{color:'0000ff'},'todos')
  // Map.addLayer(SS_Flo_samples,{color:'ff0000'},'selecao')
  
  // Cria variavel com todas as amostras estáveis
  var SS_amostrasClas = SS_Flo_samples
          .merge(SS_Umi_samples)
          .merge(SS_Cam_samples)
          .merge(SS_Agr_samples)
          .merge(SS_Anv_samples)
//          .merge(SS_Afr_samples)
          .merge(SS_Agu_samples)
  
  // print('SS_Flo_samples',SS_Flo_samples.size())
  // print('SS_Umi_samples',SS_Umi_samples.size())
  // print('SS_Cam_samples',SS_Cam_samples.size())
  // print('SS_Agr_samples',SS_Agr_samples.size())
  // print('SS_Anv_samples',SS_Anv_samples.size())
  // print('SS_Afr_samples',SS_Afr_samples.size())
  // print('SS_Agu_samples',SS_Agu_samples.size())

  // Amostras complementares
  var pontos_complementares = floresta
              .merge(aumi)
              .merge(campo)
              .merge(agric)
              .merge(anv)
//              .merge(arocho)
              .merge(agua)
              
  // Samples
  var trainingComp = mosaicoTotal.sampleRegions({
      'collection': pontos_complementares,
      'properties': ['reference'],
      'scale': 10
  });
  var complementares = trainingComp//.map(function (feature) {return feature.set('comp_coll', '7')});
  
  // Faz o merge das amostras estáveis com as complementares
  var training = SS_amostrasClas.merge(complementares)
  
  if (debug_SS == 1){
     // Verifica amostras ao longo do processo
  print('SS_amostras',SS_amostras.size())
  print('SS_amostrasF',SS_amostrasF.size())
  print('SS_amostrasClas',SS_amostrasClas.size())
  print('Training',training.size())
  
// Verificar quantas amostras de cada classe são usadas na classificação  
  var SS_03 = training.filter(ee.Filter.eq('reference', 3))
  var SS_11 = training.filter(ee.Filter.eq('reference', 11))
  var SS_12 = training.filter(ee.Filter.eq('reference', 12))
  var SS_21 = training.filter(ee.Filter.eq('reference', 21))
  var SS_22 = training.filter(ee.Filter.eq('reference', 22))
  var SS_29 = training.filter(ee.Filter.eq('reference', 29))
  var SS_33 = training.filter(ee.Filter.eq('reference', 33))          
 
  var dict = ee.Dictionary();
  if (Quantidade_amostras == 1){
        dict = dict.set('03-Floresta', SS_03.size());
        dict = dict.set('11-Área Pantanosa',SS_11.size());
        dict = dict.set('12 - F. Campestre', SS_12.size());
        dict = dict.set('21 - Mosaico de Usos', SS_21.size());
        dict = dict.set('22 - ANV',SS_22.size());
        dict = dict.set('29 - Afl.Rochoso',SS_29.size());
        dict = dict.set('33 - Água',SS_33.size());
 print('N_amostras_classe', dict )
  }
} //fecha o debug

    // Classificador sem informações de importância e arvores 
var classifier = ee.Classifier.smileRandomForest({numberOfTrees: RFtrees, variablesPerSplit:1}).train(training, 'reference', bandNames_all);
  
  // testar o Gradient Tree Booster
  
  // Classifica o mosaico
  var classified = mosaicoTotal.classify(classifier)//.mask(mosaicoTotal.select('red_m'));
  classified = classified.select(['classification'],['classification_'+ano]).updateMask(mask_regiao).toInt8()
  // if (debug == 1){print('classified',classified)}
  
  if (i_ano === 0){ var classified16a23 = classified }  
  else {classified16a23 = classified16a23.addBands(classified);
  }
  
  // // ==============================================================================================================
  //                                        VERIFICA A IMPORTÂNCIA DAS BANDAS:
  
  // Classificador com informações de importância e arvores 
  // Código para obter a importância ordenada de cada variável
  var exp = classifier.explain()
  // print('Explain', exp)
  var importance = ee.Dictionary(exp.get('importance'))
  var keys = importance.keys().sort(importance.values()).reverse()
  // print("keys", keys)
  var values = importance.values(keys);
  // print("values", values)
  var rows = keys.zip(values)
  // print("rows", rows)
  var map_teste = rows.map(function(list) {
    return {c: ee.List(list).map(function(n) { return {v: n}; })}
  })
  // Definições para gerar o gráfico
  var dataTable = {
    cols: [{id: 'band', label: 'Band', type: 'string'},
          {id: 'importance', label: 'Importance', type: 'number'}],
    rows: map_teste.slice(0,50)
  };
  // Gera o gráfico de importância das variáveis
  ee.Dictionary(dataTable).evaluate(function(result) {
    var chart = ui.Chart(result)
      .setChartType('ColumnChart')
      .setOptions({
        title: 'Random Forest Band Importance',
        legend: {position: 'none'},
        hAxis: {title: 'Bands'},
        vAxis: {title: 'Importance'}
      });
    print(chart);
  })

} //finaliza o loop dos anos

// =================================================================================================================
//                                   PRINTA E EXPORTA A COLEÇÃO
// =================================================================================================================

//adiciona metadados para na exportação do raster
classified16a23 = classified16a23
    .set('collection', collection_out)
    .set('version', version_out)
    .set('biome', bioma)

// Exporta a coleção
Export.image.toAsset({
  'image': classified16a23.toInt8(),
  'description': regiao+'-'+'Emb_RF17a25_v'+version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'Emb_RF17a25_v'+version_out,
  'scale': 10,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'maxPixels': 1e13,
  'region': limite // cria espaço para armazenar a imagem delimitado por esta geometria
});      

//classified16a23 = classified16a23.mask(limite_reg_raster.eq(regiao))

if (debug == 1){
// =================================================================================================================
//                                    PLOTA CAMADAS DE APOIO
// =================================================================================================================

// Classes Mapbiomas BR e PAMPA
var class_in =  [3,49,11,12,29,50,15,19,39,20,40,62,41,36,46,47,48,9,21,22,23,24,30,25,33,31,75]
var class_out = [3, 3,11,12,29,12,21,21,21,21,21,21,21,21,21,21,21,3,21,22,22,22,22,22,33,33,22]

// Carrega a coleção Landsat e reclassificada para as classes do PAMPA
var colLandsat = ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_coverage_v2')
  .mask(mask_regiao)
  .select('classification_'+ano_compara)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)

// ---------------------------------------------------------------------------------
// Mosaicos

var mosaico_sentinel = ee.ImageCollection('projects/mapbiomas-mosaics/assets/SENTINEL/BRAZIL/mosaics-3')
    .filter(ee.Filter.eq('version', "3"))
    .filter(ee.Filter.eq('biome', "PAMPA"));
                      
var mosaico_firstY = mosaico_sentinel.filter(ee.Filter.eq('year', 2017))
                  .filterBounds(limite)
                  .mosaic()
var mosaicoComp = mosaico_sentinel.filter(ee.Filter.eq('year', ano_compara))
                  .filterBounds(limite)
                  .mosaic()
var mosaico_lastY = mosaico_sentinel.filter(ee.Filter.eq('year', 2023))
                  .filterBounds(limite)
                  .mosaic()
                  
                      
var embedding_firstY= dirasset.filterDate('2017-01-01', '2017-12-31')
                  .filterBounds(limite)
                  .mosaic()
var embeddingComp = dirasset.filterDate(ano_compara+'-01-01', ano_compara+'-12-31')
                  .filterBounds(limite)
                  .mosaic()
var embedding_lastY = dirasset.filterDate('2023-01-01', '2023-12-31')
                  .filterBounds(limite)
                  .mosaic()                  
                  
// --------------------------------------------------------------------------------- 

// Adiciona os layers no mapa
Map.addLayer(mosaico_firstY, visParMedian2, 'Img_Year_2017', false);  
Map.addLayer(mosaicoComp, visParMedian2, 'Img_Year_'+ano_compara, false); 
Map.addLayer(mosaico_lastY, visParMedian2, 'Img_Year_2024', false);
Map.addLayer(embedding_firstY, visParamsEmb, 'embedding_2017', false);  
Map.addLayer(embeddingComp, visParamsEmb, 'embedding_'+ano_compara, false); 
Map.addLayer(embedding_lastY, visParamsEmb, 'embedding_2024', false);

Map.addLayer(colLandsat, vis, 'Colecao 10 - ' + ano_compara, false)

// =================================================================================================================
//                                    CALCULATE DIFFERENCE :
// =================================================================================================================

// Sentinel col beta - camadas usada para imagem diferença
var col_Sentinel = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/02_Emb_RF17a24_v03')
  .mask(mask_regiao)
  .select('classification_'+ano_compara)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)
// print(col_beta, "S2 Col2")

var class_atual = classified16a23.select('classification_'+ano_compara)

// Coleção para comparar                 
Map.addLayer(col_Sentinel, vis, 'Sentinel Col3_v03 - ' + ano_compara, false)
Map.addLayer(class_atual, vis, 'Emb_RF_teste ' + ano_compara + ' regiao 0' + regiao, false)

// Define variáveis para o mapa de diferença
var diferenca = require('users/schirmbeckj/MB-Sentinel-Coll03:Coll03/4. Inspection/Mapa_Diferencas_Classe_v02.js').diferenca

// Itera sobre a lista de classes
for (var i_classe=0;i_classe<classes_list.length; i_classe++){
  var classe = classes_list[i_classe]
  
  // Gera mapa de diferença
  var img_dif = diferenca(col_Sentinel, class_atual, classe)
    .updateMask(mask_regiao)
 
  Map.addLayer(img_dif, vischange, 'Diferença classe ' + String(classe) + ' - ' + ano_compara, false)
}

 if (debug_SS == 1){
//Visualiza amostras SS, SS filtradas, SS usadas na classificação e SS coloridas
 Map.addLayer(SS_amostras, {} , 'Amostras SS', false) // colorir as amostras de acordo com a classe....
 Map.addLayer(SS_amostrasF, {} , 'Amostras SS Filt', false) //
 Map.addLayer(SS_amostrasClas, {} , 'Amostras SS Clas', false) //

var listClass = SS_amostrasClas.distinct(['reference']).reduceColumns(ee.Reducer.toList(), ['reference']).get('list') 
listClass.getInfo().forEach(function(classe) {
  var SS_color = SS_amostrasClas.filter(ee.Filter.eq('reference', classe))
//  print('Samples classe ' + item, SS_color.size())
  Map.addLayer(SS_color, { "color": palettes.get('brazil')[classe]}, 'Samples classe ' + classe, false)
//  print(item, SS_color.filter(ee.Filter.eq('reference',item)).limit(1))
}) 
}

var blank = ee.Image(0).mask(0);
var outline = blank.paint(limite, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline, visPar, 'Limite buffer região 0' + String(regiao), false)

var blank = ee.Image(0).mask(0);
var outline2 = blank.paint(limite2, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline2, visPar, 'Limite região 0' + String(regiao), false)


// =================================================================================================================
//                                    CALCULATE AREA:
// =================================================================================================================
// Calcula área on the fly para o ano da classificação

if (calc_area == 1) {
  var years = [''+ano_compara];
//  ['2020'//2017', '2018', '2019', '2020', '2021', '2022', '2023'
// ];
  
  // Função para converter resultados em FeatureCollection
  var convert2featCollection = function (item, year) { 
      item = ee.Dictionary(item);
      var feature = ee.Feature(ee.Geometry.Point([0, 0]))
          .set('classe', item.get('class'))
          .set('area', item.get('sum')) 
          .set('year', year); 
      return feature;
  };
  
  // Função para calcular a área de cada classe (km²)
  var calculateArea = function (image, geometry, year) {
      var pixelArea = ee.Image.pixelArea().divide(10000); // Área em ha (10000) e em km² (1000000)
      var reducer = ee.Reducer.sum().group(1, 'class'); 
      var areas = pixelArea.addBands(image)
          .reduceRegion({
              reducer: reducer,
              geometry: geometry,
              scale: 90,// 10 
              bestEffort: true,
              maxPixels: 1e12,
              tileScale: 4
          });
  
      var areasList = ee.List(areas.get('groups')).map(function(item) {
          return convert2featCollection(item, year); 
      });
      return ee.FeatureCollection(areasList);
  }; 
    
  // Gera gráficos de área da classificação atual comparado com outras classificações de referência
  //-------------------------
  // Função para calcular as áreas para cada ano e criar uma FeatureCollection
  var areasByYear_s2 = years.map(function(year) {
      var image = classified16a23.select('classification_' + year); 
      var areaClass = calculateArea(image, geom_limite, year); 
      return areaClass; 
  });
  // Unir todas as FeatureCollections em uma única coleção
  var allAreas_s2 = ee.FeatureCollection(areasByYear_s2).flatten();
  // print('Áreas por ano e classe S2:', allAreas_s2);
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/areas_col10L_col2S_col3S_v01_v01_r2'

  var colls_area = ee.FeatureCollection(asset_area)
  
  // Função para criar um gráfico de comparação para uma classe específica
  var createComparisonChart = function(classNumber) {
      var filteredFeatures1 = allAreas_s2.filter(ee.Filter.eq('classe', classNumber)).map(function(ft){
        return ft.set('col', 'Col3_EmbS2_v'+version_out)
      })
  
      var filteredFeatures2 = colls_area
        .filter(ee.Filter.eq('ID_region', regiao))
        .filter(ee.Filter.eq('col', 'Col2_sf'))
        .filter(ee.Filter.eq('classe', classNumber))
      
      var filteredFeatures3 = colls_area
        .filter(ee.Filter.eq('ID_region', regiao))
        .filter(ee.Filter.eq('col', 'Col10_INT'))
        .filter(ee.Filter.eq('classe', classNumber))
      
       var filteredFeatures4 = colls_area
         .filter(ee.Filter.eq('ID_region', regiao))
         .filter(ee.Filter.eq('col', 'Col3_sf_v01'))
         .filter(ee.Filter.eq('classe', classNumber))
  
      var feat_colls = filteredFeatures1.merge(filteredFeatures2).merge(filteredFeatures3).merge(filteredFeatures4)
      // Criar o gráfico
      var chart = ui.Chart.feature.groups({
          features: feat_colls, 
          xProperty: 'year', 
          yProperty: 'area',
          seriesProperty: 'col'
      })
      .setChartType('LineChart') // Gráfico de linhas
      .setOptions({
          title: 'Comparação da Área da Classe ' + classNumber,
          hAxis: {title: 'Ano'},
          vAxis: {title: 'Área (ha)', viewWindow: {min: 0}},
          lineWidth: 2,
          pointSize: 3,
          series: {
              0: {color: 'orange', label: 'Col3_EmbS2_v'+version_out},
              1: {color: 'green', label: 'Col2_S2'},
              2: {color: 'orangered', label: 'Col10_INT'},
              3: {color: 'brown', label: 'Col3_S2'}
          },
          legend: {position: 'bottom'}
      });
      return chart;
  };
  // Gerar gráficos para comparação de todas as classes
  classes_list.forEach(function(classNumber) {
      var chart = createComparisonChart(classNumber);
      print(chart);
  });
}
} //fecha o debug