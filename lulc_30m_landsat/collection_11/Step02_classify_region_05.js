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
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51336, -28.812680379866624]),
            {
              "reference": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.513231253967284, -28.81303760230412]),
            {
              "reference": 3,
              "system:index": "83"
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
            }),
        ee.Feature(
            ee.Geometry.Point([-55.661443698425295, -29.481919813279855]),
            {
              "reference": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65861128570557, -29.482293395401246]),
            {
              "reference": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.66007040740967, -29.479155262781234]),
            {
              "reference": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65912626983643, -29.483376775765546]),
            {
              "reference": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.660971629638674, -29.483376775765546]),
            {
              "reference": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63224638336829, -29.44264493927563]),
            {
              "reference": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.635851272284306, -29.44283180285351]),
            {
              "reference": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63769663208655, -29.444700419712113]),
            {
              "reference": 11,
              "system:index": "86"
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
            ee.Geometry.Point([-55.65568617015407, -28.83310774662036]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65517118602321, -28.83077682742325]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.848965902297344, -28.535938397445765]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84939505573973, -28.535617930917557]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85025336262449, -28.535184357004535]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.61207032368259, -29.50971719331019]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.613379241681855, -29.509922607265395]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.61550355122165, -29.509922607265395]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59091684870041, -29.482660840165053]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59042332224167, -29.48225924078515]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59060571245468, -29.48182028150299]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59046712380902, -29.47020645690473]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.588332085433166, -29.46845974039999]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.589083103957336, -29.47057074158149]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58553376779148, -29.462512516132346]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58710017785618, -29.463577425379235]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58810868844578, -29.464885193367486]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5909564954626, -29.46687435859632]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.591578767954054, -29.46848099038065]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.592050836740675, -29.470330453590435]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.582455367031194, -29.518851246448417]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58603879827509, -29.5200836127021]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.58653232473383, -29.522044164445653]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.584214896144964, -29.522230881678073]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.582197874965765, -29.521147916933675]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.592171707681175, -29.513653036360978]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59148506217336, -29.515258926455985]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36298092983431, -30.075569088252188]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.35997685573763, -30.076237560001182]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.35890397213167, -30.076089011113957]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.357058612329425, -30.076757479350036]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.35615739010042, -30.076126148356668]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36710080288118, -30.077648763305554]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36615666530794, -30.077537353250232]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.36195096157259, -30.081028142024927]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.360534755212726, -30.07646038291383]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33630847671983, -30.058963094205534]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33905505875108, -30.058963094205534]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.341612836640245, -30.096031880534163]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33955290011681, -30.09781409302156]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33697797946251, -30.101749698434038]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33474638156212, -30.103754569241666]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.3307981698922, -30.102789266151945]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33320142916954, -30.10071011978144]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.33131315402306, -30.10494262163922]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.376633216055794, -30.149645821547633]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.40668370693408, -30.162101234697477]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.990102306816894, -28.94598548169046]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99413634917529, -28.946304691927352]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98995210311206, -28.94689616711943]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98913671157153, -28.946605124192992]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.47003551383943, -30.211479354344426]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.47896190544099, -30.210292584793223]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.48265262504548, -30.210218411221025]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.48977657218904, -30.20257823384791]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.49801631828279, -30.20450687827175]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50196452995271, -30.201391356958]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.49750133415193, -30.199759377868272]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50110622306794, -30.204877767097717]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.52565379997224, -30.192415137175022]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.497329672774974, -30.18143484672663]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.498273810348216, -30.191376513472196]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.50574108024568, -30.184254227285766]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.0568892654708, -29.887290242095204]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.054571836881934, -29.895178008407214]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.05422851412803, -29.891085377384655]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09465476840049, -29.90001453748621]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09182235568076, -29.899493691787324]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24508546851785, -29.388526624403696]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24757455848367, -29.385161229471755]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.248690357433865, -29.384712501736495]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.24654459022195, -29.385609955228006]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.22568773292215, -29.38531080494373]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.2284343149534, -29.385909104632702]),
            {
              "reference": 12,
              "system:index": "82"
            })]),
    agric = 
    /* color: #ffefc3 */
    /* shown: false */
    ee.FeatureCollection(
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
          [-57.10552440476629, -29.683446124957285]]]),
    remover_SS = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.MultiPolygon(
        [[[[-55.63827541148009, -28.5761893229891],
           [-55.63827541148009, -28.57769681121172],
           [-55.635099676006455, -28.57769681121172],
           [-55.635099676006455, -28.5761893229891]]],
         [[[-55.63630130564513, -28.575812447557816],
           [-55.63630130564513, -28.577018444185075],
           [-55.635357168071884, -28.577018444185075],
           [-55.635357168071884, -28.575812447557816]]],
         [[[-55.639305379741806, -28.57038529163926],
           [-55.639305379741806, -28.572043618984072],
           [-55.63741710459532, -28.572043618984072],
           [-55.63741710459532, -28.57038529163926]]],
         [[[-55.60878827298355, -28.62032366582801],
           [-55.60878827298355, -28.621529151780397],
           [-55.60681416714859, -28.621529151780397],
           [-55.60681416714859, -28.62032366582801]]],
         [[[-55.38249210851307, -28.615514006691313],
           [-55.38249210851307, -28.61694558528815],
           [-55.380603833366585, -28.61694558528815],
           [-55.380603833366585, -28.615514006691313]]],
         [[[-55.37571148412342, -28.611897300155203],
           [-55.37571148412342, -28.61385636498876],
           [-55.37305073278065, -28.61385636498876],
           [-55.37305073278065, -28.611897300155203]]],
         [[[-55.4353929771441, -28.61652161103338],
           [-55.4353929771441, -28.617350414121116],
           [-55.4342771781939, -28.617350414121116],
           [-55.4342771781939, -28.61652161103338]]],
         [[[-55.429427744294976, -28.610870506556594],
           [-55.429427744294976, -28.61181237841778],
           [-55.42852652206597, -28.61181237841778],
           [-55.42852652206597, -28.610870506556594]]],
         [[[-55.40126815483449, -28.605712764186663],
           [-55.40126815483449, -28.606277916063792],
           [-55.40079608604787, -28.606277916063792],
           [-55.40079608604787, -28.605712764186663]]],
         [[[-55.40148273155568, -28.605599733446432],
           [-55.40148273155568, -28.60654165256606],
           [-55.400366932605486, -28.60654165256606],
           [-55.400366932605486, -28.605599733446432]]],
         [[[-55.5295790159287, -28.567667980035626],
           [-55.5295790159287, -28.568346407355737],
           [-55.52876362438817, -28.568346407355737],
           [-55.52876362438817, -28.567667980035626]]],
         [[[-55.5300296270432, -28.56233463515608],
           [-55.5300296270432, -28.562937712440856],
           [-55.52925715084691, -28.562937712440856],
           [-55.52925715084691, -28.56233463515608]]],
         [[[-55.544575664545285, -28.602279568235616],
           [-55.544575664545285, -28.60252447575792],
           [-55.543846103693234, -28.60252447575792],
           [-55.543846103693234, -28.602279568235616]]],
         [[[-55.554593665917324, -28.65145287364578],
           [-55.554593665917324, -28.651980119014613],
           [-55.553821189721035, -28.651980119014613],
           [-55.553821189721035, -28.65145287364578]]],
         [[[-55.70555993935701, -28.712069921776344],
           [-55.70555993935701, -28.714478770022332],
           [-55.70281335732576, -28.714478770022332],
           [-55.70281335732576, -28.712069921776344]]],
         [[[-55.69783517739412, -28.716586466728643],
           [-55.69783517739412, -28.71899521095155],
           [-55.69508859536287, -28.71899521095155],
           [-55.69508859536287, -28.716586466728643]]],
         [[[-55.69955179116365, -28.721855522652817],
           [-55.69955179116365, -28.723059841013573],
           [-55.69749185464021, -28.723059841013573],
           [-55.69749185464021, -28.721855522652817]]],
         [[[-55.854882902822574, -28.541841481172156],
           [-55.854882902822574, -28.544254239125365],
           [-55.85299462767609, -28.544254239125365],
           [-55.85299462767609, -28.541841481172156]]],
         [[[-55.85299462767609, -28.542595473969143],
           [-55.85299462767609, -28.544254239125365],
           [-55.85299462767609, -28.544254239125365],
           [-55.85299462767609, -28.542595473969143]]],
         [[[-55.859861082754215, -28.52389486011066],
           [-55.859861082754215, -28.525553919663857],
           [-55.85797280760773, -28.525553919663857],
           [-55.85797280760773, -28.52389486011066]]],
         [[[-55.860376066885074, -28.523593210113948],
           [-55.860376066885074, -28.525403097147052],
           [-55.85831613036164, -28.525403097147052],
           [-55.85831613036164, -28.523593210113948]]],
         [[[-55.72143831532229, -28.876377606793852],
           [-55.72143831532229, -28.87750498295624],
           [-55.71963587086428, -28.87750498295624],
           [-55.71963587086428, -28.876377606793852]]],
         [[[-55.71482935230959, -28.873521532430416],
           [-55.71482935230959, -28.875325378004735],
           [-55.71294107716311, -28.875325378004735],
           [-55.71294107716311, -28.873521532430416]]],
         [[[-55.93344528839382, -29.07699849957023],
           [-55.93344528839382, -29.078273716470513],
           [-55.93215782806667, -29.078273716470513],
           [-55.93215782806667, -29.07699849957023]]],
         [[[-55.92649300262722, -29.078423740950566],
           [-55.92649300262722, -29.079773951440647],
           [-55.92520554230007, -29.079773951440647],
           [-55.92520554230007, -29.078423740950566]]],
         [[[-55.9393676058987, -29.06597096578597],
           [-55.9393676058987, -29.06717129879573],
           [-55.93816597626003, -29.06717129879573],
           [-55.93816597626003, -29.06597096578597]]],
         [[[-55.779481778650684, -29.6779161832606],
           [-55.779481778650684, -29.679034751431573],
           [-55.77785099556963, -29.679034751431573],
           [-55.77785099556963, -29.6779161832606]]],
         [[[-55.685734234445135, -29.386911022057834],
           [-55.685734234445135, -29.387584098374003],
           [-55.68461843549494, -29.387584098374003],
           [-55.68461843549494, -29.386911022057834]]],
         [[[-55.6970209699798, -29.389565908334475],
           [-55.6970209699798, -29.390238967085594],
           [-55.69616266309504, -29.390238967085594],
           [-55.69616266309504, -29.389565908334475]]],
         [[[-55.742397355130485, -29.23659633518432],
           [-55.742397355130485, -29.237869571879592],
           [-55.74033741860705, -29.237869571879592],
           [-55.74033741860705, -29.23659633518432]]],
         [[[-55.73673252969103, -29.232252231979643],
           [-55.73673252969103, -29.233001228441836],
           [-55.735702561429314, -29.233001228441836],
           [-55.735702561429314, -29.232252231979643]]],
         [[[-55.73681836037951, -29.232327131872427],
           [-55.73681836037951, -29.233300825492453],
           [-55.73578839211779, -29.233300825492453],
           [-55.73578839211779, -29.232327131872427]]],
         [[[-55.72531704812365, -29.24738089782954],
           [-55.72531704812365, -29.248429336357965],
           [-55.72385792641955, -29.248429336357965],
           [-55.72385792641955, -29.24738089782954]]],
         [[[-55.71330075173693, -29.25292252264905],
           [-55.71330075173693, -29.25412067233128],
           [-55.71064000039416, -29.25412067233128],
           [-55.71064000039416, -29.25292252264905]]],
         [[[-56.0274624395636, -29.162115420951014],
           [-56.0274624395636, -29.163914233360032],
           [-56.025316672351686, -29.163914233360032],
           [-56.025316672351686, -29.162115420951014]]],
         [[[-56.017334418323365, -29.163989183193173],
           [-56.017334418323365, -29.165263321985098],
           [-56.015875296619264, -29.165263321985098],
           [-56.015875296619264, -29.163989183193173]]],
         [[[-56.02038140776428, -29.162977355829472],
           [-56.02038140776428, -29.164888576923033],
           [-56.01690526488098, -29.164888576923033],
           [-56.01690526488098, -29.162977355829472]]],
         [[[-56.22889958204565, -28.97857448543547],
           [-56.22889958204565, -28.9798509185971],
           [-56.22589550794897, -28.9798509185971],
           [-56.22589550794897, -28.97857448543547]]],
         [[[-56.233276947157954, -28.986983637512246],
           [-56.233276947157954, -28.98750918681736],
           [-56.2316461640769, -28.98750918681736],
           [-56.2316461640769, -28.986983637512246]]],
         [[[-56.233534439223384, -28.986383006464706],
           [-56.233534439223384, -28.987584265071487],
           [-56.231731994765376, -28.987584265071487],
           [-56.231731994765376, -28.986383006464706]]],
         [[[-55.51893053180119, -29.55437034088603],
           [-55.51893053180119, -29.55534095636711],
           [-55.51790056353947, -29.55534095636711],
           [-55.51790056353947, -29.55437034088603]]],
         [[[-55.52759943133732, -29.552242420475515],
           [-55.52759943133732, -29.553026396366388],
           [-55.5265694630756, -29.553026396366388],
           [-55.5265694630756, -29.552242420475515]]],
         [[[-55.430006235031435, -29.58379928168827],
           [-55.430006235031435, -29.58544137765473],
           [-55.42786046781952, -29.58544137765473],
           [-55.42786046781952, -29.58379928168827]]],
         [[[-56.480511798629585, -29.687647489324196],
           [-56.480511798629585, -29.68854225822926],
           [-56.47935308433515, -29.68854225822926],
           [-56.47935308433515, -29.687647489324196]]],
         [[[-55.87683192078996, -29.53341655822707],
           [-55.87683192078996, -29.534312697044978],
           [-55.87588778321672, -29.534312697044978],
           [-55.87588778321672, -29.53341655822707]]],
         [[[-55.81511484421059, -29.564970992999665],
           [-55.81511484421059, -29.565568233264273],
           [-55.814471114047016, -29.565568233264273],
           [-55.814471114047016, -29.564970992999665]]],
         [[[-55.815158790500476, -29.564858025620655],
           [-55.815158790500476, -29.565455266553254],
           [-55.8145150603369, -29.565455266553254],
           [-55.8145150603369, -29.564858025620655]]],
         [[[-55.81372888200089, -29.553034312393464],
           [-55.81372888200089, -29.55351962771611],
           [-55.81323535554215, -29.55351962771611],
           [-55.81323535554215, -29.553034312393464]]],
         [[[-55.85723078309663, -29.508699395033332],
           [-55.85723078309663, -29.509670448912598],
           [-55.85577166139253, -29.509670448912598],
           [-55.85577166139253, -29.508699395033332]]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Coleção 11 
// Script para fazer ajuste fino da classificação das regiões
// Para rodar veja instruções no final do arquivo

// Região e coleção do Sentinel  
// -----------------------------------------------------------------------
var regiao = 5
var collection_out = 11 
var bioma = 'PAMPA'
var version_out = '07' //mudar a cada nova versao que for exportada
var versionAtual = '06'
var versionAnte = '05'

//Parâmetros do classificador
// -----------------------------------------------------------------------
//Processamento
var RFtrees = 100//60, 100 
//Amostras
var version_samples = '01' 
var nSamplesMin = 150;
var nSamplesMax = 2000;
//definir com 1 para usar e como zero para não usar
var importar_estaveis = 1    //definir com 1 para importar e como zero para gerar a partir de pontos estaveis
var usar_complementares = 1
var Quantidade_amostras = 1; //1 // quantidade final de amostra SS + complementares por classe

// Ativação de funcionalidades
// -----------------------------------------------------------------------
var anos_classifica = [2006]
//var anos_visualiza = [1986,1998,2009,2020]

//Inspeção da classificação
//visualizar diferencas para uma classe x entre a classificação e o mapa de referencia
var classe_diferenca = 3// classe para mapa de diferenças
var classes_list = [12, 21 //3,11, 12, 21, 22, 33, 29
];
 
// cálculo de área das classes para ajuste de amostras
var calc_area = 1

//conjunto de flags para ativar e desativar recursos de processamento
//*****************************************
//Exportar
var exporta_colecao = 1//ativar a geometria do bioma antes de dar o Run (0/1)
var exporta_prob = 0
//*************************************

var debug = 0 //variavel para uso de debug, habilita addLayers de comparação
var debug_SS = 0; //habilita print das amostras 
var debug_importancia =0 // habilita o gráfico de importancia das variáveis

// Local de saída da coleção
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-11/GENERAL/classification-pam/'
// Bloco dos anos para colocar no nome de saída
var bloco = '_85-25'
 
// =================================================================================================================
//                                ASSETS:
// =================================================================================================================
//Mosaicos
var dirasset =  'projects/nexgenmap/MapBiomas2/LANDSAT/BRAZIL/mosaics-2-pampa';
var version = '2'
var mosaicos = ee.ImageCollection(dirasset)
                  .filterMetadata('biome', 'equals', bioma)
                  .filterMetadata('version', 'equals', version)
//print('mosaicos',mosaicos)

//variaveis fisicas ou on the fly
var cluster_savi_20 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/FEATURES/Snic_col11_85-25_savi_median_size20_v1')
var cluster_ndvi_80 = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/FEATURES/Snic_col11_85-25_ndvi_median_size80_v1')
// print('Bandas cluster_savi_20:', cluster_savi_20.bandNames());
// print('Bandas cluster_ndvi_80:', cluster_ndvi_80.bandNames());


// Pontos estaveis com variáveis
var dirsamples = 'projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/SAMPLES/v' + version_samples + '/trainingsamples_col11_'

//Limites bioma e regiões
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/Regioes_Pampa_BR_col11_buff')

var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);

// Limite sem o buffer  
var regioesCollection2 = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col05')
var limite2 = regioesCollection2.filterMetadata('ID', 'equals', regiao);

var limite_reg_raster = ee.Image().uint32().paint({
    featureCollection: limite,
    color: 'ID',
}).rename(['limite']);


///1 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var mosaicoANTE = mosaicos.filter(ee.Filter.eq('year', 1985))
                  .mosaic()
// var mosaicoANO = mosaicos.filter(ee.Filter.eq('year', anos))
//                 .mosaic()
var mosaicoPOS = mosaicos.filter(ee.Filter.eq('year', 2025))
                 .mosaic()
///1 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var mosaicoANTE = mosaicoANTE.mask(limite_reg_raster);
//var mosaicoANO = mosaicoANO.mask(limite_reg_raster);
var mosaicoPOS = mosaicoPOS.mask(limite_reg_raster);  

if (exporta_colecao == 1){
  debug = 0
  limite = geom_limite
  var anos = [
    1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,
    1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,
    2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,
    2015,2016,2017,2018,2019,2020,2021,2022, 2023, 2024,
    2025
    ];
}else
{
    var anos = anos_classifica
    //var anos = [1986,1998,2009,2020]
    limite = geom_limite; //limite.geometry() //aqui usa o limite da regiao com buffer
  }

//Visualização
var palettes = require('users/mapbiomas/modules:Palettes.js');
var vis = {'min': 0, 'max': 75,  'palette': palettes.get('brazil')};
var visParMedian = {'bands':['swir1_m','nir_m','red_m'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
var visParMedian2 = {'bands':['nir_m','swir1_m','red_m'], 'gain':[0.06, 0.08,0.2],'gamma':0.5 };
var vischange = {"min": 0, "max": 3,
        "palette": "ffffff,ff0000,e6f919,aaaaaa",    //amarelo=e6f919    magenta=bb34c0
        "format": "png"
  }

var visParMedian3 = {'bands':['swir1_median','nir_median','red_median'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };

Map.addLayer(mosaicoPOS, visParMedian3, 'Img_Year_2025', false) 
//Map.addLayer(mosaicoANO, visParMedian, 'Img_Year_' + anos, false)
Map.addLayer(mosaicoANTE, visParMedian3, 'Img_Year_1985', false) 

// balanceamento de amostras
for (var i_ano=0;i_ano<anos.length; i_ano++){
  var ano = anos[i_ano];
  var anoStr = String(ano); // Converte o ano para string uma vez
 // Bloco 1A
  if (ano <= 1987){ // ajustar para período 1
    var percent_Flo = 15
    var percent_Umi = 10
    var percent_Cam = 70
    var percent_Agr = 25
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 1B 
  if (ano > 1987 && ano <= 1992){// ajustar para período 2
  var percent_Flo = 15
    var percent_Umi = 6
    var percent_Cam = 53
    var percent_Agr = 39
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
   //Bloco 1C
  if (ano > 1992 && ano <= 1997){// ajustar para período 2
   var percent_Flo = 22
    var percent_Umi = 11
    var percent_Cam = 60
    var percent_Agr = 35
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
    //Bloco 2Aa1
  if (ano == 1998){// ajustar para período 2
  var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 55
    var percent_Agr = 50
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2Aa1
  if (ano > 1998 && ano <= 2001){// ajustar para período 2
  var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 55
    var percent_Agr = 52
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2Aa2
  if (ano > 2001 && ano < 2005){// ajustar para período 2
  var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 55
    var percent_Agr = 60
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
   //Bloco 2Aa2
  if (ano == 2005){// ajustar para período 2
  var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 57
    var percent_Agr = 50
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2A
  if (ano > 2005 && ano <= 2007){// ajustar para período 2
   var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 42
    var percent_Agr = 60
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
   if (ano == 2008){// ajustar para período 2
   var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 50
    var percent_Agr = 50
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 2B
  if (ano > 2008 && ano <= 2012){// ajustar para período 2
    var percent_Flo = 22
    var percent_Umi = 9
    var percent_Cam = 30
    var percent_Agr = 60
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 3A
  if (ano > 2012 && ano <= 2019){// ajustar para período 2
  var percent_Flo = 20
    var percent_Umi = 0
    var percent_Cam = 30
    var percent_Agr = 60
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  //Bloco 3Ba
  if (ano > 2019 && ano < 2022){ // ajustar para período 3
   var percent_Flo = 20
    var percent_Umi = 8
    var percent_Cam = 30
    var percent_Agr = 60
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
    //Bloco 3Ba
  if (ano == 2022){ // ajustar para período 3
   var percent_Flo = 25
    var percent_Umi = 6
    var percent_Cam = 30
    var percent_Agr = 60
    var percent_Anv = 4
    var percent_Agu = 35
  }
  
  if (ano > 2022){ // ajustar para período 3
   var percent_Flo = 18
   var percent_Umi = 0
    var percent_Cam = 30
    var percent_Agr = 60
    var percent_Anv = 14
    var percent_Agu = 30
  }
    if (ano > 2023){ // ajustar para período 3
   var percent_Flo = 15
    var percent_Umi = 0
    var percent_Cam = 30
    var percent_Agr = 60
    var percent_Anv = 14
    var percent_Agu = 30
  }
  
 
 
//nomes bandas
// Bandas do mosaico fisico
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

// Bandas do mosaico fisico + novas variávies on the fly
{var bandNamesPlus = ee.List([
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
'slope',
'latitude', 'longitude',

  'lswi_median_dry',
  'spri_median_wet',
  'dswi5_median',
  'brightness_median_wet',
  'shape_median_dry',
  'ri_median_dry',
  'gvmi_median_dry_1',
  'evi_median_wet',
  'shape_median',
  'nddi_median_wet',
  'iia_median_wet',
  'rvi_median',
  'gli_median_dry',
  'afvi_median_wet',
  'ui_median_wet',
  'avi_median_dry',
  'msi_median',
  'evi_median_dry',
  'gvmi_median_wet_1',
  'evi_median',
  'co2flux_median',
  'rvi_median_1',
  'hand'

// 'ratio_median','ratio_median_wet','ratio_median_dry','rvi_median','rvi_median_wet','rvi_median_1',
// 'ndvi_median_1','ndvi_median_wet_1','ndvi_median_dry_1','ndwi_median_1','ndwi_median_wet_1','ndwi_median_dry_1',
// 'awei_median','awei_median_wet','awei_median_dry','iia_median','iia_median_wet','iia_median_dry','evi_median',
// 'evi_median_wet','evi_median_dry','gvmi_median','gvmi_median_wet','gvmi_median_dry','lai_median','gcvi_median_1',
// 'gcvi_median_wet_1','gcvi_median_dry_1','gemi_median','gemi_median_wet','gemi_median_dry','cvi_median',
// 'cvi_median_wet','cvi_median_dry','gli_median','gli_median_wet','gli_median_dry','shape_median','shape_median_wet',
// 'shape_median_dry','afvi_median','afvi_median_wet','afvi_median_dry','avi_median','avi_median_wet','avi_median_dry',
// 'nddi_median','nddi_median_wet','nddi_median_dry','bsi_median','bsi_median_1','bsi_median_2','brba_median',
// 'brba_median_wet','brba_median_dry','dswi5_median','dswi5_median_wet','dswi5_median_dry','lswi_median','lswi_median_wet',
// 'lswi_median_dry','mbi_median','mbi_median_wet','mbi_median_dry','ui_median','ui_median_wet','ui_median_dry','osavi_median',
// 'osavi_median_wet','osavi_median_dry','ri_median','ri_median_wet','ri_median_dry','brightness_median','brightness_median_wet',
// 'brightness_median_dry','wetness_median','wetness_median_wet','wetness_median_dry','msi_median','msi_median_wet','msi_median_dry',
// 'gvmi_median_1','gvmi_median_wet_1','gvmi_median_dry_1','spri_median','spri_median_wet','spri_median_1','co2flux_median','nir_median_contrast',
// 'red_median_contrast','nir_median_dry_contrast','red_median_dry_contrast','hand','merit_slope','ana_slope',
])

var bandNamesShortPlus = ee.List([
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
'slope',
'lat', 'long',

  'lswi_median_dry',
  'spri_median_wet',
  'dswi5_median',
  'brightness_median_wet',
  'shape_median_dry',
  'ri_median_dry',
  'gvmi_median_dry_1',
  'evi_median_wet',
  'shape_median',
  'nddi_median_wet',
  'iia_median_wet',
  'rvi_median',
  'gli_median_dry',
  'afvi_median_wet',
  'ui_median_wet',
  'avi_median_dry',
  'msi_median',
  'evi_median_dry',
  'gvmi_median_wet_1',
  'evi_median',
  'co2flux_median',
  'rvi_median_1',
  'hand'

// 'ratio_median','ratio_median_wet','ratio_median_dry','rvi_median','rvi_median_wet','rvi_median_1',
// 'ndvi_median_1','ndvi_median_wet_1','ndvi_median_dry_1','ndwi_median_1','ndwi_median_wet_1','ndwi_median_dry_1',
// 'awei_median','awei_median_wet','awei_median_dry','iia_median','iia_median_wet','iia_median_dry','evi_median',
// 'evi_median_wet','evi_median_dry','gvmi_median','gvmi_median_wet','gvmi_median_dry','lai_median','gcvi_median_1',
// 'gcvi_median_wet_1','gcvi_median_dry_1','gemi_median','gemi_median_wet','gemi_median_dry','cvi_median',
// 'cvi_median_wet','cvi_median_dry','gli_median','gli_median_wet','gli_median_dry','shape_median','shape_median_wet',
// 'shape_median_dry','afvi_median','afvi_median_wet','afvi_median_dry','avi_median','avi_median_wet','avi_median_dry',
// 'nddi_median','nddi_median_wet','nddi_median_dry','bsi_median','bsi_median_1','bsi_median_2','brba_median',
// 'brba_median_wet','brba_median_dry','dswi5_median','dswi5_median_wet','dswi5_median_dry','lswi_median','lswi_median_wet',
// 'lswi_median_dry','mbi_median','mbi_median_wet','mbi_median_dry','ui_median','ui_median_wet','ui_median_dry','osavi_median',
// 'osavi_median_wet','osavi_median_dry','ri_median','ri_median_wet','ri_median_dry','brightness_median','brightness_median_wet',
// 'brightness_median_dry','wetness_median','wetness_median_wet','wetness_median_dry','msi_median','msi_median_wet','msi_median_dry',
// 'gvmi_median_1','gvmi_median_wet_1','gvmi_median_dry_1','spri_median','spri_median_wet','spri_median_1','co2flux_median','nir_median_contrast',
// 'red_median_contrast','nir_median_dry_contrast','red_median_dry_contrast','hand','merit_slope','ana_slope',
])}


//Adição de variáveis on the fly
   var mosaicoTotal =   mosaicos.filterMetadata('year', 'equals', ano)
                      .filterBounds(limite)
                      .mosaic()
  var mosaicoTotalband = mosaicoTotal.bandNames()
  
  ///2 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 
Map.addLayer(mosaicoTotal, visParMedian3, 'Img_Year_original'+anos_classifica, false)
  
  // Cria uma máscara: 1 onde existe dado válido
  var maskNoData = mosaicoTotal.select('ndvi_median')
    .mask()      // 1 onde há dado, 0 onde está mascarado
    .not()       // inverte: 1 onde está mascarado
    .selfMask() // remove os zeros
    .updateMask(limite_reg_raster);
  Map.addLayer(maskNoData, {palette: 'red'}, 'Mask No Data', false);
 
///2 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


  // variáveis adicionais                    
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
                    .mosaic();
    var mosaico2anos_antes = mosaicos.filterMetadata('year', 'equals', ( ano - 2))
                    .filterBounds(limite)
                    .mosaic();
    var min3anos = ee.ImageCollection.fromImages([mosaicoTotal.select('ndvi_median_dry'),
                                                mosaico1ano_antes.select('ndvi_median_dry'),
                                                mosaico2anos_antes.select('ndvi_median_dry')]).min();
    var max3anos = ee.ImageCollection.fromImages([mosaicoTotal.select('ndvi_median_wet'),
                                                mosaico1ano_antes.select('ndvi_median_wet'),
                                                mosaico2anos_antes.select('ndvi_median_wet')]).max();
  }
  var ndvi_a_3y = max3anos.subtract(min3anos).rename('ndvi_amp_3y');

 
 // print('ndvi_a_3y',ndvi_a_3y)

  //var ndvi_color = '0f330f, 005000, 4B9300, 92df42, bff0bf, FFFFFF, eee4c7, ecb168, f90000'
  //var visParNDFI_amp = {'min':0, 'max':60, 'palette':ndvi_color};
  //Map.addLayer(ndvi_a_3y, {}, 'ndvi_a_3y', true);
  mosaicoTotal = mosaicoTotal.addBands(ndvi_a_3y);

  var ll = ee.Image.pixelLonLat().mask(limite_reg_raster);
  var long = ll.select('longitude').add(0).multiply(-1).multiply(1000).toInt16()
  var lati = ll.select('latitude').add(0).multiply(-1).multiply(1000).toInt16()

  mosaicoTotal = mosaicoTotal.addBands(long.rename('longitude'))
  mosaicoTotal = mosaicoTotal.addBands(lati.rename('latitude' ))
 
 
  var mosaicoTotalR = mosaicoTotal.select(bandNames,bandNamesShort)

// Adiciona índices on the fly
  var addIndexComplem = require('users/schirmbeckj/MapBiomas-Coll11:Coll11/3.Features/CalculateIndices.js')
  var mosaicoTotalPlus = addIndexComplem.getIndices(mosaicoTotal);

// Bandas dos clusters 
  var bandNames_clusters = ee.List([
    'clusters_savi_20_' + anoStr,   
    'savi_median_cluster_' + anoStr,
    'clusters_ndvi_80_' + anoStr,  
    'ndvi_median_cluster_' + anoStr
  ]);

//   //mosaicos e clusters
 var mosaicoTotalPlus = mosaicoTotalPlus
   .addBands(cluster_savi_20.select(['clusters_' + anoStr]).rename(['clusters_savi_20_' + anoStr]))
   .addBands(cluster_savi_20.select(['savi_median_' + anoStr]).rename(['savi_median_cluster_' + anoStr]))
   .addBands(cluster_ndvi_80.select(['clusters_' + anoStr]).rename(['clusters_ndvi_80_' + anoStr]))
   .addBands(cluster_ndvi_80.select(['ndvi_median_' + anoStr]).rename(['ndvi_median_cluster_' + anoStr]));



// var palette = [
//   '#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00',
//   '#ffff33', '#a65628', '#f781bf', '#999999', '#66c2a5'
// ];

// var cluster_vis = cluster_savi_20.select(['clusters_' + anoStr])
// Map.addLayer(cluster_vis, {min: 0, max: 9, palette: palette})
// var cluster_vis = cluster_ndvi_80.select(['clusters_' + anoStr])
// Map.addLayer(cluster_vis, {min: 0, max: 9, palette: palette})


var bandNamesPlus = bandNamesPlus.cat(bandNames_clusters)
var bandNamesShortPlus = bandNamesShortPlus.cat(bandNames_clusters)

  mosaicoTotalPlus = mosaicoTotalPlus.select(bandNamesPlus,bandNamesShortPlus)
  

  
// var bandNamessamples = ee.List(['ratio_median','ratio_median_wet','ratio_median_dry','rvi_median','rvi_median_wet','rvi_median_1',
// 'ndvi_median_1','ndvi_median_wet_1','ndvi_median_dry_1','ndwi_median_1','ndwi_median_wet_1','ndwi_median_dry_1',
// 'awei_median','awei_median_wet','awei_median_dry','iia_median','iia_median_wet','iia_median_dry','evi_median',
// 'evi_median_wet','evi_median_dry','gvmi_median','gvmi_median_wet','gvmi_median_dry','lai_median','gcvi_median_1',
// 'gcvi_median_wet_1','gcvi_median_dry_1','gemi_median','gemi_median_wet','gemi_median_dry','cvi_median',
// 'cvi_median_wet','cvi_median_dry','gli_median','gli_median_wet','gli_median_dry','shape_median','shape_median_wet',
// 'shape_median_dry','afvi_median','afvi_median_wet','afvi_median_dry','avi_median','avi_median_wet','avi_median_dry',
// 'nddi_median','nddi_median_wet','nddi_median_dry','bsi_median','bsi_median_1','bsi_median_2','brba_median',
// 'brba_median_wet','brba_median_dry','dswi5_median','dswi5_median_wet','dswi5_median_dry','lswi_median','lswi_median_wet',
// 'lswi_median_dry','mbi_median','mbi_median_wet','mbi_median_dry','ui_median','ui_median_wet','ui_median_dry','osavi_median',
// 'osavi_median_wet','osavi_median_dry','ri_median','ri_median_wet','ri_median_dry','brightness_median','brightness_median_wet',
// 'brightness_median_dry','wetness_median','wetness_median_wet','wetness_median_dry','msi_median','msi_median_wet','msi_median_dry',
// 'gvmi_median_1','gvmi_median_wet_1','gvmi_median_dry_1','spri_median','spri_median_wet','spri_median_1','co2flux_median','nir_median_contrast',
// 'red_median_contrast','nir_median_dry_contrast','red_median_dry_contrast','hand','merit_slope','ana_slope']);
// var bandNamessamples = bandNamessamples.cat(bandNames_clusters)

// var mosaicoTotalB = mosaicoTotal.select(bandNamessamples)
// print('mosaicoTotalB', mosaicoTotalB)
//var mosaicoTotalB = mosaicoTotalB.bandNames()
//print('mosaicoTotalBbands', mosaicoTotalB)


//Amostras
  if (importar_estaveis == 1){
    
    var SS_amostras = ee.FeatureCollection(dirsamples + ano + '_v01')
            .filter(ee.Filter.lt('outlier', 5))
            .filterMetadata('ID','equals',regiao)
    //        .filterBounds(limite2.geometry())
    
   // / permite remover amostras estáveis dentro de polígono digitalizados em tela
  var SS_amostras = SS_amostras.filter(ee.Filter.bounds(remover_SS).not())
    
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

  
    //cria variavel com todas as amostras estáveis
    var SS_amostras = SS_Flo_samples
            .merge(SS_Umi_samples)
            .merge(SS_Cam_samples)
            .merge(SS_Agr_samples)
            .merge(SS_Anv_samples)
 //           .merge(SS_Afr_samples)
            .merge(SS_Agu_samples)
 
  Map.addLayer(SS_Cam_samples, null, 'amostras_campo')
  Map.addLayer(SS_Agr_samples, null, 'amostras_agri')
 
  if(usar_complementares == 1){
  
    var pontos_complementares = floresta
                .merge(aumi)
                .merge(campo)
                .merge(agric)
                .merge(anv)
//                .merge(arocho)
                .merge(agua);
                
    // Samples 
    var trainingComp = mosaicoTotalR.sampleRegions({
        'collection': pontos_complementares,
        'properties': ['reference'],
        'scale': 30,
        'tileScale': 4,
        'geometries': true
    });
    
  
    var complementares = trainingComp.map(function (feature) {return feature.set('comp_coll', String(collection_out))});
  }

 if (usar_complementares == 0){
 var training = SS_amostras//.merge(complementares)
  }else{
    var training = SS_amostras.merge(complementares)
    //var training = complementares
  }  

// // Captura dinamicamente todas as colunas que já existem na coleção
var colunasEstaveis = SS_amostras.first().propertyNames();

var trainingPlus = mosaicoTotalPlus.sampleRegions({
     collection: training,
     properties: colunasEstaveis, // Mantém todas as colunas originais (incluindo 'reference', IDs, etc)
//       properties: ['reference'], 
       scale: 30,
       tileScale: 4,
       geometries: true
      });
   }


if (debug_SS == 1){
  //CLASSIFICAÇÃo
  
Map.addLayer(SS_Flo,{color:'0000ff'},'todos')
Map.addLayer(SS_Flo_samples,{color:'ff0000'},'selecao')


print('mosaicoTotalband', mosaicoTotalband)
print('mosaicoTotal',mosaicoTotal)
print('Mosaico_plus', mosaicoTotalPlus.bandNames())
print('Mosaico_plusShort', mosaicoTotalPlus)
print('SS_amostras', SS_amostras.limit(10))
print('complementares', complementares)
print('training',training.limit(10))
print('rotulos', colunasEstaveis)
print('trainingPlus',trainingPlus.limit(10))

  print('SS_Flo',SS_Flo.size())
  print('n_samples_Flo',n_samples_Flo)
  print('SS_Flo_samples',SS_Flo_samples.size())
  print('Comp_Flo_samples',floresta.size())
  print('SS_Umi_samples',SS_Umi_samples.size())
  print('Comp_Umi_samples',aumi.size())
  print('SS_Cam_samples',SS_Cam_samples.size())
  print('Comp_Camp_samples',campo.size())
  print('SS_Agr_samples',SS_Agr_samples.size())
  print('Comp_Agr_samples',agric.size())
  print('SS_Anv_samples',SS_Anv_samples.size())
  print('Comp_Anv_samples',anv.size())
  print('SS_Agu_samples',SS_Agu_samples.size())
  print('Comp_Agu_samples',agua.size())
  
  print('Total Estáveis',SS_amostras.size())
  print('Total Complementares',complementares.size())
  print('Total Amostras Classificação',training.size())
  print('Total Amostras Classificação',trainingPlus.size())
    
// Verificar quantas amostras de cada classe são usadas na classificação  
  var SS_03 = trainingPlus.filter(ee.Filter.eq('reference', 3))
  var SS_11 = trainingPlus.filter(ee.Filter.eq('reference', 11))
  var SS_12 = trainingPlus.filter(ee.Filter.eq('reference', 12))
  var SS_21 = trainingPlus.filter(ee.Filter.eq('reference', 21))
  var SS_22 = trainingPlus.filter(ee.Filter.eq('reference', 22))
  //var SS_29 = training.filter(ee.Filter.eq('reference', 29))
  var SS_33 = trainingPlus.filter(ee.Filter.eq('reference', 33))  
  
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
  
  var classifier = ee.Classifier.smileRandomForest({numberOfTrees: RFtrees, variablesPerSplit:1})
  .train(trainingPlus, 'reference', bandNamesShortPlus);///
  
 // var classifier_prob = classifier.setOutputMode('MULTIPROBABILITY')
  
  //classifica o mosaico e recorta a região de interesse
  var mosaicoTotalReg = mosaicoTotalPlus.mask(limite_reg_raster);
  
  var classified = mosaicoTotalReg.classify(classifier)//.mask(limite_reg_raster);
  // var classified_prob = mosaicoTotalReg.classify(classifier_prob)//.mask(limite_reg_raster);
  
  // var max_prob = classified_prob.arrayReduce(ee.Reducer.max(), [0]);
  // var img_max_prob = max_prob.arrayFlatten([['classification']]).multiply(100)
  
  
  if (debug == 1){
    //print("Image_max_prob", img_max_prob)
    var imageVisParam3 = {"opacity":1,"bands":["classification"],"min":17.347148895263672,"max":99.36353302001953,"palette":["ffff55","38761d"]};
//    Map.addLayer(img_max_prob, imageVisParam3, 'RF classified_prob', false)
  }
  classified = classified.select(['classification'],['classification_'+ano]).toInt8()
  //if (debug == 1){print('classified',classified)}
  
    ///3 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 
 classified = classified.updateMask(maskNoData.unmask(0).not())
    .unmask(0)
    .mask(limite_reg_raster);
 
  ///3 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
    if (i_ano == 0){ var classified_serie = classified;
  //                 var   classified_max_prob_serie = img_max_prob 
  }  
  else {classified_serie = classified_serie.addBands(classified); 
//        classified_max_prob_serie = classified_max_prob_serie.addBands(img_max_prob);
  }

 // // ==============================================================================================================
  //                                        VERIFICA A IMPORTÂNCIA DAS BANDAS:
    if(debug_importancia == 1){
  // Classificador com informações de importância e arvores 
  // Código para obter a importância ordenada de cada variável
  var exp = classifier.explain()
  
  print('Explain', exp)
  
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
    rows: map_teste//.slice(0,50)
  };
  // Gera o gráfico de importância das variáveis
  ee.Dictionary(dataTable).evaluate(function(result) {
    var chart = ui.Chart(result)
      .setChartType('ColumnChart')
      .setOptions({
        title: 'Random Forest Band Importance_'+ano,
        legend: {position: 'none'},
        hAxis: {title: 'Bands'},
        vAxis: {title: 'Importance'}
      });
    print(chart);
  })

// =================================================================================================================
//                                    CALCULATE DIFFERENCE :
// =================================================================================================================

    //camadas usadas para o processo de coleta de amostras
    // var img = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col' + collection_out + '/PAMPA/estabilidade_colecoes/pampa_colecoes_' + ano)
    // var estabilidadeMask = img.select('estabilidade').lte(1).selfMask().updateMask(limite_reg_raster);

    // adiciona o mosaico
    Map.addLayer(mosaicoTotalPlus, visParMedian, 'Img_Year_' + String(ano), false)  
    
    //Coleção 09
    //ultima versão da coleção 9  sem filtros
    var colecao_ante_SF = ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-10/GENERAL/classification-pam/PAMPA_13_sem_filtro')

    //ultima versão da coleção 9  com filtros
    var colecao_ante_CF = ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-10/GENERAL/classification-pam-temp/PAMPA_13_com_filtroF')
      
    colecao_ante_SF = colecao_ante_SF.select('classification_'+ano).mask(limite_reg_raster);
    colecao_ante_CF = colecao_ante_CF.select('classification_'+ano).mask(limite_reg_raster);
      
    Map.addLayer(colecao_ante_SF, vis, 'Colecao 10 SF - ' +  ano, false)
    Map.addLayer(colecao_ante_CF, vis, 'Colecao 10 CF - ' +  ano, false)
   //Classificação atual  
    Map.addLayer(classified, vis, 'RF Teste ' + ano,false)

    // // agrega a classificacao random forest nova com a classificacao estável das col anteriores
    // Map.addLayer(classified.mask(estabilidadeMask.unmask(0).eq(0)).blend(img.select('mode').mask(estabilidadeMask)), vis, 'Blend ' + ano,false)

// Define variáveis para o mapa de diferença
var diferenca = require('users/schirmbeckj/MapBiomas-Coll11:Coll11/5.Inspection/Mapa_Diferencas_Classe_v02.js').diferenca
// Itera sobre a lista de classes
for (var i_classe=0;i_classe<classes_list.length; i_classe++){
  var classe = classes_list[i_classe]

    var img_dif = diferenca(colecao_ante_CF,classified,classe, false)
    Map.addLayer(img_dif,vischange,'Dif class x col 10 CF' + String(classe) + ' ' + String(ano),false)
    
    var img_dif = diferenca(colecao_ante_SF,classified,classe, false)
    Map.addLayer(img_dif,vischange,'Dif class x col 10 SF ' + String(classe) + ' ' + String(ano),false)
}
    // var imageVisParam = {"opacity":1,"min":1,"max":5,"palette":["555555","d9d9d9","dbed55","ff5050","990033"]};
    // Map.addLayer(estabilidadeMask,imageVisParam,'Estabilidade ' + ano, false)
  }

//fecha loop dos anos
} 

//print('classified_serie', classified_serie)

classified_serie = classified_serie//.mask(limite_reg_raster) // precisa esse mask??
  
classified_serie = classified_serie
    .set('collection', collection_out)
    .set('version', version_out)
    .set('biome', bioma)

if (exporta_colecao == 1){ 
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
}

// classified_max_prob_serie = classified_max_prob_serie    
//         .set('collection', collection_out)
//         .set('version', version_out)
//         .set('biome', bioma)

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


// =================================================================================================================
//                                    CALCULATE AREA:
// =================================================================================================================
// Calcula área on the fly para o ano da classificação

if (calc_area == 1) {
  var years = ['' + anos_classifica];
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
              scale: 30,// 10 
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
  var areasByYear = years.map(function(year) {
      var image = classified_serie.select('classification_' + year); 
      var areaClass = calculateArea(image, geom_limite, year); 
      return areaClass; 
  });
  // Unir todas as FeatureCollections em uma única coleção
  var allAreas = ee.FeatureCollection(areasByYear).flatten();
  // print('Áreas por ano e classe S2:', allAreas_s2);
  //print ('allAreas',allAreas)
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/AREAS/areas_col10L_col2S_col11_v'+versionAtual+'_v'+versionAnte+'_r5'

  var colls_area = ee.FeatureCollection(asset_area)
  //print ('colls_areas',colls_area)
  
  // Função para criar um gráfico de comparação para uma classe específica
  var createComparisonChart = function(classNumber) {
      var filteredFeatures1 = allAreas.filter(ee.Filter.eq('classe', classNumber)).map(function(ft){
        return ft.set('col', 'Col11_v'+version_out)
      })
  
      var filteredFeatures3 = colls_area
        .filter(ee.Filter.eq('ID_region', regiao))
        .filter(ee.Filter.eq('col', 'Col10_sf'))
        .filter(ee.Filter.eq('classe', classNumber))
      
      var filteredFeatures5 = colls_area
        .filter(ee.Filter.eq('ID_region', regiao))
        .filter(ee.Filter.eq('col', 'Col10_INT'))
        .filter(ee.Filter.eq('classe', classNumber))
      
       var filteredFeatures4 = colls_area
         .filter(ee.Filter.eq('ID_region', regiao))
         .filter(ee.Filter.eq('col', 'Col10_cf'))
         .filter(ee.Filter.eq('classe', classNumber))
         
         var filteredFeatures2 = colls_area
         .filter(ee.Filter.eq('ID_region', regiao))
         .filter(ee.Filter.eq('col', "Col11_sf_v"+versionAtual))
         .filter(ee.Filter.eq('classe', classNumber))
  
      var feat_colls = filteredFeatures1.merge(filteredFeatures2).merge(filteredFeatures3).merge(filteredFeatures4).merge(filteredFeatures5)
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
          //pointSize: 3,
          // series: {
          //     0: {color: 'black', label: 'Col11_v'+version_out},
          //     1: {color: 'blue', label: 'Col11_sf_v'+versionAtual},
          //     2: {color: 'orange', label: 'Col10_sf'},
          //     3: {color: 'red', label: 'Col10_cf'},
          //     4: {color: 'green', label: 'Col10_INT'}
          // },
           series: {
        0: {
            color: 'black',
            label: 'Col11_v'+version_out,
            pointSize: 4   // maior
        },
        1: {
            color: 'blue',
            label: 'Col11_sf_v'+versionAtual,
            pointSize: 2   // maior
        },
        2: {
            color: 'orange',
            label: 'Col10_sf',
            pointSize: 2
        },
        3: {
            color: 'red',
            label: 'Col10_cf',
            pointSize: 2
        },
        4: {
            color: 'green',
            label: 'Col10_INT',
            pointSize: 2
        }
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
     
    print('Área da classe 03 ano: ' + anos_classifica +  ' ' , allAreas.filterMetadata('classe','equals', 3).first().get('area'))
    print('Área da classe 11 ano: ' + anos_classifica +  ' ' , allAreas.filterMetadata('classe','equals',11).first().get('area'))
    print('Área da classe 12 ano: ' + anos_classifica +  ' ' , allAreas.filterMetadata('classe','equals',12).first().get('area'))
    print('Área da classe 21 ano: ' + anos_classifica +  ' ' , allAreas.filterMetadata('classe','equals',21).first().get('area'))
    print('Área da classe 22 ano: ' + anos_classifica +  ' ' , allAreas.filterMetadata('classe','equals',22).first().get('area'))
    // print('Área da classe 29 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',29).first().get('area'))
    print('Área da classe 33 ano: ' + anos_classifica +  ' ' , allAreas.filterMetadata('classe','equals',33).first().get('area'))
 }

 

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
