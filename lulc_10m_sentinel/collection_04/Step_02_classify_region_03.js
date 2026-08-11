/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = 
    /* color: #ea9999 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.43255758927428, -30.01561486295522]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.432450300913686, -30.01569847276037]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43192458794677, -30.01578208249504]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43211770699584, -30.01577279252801]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.4330296580609, -30.01642308811912]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.433217412691945, -30.01663675573979]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.433485633593435, -30.01688758235928]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43132377312743, -30.015981816575888]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.4340918128308, -30.015094622583813]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43160808728301, -30.01589356203163]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.42943549798095, -30.016539211883117]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43065322087371, -30.016093295887956]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43077660248839, -30.016093295887956]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.430964357119436, -30.015986461549726]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43033672020995, -30.016172260324844]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.43363047288024, -30.015271133015716]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.95168570085479, -29.837956677900767]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.95214704080535, -29.837798465932607]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.953563247165214, -29.837184228857843]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.984154307832505, -29.824919504627292]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.986857974519516, -29.827292963759298]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.98669704197862, -29.827227810731635]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.98648246525743, -29.828344713899575]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.98685261010149, -29.827432577246938]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.98377178485241, -29.8246346586256]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.98297248656597, -29.82510004853817]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.98243068034496, -29.82545374342237]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.992400623006034, -29.818773549761943]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.99267957274358, -29.8184849900082]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.99305508200567, -29.818205737840536]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.015498361455876, -29.790778387670766]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.01531060682483, -29.791057716420895]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.016029438840825, -29.790266282937388]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.01185537037326, -29.79561043163771]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.77779957869383, -29.878458431046653]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.777960511234724, -29.878465408148813]),
            {
              "reference": 22,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.778070481804335, -29.878453779644943]),
            {
              "reference": 22,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.7782448253903, -29.878453779644943]),
            {
              "reference": 22,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.777314098862135, -29.878549133336698]),
            {
              "reference": 22,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.7770378313336, -29.87856308752785]),
            {
              "reference": 22,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.776847394493544, -29.878560761829466]),
            {
              "reference": 22,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.776788385895216, -29.878639835544256]),
            {
              "reference": 22,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.7767132840428, -29.878639835544256]),
            {
              "reference": 22,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.77656576254698, -29.878628207060718]),
            {
              "reference": 22,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.77634045698973, -29.878635184150994]),
            {
              "reference": 22,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.77643433430525, -29.878639835544256]),
            {
              "reference": 22,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21243214025353, -30.463581342148245]),
            {
              "reference": 22,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.2162086905465, -30.45899435645305]),
            {
              "reference": 22,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.25122761144494, -30.47171901102237]),
            {
              "reference": 22,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24263389510205, -30.47536453792702]),
            {
              "reference": 22,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.07663507908612, -29.758291116005534]),
            {
              "reference": 22,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.207237315561436, -29.562536895105968]),
            {
              "reference": 22,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20564944782462, -29.559979858681878]),
            {
              "reference": 22,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.27859021273613, -30.433330366243187]),
            {
              "reference": 22,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.27887372070511, -30.42588872779889]),
            {
              "reference": 22,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.281356850058245, -30.426772510523897]),
            {
              "reference": 22,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24504145462991, -30.409194435899963]),
            {
              "reference": 22,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.247060454239936, -30.453885207218935]),
            {
              "reference": 22,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24478594099531, -30.454847062871163]),
            {
              "reference": 22,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89435098556811, -29.902516769449736]),
            {
              "reference": 22,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89355168728167, -29.902440039815318]),
            {
              "reference": 22,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.893465856593195, -29.902484217490834]),
            {
              "reference": 22,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.893717984240595, -29.90226100377185]),
            {
              "reference": 22,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89406398920352, -29.902423763824654]),
            {
              "reference": 22,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89125226779937, -29.901009237194145]),
            {
              "reference": 22,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89187990470886, -29.901055740677762]),
            {
              "reference": 22,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89283477111816, -29.901785842525047]),
            {
              "reference": 22,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89457284255981, -29.90103248893866]),
            {
              "reference": 22,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89564937660668, -29.903239325307187]),
            {
              "reference": 22,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89613753864739, -29.90410891739388]),
            {
              "reference": 22,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.895949784016345, -29.904169370037508]),
            {
              "reference": 22,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.896826866364215, -29.9033823202493]),
            {
              "reference": 22,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95287154133289, -29.903993212603883]),
            {
              "reference": 22,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.952994922947575, -29.90433732756203]),
            {
              "reference": 22,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95481346065967, -29.904388479684066]),
            {
              "reference": 22,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95584342892139, -29.903672347585573]),
            {
              "reference": 22,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95353136475055, -29.903267777176463]),
            {
              "reference": 22,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96489320213764, -29.893940516613267]),
            {
              "reference": 22,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.9642923873183, -29.895444487570085]),
            {
              "reference": 22,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.963219503712345, -29.89383536381409]),
            {
              "reference": 22,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96151361877887, -29.891621613532134]),
            {
              "reference": 22,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.9628332656142, -29.89188205729381]),
            {
              "reference": 22,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.202988611814796, -29.847777129878246]),
            {
              "reference": 22,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20034931814414, -29.84917296970747]),
            {
              "reference": 22,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.199233519193946, -29.846623220886627]),
            {
              "reference": 22,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20118616735679, -29.844817884907435]),
            {
              "reference": 22,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20135782873374, -29.84563680424163]),
            {
              "reference": 22,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20208738958579, -29.846790724632104]),
            {
              "reference": 22,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20320318853599, -29.846641832427764]),
            {
              "reference": 22,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20457647955161, -29.846958228096604]),
            {
              "reference": 22,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.179462561659925, -29.846608813641254]),
            {
              "reference": 22,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18138302331459, -29.845896919485565]),
            {
              "reference": 22,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17767084603798, -29.844868618967517]),
            {
              "reference": 22,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.179720053725354, -29.84510126707037]),
            {
              "reference": 22,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.172789246536915, -29.830547762573214]),
            {
              "reference": 22,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17264440725011, -29.8301708174602]),
            {
              "reference": 22,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17385140130681, -29.83011031996396]),
            {
              "reference": 22,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.174017698265736, -29.82961703131997]),
            {
              "reference": 22,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.173025280930226, -29.829500689303753]),
            {
              "reference": 22,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17522469232244, -29.830380231587437]),
            {
              "reference": 22,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17586842248601, -29.830426768000557]),
            {
              "reference": 22,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17597571084661, -29.8316972037062]),
            {
              "reference": 22,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17770841787023, -29.831152733238884]),
            {
              "reference": 22,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17785325715703, -29.830575684376885]),
            {
              "reference": 22,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1775957650916, -29.830398846155273]),
            {
              "reference": 22,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.177794248558705, -29.829724065855245]),
            {
              "reference": 22,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.8082399214363, -30.045243718796932]),
            {
              "reference": 22,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80862615953444, -30.047630501896407]),
            {
              "reference": 22,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81071828256606, -30.046808600589916]),
            {
              "reference": 22,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81019256959914, -30.04608420734358]),
            {
              "reference": 22,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.811297639713274, -30.046102781595557]),
            {
              "reference": 22,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.8135721529579, -30.046339603003005]),
            {
              "reference": 22,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81389938245772, -30.04660892862141]),
            {
              "reference": 22,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.813738449916826, -30.04557805763652]),
            {
              "reference": 22,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81419978986739, -30.04845703983516]),
            {
              "reference": 22,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.814532383785235, -30.048707785936095]),
            {
              "reference": 22,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80643211256026, -30.048526691593537]),
            {
              "reference": 22,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80720458875655, -30.046752878220595]),
            {
              "reference": 22,
              "system:index": "117"
            })]),
    arocho = 
    /* color: #ff8c00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.7459360041868, -30.019678118959934]),
            {
              "reference": 29,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.73331889298075, -30.01573924964204]),
            {
              "reference": 29,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.724649993444615, -30.007638064439135]),
            {
              "reference": 29,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.72310504105204, -30.004070360214346]),
            {
              "reference": 29,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.76018389847391, -30.03795836947611]),
            {
              "reference": 29,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.77129633766202, -30.025623659585488]),
            {
              "reference": 29,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15326096167673, -30.188930186398363]),
            {
              "reference": 29,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15243484130014, -30.189625711830782]),
            {
              "reference": 29,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.14804261994306, -30.19206113470971]),
            {
              "reference": 29,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.14688390564863, -30.191727291371187]),
            {
              "reference": 29,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15883582901899, -30.187707172304435]),
            {
              "reference": 29,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.195684119803566, -30.18971971511963]),
            {
              "reference": 29,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20458424461071, -30.205638682054513]),
            {
              "reference": 29,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20447963845913, -30.206072153247362]),
            {
              "reference": 29,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20117605231664, -30.21040095874094]),
            {
              "reference": 29,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.165031852492966, -30.222088454334582]),
            {
              "reference": 29,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.16739219642607, -30.218862239094857]),
            {
              "reference": 29,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18229460299589, -29.561290853763754]),
            {
              "reference": 29,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19817328036405, -29.56744994882057]),
            {
              "reference": 29,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.193152185088174, -29.57017476194276]),
            {
              "reference": 29,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18669342578031, -29.554048770740643]),
            {
              "reference": 29,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17032601318944, -29.570698664460828]),
            {
              "reference": 29,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.173882622343186, -29.569476246611668]),
            {
              "reference": 29,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.717761100809916, -30.567514716730415]),
            {
              "reference": 29,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.71811515239988, -30.56733919732467]),
            {
              "reference": 29,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.71569735358611, -30.577839528626942]),
            {
              "reference": 29,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.715289657815845, -30.575031478961765]),
            {
              "reference": 29,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.72369033645049, -30.57804273959224]),
            {
              "reference": 29,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.796590566173165, -29.983956390823124]),
            {
              "reference": 29,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.797105550304025, -29.984718409498207]),
            {
              "reference": 29,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.79796385718879, -29.984439622856385]),
            {
              "reference": 29,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.79888653708991, -29.985282950050653]),
            {
              "reference": 29,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.79813551856574, -29.985691833384895]),
            {
              "reference": 29,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.79641890479621, -29.984335077663914]),
            {
              "reference": 29,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.79723429633674, -29.983842552165356]),
            {
              "reference": 29,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.79823207809028, -29.984669621892387]),
            {
              "reference": 29,
              "system:index": "35"
            })]),
    agua = 
    /* color: #0000ff */
    /* shown: false */
    ee.FeatureCollection([]),
    floresta = 
    /* color: #006400 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.683849802154086, -30.262918161719526]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.3999651710398, -30.340988522268514]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39794610515694, -30.341190743313994]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39794610515694, -30.33919070642619]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.40142224804024, -30.339079592067637]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.37721411603152, -30.358707626512057]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.37635580914675, -30.357226386805085]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.191085880281676, -30.367811905545498]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19119316864227, -30.36834417103581]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18975550461029, -30.366145664410105]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83263831042468, -30.182769547175834]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83233790301501, -30.183029226819627]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83449439906298, -30.181211454938218]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.833228396407954, -30.180729183299146]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.836468504897944, -30.18079410461883]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83951549433886, -30.182574786993772]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.839172171584956, -30.18250986684751]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83375410937487, -30.183826810016985]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.82509076701318, -30.179282649747044]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.821711183654415, -30.179440318049835]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.82813638713136, -30.177158611291024]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8329704761715, -30.177030525278752]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83747658731652, -30.177605562779448]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.837401485464106, -30.17787453078104]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83887133600427, -30.178162047488076]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.838646030447016, -30.178226970499356]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.840158796331416, -30.17741079238891]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84426794054223, -30.178208421071936]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84663277406022, -30.181227851114738]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.844430748247206, -30.189169678529794]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84426981570631, -30.189883749503398]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.848711553834974, -30.188576161053273]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.809989784004046, -30.17799170961927]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80982885146315, -30.17826995127601]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80816051745589, -30.178543554805625]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80936751151259, -30.178807882917724]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80885789179976, -30.17898410126518]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80761871123488, -30.17928552665518]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80733976149733, -30.17942928305485]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.81322156811559, -30.1838169050166]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.81308209324681, -30.183974566062854]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80572211170995, -30.183390291508637]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80689155484044, -30.183575775869556]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80715977574193, -30.182778190639713]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80769621754491, -30.18303787026072]),
            {
              "reference": 3,
              "system:index": "44"
            })]),
    aumi = 
    /* color: #45c2a5 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.548379108548666, -29.626996932156985]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.551383182645345, -29.624012513393577]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55601803982308, -29.606775765892923]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56297032558968, -29.612223195130287]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5555888863807, -29.640798718916322]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55473057949593, -29.6354274375184]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5555888863807, -29.63065272466428]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55121152126839, -29.626996932156985]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5530139657264, -29.624012513393577]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57421414578011, -29.594088831082104]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57146756374886, -29.602148951022667]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57078091824105, -29.60811899496229]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.69152035229384, -29.91297979354512]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.690232891966694, -29.913649361146447]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.69263615124404, -29.91015268070956]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.693494458128804, -29.910227079443914]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.688945431639546, -29.913649361146447]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.89020116875407, -30.032171188565236]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.89397771904704, -30.036332318309626]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.89432104180094, -30.037818393731982]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.89947088310954, -30.042202186375206]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.89715345452067, -30.043019482194957]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.89414938042399, -30.043539576024216]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.94590528557536, -30.04131058324577]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26443633202748, -29.58802445085957]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.2629450238152, -29.58794981262401]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.05982354433577, -29.795545429848364]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.06278470308821, -29.805451341017186]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.435813497431546, -29.645004998806005]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.053678607250816, -29.771979723912445]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.0546656601683, -29.77358149889988]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.05453966426657, -29.77228917879259]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.051664336202606, -29.772866563968492]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.05211494731711, -29.77090157822602]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55699887528771, -29.610335741666656]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55682721391076, -29.611081955898943]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55785718217248, -29.613693662214725]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56478179794378, -29.641006897493277]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56409515243597, -29.64074580070124]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56252874237127, -29.6419673548665]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56205667358465, -29.6424522424873]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55568742564591, -29.564694774769233]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55585908702286, -29.564937404716193]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56283283046158, -29.566131882111]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56188869288834, -29.564526799849148]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56261825374039, -29.56598257320919]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5555532484632, -29.567799798386467]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55567126565985, -29.568163731899467]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55670123392157, -29.56818239512119]),
            {
              "reference": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55704455667548, -29.568583653554025]),
            {
              "reference": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5574629812818, -29.568173063510763]),
            {
              "reference": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55749516778998, -29.568425016689744]),
            {
              "reference": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.70457360293233, -29.66973452397625]),
            {
              "reference": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.704412670391434, -29.669911645843257]),
            {
              "reference": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84126540139835, -29.848743104290214]),
            {
              "reference": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84328242257755, -29.849896988783723]),
            {
              "reference": 11,
              "system:index": "55"
            })]),
    campo = 
    /* color: #b8af4f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.388617815035914, -30.462298072264165]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38677245523367, -30.465146371235086]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.386343301791285, -30.467513725179522]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38527041818533, -30.470842719309726]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38548499490652, -30.475503119911114]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38398295785818, -30.4784250033425]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38381129648123, -30.48197552846988]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.382137598055934, -30.48293710673902]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.380893053073024, -30.469030281061745]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38127929117117, -30.465294332542328]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.3838971271697, -30.465368313111682]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39127856637869, -30.46932619165112]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.393338502902125, -30.470916695664595]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39072066690359, -30.469881021582815]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39217978860769, -30.472174285099015]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.3919652118865, -30.473283909347877]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39518386270437, -30.465664234827138]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38943320657644, -30.46418461725945]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.388574899691676, -30.465146371235086]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.319797441847264, -29.656795741329816]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.32506219692592, -29.65264964131962]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.689193140825836, -30.551144251061945]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68684384799358, -30.553675474107006]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68604991412517, -30.554422734651375]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69209021836496, -30.554627918228412]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69335277231443, -30.555440227949763]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.693274988252995, -30.555430988944593]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.697288802943795, -30.55488000278758]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.70344707514607, -29.669175189716785]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.70424100901448, -29.667870064347774]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17592743108434, -29.830571030743478]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.174559504486744, -29.830114973618823]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.174012333847706, -29.829817139271]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17325058648748, -29.830226661270377]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.172805339791005, -29.829277312252895]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17771914670629, -29.830482611667687]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17708614537877, -29.830133588236073]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17833069036168, -29.831264419730473]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17886713216466, -29.83130630213263]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21352127446747, -29.79656091299092]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21476581945038, -29.806131580639477]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21463707341766, -29.806690151637458]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22600963964081, -29.803450396427284]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.234807285209655, -29.802407694269153]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.225837978263854, -29.790341350255737]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22000149144745, -29.809855328368354]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19686029157606, -29.821063214444518]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.197593721963806, -29.82622643293115]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19830182514374, -29.826477739750473]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.199321064569396, -29.827092042648342]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19426778278534, -29.828004182409238]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19496515712921, -29.828162409887714]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.195576700784606, -29.82733403972283]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19978240451996, -29.823722637886934]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20043686351959, -29.824281110618124]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20146683178131, -29.824597577113924]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20164922199432, -29.824709270932036]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.199825319864196, -29.827538806020467]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.199085030176086, -29.827650496551428]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19368842563812, -29.821442175181698]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19329145870392, -29.821609721151315]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19343093357269, -29.822782535075106]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19298032245819, -29.822726687105057]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19368842563812, -29.823033850554108]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19540503940765, -29.821721418308357]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.195887837030334, -29.822037892908853]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19515827617828, -29.82202858484667]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19699290714447, -29.82154456441873]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.199221822835845, -29.822708071108114]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83554204153541, -30.186302718162974]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.835434753174816, -30.185338222373236]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.835220176453625, -30.18570918341002]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8211862475606, -30.185991399031085]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.82210892746172, -30.184841418564446]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.822001639101124, -30.185453506613065]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.822752657625294, -30.183858360102484]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.824254694673634, -30.182522868739674]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.825499239656544, -30.181354298945593]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.82693690368853, -30.18087202800577]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8276879222127, -30.181298652419176]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.82938307831011, -30.18226318776112]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83009118149004, -30.181298652419176]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83052033493242, -30.18063089165056]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.830970946046925, -30.180092969962125]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83178633758745, -30.18732684336942]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83232277939043, -30.187567963334104]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83283776352129, -30.188291319686435]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.830992403719044, -30.18836550978118]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.820950213167286, -30.188198581989454]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.857406798097706, -30.185490602736216]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84028357574663, -30.18103896821364]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84165686676226, -30.182151895703598]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8411418826314, -30.177366218297013]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80617707756544, -30.201250490016047]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.808237014088874, -30.199692690151785]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.81104796913648, -30.200082142428915]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.801477847371345, -30.19794940869504]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.798945842061286, -30.19843159601607]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.799074588094, -30.199321781788793]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.797207770619636, -30.20006359711732]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.795212207112556, -30.200916677834673]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.79654258278394, -30.203550054284]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.838854391253065, -30.226562160049504]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8390045949579, -30.22698858647182]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84329612938173, -30.226738292926353]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83873637405641, -30.22567222069014]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83928354469545, -30.22564440995539]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.836118538057875, -30.225190166841188]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8360327073694, -30.224012833085258]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.835099298632215, -30.22409626665009]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83403714386232, -30.22495840934197]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.834884721911024, -30.2253199508022]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83498128143556, -30.226868074844276]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83523877350099, -30.22736866063748]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83566792694337, -30.227591142394292]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83627947059877, -30.227897053988016]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.833597261583876, -30.22587616583798]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.833093006289076, -30.225700031417023]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.422372436251884, -30.36886471949481]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.422608470645194, -30.369660793887157]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.423101997103934, -30.369123907217855]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.40668687793279, -30.372123029469076]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.408339118685966, -30.370456861798125]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.4089399335053, -30.37138251400967]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.40876827212835, -30.372048978175535]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.4100557324555, -30.37204897831679]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.40745935412908, -30.3715676435416]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.423359489169364, -30.369697820586595]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81176944583702, -30.04568950366562]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.811458309591295, -30.045206569967323]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.811458309591295, -30.045331947211434]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81152268260765, -30.045656998586743]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.810959418714525, -30.045921682490185]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81015475601006, -30.04673894762337]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81039079040337, -30.04679467000053]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81040688365746, -30.0464881965382]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.810696562231065, -30.046539275514437]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81303008407402, -30.04676680881587]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.8090818724041, -30.047820884841997]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80840059131432, -30.04598669246354]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80862589687157, -30.046130642966993]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.8078748783474, -30.04627459326126]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80816455692101, -30.046409256250385]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80761202186394, -30.046539275514437]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80642112106133, -30.046813244119285]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80617462049483, -30.045610562741285]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80594931493758, -30.045489829441234]),
            {
              "reference": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.808277472362505, -30.044941884153083]),
            {
              "reference": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80847595582961, -30.044941884153083]),
            {
              "reference": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80692027460097, -30.04857776951855]),
            {
              "reference": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80640529047011, -30.04882387187896]),
            {
              "reference": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80856715093611, -30.048596343302936]),
            {
              "reference": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80988679777144, -30.04855919573068]),
            {
              "reference": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18628507986647, -30.40018144748259]),
            {
              "reference": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17864614859206, -30.39796052209438]),
            {
              "reference": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17954737082106, -30.39709064588622]),
            {
              "reference": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19121907021814, -30.398295394626196]),
            {
              "reference": 12,
              "system:index": "156"
            })]),
    agric = 
    /* color: #ffefc3 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.26635518957929, -30.08787621473722]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.265840205448434, -30.093074673497597]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.28146139075117, -30.093520242959734]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.28523794104414, -30.096193617562218]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.29382100989179, -30.081786244038163]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.295022639530465, -30.074507494513085]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26824346472578, -30.08832180762563]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.28266302038984, -30.095153980473846]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.284551295536325, -30.0973817608467]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.347207698124215, -30.156176997381774]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.3490959732707, -30.156176997381774]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22942882808884, -30.021944906551507]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.246594965784155, -30.004665137219945]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24719578060349, -30.006337504523895]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22642475399216, -30.018154763293882]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.714179654051655, -29.95155903744793]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.71375050060927, -29.952674548386092]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.713922161986225, -29.95408751094173]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.71881451122939, -29.953566948125818]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.868314343192544, -30.01708562877882]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.86840017388102, -30.01812608590421]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.00002343308287, -30.281103075346522]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.963287898414904, -30.26857597682175]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.962000438087756, -30.269762042833932]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96122796189147, -30.27072571091742]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.035531582126644, -30.266833945662043]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.03407246042254, -30.26987326506161]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.03844982553485, -30.26876132985478]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.04445797372821, -30.261348106635968]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.05644566312407, -30.276799046563553]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.06155258908843, -30.271128445435263]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26208782894346, -30.26580576458723]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26118660671445, -30.26411925471927]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26554251415464, -30.26499031288354]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26498461467954, -30.264230454064126]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.250414855310645, -30.26482351510984]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.2515950272772, -30.266213487899392]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.2470030854437, -30.258596195481147]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24659538967344, -30.259244893034133]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24577999813291, -30.263581789443865]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.255908019373145, -30.260319868117033]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.25569344265195, -30.25791042483764]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26406193477842, -30.261172426195312]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26343966228696, -30.262284447348055]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1191418401038, -30.190866392967486]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.131501459244426, -30.198062383766082]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.132788919571574, -30.19917511889735]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.126780771378215, -30.198952572877243]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20134425973602, -30.171564111466285]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20263172006317, -30.173382061330972]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.205163725373225, -30.17033975898689]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20460582589813, -30.173122356260606]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18085406524189, -29.646188663789477]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18297837478168, -29.647158396034918]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.71253289919344, -29.68263282017681]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.71064462404696, -29.687852453580305]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.71613778810946, -29.689343727621495]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.80361635231888, -29.95325785357954]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.81145624468743, -29.953885987725698]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.816035593350996, -29.953923291873867]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.87996324869729, -30.0505643707623]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.87996324869729, -30.052941739163987]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.88339647623635, -30.055913369407836]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.01353287773464, -29.975901235963562]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.01181626396511, -29.97649603098587]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.003404856494406, -30.028824041123563]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.001430750659445, -30.027783696257455]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.88576799459126, -30.050405167867474]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.844225941368606, -30.033018899171005]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.88611131734517, -30.006710797269385]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.92284685201314, -30.018899599247558]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.74753999102807, -29.732681058370478]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.7467889725039, -29.736128056626267]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.744686120636224, -29.73722734467121]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.739665025360345, -29.73733913600087]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.92417317488603, -29.98472860475751]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.928979693440716, -29.985787986749457]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.926039992360394, -29.98376214115198]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.92563229659013, -29.98876163019525]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.923486529378216, -29.987535013065187]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.9223492727559, -29.989244838843312]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.92507439711503, -29.990341342051895]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91573853978249, -29.845392722014882]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91638226994606, -29.846397752657605]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.909043746081316, -29.850417774073584]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91011662968727, -29.847104990379613]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91342111119362, -29.846434975820483]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91101785191628, -29.849971113020096]),
            {
              "reference": 21,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91247697362038, -29.848928896124463]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.929299788561785, -29.855293693927493]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.92947144993874, -29.85105054047875]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.92689652928444, -29.850380552395446]),
            {
              "reference": 21,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.92423577794167, -29.849561671965677]),
            {
              "reference": 21,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91591020115944, -29.84907778491847]),
            {
              "reference": 21,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91166158207985, -29.852167177292866]),
            {
              "reference": 21,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91312070378395, -29.859908849033683]),
            {
              "reference": 21,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91324944981667, -29.860727644585396]),
            {
              "reference": 21,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.910588698473894, -29.832251946407503]),
            {
              "reference": 21,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91015954503151, -29.837612698196878]),
            {
              "reference": 21,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91015954503151, -29.83999516221042]),
            {
              "reference": 21,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91342111119362, -29.84059076933472]),
            {
              "reference": 21,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.9149660635862, -29.839176196615284]),
            {
              "reference": 21,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91651101597878, -29.833964440052643]),
            {
              "reference": 21,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.9164251852903, -29.836421444880887]),
            {
              "reference": 21,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.856368372914126, -29.84557842971012]),
            {
              "reference": 21,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85635764407807, -29.847504725973607]),
            {
              "reference": 21,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8543403073283, -29.848184038981167]),
            {
              "reference": 21,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.855198614213066, -29.84703013469186]),
            {
              "reference": 21,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.855445377442436, -29.84825848396129]),
            {
              "reference": 21,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.870350595188704, -29.83859158949257]),
            {
              "reference": 21,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86977123804149, -29.83874980020452]),
            {
              "reference": 21,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86972832269725, -29.837353814685283]),
            {
              "reference": 21,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87077974863109, -29.837316588137714]),
            {
              "reference": 21,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87142347879466, -29.83579959452319]),
            {
              "reference": 21,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87241053171214, -29.836022956992412]),
            {
              "reference": 21,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87477087564525, -29.837549253832414]),
            {
              "reference": 21,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87277531213817, -29.84179298101202]),
            {
              "reference": 21,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8714663941389, -29.84225829100564]),
            {
              "reference": 21,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.852938375031165, -29.836652082481418]),
            {
              "reference": 21,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85049220040958, -29.835758635234665]),
            {
              "reference": 21,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.849934300934486, -29.836949896454616]),
            {
              "reference": 21,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8515221686713, -29.83922069880442]),
            {
              "reference": 21,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85456915811222, -29.836875443044562]),
            {
              "reference": 21,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85328169778507, -29.835051317164048]),
            {
              "reference": 21,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.855427464996986, -29.83773165390998]),
            {
              "reference": 21,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87787219003361, -29.849420059484725]),
            {
              "reference": 21,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87637015298527, -29.836875443044562]),
            {
              "reference": 21,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87503977731388, -29.835237453983964]),
            {
              "reference": 21,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8645360727945, -29.834846120282613]),
            {
              "reference": 21,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86455753046662, -29.835088098577888]),
            {
              "reference": 21,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86513152319581, -29.836028085625756]),
            {
              "reference": 21,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86524954039246, -29.83621887399628]),
            {
              "reference": 21,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85403337450552, -29.906260037451506]),
            {
              "reference": 21,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85124387713003, -29.90425117211517]),
            {
              "reference": 21,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85094346972036, -29.900642553015476]),
            {
              "reference": 21,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85609331102896, -29.89952645879008]),
            {
              "reference": 21,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85420503588247, -29.90194464714418]),
            {
              "reference": 21,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85304632158804, -29.902911906052623]),
            {
              "reference": 21,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.844935321527004, -29.908938461550058]),
            {
              "reference": 21,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84107294054556, -29.9135139361017]),
            {
              "reference": 21,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.843390369134426, -29.911765608851805]),
            {
              "reference": 21,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84823980303335, -29.912881565958614]),
            {
              "reference": 21,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.847124004083156, -29.913625530415995]),
            {
              "reference": 21,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.844892406182765, -29.91369992655605]),
            {
              "reference": 21,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84557905169058, -29.911468018178077]),
            {
              "reference": 21,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.856908702569484, -29.91284436758986]),
            {
              "reference": 21,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.859140300469875, -29.910835635043977]),
            {
              "reference": 21,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86068525286245, -29.91537382501374]),
            {
              "reference": 21,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86257352800894, -29.914034708498548]),
            {
              "reference": 21,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85347547503042, -29.918423967628886]),
            {
              "reference": 21,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85544958086538, -29.918498360183964]),
            {
              "reference": 21,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85596456499624, -29.915076245122147]),
            {
              "reference": 21,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.82743913220896, -29.88114238425352]),
            {
              "reference": 21,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.825035872931615, -29.879951650381575]),
            {
              "reference": 21,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.82074433850779, -29.881067963803073]),
            {
              "reference": 21,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.822289290900365, -29.880249335182544]),
            {
              "reference": 21,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.520941003032966, -29.719625107263013]),
            {
              "reference": 21,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.522958024212166, -29.714928935162277]),
            {
              "reference": 21,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.52231429404859, -29.715338927193873]),
            {
              "reference": 21,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.509954674907966, -29.71914059173486]),
            {
              "reference": 21,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.51184295005445, -29.7188796977894]),
            {
              "reference": 21,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.51561950034742, -29.720631401271206]),
            {
              "reference": 21,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.51866648978834, -29.71932694413785]),
            {
              "reference": 21,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.51188586539869, -29.70903977396166]),
            {
              "reference": 21,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.512744172283455, -29.715935276250757]),
            {
              "reference": 21,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.66541458258445, -30.693689033394342]),
            {
              "reference": 21,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.66541458258445, -30.690736726697835]),
            {
              "reference": 21,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67065025458152, -30.69937196955874]),
            {
              "reference": 21,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67228103766257, -30.698633944808808]),
            {
              "reference": 21,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6696202863198, -30.700478996100472]),
            {
              "reference": 21,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67863250860984, -30.69981478169943]),
            {
              "reference": 21,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68000579962546, -30.71533037385099]),
            {
              "reference": 21,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.679742943142, -30.712637001788213]),
            {
              "reference": 21,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.687145840023106, -30.71442644229809]),
            {
              "reference": 21,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.686394821498936, -30.71553329609634]),
            {
              "reference": 21,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68459237704093, -30.718798440785367]),
            {
              "reference": 21,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68656648287589, -30.717322682866687]),
            {
              "reference": 21,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.681622701944676, -30.701689387958716]),
            {
              "reference": 21,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.03507403719786, -30.472533824764717]),
            {
              "reference": 21,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.037906449917585, -30.472163948570884]),
            {
              "reference": 21,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.033443254116804, -30.475196891885584]),
            {
              "reference": 21,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.0319841324127, -30.470906359002967]),
            {
              "reference": 21,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99389568022046, -30.459290833454283]),
            {
              "reference": 21,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99720016172681, -30.45951278867196]),
            {
              "reference": 21,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.00174918821607, -30.458070070718556]),
            {
              "reference": 21,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.00020423582349, -30.4558504629213]),
            {
              "reference": 21,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.63534214898135, -29.648608237624256]),
            {
              "reference": 21,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.62783196373965, -29.644915798859433]),
            {
              "reference": 21,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.62937691613223, -29.645885543366077]),
            {
              "reference": 21,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.63139393731143, -29.64637041211644]),
            {
              "reference": 21,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.63109352990176, -29.649055796755988]),
            {
              "reference": 21,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.63130810662295, -29.641036727423845]),
            {
              "reference": 21,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.64130738183047, -29.64152161952634]),
            {
              "reference": 21,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.6337113659003, -29.638090025206093]),
            {
              "reference": 21,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.64019158288028, -29.63353925238242]),
            {
              "reference": 21,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.631522683344144, -29.66553950473611]),
            {
              "reference": 21,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.626544503412504, -29.634658313945373]),
            {
              "reference": 21,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.64259484215762, -29.64167081662655]),
            {
              "reference": 21,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.63487008019473, -29.64950335389773]),
            {
              "reference": 21,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.627231148920316, -29.647787707381053]),
            {
              "reference": 21,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.62740281029727, -29.648384457312158]),
            {
              "reference": 21,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.629291085443754, -29.623541750796846]),
            {
              "reference": 21,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.629977730951566, -29.62510858899061]),
            {
              "reference": 21,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.62542870446231, -29.631301091956548]),
            {
              "reference": 21,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.62465622826602, -29.634583710228007]),
            {
              "reference": 21,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.63504174157168, -29.635329744914984]),
            {
              "reference": 21,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57092325311608, -29.617301516773566]),
            {
              "reference": 21,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57384149652428, -29.617301516773566]),
            {
              "reference": 21,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19432422014674, -30.36579400523101]),
            {
              "reference": 21,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1933800825735, -30.365497780547138]),
            {
              "reference": 21,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.192950929131115, -30.366016173155046]),
            {
              "reference": 21,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19230719896754, -30.36590508925612]),
            {
              "reference": 21,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21933541824833, -30.381554700903546]),
            {
              "reference": 21,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21899209549442, -30.381961942719027]),
            {
              "reference": 21,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21849856903568, -30.38240620458231]),
            {
              "reference": 21,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21970019867435, -30.382461737173234]),
            {
              "reference": 21,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.213649135136755, -30.381795343999624]),
            {
              "reference": 21,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21399245789066, -30.382572802260388]),
            {
              "reference": 21,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.214378695988806, -30.382313650194018]),
            {
              "reference": 21,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22253261139408, -30.38472003580159]),
            {
              "reference": 21,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21405683090702, -30.389236476489266]),
            {
              "reference": 21,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21399245789066, -30.3883850323285]),
            {
              "reference": 21,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22306905319706, -30.384979181486468]),
            {
              "reference": 21,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22169576218143, -30.383646424928575]),
            {
              "reference": 21,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.2209876590015, -30.3834057863906]),
            {
              "reference": 21,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21304832031742, -30.37368719644296]),
            {
              "reference": 21,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21279082825199, -30.37472389207641]),
            {
              "reference": 21,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21652446320072, -30.376982369498453]),
            {
              "reference": 21,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.196182590031775, -30.378537356407435]),
            {
              "reference": 21,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.183216996482, -30.38247781122713]),
            {
              "reference": 21,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.183388657858956, -30.384588025951306]),
            {
              "reference": 21,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18306679277717, -30.389604230663217]),
            {
              "reference": 21,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18044895677863, -30.390103986029285]),
            {
              "reference": 21,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.178389020255196, -30.385791198159033]),
            {
              "reference": 21,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.178174443534004, -30.386476074183694]),
            {
              "reference": 21,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.177187390616524, -30.385569075174182]),
            {
              "reference": 21,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17658657579719, -30.38677223530221]),
            {
              "reference": 21,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1777238324195, -30.38251483293078]),
            {
              "reference": 21,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18177933245002, -30.38901192469682]),
            {
              "reference": 21,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.181436009696114, -30.387494124267825]),
            {
              "reference": 21,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1833242848426, -30.38342186028923]),
            {
              "reference": 21,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17956919222175, -30.38608736135337]),
            {
              "reference": 21,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.177895493796456, -30.3842548371822]),
            {
              "reference": 21,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18083519487678, -30.382329724272278]),
            {
              "reference": 21,
              "system:index": "243"
            })]),
    geom_limite = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-56.882427922398676, -29.644269555713176],
          [-56.90199731937133, -29.660977800433923],
          [-56.932896367222895, -29.677683270868858],
          [-57.012547246129145, -29.697964753870924],
          [-57.026280156285395, -29.74388121115491],
          [-57.05786584964477, -29.776665814578195],
          [-57.07503198734008, -29.804673246343803],
          [-57.00224756351196, -29.85709160780115],
          [-56.99469446292602, -29.927931763428777],
          [-57.02490686526977, -29.958871310784346],
          [-57.05031274905883, -29.9915853558148],
          [-57.04413293948852, -30.029044564715218],
          [-57.00636743655883, -30.102138417372455],
          [-56.930149785191645, -30.124115433881112],
          [-56.850498906285395, -30.110454620212934],
          [-56.80998682132446, -30.151431391774203],
          [-56.77153467288696, -30.17695903529126],
          [-56.68227075687133, -30.22621462281223],
          [-56.64862512698852, -30.267143269824928],
          [-56.63557886234008, -30.306869258629],
          [-56.56691431155883, -30.361392153944905],
          [-56.44812463870727, -30.450223025970455],
          [-56.39868616214477, -30.507623930994463],
          [-56.22084497562133, -30.61996052882603],
          [-56.19475244632446, -30.642412232255513],
          [-56.169346562535395, -30.703832348078087],
          [-56.14050745120727, -30.746921207715864],
          [-56.10754846683227, -30.762263272329307],
          [-56.04781030765258, -30.792940066188415],
          [-56.029270878941645, -30.824196729060603],
          [-56.01141809573852, -30.86546352491297],
          [-56.03064416995727, -30.933809401388732],
          [-56.03957056155883, -31.030941388904214],
          [-56.02721094241821, -31.095053099147083],
          [-55.878208867222895, -31.093289135068197],
          [-55.84868311038696, -31.061532182072664],
          [-55.78001855960571, -31.030353008076613],
          [-55.70929407230102, -30.971496575705913],
          [-55.65710901370727, -30.965020150745122],
          [-55.64406274905883, -30.939699002303104],
          [-55.62483667484008, -30.910836491276715],
          [-55.64420901891684, -30.871341649084798],
          [-55.62841617223715, -30.856311721690663],
          [-55.58893405553793, -30.852480186896972],
          [-55.543958774776215, -30.853953872240197],
          [-55.5103131448934, -30.846879976095337],
          [-55.500013462276215, -30.821527565158448],
          [-55.53159915563559, -30.809143721826718],
          [-55.541212192744965, -30.765197688552504],
          [-55.50138675329184, -30.75251154289253],
          [-55.478040806026215, -30.699388608326256],
          [-55.43443881628012, -30.665728947162865],
          [-55.43262498732191, -30.644660913823415],
          [-55.38730638380628, -30.619846146931298],
          [-55.33512132521253, -30.595025017470647],
          [-55.31864183302503, -30.565467762160132],
          [-55.32001512404066, -30.527621331828446],
          [-55.34885423536878, -30.503959823133776],
          [-55.31177537794691, -30.496860247560907],
          [-55.29804246779066, -30.438860991559793],
          [-55.32962816115003, -30.421099214380643],
          [-55.37357347365003, -30.39741181469311],
          [-55.42438524122816, -30.258725479075014],
          [-55.47107713575941, -30.194650222631328],
          [-55.50128953810316, -30.15666000843326],
          [-55.63037889357191, -30.192276263383715],
          [-55.63312547560316, -30.2468628411279],
          [-55.67707078810316, -30.244490141648402],
          [-55.66333787794691, -30.14716016682223],
          [-55.69355028029066, -30.097270992662125],
          [-55.69904344435316, -30.023579035060838],
          [-55.74573533888441, -29.92127042732982],
          [-55.75122850294691, -29.785489852563895],
          [-55.83362596388441, -29.656685495585513],
          [-55.84461229200941, -29.558779317564557],
          [-55.92700975294691, -29.508595458443626],
          [-56.04511278029066, -29.558779317564557],
          [-56.12751024122816, -29.506205129834445],
          [-56.242180041032846, -29.484091915159055],
          [-56.39118211622816, -29.582667637765795],
          [-56.39667528029066, -29.63520204108125],
          [-56.470146349626596, -29.697849297430313],
          [-56.47770335100988, -29.586802347442536],
          [-56.53263109083753, -29.524131218585648],
          [-56.73175828810316, -29.616101789041274],
          [-56.81587236281019, -29.658475576497572]]]),
    remover_SS = 
    /* color: #0b4a8b */
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
//                                 DEFINITIONS:
// =================================================================================================================

