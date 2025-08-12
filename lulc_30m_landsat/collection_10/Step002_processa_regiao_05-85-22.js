/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = 
    /* color: #ea9999 */
    /* shown: false */
    ee.FeatureCollection([]),
    arocho = 
    /* color: #ff8c00 */
    /* shown: false */
    ee.FeatureCollection([]),
    agua = 
    /* color: #0000ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.40016980053829, -29.103490960744956]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39493412854122, -29.10254415804903]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.394891213196985, -29.106115714756466]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.398914526719324, -29.10501895068604]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.399912308472864, -29.103865929701996]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.393399904984705, -29.103875303908428]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.36120035239142, -29.11207011653668]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.36377527304572, -29.105377248777465]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.36525585242194, -29.11186390022049]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.412371638301934, -29.669619136176653]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.500755789760674, -29.71805505339587]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.42098607441739, -29.62941410155131]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.44199313542203, -29.625944789626214]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.37760970383389, -29.618948108315994]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.37869331627591, -29.621643550844958]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34688988936047, -29.585524230761674]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34683624518017, -29.584731177037607]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34632126104931, -29.58229599665599]),
            {
              "reference": 33,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.241607371264344, -29.248238234908026]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22744530766571, -29.22554458774338]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.227616969042664, -29.22576930197708]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.486481099621805, -29.234907701370542]),
            {
              "reference": 33,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.48431387473777, -29.23569412711323]),
            {
              "reference": 33,
              "system:index": "22"
            })]),
    floresta = 
    /* color: #006400 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.59583032031706, -29.481322618574602]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.597031949955735, -29.474112171388985]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59634530444792, -29.47409349080788]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.60070121188811, -29.4707496113382]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59767568011931, -29.470338624128143]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.595776676136765, -29.475461834264443]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59543335338286, -29.47645188695515]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59333050151518, -29.476638688265275]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59418880839995, -29.473930035576455]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.5734329276112, -28.852739187497644]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56933188198097, -28.871330877906857]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56941771266945, -28.871622132067166]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56912803409584, -28.872448913622726]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73166115781347, -29.33860759328956]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.727273063865105, -29.345949236211215]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.865188301698645, -29.59415394049221]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86500591148563, -29.59355686933524]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86629337181278, -29.597857568564354]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.864694775239904, -29.597615017738388]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87821859774898, -29.61356663029002]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87822932658504, -29.614471385337442]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87972063479732, -29.61524555073487]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.879677719453085, -29.615581331468118]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88181275782894, -29.614900441593402]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8813192313702, -29.615133623575204]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87475318370174, -29.615394786754404]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87448496280025, -29.614350129977595]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.968077807776474, -28.60578666325499]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96921506439879, -28.60514615456966]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96921506439879, -28.602301495288422]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96127572571471, -28.604430287300524]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.965331225745224, -28.605240347268275]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96668305908873, -28.60529686284692]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.977519183508896, -28.608084926981793]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.977776675574326, -28.605598278752883]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.97646775757506, -28.609554282360275]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.974064498297714, -28.61091059216001]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.975781112067246, -28.6107787294758]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.97288995360089, -28.60114493871146]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95474679096517, -28.607307637428338]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95396358593282, -28.608061161149703]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95348078831014, -28.608381407094637]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95910269840535, -28.6045572299799]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95584113224324, -28.605395546727923]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.97393755639764, -28.6142593568927]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.97305779184075, -28.617555765091538]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.97303633416863, -28.611659830604317]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96344475473138, -28.628668607332084]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96438889230462, -28.63047668733639]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.961728140961846, -28.633113414842516]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.961256072175225, -28.634959084680276]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.94601050892681, -28.613959058363974]),
            {
              "reference": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.94411150494427, -28.613450459002863]),
            {
              "reference": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.943435588272514, -28.61286650855105]),
            {
              "reference": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.94958321133465, -28.613516388688616]),
            {
              "reference": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99361063620837, -28.944314306160933]),
            {
              "reference": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99152924201282, -28.944229807805826]),
            {
              "reference": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98798872611316, -28.94464291022014]),
            {
              "reference": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98602534911426, -28.944042033436595]),
            {
              "reference": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.52797122856111, -30.187370290865644]),
            {
              "reference": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.49921794792146, -30.17468284426331]),
            {
              "reference": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.493038138351146, -30.180692891063366]),
            {
              "reference": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.52822872062654, -30.19486327827427]),
            {
              "reference": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.53071781059236, -30.18484777080573]),
            {
              "reference": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.51432414909333, -30.18477357806132]),
            {
              "reference": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50999313803352, -30.19000471121688]),
            {
              "reference": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50737530203499, -30.190969161310196]),
            {
              "reference": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.45684291272618, -30.20437624864358]),
            {
              "reference": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.45615626721837, -30.20393117961693]),
            {
              "reference": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.45431090741612, -30.20252178108905]),
            {
              "reference": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.46053363233067, -30.20623068125855]),
            {
              "reference": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16884499278392, -30.206676920098047]),
            {
              "reference": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16882889952983, -30.207251784507502]),
            {
              "reference": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16802960124339, -30.20558281404193]),
            {
              "reference": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16722836448653, -30.20888497196007]),
            {
              "reference": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16810008241637, -30.209448233756543]),
            {
              "reference": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16779201306748, -30.215613667244668]),
            {
              "reference": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16694443501878, -30.21504812292978]),
            {
              "reference": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16638117112565, -30.214765349553215]),
            {
              "reference": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16590910233903, -30.214510389254652]),
            {
              "reference": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48880154467454, -29.562027356747038]),
            {
              "reference": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48879886246552, -29.561777720658792]),
            {
              "reference": 3,
              "system:index": "81"
            })]),
    aumi = 
    /* color: #45c2a5 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.76367741969498, -29.587325812731056]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.76659566310318, -29.59150549474912]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.76041585353287, -29.59225184831875]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.160391655979254, -29.04170800627537]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.143397179660894, -29.041407850235053]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.14442714792261, -29.04215823869877]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.184080925998785, -29.024897923599713]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18545421701441, -29.02774982685812]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21897884261845, -28.996637825412346]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21387191665409, -28.995661889312945]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.209322890164835, -28.990181461639374]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20691963088749, -28.98931808010996]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22219749343632, -29.000729149552086]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.223270377042276, -28.999528043660536]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.16010597968282, -29.040442751524036]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1595266225356, -29.041455784135415]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.159419334175006, -29.040442751524036]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15757397437276, -29.038810622509793]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.158410823585406, -29.03817277197184]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15802458548726, -29.040142591803356]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15828207755269, -29.041193147005934]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.159419334175006, -29.043294225324498]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1610930326003, -29.043650654008992]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89356981337232, -28.88951416152228]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87417207777662, -28.878241152719067]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87219797194166, -28.874934171386787]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.880781040789316, -28.892219501555946]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.894771443010995, -28.894999916468695]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.90069376051588, -28.89236979615767]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.90996347487135, -28.89312126590275]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.920778141619394, -28.891994059245455]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88472925245924, -28.889965056422927]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.875030384661386, -28.878917567750822]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34754416933681, -29.391488074414763]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34867069712306, -29.391123505954145]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.353112435251724, -29.392123729118246]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.33848903170253, -29.39489065037023]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.32263508207819, -29.402826910607352]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.32017817862055, -29.404013953663462]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.879929551370545, -28.883469374837542]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.872891434915466, -28.906839541371298]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88877011228363, -28.892637720002817]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88808346677582, -28.893163748038027]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88147450376312, -28.87896005569676]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.914347657449646, -28.90466055213596]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18693163837686, -29.003976462506824]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.18504336323038, -29.002700327128654]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.183584241526276, -29.001198971216194]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17379954303995, -29.020865004976358]),
            {
              "reference": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.176374463694245, -29.0213903820128]),
            {
              "reference": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.17319872822061, -29.023491863431197]),
            {
              "reference": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.96556602441721, -29.026575526035316]),
            {
              "reference": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.9612959476655, -29.027100874018725]),
            {
              "reference": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.17255389931867, -30.05243908439928]),
            {
              "reference": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.06877982416712, -30.009757030297706]),
            {
              "reference": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09384238520228, -30.013696137197158]),
            {
              "reference": 11,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.05080394650091, -29.998984617171086]),
            {
              "reference": 11,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.049763249403135, -29.99766520977097]),
            {
              "reference": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.04984908009161, -29.998250582824486]),
            {
              "reference": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.24505947294639, -30.206496947055935]),
            {
              "reference": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89260486167156, -28.943217162032983]),
            {
              "reference": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89522269767009, -28.94900050246284]),
            {
              "reference": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.898140941078296, -28.947911456537877]),
            {
              "reference": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.892905269081226, -28.9459211016428]),
            {
              "reference": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.210201280639225, -30.153255689538316]),
            {
              "reference": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.208441751525456, -30.15281038953182]),
            {
              "reference": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.20662857823139, -30.152253761696507]),
            {
              "reference": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.20575954251056, -30.151149773863047]),
            {
              "reference": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.21337701611286, -30.15383086573777]),
            {
              "reference": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.21187497906452, -30.15524096093778]),
            {
              "reference": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19454149857645, -28.998597590194084]),
            {
              "reference": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.194369837199496, -29.00291403829745]),
            {
              "reference": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19029287949686, -29.00482823149738]),
            {
              "reference": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.167728630188996, -29.025949272643537]),
            {
              "reference": 11,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.164982048157746, -29.023247424405994]),
            {
              "reference": 11,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87437433322151, -28.883792850072847]),
            {
              "reference": 11,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.873237076599196, -28.882909793239293]),
            {
              "reference": 11,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.872013989288405, -28.88206430625686]),
            {
              "reference": 11,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.870790901977614, -28.88136912291549]),
            {
              "reference": 11,
              "system:index": "78"
            })]),
    campo = 
    /* color: #b8af4f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.63603951919537, -28.83197040567143]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63861443984967, -28.83234635960013]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64204766738873, -28.832647121765344]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63904359329205, -28.835203565078515]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64043700398194, -28.842041401789846]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.639492866408695, -28.842417319335503]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.637218353164066, -28.833921251295088]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63953578175293, -28.83294378304666]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.640737411391605, -28.830312092134154]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.645868367061986, -28.82707413976619]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64682323347129, -28.82738431644495]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64704853902854, -28.828098659220338]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64760643850364, -28.828812997093863]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.648368185863866, -28.829489733715473]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.646683758602514, -28.826246997437995]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65568617015407, -28.83310774662036]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65517118602321, -28.83077682742325]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.835378318239314, -28.533294561081835]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83271756689654, -28.534576449610828]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83846822302447, -28.531183181276404]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84022775213824, -28.531786436965856]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83696618597613, -28.52846848794227]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.848965902297344, -28.535938397445765]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84939505573973, -28.535617930917557]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85025336262449, -28.535184357004535]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85636032401016, -28.531477961655845]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85683239279678, -28.53268446620683]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85558784781387, -28.533136901852327]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.857046969517974, -28.534795815933503]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85839880286148, -28.53215662216538]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.61207032368259, -29.50971719331019]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.613379241681855, -29.509922607265395]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.61550355122165, -29.509922607265395]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59091684870041, -29.482660840165053]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59042332224167, -29.48225924078515]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59060571245468, -29.48182028150299]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59046712380902, -29.47020645690473]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.588332085433166, -29.46845974039999]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.589083103957336, -29.47057074158149]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58553376779148, -29.462512516132346]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58710017785618, -29.463577425379235]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58810868844578, -29.464885193367486]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5909564954626, -29.46687435859632]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.591578767954054, -29.46848099038065]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.592050836740675, -29.470330453590435]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.582455367031194, -29.518851246448417]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58603879827509, -29.5200836127021]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58653232473383, -29.522044164445653]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.584214896144964, -29.522230881678073]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.582197874965765, -29.521147916933675]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.592171707681175, -29.513653036360978]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59148506217336, -29.515258926455985]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36298092983431, -30.075569088252188]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.35997685573763, -30.076237560001182]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.35890397213167, -30.076089011113957]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.357058612329425, -30.076757479350036]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.35615739010042, -30.076126148356668]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36710080288118, -30.077648763305554]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36615666530794, -30.077537353250232]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36195096157259, -30.081028142024927]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.360534755212726, -30.07646038291383]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33630847671983, -30.058963094205534]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33905505875108, -30.058963094205534]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.341612836640245, -30.096031880534163]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33955290011681, -30.09781409302156]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33697797946251, -30.101749698434038]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33474638156212, -30.103754569241666]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.3307981698922, -30.102789266151945]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33320142916954, -30.10071011978144]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33131315402306, -30.10494262163922]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.376633216055794, -30.149645821547633]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.40668370693408, -30.162101234697477]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.275196361205616, -30.163839620874867]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.990102306816894, -28.94598548169046]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99413634917529, -28.946304691927352]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98995210311206, -28.94689616711943]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98913671157153, -28.946605124192992]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.47003551383943, -30.211479354344426]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.47896190544099, -30.210292584793223]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.48265262504548, -30.210218411221025]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.48977657218904, -30.20257823384791]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.49801631828279, -30.20450687827175]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50196452995271, -30.201391356958]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.49750133415193, -30.199759377868272]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50110622306794, -30.204877767097717]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.52565379997224, -30.192415137175022]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.497329672774974, -30.18143484672663]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.498273810348216, -30.191376513472196]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50574108024568, -30.184254227285766]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.0568892654708, -29.887290242095204]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.054571836881934, -29.895178008407214]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.05422851412803, -29.891085377384655]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09465476840049, -29.90001453748621]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09182235568076, -29.899493691787324]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.16795449939097, -30.205833161416027]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24508546851785, -29.388526624403696]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24757455848367, -29.385161229471755]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.248690357433865, -29.384712501736495]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24654459022195, -29.385609955228006]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22568773292215, -29.38531080494373]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.2284343149534, -29.385909104632702]),
            {
              "reference": 12,
              "system:index": "100"
            })]),
    agric = /* color: #ffefc3 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.747671423791566, -28.962983340810624]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7438948734986, -28.956825279143793]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.74183493697516, -28.953520802382236]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.729475317834535, -28.963734298882933]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.735740958093324, -28.962457666918695]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.740204153894105, -28.961631602552668]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.742950735925355, -28.964335061418492]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73908835494391, -28.965536576029944]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.72312384688727, -28.954046521647633]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.72501212203375, -28.955398358932516]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77633887374274, -28.9543469314582]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.27844939862517, -30.090943674706523]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.27364288007048, -30.090646620880527]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87387486273081, -28.81267628543875]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.871686180174656, -28.813841954178148]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89232846075327, -28.8175644863486]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.894216735899754, -28.809555237177207]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.81460877233774, -28.842227599814027]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8151237564686, -28.83944577274018]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91760559850962, -28.814105167894574]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.83383484655649, -28.761072983691694]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.89013977819712, -28.745270950933655]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.884474952757664, -28.74195974585285]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88850899511606, -28.741207184606452]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.94476700816138, -28.62870848699865]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38356629736345, -29.207579571540013]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.38614121801775, -29.212224379975606]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.40639726049822, -29.16786536165512]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.67301635113708, -29.562855886399163]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.674389642152704, -29.56427435596451]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.66932563153259, -29.58584756842846]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.67275885907165, -29.58763890816325]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.710352700624384, -29.62196677272211]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.715073388490595, -29.62689111625711]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.71301345196716, -29.625846578648463]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.70176635360705, -29.49444615568358]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.69472823715197, -29.492354328981428]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.72871718978869, -29.492354328981428]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.72339568710314, -29.49071072055482]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.74794326400744, -29.45902869534262]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.75086150741564, -29.459776026915385]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.05751476783533, -28.944029379613408]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.0592742969491, -28.941550725741614]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.22031549821589, -30.216056969279045]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.30872110734675, -30.23963994683259]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.29927973161433, -30.23845351705881]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.32743219743464, -30.224511894582328]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.20111416044639, -30.213914308025192]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.97663805680335, -29.032812866094186]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98075792985023, -29.02740945813815]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.97749636368812, -29.022756296898198]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.8775894423014, -28.97441106451847]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88806078629554, -28.975011765081305]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.930632807779915, -28.96990569914242]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.935610987711556, -29.035814637193877]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.94127581315101, -29.033263137324255]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.9380142469889, -29.023957132776097]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.367162158211265, -29.502713139539484]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.36651842804769, -29.504132452907704]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.36278479309896, -29.507195113968017]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.36651842804769, -29.506634878014683]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.26091866525907, -29.36402444620873]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.25765709909696, -29.35444917083005]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.250790644018835, -29.351456712677397]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.253022241919226, -29.3489130541411]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34186973735937, -29.315701995097836]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.343414689751945, -29.3186955028624]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.333200837823235, -29.319369030005234]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.32401695415624, -29.316899408743193]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.09081346292177, -29.25503755480678]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.1031730820624, -29.250544461410957]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.106262986847554, -29.249496044556803]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.10789376992861, -29.253090571898248]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.10042650003115, -29.25735890907111]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.10420305032412, -29.253390110142387]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.101027314850484, -29.247024733749665]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.088753526398335, -29.254213835791177]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.10454637307802, -29.259081170125228]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.056122199596686, -29.26903183933502]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.05732382923536, -29.270229800286135]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.05526389271192, -29.270080055934976]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.056637183727545, -29.273973337773022]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.057152167858405, -29.276069658877894]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.11573180557777, -29.27493970900762]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.12358875518221, -29.285380331629362]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.158009782753844, -29.270688897020346]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15886808963861, -29.27368372452735]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15629316898431, -29.27308476604562]),
            {
              "reference": 21,
              "system:index": "87"
            })]),
    geom_limite = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-57.10963363602638, -29.72244733597707],
          [-57.20851058915138, -29.74391214915905],
          [-57.338973235635756, -29.83687322830388],
          [-57.34858627274513, -29.96425612510744],
          [-57.418624114542006, -30.002320288217174],
          [-57.498274993448256, -30.098604944176245],
          [-57.59577865555763, -30.154430872563378],
          [-57.671309661417006, -30.15680574367729],
          [-57.68092269852638, -30.193608930987157],
          [-57.616378020792006, -30.24582210206785],
          [-57.550460052042006, -30.300378950079434],
          [-57.413130950479506, -30.326460632535035],
          [-57.223616790323256, -30.31460618285886],
          [-57.146712493448256, -30.288521345515402],
          [-57.12885971024513, -30.20785163511428],
          [-57.09040756180763, -30.15680574367729],
          [-57.039595794229506, -30.125927959290568],
          [-56.932479095010756, -30.1199888162558],
          [-56.98329086258888, -29.993994999334994],
          [-56.91875682664129, -29.881302092425834],
          [-56.96270213914129, -29.778847210749955],
          [-56.92150340867254, -29.738312834716936],
          [-56.76220165086004, -29.707304900038988],
          [-56.61388622117254, -29.654808118044297],
          [-56.58092723679754, -29.690604352375114],
          [-56.53423534226629, -29.76454283262384],
          [-56.38042674851629, -29.757389877544984],
          [-56.27056346726629, -29.630936884885795],
          [-56.21563182664129, -29.564067338940752],
          [-56.14971385789129, -29.618999146275378],
          [-56.06182323289129, -29.642873208925547],
          [-55.95195995164129, -29.61422365482996],
          [-55.80089793992254, -29.87653907925772],
          [-55.67180858445379, -29.867012370513063],
          [-55.51525340867254, -29.75500544572007],
          [-55.52074657273504, -29.659581685435484],
          [-55.38616405320379, -29.616611428835665],
          [-55.35876418810538, -29.537753375055413],
          [-55.52074657273504, -29.418233960634495],
          [-55.61138377976629, -29.348829786160504],
          [-55.57018504929754, -29.173913468833614],
          [-55.49053417039129, -29.171515278898937],
          [-55.45208202195379, -29.130737478866838],
          [-55.46306835007879, -29.02031646529382],
          [-55.36968456101629, -29.013110986587197],
          [-55.32299266648504, -28.91698994230633],
          [-55.58666454148504, -28.690754855879327],
          [-55.34771190476629, -28.676297657790602],
          [-55.33397899461004, -28.606393081078433],
          [-55.74596629929754, -28.34323265838959],
          [-55.88878856492254, -28.331145370428434],
          [-56.06731639695379, -28.480930438599607],
          [-56.09203563523504, -28.596747416174015],
          [-56.32549510789129, -28.760603161698135],
          [-56.34746776414129, -28.854463438191658],
          [-56.62212596726629, -29.094743629794404],
          [-57.10552440476629, -29.683446124957285]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Coleção 10
// Script para fazer ajuste fino da classificação das regiões
// Para rodar veja instruções no final do arquivo																				
//baseado na versao R0X feita pelo Juliano, customizada para calcular a area pelo limite sem buffer
//customizada para incluir mosaico 2017 com duas versões de bandas RGB falsa cor
      
var version_out = '09'//mudar a cada nova versao que for exportada
var version = '2' //versão dos mosaicos
var version_samples = '02'
var ano_base = 2000
var RFtrees = 100 //60, 100
var classe_diferenca = 21 // classe para mapa de diferenças

var desvio = 0; // desvio para calculo de balanceamento de amostras															  
var nSamplesMin = 150;
var nSamplesMax = 2000;

// Bloco dos ano para colocar no nome de saída
var bloco = '_85-22'
var regiao = 5
var collection_out = 10
var bioma = 'PAMPA'
 
//conjunto de flags para ativar e desativar recursos de processamento
//*****************************************
//definir com 1 para usar e como zero para não usar
var importar_estaveis = 1    //definir com 1 para importar e como zero para gerar a partir de pontos estaveis
var usar_complementares = 1

var debug = 1   //variavel para uso de debug, habilita os prints e os addLayers
var calcula_acuracia = 1
var calcula_area = 1 
var ano_calcula_area = '1989'
var calcula_confusao = 1 //se calcula acuracia igual a zero esse é ignorado
var exporta_colecao = 1//ativar a geometria do bioma antes de dar o Run
var exporta_prob = 0
//*************************************

var dirasset =  'projects/nexgenmap/MapBiomas2/LANDSAT/BRAZIL/mosaics-2-pampa';

// Pontos estaveis com propriedades
var dirsamples = 'projects/mapbiomas-workspace/AMOSTRAS/col9/PAMPA/SAMPLES/v' + version_samples + '/training_periodos_'

// Local de saída da coleção
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + collection_out + '/GENERAL/classification-pam/'

var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')
var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);

//limite sem o buffer  
var regioesCollection2 = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col05')
var limite2 = regioesCollection2.filterMetadata('ID', 'equals', regiao);

var limite_reg_raster = ee.Image().uint32().paint({
    featureCollection: limite,
    color: 'ID',
}).rename(['limite']);

var diferenca = require('users/schirmbeckj/MapBiomas:Coll07/Passo100_Mapa_Diferencas_Classe_v02.js').diferenca
var vischange = {"min": 0, "max": 3,
        "palette": "ffffff,ff0000,e6f919,aaaaaa",    //amarelo=e6f919    magenta=bb34c0
        "format": "png"
  }
    
if (exporta_colecao == 1){
  debug = 0
  limite = geom_limite
  var anos = [
    1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,
    1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,
    2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,
    2015,2016,2017,2018,2019,2020,2021,2022
    ];
							
}else
{
    var anos = [1985,1989,2014]
    limite = limite.geometry()
}

var palettes = require('users/mapbiomas/modules:Palettes.js');

//nomes bandas
{var bandNames = ee.List([
'evi2_amp',
'gv_amp',
'ndfi_amp',
'ndvi_amp',
'ndwi_amp',
'soil_amp',
'wefi_amp',
'blue_median',
'blue_median_dry',
'blue_median_wet',
'cai_median',
'cai_median_dry',
'cloud_median',
'evi2_median',
'evi2_median_dry',
'evi2_median_wet',
'gcvi_median',
'gcvi_median_dry',
'gcvi_median_wet',
'green_median',
'green_median_dry',
'green_median_wet',
'green_median_texture',
'gv_median',
'gvs_median',
'gvs_median_dry',
'gvs_median_wet',
'hallcover_median',
'latitude', //calculada no script
'longitude', //calculada no script
'ndfi_median',
'ndfi_median_dry',
'ndfi_median_wet',
'ndvi_median',
'ndvi_median_dry',
'ndvi_median_wet',
'ndvi_amp_3y', //calculada no script
'ndwi_median',
'ndwi_median_dry',
'ndwi_median_wet',
'nir_median',
'nir_median_dry',
'nir_median_wet',
'npv_median',
'pri_median',
'pri_median_dry',
'pri_median_wet',
'red_median',
'red_median_dry',
'red_median_wet',
'savi_median',
'savi_median_dry',
'savi_median_wet',
'sefi_median',
'sefi_median_dry',
'shade_median',
'soil_median',
'swir1_median',
'swir1_median_dry',
'swir1_median_wet',
'swir2_median',
'swir2_median_dry',
'swir2_median_wet',
'wefi_median',
'wefi_median_wet',
'blue_min',
'green_min',
'nir_min',
'red_min',
'swir1_min',
'swir2_min',
'blue_stdDev',
'cai_stdDev',
'cloud_stdDev',
'evi2_stdDev',
'gcvi_stdDev',
'green_stdDev',
'gv_stdDev',
'gvs_stdDev',
'hallcover_stdDev',
'ndfi_stdDev',
'ndvi_stdDev',
'ndwi_stdDev',
'nir_stdDev',
'red_stdDev',
'savi_stdDev',
'sefi_stdDev',
'shade_stdDev',
'soil_stdDev',
'swir1_stdDev',
'swir2_stdDev',
'wefi_stdDev',
'slope'
]);

var bandNamesShort = ee.List([
'evi2_a',
'gv_a',
'ndfi_a',
'ndvi_a',
'ndwi_a',
'soil_a',
'wefi_a',
'blue_m',
'blue_m_d',
'blue_m_w',
'cai_m',
'cai_m_d',
'cloud_m',
'evi2_m',
'evi2_m_d',
'evi2_m_w',
'gcvi_m',
'gcvi_m_d',
'gcvi_m_w',
'green_m',
'green_m_d',
'green_m_w',
'green_m_t',
'gv_m',
'gvs_m',
'gvs_m_d',
'gvs_m_w',
'hallcov_m',
'lat', //calculada no script
'long', //calculada no script
'ndfi_m',
'ndfi_m_d',
'ndfi_m_w',
'ndvi_m',
'ndvi_m_d',
'ndvi_m_w',
'ndvi_a_3y', //calculada no script
'ndwi_m',
'ndwi_m_d',
'ndwi_m_w',
'nir_m',
'nir_m_d',
'nir_m_w',
'npv_m',
'pri_m',
'pri_m_d',
'pri_m_w',
'red_m',
'red_m_d',
'red_m_w',
'savi_m',
'savi_m_d',
'savi_m_w',
'sefi_m',
'sefi_m_d',
'shade_m',
'soil_m',
'swir1_m',
'swir1_m_d',
'swir1_m_w',
'swir2_m',
'swir2_m_d',
'swir2_m_w',
'wefi_m',
'wefi_m_w',
'blue_min',
'green_min',
'nir_min',
'red_min',
'swir1_min',
'swir2_min',
'blue_sD',
'cai_sD',
'cloud_sD',
'evi2_sD',
'gcvi_sD',
'green_sD',
'gv_sD',
'gvs_sD',
'hallcov_sD',
'ndfi_sD',
'ndvi_sD',
'ndwi_sD',
'nir_sD',
'red_sD',
'savi_sD',
'sefi_sD',
'shade_sD',
'soil_sD',
'swir1_sD',
'swir2_sD',
'wefi_sD',
'slope'
])}

var vis = {'min': 0, 'max': 62,  'palette': palettes.get('classification8')};
var visParMedian = {'bands':['swir1_m','nir_m','red_m'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
var visParMedian2 = {'bands':['nir_m','swir1_m','red_m'], 'gain':[0.06, 0.08,0.2],'gamma':0.5 };

var mosaicos = ee.ImageCollection(dirasset)
                  .filterMetadata('biome', 'equals', bioma)
                  .filterMetadata('version', 'equals', version)
//print('mosaicos',mosaicos)

var deficit_amostras = ee.Feature(ee.Geometry.Point([0, 0]))

for (var i_ano=0;i_ano<anos.length; i_ano++){
  var ano = anos[i_ano];

  //Bloca 1A
  if (ano <= 1987){ // ajustar para período 1
    var percent_Flo = 15
    var percent_Umi = 10
    var percent_Cam = 63
    var percent_Agr = 30
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 1B 
  if (ano > 1987 && ano <= 1992){// ajustar para período 2
  var percent_Flo = 15
    var percent_Umi = 6
    var percent_Cam = 45
    var percent_Agr = 42
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 1C
  if (ano > 1992 && ano <= 1997){// ajustar para período 2
   var percent_Flo = 22
    var percent_Umi = 11
    var percent_Cam = 50
    var percent_Agr = 40
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2Aa1
  if (ano > 1997 && ano <= 2001){// ajustar para período 2
  var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 53
    var percent_Agr = 38
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2Aa2
  if (ano > 2001 && ano <= 2005){// ajustar para período 2
  var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 55
    var percent_Agr = 38
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2A
  if (ano > 2005 && ano <= 2008){// ajustar para período 2
   var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 42
    var percent_Agr = 45
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2B
  if (ano > 2008 && ano <= 2012){// ajustar para período 2
    var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 42
    var percent_Agr = 45
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 3A
  if (ano > 2012 && ano <= 2019){// ajustar para período 2
  var percent_Flo = 20
    var percent_Umi = 10
    var percent_Cam = 43
    var percent_Agr = 45
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 3Ba
  if (ano > 2019 && ano <= 2022){ // ajustar para período 3
   var percent_Flo = 20
    var percent_Umi = 12
    var percent_Cam = 45
    var percent_Agr = 45
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
 
  
  var mosaicoTotal =   mosaicos.filterMetadata('year', 'equals', ano)
                      .filterBounds(limite)
                      .mosaic()
  if (ano == 1985){//usa o valor do ano como apmlitude
      //var amp3anos = max3anos.subtract(min3anos).rename('amp_ndvi_3anos')
      var min3anos = mosaicoTotal.select('ndvi_median_dry')
      var max3anos = mosaicoTotal.select('ndvi_median_wet')
  }
  if (ano == 1986){//usa os 2 anos anteriores como amplitude
    //var amp3anos = max3anos.subtract(min3anos).rename('amp_ndvi_3anos')
    var mosaico1ano_antes = mosaicos.filterMetadata('year', 'equals', ( ano - 1))
                    .filterBounds(limite)
                    .mosaic()
    var min3anos = ee.ImageCollection.fromImages([mosaicoTotal.select('ndvi_median_dry'),
                                                mosaico1ano_antes.select('ndvi_median_dry')]).min()
    var max3anos = ee.ImageCollection.fromImages([mosaicoTotal.select('ndvi_median_wet'),
                                                mosaico1ano_antes.select('ndvi_median_wet')]).max()
  }
  if (ano > 1986){
    var mosaico1ano_antes = mosaicos.filterMetadata('year', 'equals', ( ano - 1))
                    .filterBounds(limite)
                    .mosaic()
    var mosaico2anos_antes = mosaicos.filterMetadata('year', 'equals', ( ano - 2))
                    .filterBounds(limite)
                    .mosaic()
    var min3anos = ee.ImageCollection.fromImages([mosaicoTotal.select('ndvi_median_dry'),
                                                mosaico1ano_antes.select('ndvi_median_dry'),
                                                mosaico2anos_antes.select('ndvi_median_dry')]).min()
    var max3anos = ee.ImageCollection.fromImages([mosaicoTotal.select('ndvi_median_wet'),
                                                mosaico1ano_antes.select('ndvi_median_wet'),
                                                mosaico2anos_antes.select('ndvi_median_wet')]).max()
  }
  var ndvi_a_3y = max3anos.subtract(min3anos).rename('ndvi_amp_3y')
 // print('ndvi_a_3y',ndvi_a_3y)

  //var ndvi_color = '0f330f, 005000, 4B9300, 92df42, bff0bf, FFFFFF, eee4c7, ecb168, f90000'
  //var visParNDFI_amp = {'min':0, 'max':60, 'palette':ndvi_color};
  //Map.addLayer(ndvi_a_3y, {}, 'ndvi_a_3y', true);
  mosaicoTotal = mosaicoTotal.addBands(ndvi_a_3y)

  var ll = ee.Image.pixelLonLat().mask(limite_reg_raster);
  
  var long = ll.select('longitude').add(0).multiply(-1).multiply(1000).toInt16()
  var lati = ll.select('latitude').add(0).multiply(-1).multiply(1000).toInt16()

  mosaicoTotal = mosaicoTotal.addBands(long.rename('longitude'))
  mosaicoTotal = mosaicoTotal.addBands(lati.rename('latitude' ))
  //print('mosaico',mosaicoTotal)

  mosaicoTotal = mosaicoTotal.select(bandNames,bandNamesShort)
  
  //if (debug == 1){Map.addLayer(mosaicoTotal, visParMedian, 'Img_Year_'+ano, false)}

  if (importar_estaveis == 1){
    
    var SS_amostras = ee.FeatureCollection(dirsamples + ano + '_FOc8v01')
         .filter(ee.Filter.lt('outlier', 20))
  //var SS_amostras = ee.FeatureCollection(dirsamples + ano + '_v' + version_samples)
  //print(SS_amostras.size())
    var SS_Flo = SS_amostras.filterMetadata('reference', 'equals', 3)
    var SS_Umi = SS_amostras.filterMetadata('reference', 'equals', 11)
    var SS_Cam = SS_amostras.filterMetadata('reference', 'equals', 12)
    var SS_Agr = SS_amostras.filterMetadata('reference', 'equals', 21)
    var SS_Anv = SS_amostras.filterMetadata('reference', 'equals', 22)
//    var SS_Afr = SS_amostras.filterMetadata('reference', 'equals', 29)
    var SS_Agu = SS_amostras.filterMetadata('reference', 'equals', 33)

    var n_samples_Flo = ee.Number(ee.Number(nSamplesMax).multiply(percent_Flo).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Umi = ee.Number(ee.Number(nSamplesMax).multiply(percent_Umi).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Cam = ee.Number(ee.Number(nSamplesMax).multiply(percent_Cam).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Agr = ee.Number(ee.Number(nSamplesMax).multiply(percent_Agr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Anv = ee.Number(ee.Number(nSamplesMax).multiply(percent_Anv).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
//    var n_samples_Afr = ee.Number(ee.Number(nSamplesMax).multiply(percent_Afr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Agu = ee.Number(ee.Number(nSamplesMax).multiply(percent_Agu).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)

    var SS_Flo_samples = SS_Flo.randomColumn().sort('random').limit(n_samples_Flo)
    var SS_Umi_samples = SS_Umi.randomColumn().sort('random').limit(n_samples_Umi)
    var SS_Cam_samples = SS_Cam.randomColumn().sort('random').limit(n_samples_Cam)
    var SS_Agr_samples = SS_Agr.randomColumn().sort('random').limit(n_samples_Agr)
    var SS_Anv_samples = SS_Anv.randomColumn().sort('random').limit(n_samples_Anv)
//    var SS_Afr_samples = SS_Afr.randomColumn().sort('random').limit(n_samples_Afr)
    var SS_Agu_samples = SS_Agu.randomColumn().sort('random').limit(n_samples_Agu)

//    print('SS_Flo_samples',SS_Flo_samples)
//    print('SS_Flo',SS_Flo)
//    Map.addLayer(SS_Flo,{color:'0000ff'},'todos')
//    Map.addLayer(SS_Flo_samples,{color:'ff0000'},'selecao')
    
    //cria variavel com todas as amostras estáveis
    var SS_amostras = SS_Flo_samples
            .merge(SS_Umi_samples)
            .merge(SS_Cam_samples)
            .merge(SS_Agr_samples)
            .merge(SS_Anv_samples)
           // .merge(SS_Afr_samples)
            .merge(SS_Agu_samples)
	
    deficit_amostras = deficit_amostras.set(String(ano),[
      SS_Flo_samples.size().subtract(n_samples_Flo),
      SS_Umi_samples.size().subtract(n_samples_Umi),
      SS_Cam_samples.size().subtract(n_samples_Cam),
      SS_Agr_samples.size().subtract(n_samples_Agr),
      SS_Anv_samples.size().subtract(n_samples_Anv),
 //     SS_Afr_samples.size().subtract(n_samples_Afr),
      SS_Agu_samples.size().subtract(n_samples_Agu)])
  }  

   if(usar_complementares == 1){
  
    var pontos_complementares = floresta
                .merge(aumi)
                .merge(campo)
                .merge(agric)
                .merge(anv)
//                .merge(arocho)
                .merge(agua)
                
    // Samples 
    var trainingComp = mosaicoTotal.sampleRegions({
        'collection': pontos_complementares,
        'properties': ['reference'],
        'scale': 30,
        'tileScale': 4
    });
     var complementares = trainingComp.map(function (feature) {return feature.set('comp_coll', String(collection_out))});
  }
   
  if (usar_complementares == 0){
  var training = SS_amostras//.merge(complementares)
  }else{
    var training = SS_amostras.merge(complementares)
    //var training = complementares
  }  

  //classificador sem informações de importÂncia e arvores 
  //print(training)
  var classifier = ee.Classifier.smileRandomForest({numberOfTrees: RFtrees, variablesPerSplit:1}).train(training, 'reference', bandNamesShort);
  
  var classifier_prob = classifier.setOutputMode('MULTIPROBABILITY')
  
  var classified = mosaicoTotal.classify(classifier).mask(limite_reg_raster);
  var classified_prob = mosaicoTotal.classify(classifier_prob).mask(limite_reg_raster);
  var max_prob = classified_prob.arrayReduce(ee.Reducer.max(), [0]);
  var img_max_prob = max_prob.arrayFlatten([['classification']]).multiply(100)
  
  if (debug == 1){
    //print("Image_max_prob", img_max_prob)
    var imageVisParam3 = {"opacity":1,"bands":["classification"],"min":17.347148895263672,"max":99.36353302001953,"palette":["ffff55","38761d"]};
    Map.addLayer(img_max_prob, imageVisParam3, 'RF classified_prob', false)
  }

  classified = classified.select(['classification'],['classification_'+ano]).toInt8()
  //if (debug == 1){print('classified',classified)}

  if (i_ano == 0){ var classified_serie = classified;
                   var   classified_max_prob_serie = img_max_prob 
  }  
  else {classified_serie = classified_serie.addBands(classified); 
        classified_max_prob_serie = classified_max_prob_serie.addBands(img_max_prob);
  }

//
  if(debug == 1){
    //camadas usadas para o processo de coleta de amostras
    //ajsutar para coleção preliminar da versao 5
 
    // var img = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col' + collection_out + '/PAMPA/estabilidade_colecoes/pampa_colecoes_' + ano)
    // var estabilidadeMask = img.select('estabilidade').lte(1).selfMask().updateMask(limite_reg_raster);
    
    Map.addLayer(mosaicoTotal, visParMedian, 'Img_Year_' + String(ano), false)  
    
    //Coleção 09
    //ultima versão da coleção 9  sem filtros
    var colecao_ante_SF = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col9/PAMPA/class_col_9_mosaic/PAMPA_21_sem_filtro')
    //ultima versão da coleção 9  com filtros
    var colecao_ante_CF = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col9/PAMPA/class_col_9_mosaic/PAMPA_21_com_filtro_reclass')
      
    colecao_ante_SF = colecao_ante_SF.select('classification_'+ano).mask(limite_reg_raster);
    colecao_ante_CF = colecao_ante_CF.select('classification_'+ano).mask(limite_reg_raster);
      
    Map.addLayer(colecao_ante_SF, vis, 'Colecao 9 SF - ' +  ano, false)
    Map.addLayer(colecao_ante_CF, vis, 'Colecao 9 CF - ' +  ano, false)
  
  
    // //Coleção 10
    // var versao_anteSF = PREEEENCHER
    //   versao_anteSF = versao_anteSF.select('classification_'+ano).mask(limite_reg_raster);
    
    // var versao_anteCF = PREEEENCHER
    // versao_anteCF = versao_anteCF.select('classification_'+ano).mask(limite_reg_raster);
    // //var versao_ante = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col9/PAMPA/class_col_9_mosaic/PAMPA_01_sem_filtro')
  
    // Map.addLayer(versao_anteSF, vis, 'Versão AnteriorSF - ' +  ano, false)
    // Map.addLayer(versao_anteCF, vis, 'Versão AnteriorCF - ' +  ano, false)
    
    //Classificação atual  
    Map.addLayer(classified, vis, 'RF Teste ' + ano,false)
  
    // // agrega a classificacao random forest nova com a classificacao estável das col anteriores
    // Map.addLayer(classified.mask(estabilidadeMask.unmask(0).eq(0)).blend(img.select('mode').mask(estabilidadeMask)), vis, 'Blend ' + ano,false)
      
    var img_dif = diferenca(colecao_ante_CF,classified,classe_diferenca, false)
    Map.addLayer(img_dif,vischange,'Dif clas col 9 CF' + String(classe_diferenca) + ' ' + String(ano),false)
    
    var img_dif = diferenca(colecao_ante_SF,classified,classe_diferenca, false)
    Map.addLayer(img_dif,vischange,'Dif clas col 9 SF ' + String(classe_diferenca) + ' ' + String(ano),false)
    
    // var img_dif = diferenca(versao_anteSF,classified,classe_diferenca, false)
    // Map.addLayer(img_dif,vischange,'Dif clas col 10 SF ' + String(classe_diferenca) + ' ' + String(ano),false)
    
    // var img_dif = diferenca(versao_anteCF,classified,classe_diferenca, false)
    // Map.addLayer(img_dif,vischange,'Dif clas col 10 CF ' + String(classe_diferenca) + ' ' + String(ano),false)

    // var imageVisParam = {"opacity":1,"min":1,"max":5,"palette":["555555","d9d9d9","dbed55","ff5050","990033"]};
    // Map.addLayer(estabilidadeMask,imageVisParam,'Estabilidade ' + ano, false)
    
  }
//fecha loop dos anos
} 

//print('classified_serie', classified_serie)
print('deficit de amostras',deficit_amostras)

classified_serie = classified_serie.mask(limite_reg_raster)
  
classified_serie = classified_serie
    .set('collection', collection_out)
    .set('version', version_out)
    .set('biome', bioma)


Export.image.toAsset({
  'image': classified_serie.toInt8(),
  'description': regiao + '-'+'RF_col' + collection_out + bloco+ '_v' + version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'RF_col' + collection_out + bloco+ '_v' + version_out,
  'scale': 30,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'maxPixels': 1e13,
  'region': limite
});

classified_max_prob_serie = classified_max_prob_serie    
        .set('collection', collection_out)
        .set('version', version_out)
        .set('biome', bioma)
if (exporta_prob == 1){        
  Export.image.toAsset({
    'image': classified_max_prob_serie.toInt8(),
    'description': regiao + '-'+'RF_PROB_col' + collection_out + bloco+ '_v' + version_out,
    'assetId': dirout + '0'+ regiao + '_' + 'RF_PROB_col' + collection_out + bloco+ '_v' + version_out,
    'scale': 30,
    'pyramidingPolicy': {
        '.default': 'mode'
    },
    'maxPixels': 1e13,
    'region': limite
  });
}

//***************************************************************
//Funções de cálculo de area
//***************************************************************
//***************************************************************
//***************************************************************
   

if (debug == 1){
      //calculo da acuracia
  if (calcula_acuracia == 1){
    var acura_region = require('users/schirmbeckj/MapBiomas:Coll05_final/Coll05/Passo008_acuracia_class_2017_Pampa_Regioes_function.js').acura_region;
    // o 'calcula_confusao' como ultimo parâmetro da função de acuracia é usado para
   //ativar ou desativar o cáculo da Matriz de Confusão    
	
	var acc = acura_region(classified_serie, '2017',regiao,version_out,calcula_confusao);
  }
  //print(classified85a21)
  //cálculo da area de cada classe
  
  if (calcula_area == 1){
        // get raster with area km2
    var pixelArea = ee.Image.pixelArea().divide(1000000);
    /**
     * Helper function
     * @param item 
     */
    var convert2featCollection = function (item) {
        item = ee.Dictionary(item);
        var feature = ee.Feature(ee.Geometry.Point([0, 0]))
            .set('classe', item.get('classe'))
            .set('area', item.get('sum'));
        return feature;
    };
    
    /**
     * Calculate area crossing a cover map (deforestation, mapbiomas)
     * and a region map (states, biomes, municipalites)
     * @param image 
     * @param geometry
     */
    var calculateArea = function (image, geometry) {
        var reducer = ee.Reducer.sum().group(1, 'classe');
        var areas = pixelArea.addBands(image)
            .reduceRegion({
                reducer: reducer,
                geometry: geometry,
                scale: 120,
                maxPixels: 1e12,
                tileScale:4
            });
        var year = ee.Number(image.get('year'));
        areas = ee.List(areas.get('groups')).map(convert2featCollection);
        areas = ee.FeatureCollection(areas);
        return areas;
    };
    
    // get raster with area km2
    var areas = calculateArea(classified_serie.select('classification_' + ano_calcula_area).selfMask(), limite2)
        .map(
            function(feature){
                return feature.set('year', String(ano_calcula_area));
            }
        );
    //print(areas);
    
    print('Área da classe 03 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals', 3).first().get('area'))
    print('Área da classe 11 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',11).first().get('area'))
    print('Área da classe 12 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',12).first().get('area'))
    print('Área da classe 21 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',21).first().get('area'))
    print('Área da classe 22 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',22).first().get('area'))
 //   print('Área da classe 29 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',29).first().get('area'))
    print('Área da classe 33 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',33).first().get('area'))
  }
  
//***************************************************************
//***************************************************************
//***************************************************************

}

var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km");
var blank = ee.Image(0).mask(0);
var outline = blank.paint(controles, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
if (debug == 1){Map.addLayer(outline, visPar, 'Áreas controle', false)}

var biomeCode2019 = 'Pampa';
var biomas = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/biomas_IBGE_250mil')
   .filterMetadata('Bioma', 'equals', biomeCode2019);
    
var blank = ee.Image(0).mask(0);
var outline = blank.paint(biomas, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
if (debug == 1){Map.addLayer(outline, visPar, 'Bioma', false)}

var blank = ee.Image(0).mask(0);
var outline = blank.paint(limite, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
if (debug == 1){Map.addLayer(outline, visPar, 'Limite região 0' + String(regiao), false)}
Map.centerObject(limite)

 