// Região e coleção do Sentinel
// -----------------------------------------------------------------------
var regiao = 3;
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
var classes_list = [12 //3,11, 12, 21, 22, 33, 29
];

// Define a versão do s2 anterior para plotar nos gráficos
var versao_ante = "3"; // verificar pois correponde a uma tabela de áreas exportadas anteriomente

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

    // Define o percentual de cada classe
  if (ano <= 2018){
  //var percent_Flo = -34.57 + 12 + ano * 0.01985
  var percent_Flo = 17
  // var percent_Umi =  -2.06 + desvio + ano * 0.00125
  var percent_Umi = 2 
  //var percent_Cam = 416.10 + 8 + ano *-0.16821
  var percent_Cam = 60
  //var percent_Agr =-236.11 + 6 + ano * 0.12384
  var percent_Agr = 35
  var percent_Anv = 10
  // var percent_Anv =   0.64 + desvio + ano *-0.00003
  // var percent_Afr =   1.05 + desvio + ano *-0.00015
  //var percent_Afr = 9
  // var percent_Agu = -45.08 + desvio + ano * 0.02347
  var percent_Agu = 20
  }
  
  if (ano > 2018 && ano <= 2021){ 
  //var percent_Flo = -34.57 + 12 + ano * 0.01985
  var percent_Flo = 18
  // var percent_Umi =  -2.06 + desvio + ano * 0.00125
  var percent_Umi = 2 
  //var percent_Cam = 416.10 + 4 + ano *-0.16821
  var percent_Cam = 60
  //var percent_Agr =-236.11 + 10 + ano * 0.12384
  var percent_Agr = 35
  var percent_Anv = 11
  // var percent_Anv =   0.64 + desvio + ano *-0.00003
  // var percent_Afr =   1.05 + desvio + ano *-0.00015
  //var percent_Afr = 8
  // var percent_Agu = -45.08 + desvio + ano * 0.02347
  var percent_Agu = 20
  }
  
  if (ano > 2021){
  //var percent_Flo = -34.57 + 12 + ano * 0.01985
  var percent_Flo = 18
  // var percent_Umi =  -2.06 + desvio + ano * 0.00125
  var percent_Umi = 2 
  //var percent_Cam = 416.10 + 4 + ano *-0.16821
  var percent_Cam = 60
  // var percent_Agr =-236.11 + 34 + ano * 0.12384
  var percent_Agr = 35
  var percent_Anv = 11
  // var percent_Anv =   0.64 + desvio + ano *-0.00003
  // var percent_Afr =   1.05 + desvio + ano *-0.00015
  //var percent_Afr = 8
  // var percent_Agu = -45.08 + desvio + ano * 0.02347
  var percent_Agu = 20
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
  //var SS_Afr = SS_amostrasF.filter(ee.Filter.eq('reference', 29))
  var SS_Agu = SS_amostrasF.filter(ee.Filter.eq('reference', 33))

  var n_samples_Flo = ee.Number(SS_Flo.size().multiply(percent_Flo).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Umi = ee.Number(SS_Umi.size().multiply(percent_Umi).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Cam = ee.Number(SS_Cam.size().multiply(percent_Cam).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Agr = ee.Number(SS_Agr.size().multiply(percent_Agr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Anv = ee.Number(SS_Anv.size().multiply(percent_Anv).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  //var n_samples_Afr = ee.Number(SS_Afr.size().multiply(percent_Afr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  var n_samples_Agu = ee.Number(SS_Agu.size().multiply(percent_Agu).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
  
  // Seleciona a quantidade de amostras
  var SS_Flo_samples = SS_Flo.randomColumn().sort('random').limit(n_samples_Flo)
  var SS_Umi_samples = SS_Umi.randomColumn().sort('random').limit(n_samples_Umi)
  var SS_Cam_samples = SS_Cam.randomColumn().sort('random').limit(n_samples_Cam)
  var SS_Agr_samples = SS_Agr.randomColumn().sort('random').limit(n_samples_Agr)
  var SS_Anv_samples = SS_Anv.randomColumn().sort('random').limit(n_samples_Anv)
  //var SS_Afr_samples = SS_Afr.randomColumn().sort('random').limit(n_samples_Afr)
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
          //.merge(SS_Afr_samples)
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
              //.merge(arocho)
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
  //var SS_29 = training.filter(ee.Filter.eq('reference', 29))
  var SS_33 = training.filter(ee.Filter.eq('reference', 33))          
 
  var dict = ee.Dictionary();
  if (Quantidade_amostras == 1){
        dict = dict.set('03-Floresta', SS_03.size());
        dict = dict.set('11-Área Pantanosa',SS_11.size());
        dict = dict.set('12 - F. Campestre', SS_12.size());
        dict = dict.set('21 - Mosaico de Usos', SS_21.size());
        dict = dict.set('22 - ANV',SS_22.size());
        //dict = dict.set('29 - Afl.Rochoso',SS_29.size());
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
var col_Sentinel = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/03_Emb_RF17a24_v03')
  .mask(mask_regiao)
  .select('classification_'+ano_compara)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)
// print(col_beta, "S2 Col2")

var class_atual = classified16a23.select('classification_'+ano_compara)

// Coleção para comparar                 
Map.addLayer(col_Sentinel, vis, 'Sentinel Col3v03 - ' + ano_compara, false)
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
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/areas_col10L_col2S_col3S_v01_v01_r3'

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