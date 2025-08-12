/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = /* color: #ea9999 */ee.FeatureCollection([]),
    arocho = /* color: #ff8c00 */ee.FeatureCollection([]),
    agua = /* color: #0000ff */ee.FeatureCollection(
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
    floresta = /* color: #006400 */ee.FeatureCollection(
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
    aumi = /* color: #45c2a5 */ee.FeatureCollection(
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
            ee.Geometry.Point([-56.21291232953109, -28.960791584629437]),
            {
              "reference": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21205402264633, -28.963720352311675]),
            {
              "reference": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.209908255434414, -28.96266900934345]),
            {
              "reference": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20450092206039, -28.962894298021205]),
            {
              "reference": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19995246071063, -28.994582678213558]),
            {
              "reference": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20231280464373, -28.99831735171407]),
            {
              "reference": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20038161415301, -28.99662825315792]),
            {
              "reference": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20235571998797, -28.99914312318559]),
            {
              "reference": 11,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57098021970166, -29.58543664786998]),
            {
              "reference": 11,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57818999753369, -29.58692943926909]),
            {
              "reference": 11,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56892028317822, -29.591231752136693]),
            {
              "reference": 11,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57664504514111, -29.589739024384208]),
            {
              "reference": 11,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57492843137158, -29.591082480355222]),
            {
              "reference": 11,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56703200803174, -29.598993580433117]),
            {
              "reference": 11,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56256881223096, -29.599889137574497]),
            {
              "reference": 11,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.56274047360791, -29.604814559709197]),
            {
              "reference": 11,
              "system:index": "94"
            })]),
    campo = /* color: #b8af4f */ee.FeatureCollection(
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
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09168944780264, -30.09988448100566]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.093148569506745, -30.100478532251266]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.093642095965485, -30.101035452051367]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09370646898184, -30.101740879293228]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.094178537768464, -30.102372046768085]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09507975999747, -30.10311459157794]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09829029526992, -30.0979568211483]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09825810876174, -30.099785409380733]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.09724959817214, -30.09812390168036]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-57.0988267370729, -30.098420933040064]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.992451412685455, -28.61981230014253]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.992665989406646, -28.620019495034633]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.993202431209625, -28.620895359834055]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.987719995983184, -28.620528062581883]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99177017462188, -28.618684688564976]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.98708694035181, -28.61823609129147]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.995197940412844, -28.622257543113]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.78775758360757, -29.34616984600057]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.78822965239419, -29.346712263705243]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.79310054396524, -29.350864469105648]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77975740986464, -29.354758483664476]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77925315456984, -29.355235397113823]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7801651056349, -29.35558139174825]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75416422101693, -29.386032232636815]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.754250051705405, -29.386630528083394]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75356340619759, -29.38657443803475]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75369215223031, -29.385901355038865]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76180315229134, -29.381694485432043]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.762232305733725, -29.384050353840347]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.767510893075034, -29.387827108421444]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76583719464974, -29.387827108421444]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76480722638802, -29.380348250424287]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.759399893014, -29.378815016640726]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76111650678353, -29.38778971549892]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.761030676095054, -29.385097388958016]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.763777258126304, -29.38479823716669]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.773476125924155, -29.377917503219866]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7744202634974, -29.381507509412632]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77407694074349, -29.38277893956964]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.007468463175414, -29.08070175916864]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.007683039896605, -29.082314472872568]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.00536561130774, -29.081001800839076]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.005666018717406, -29.081751901192042]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.880292191940136, -29.0503311886782]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.87973429246504, -29.050668834957023]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88411165757734, -29.05835936754551]),
            {
              "reference": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.88509871049482, -29.059372224218528]),
            {
              "reference": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58389600276725, -28.89832247152488]),
            {
              "reference": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.583981833455724, -28.899675035587947]),
            {
              "reference": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58286603450553, -28.898698185532595]),
            {
              "reference": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.588445029256505, -28.904484009507367]),
            {
              "reference": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.59350903987662, -28.90628731727594]),
            {
              "reference": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.592135748861, -28.905535942847525]),
            {
              "reference": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.590934119222325, -28.907188959408185]),
            {
              "reference": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58827336787955, -28.907564641317588]),
            {
              "reference": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58930333614127, -28.907639777536247]),
            {
              "reference": 12,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57840283870475, -28.89366350484736]),
            {
              "reference": 12,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6146127374057, -28.912300298704356]),
            {
              "reference": 12,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61735931943695, -28.912262732289392]),
            {
              "reference": 12,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.615986028421325, -28.909670616805137]),
            {
              "reference": 12,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61602894376556, -28.91079763149538]),
            {
              "reference": 12,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.626845362558484, -28.921405248964295]),
            {
              "reference": 12,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62920570649159, -28.91990271365772]),
            {
              "reference": 12,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6298923519994, -28.915282281199307]),
            {
              "reference": 12,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.629849436655164, -28.91370452541375]),
            {
              "reference": 12,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62890529908192, -28.915056888984942]),
            {
              "reference": 12,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.646286013498425, -28.920578857239715]),
            {
              "reference": 12,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.644054415598035, -28.921179870056154]),
            {
              "reference": 12,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64268112458241, -28.921367685846953]),
            {
              "reference": 12,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.633068087473035, -28.927152245612618]),
            {
              "reference": 12,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64298153199208, -28.927452733406046]),
            {
              "reference": 12,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64371109284413, -28.925950285729666]),
            {
              "reference": 12,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.609054883935414, -28.896002559896516]),
            {
              "reference": 12,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.60296090505358, -28.900360856182417]),
            {
              "reference": 12,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.60150178334948, -28.91208226222308]),
            {
              "reference": 12,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.60210259816881, -28.909828248510326]),
            {
              "reference": 12,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.593595820981726, -28.798935942727454]),
            {
              "reference": 12,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.59496911199735, -28.800139372156632]),
            {
              "reference": 12,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.591879207212195, -28.800741081660302]),
            {
              "reference": 12,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.588617641050085, -28.801418000699414]),
            {
              "reference": 12,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.582609492856726, -28.793595556999264]),
            {
              "reference": 12,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58728120996344, -28.79153233106291]),
            {
              "reference": 12,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.585478765505435, -28.79341281699808]),
            {
              "reference": 12,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.60127161218512, -28.799054071275865]),
            {
              "reference": 12,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61371352421477, -28.765050971934663]),
            {
              "reference": 12,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61478640782073, -28.751732781575026]),
            {
              "reference": 12,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61546084740319, -28.75244764284683]),
            {
              "reference": 12,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61649081566491, -28.751130789340042]),
            {
              "reference": 12,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61481711723962, -28.74966341872918]),
            {
              "reference": 12,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61520335533776, -28.750190169525744]),
            {
              "reference": 12,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.612885926748895, -28.750190169525744]),
            {
              "reference": 12,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61099765160241, -28.76655574536094]),
            {
              "reference": 12,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61280009606042, -28.766367649869153]),
            {
              "reference": 12,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61352965691247, -28.766104315611116]),
            {
              "reference": 12,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58920600216407, -28.764987745825664]),
            {
              "reference": 12,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.59469916622657, -28.76513822423575]),
            {
              "reference": 12,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.59246756832618, -28.767470611848672]),
            {
              "reference": 12,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.597016594815436, -28.780184969505616]),
            {
              "reference": 12,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57418563168067, -28.754679458343027]),
            {
              "reference": 12,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.572812340665045, -28.75151904957531]),
            {
              "reference": 12,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.586030266690436, -28.76122571506547]),
            {
              "reference": 12,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.5724261025669, -28.762504820737092]),
            {
              "reference": 12,
              "system:index": "202"
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
            }),
        ee.Feature(
            ee.Geometry.Point([-55.99740398551306, -28.615600468726022]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.951073912201196, -29.059691512214577]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95673873764065, -29.05984156374424]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.956567076263696, -29.063142642149824]),
            {
              "reference": 21,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.953305510101586, -29.06329268865697]),
            {
              "reference": 21,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.95004394393948, -29.06374282686811]),
            {
              "reference": 21,
              "system:index": "93"
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
// MAPBIOMAS PAMPA
// COLLECTION 10
// AUTHOR: Juliano Schirmbeck 
// UPDATED: Apr 2025 - J. Schirmbeck, E. Velez e G. Rodigheri

// Script para fazer ajuste fino da classificação das regiões
  
// Baseado na versao R0X feita pelo Juliano, customizada para calcular a area pelo limite sem buffer
// customizada para incluir mosaico com duas versões de bandas RGB falsa cor
  
// =================================================================================================================
//                                    DEFINITIONS:
// =================================================================================================================
// Versões
var version_out = '09' // mudar a cada nova versao que for exportada
var versionMosaics = '2' // versão dos mosaicos da col 10
var version_8522 = '09'
// ----------------------------------------------------------------------
// Versões das amostras
var version_samples = '02';

var regiao = 5
var collection_out = 10
var bioma = 'PAMPA'

// -----------------------------------------------------------------------
// Pocentagens calculadas no for de anos
var nSamplesMin = 50;
var nSamplesMax = 2000;
var RFtrees = 100 // 60, 100  
var desvio = 0 // desvio para calculo de balanceamento de amostras

// -----------------------------------------------------------------------
// Flags para ativar e desativar recursos de processamento
// definir com 1 para usar e como zero para não usar
var calc_area = 0
var importar_estaveis = 1    // definir com 1 para importar e como zero para gerar a partir de pontos estaveis
var usar_complementares = 1

var calcula_acuracia = 0
var calcula_confusao = 0 // se calcula acuracia igual a zero esse é ignorado

// ----------------------------------------------------------------------
// Define os parâmetros de visualização
var palettes = require('users/mapbiomas/modules:Palettes.js');
// Vis coll 09
var vis = { 'min': 0, 'max': 62,  'palette': palettes.get('classification8')};
var visParMedian = {'bands':['swir1_m','nir_m','red_m'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
var visParMedian2 = {'bands':['nir_median','swir1_median','red_median'], 'gain':[0.06, 0.08,0.2],'gamma':0.5 };
// Parâmetros de visualização da imagem de diferença
var vischange = {"min": 0, "max": 3,
        "palette": "ffffff,ff0000,e6f919,aaaaaa",    //amarelo=e6f919    magenta=bb34c0
        "format": "png"
}
 
// Required functions
var filterPoint =  require('users/grazielirodigheri/MapBiomas_col10:Functions/filter_stable_points.js')

// =================================================================================================================
//                                    ASSETS:
// =================================================================================================================
// Mosaicos
var dirasset =  'projects/nexgenmap/MapBiomas2/LANDSAT/BRAZIL/mosaics-2-pampa';

// Pontos estaveis com propriedades
var dirsamples = 'projects/mapbiomas-workspace/AMOSTRAS/col9/PAMPA/SAMPLES/v' + version_samples + '/training_periodos_'

// Local de saída da coleção
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-' + collection_out + '/GENERAL/classification-pam/'

// Limite com buffer
var regioesCollection = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col09_buff')
var limite = regioesCollection.filterMetadata('ID', 'equals', regiao);

// Limite sem o buffer  
var regioesCollection2 = ee.FeatureCollection('projects/mapbiomas-workspace/AUXILIAR/REGIOES/VETOR/PAMPA_regioes_col05')
var limite2 = regioesCollection2.filterMetadata('ID', 'equals', regiao);

// Raster limite do PAMPA 
var limite_reg_raster = ee.Image('projects/mapbiomas-workspace/AUXILIAR/PAMPA/Pampa_regions_col5_raster_buff')
var mask_regiao = limite_reg_raster.eq(regiao).selfMask()
Map.centerObject(mask_regiao, 6)

// Filtra o mosaico                        
var mosaicos = ee.ImageCollection(dirasset)
                  .filterMetadata('biome', 'equals', bioma)
                  .filterMetadata('version', 'equals', versionMosaics)
// print('Mosaicos', mosaicos)

// LULCs mapbiomas images reclassied
var col9Integracao = ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_integration_v1')

// Classes Mapbiomas BR e PAMPA
var class_in =  [3,4,5,6,49,11,12,13,32,29,50,15,18,19,39,20,40,62,41,36,46,47,48,9,21,22,23,24,30,25,33,31]
var class_out = [3,4,5,6, 3,11,12,13,32,29,12,21,21,21,21,21,21,21,21,21,21,21,21,3,21,22,22,22,22,22,33,33]

// Reclassifica a col9
var col9_int_1year = col9Integracao
  .mask(mask_regiao)
  .select('classification_2023')
  .remap(class_in, class_out)
  .rename('classification_2023')
  
// Define os anos
var anos = [2023, 2024];

// =================================================================================================================
//                                    CLASSIFICATION:
// =================================================================================================================

// Nomes bandas
{var bandNames = ee.List([
'evi2_amp', 'gv_amp', 'ndfi_amp', 'ndvi_amp', 'ndwi_amp', 'soil_amp', 'wefi_amp', 'blue_median', 'blue_median_dry',
'blue_median_wet', 'cai_median', 'cai_median_dry', 'cloud_median', 'evi2_median', 'evi2_median_dry', 'evi2_median_wet',
'gcvi_median', 'gcvi_median_dry', 'gcvi_median_wet', 'green_median', 'green_median_dry', 'green_median_wet', 'green_median_texture',
'gv_median', 'gvs_median', 'gvs_median_dry', 'gvs_median_wet',
'hallcover_median', 'latitude', 'longitude', 'ndfi_median', 'ndfi_median_dry', 'ndfi_median_wet',
'ndvi_median', 'ndvi_median_dry', 'ndvi_median_wet', 'ndvi_amp_3y', 'ndwi_median', 'ndwi_median_dry', 'ndwi_median_wet',
'nir_median', 'nir_median_dry', 'nir_median_wet', 'npv_median', 'pri_median', 'pri_median_dry', 'pri_median_wet',
'red_median', 'red_median_dry', 'red_median_wet', 'savi_median', 'savi_median_dry', 'savi_median_wet',
'sefi_median', 'sefi_median_dry', 'shade_median', 'soil_median', 'swir1_median', 'swir1_median_dry', 'swir1_median_wet',
'swir2_median', 'swir2_median_dry', 'swir2_median_wet', 'wefi_median', 'wefi_median_wet',
'blue_min', 'green_min', 'nir_min', 'red_min', 'swir1_min', 'swir2_min', 'blue_stdDev', 'cai_stdDev', 'cloud_stdDev',
'evi2_stdDev', 'gcvi_stdDev', 'green_stdDev', 'gv_stdDev', 'gvs_stdDev', 'hallcover_stdDev',
'ndfi_stdDev', 'ndvi_stdDev', 'ndwi_stdDev', 'nir_stdDev', 'red_stdDev', 'savi_stdDev', 'sefi_stdDev',
'shade_stdDev', 'soil_stdDev', 'swir1_stdDev', 'swir2_stdDev', 'wefi_stdDev', 'slope'
]);

var bandNamesShort = ee.List([
'evi2_a', 'gv_a', 'ndfi_a', 'ndvi_a', 'ndwi_a', 'soil_a', 'wefi_a', 'blue_m', 'blue_m_d', 'blue_m_w',
'cai_m', 'cai_m_d', 'cloud_m', 'evi2_m', 'evi2_m_d', 'evi2_m_w', 'gcvi_m', 'gcvi_m_d', 'gcvi_m_w',
'green_m', 'green_m_d', 'green_m_w', 'green_m_t', 'gv_m', 'gvs_m', 'gvs_m_d', 'gvs_m_w',
'hallcov_m', 'lat',  'long',  'ndfi_m', 'ndfi_m_d', 'ndfi_m_w', 'ndvi_m', 'ndvi_m_d', 'ndvi_m_w', 'ndvi_a_3y', 
'ndwi_m', 'ndwi_m_d', 'ndwi_m_w', 'nir_m', 'nir_m_d', 'nir_m_w', 'npv_m', 'pri_m', 'pri_m_d', 'pri_m_w',
'red_m', 'red_m_d', 'red_m_w', 'savi_m', 'savi_m_d', 'savi_m_w', 'sefi_m', 'sefi_m_d', 'shade_m', 'soil_m',
'swir1_m', 'swir1_m_d', 'swir1_m_w', 'swir2_m', 'swir2_m_d', 'swir2_m_w', 'wefi_m', 'wefi_m_w', 'blue_min',
'green_min', 'nir_min', 'red_min', 'swir1_min', 'swir2_min', 'blue_sD', 'cai_sD', 'cloud_sD', 'evi2_sD',
'gcvi_sD', 'green_sD', 'gv_sD', 'gvs_sD', 'hallcov_sD', 'ndfi_sD', 'ndvi_sD', 'ndwi_sD', 'nir_sD', 'red_sD', 'savi_sD',
'sefi_sD', 'shade_sD', 'soil_sD', 'swir1_sD', 'swir2_sD', 'wefi_sD','slope'
])}

var deficit_amostras = ee.Feature(ee.Geometry.Point([0, 0]))

for (var i_ano=0;i_ano<anos.length; i_ano++){
  var ano = anos[i_ano];
  
  // =================================================================================================================
  //                                Seta o percentual de amostras de cada bloco:
if (ano > 2022){ // ajustar para período 3
   var percent_Flo = 13
   var percent_Umi = 7
    var percent_Cam = 48
    var percent_Agr = 42
    var percent_Anv = 14
    var percent_Agu = 30
  }
    if (ano > 2023){ // ajustar para período 3
   var percent_Flo = 15
    var percent_Umi = 8
    var percent_Cam = 48
    var percent_Agr = 42
    var percent_Anv = 14
    var percent_Agu = 30
  }

  // =================================================================================================================
  //                                Calcula as propriedades adicionais do mosaico:
  // ------------------------------------------------------------------------------------
  var mosaicoTotal =   mosaicos.filterMetadata('year', 'equals', ano)
                      .filterBounds(limite)
                      .mosaic()
                      
  if (ano == 1985){ // Usa o valor do ano como amplitude
    // var amp3anos = max3anos.subtract(min3anos).rename('amp_ndvi_3anos')
    var min3anos = mosaicoTotal.select('ndvi_median_dry')
    var max3anos = mosaicoTotal.select('ndvi_median_wet')
  }
  if (ano == 1986){ // Usa os 2 anos anteriores como amplitude
    // var amp3anos = max3anos.subtract(min3anos).rename('amp_ndvi_3anos')
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
  
  mosaicoTotal = mosaicoTotal.addBands(ndvi_a_3y)
  // ----------------------------------------------------------------------------------------
  var ll = ee.Image.pixelLonLat().mask(limite_reg_raster);
  var long = ll.select('longitude').add(0).multiply(-1).multiply(1000).toInt16()
  var lati = ll.select('latitude').add(0).multiply(-1).multiply(1000).toInt16()

  mosaicoTotal = mosaicoTotal.addBands(long.rename('longitude'))
  mosaicoTotal = mosaicoTotal.addBands(lati.rename('latitude' ))
  //print('Mosaico Total', mosaicoTotal)

  mosaicoTotal = mosaicoTotal.select(bandNames,bandNamesShort)
  
  // Map.addLayer(mosaicoTotal, visParMedian, 'Img_Year_'+ano, false)
  
  // =================================================================================================================
  //                                Seta as amostras para uso na classificação:
  // -----------------------------------------------------------------------
  // Importa e seleciona as amostras estáveis
  if (importar_estaveis == 1){
    
    var amostrasEst = ee.FeatureCollection(dirsamples + '2022_FOc8v01')
            .filter(ee.Filter.lt('outlier', 20))
            .filterBounds(limite2.geometry())
    print("Amostras Est 2022", amostrasEst.size())
    
    // Função para filtrar apenas os pontos estáveis em cada ano (imagem, pontos, banda da imagem, referência)
    var SS_amostras = filterPoint.filtrarPontosEstaveis(col9_int_1year, amostrasEst, 'classification_2023', "reference")
    print("Amostras Est 2023", SS_amostras.size())
    
    var SS_Flo = SS_amostras.filterMetadata('reference', 'equals', 3)
    var SS_Umi = SS_amostras.filterMetadata('reference', 'equals', 11)
    var SS_Cam = SS_amostras.filterMetadata('reference', 'equals', 12)
    var SS_Agr = SS_amostras.filterMetadata('reference', 'equals', 21)
    var SS_Anv = SS_amostras.filterMetadata('reference', 'equals', 22)
    // var SS_Afr = SS_amostras.filterMetadata('reference', 'equals', 29)
    var SS_Agu = SS_amostras.filterMetadata('reference', 'equals', 33)

    var n_samples_Flo = ee.Number(ee.Number(nSamplesMax).multiply(percent_Flo).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Umi = ee.Number(ee.Number(nSamplesMax).multiply(percent_Umi).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Cam = ee.Number(ee.Number(nSamplesMax).multiply(percent_Cam).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Agr = ee.Number(ee.Number(nSamplesMax).multiply(percent_Agr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Anv = ee.Number(ee.Number(nSamplesMax).multiply(percent_Anv).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    // var n_samples_Afr = ee.Number(ee.Number(nSamplesMax).multiply(percent_Afr).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)
    var n_samples_Agu = ee.Number(ee.Number(nSamplesMax).multiply(percent_Agu).divide(100)).round().int16().max(nSamplesMin).min(nSamplesMax)

    var SS_Flo_samples = SS_Flo.randomColumn().sort('random').limit(n_samples_Flo)
    var SS_Umi_samples = SS_Umi.randomColumn().sort('random').limit(n_samples_Umi)
    var SS_Cam_samples = SS_Cam.randomColumn().sort('random').limit(n_samples_Cam)
    var SS_Agr_samples = SS_Agr.randomColumn().sort('random').limit(n_samples_Agr)
    var SS_Anv_samples = SS_Anv.randomColumn().sort('random').limit(n_samples_Anv)
    // var SS_Afr_samples = SS_Afr.randomColumn().sort('random').limit(n_samples_Afr)
    var SS_Agu_samples = SS_Agu.randomColumn().sort('random').limit(n_samples_Agu)

    // Cria variavel com todas as amostras estáveis
    var SS_amostras = SS_Flo_samples
            .merge(SS_Umi_samples)
            .merge(SS_Cam_samples)
            .merge(SS_Agr_samples)
            .merge(SS_Anv_samples)
//            .merge(SS_Afr_samples)
            .merge(SS_Agu_samples)

    deficit_amostras = deficit_amostras.set(String(ano),[
      SS_Flo_samples.size().toInt().subtract(n_samples_Flo),
      SS_Umi_samples.size().toInt().subtract(n_samples_Umi),
      SS_Cam_samples.size().toInt().subtract(n_samples_Cam),
      SS_Agr_samples.size().toInt().subtract(n_samples_Agr),
      SS_Anv_samples.size().toInt().subtract(n_samples_Anv),
//      SS_Afr_samples.size().toInt().subtract(n_samples_Afr),
      SS_Agu_samples.size().toInt().subtract(n_samples_Agu)])
  }
  
  print('ss_amo old',SS_amostras.limit(5))
  var SS_amostras_new = SS_amostras.map(function(feat){
    return feat.select(['outlier','reference','ID'])
  })
  
  print('ss_amo sem pro',SS_amostras_new.limit(5))
  var SS_amostras = mosaicoTotal.sampleRegions({
        'collection': SS_amostras_new,
        'properties': ['reference'],
        'scale': 30,
        'tileScale': 4
    });
  print('ss_amo new',SS_amostras.limit(1))

  if(usar_complementares == 1){
  
    var pontosComp = floresta
                .merge(aumi)
                .merge(campo)
                .merge(agric)
                .merge(anv)
//                .merge(arocho)
                .merge(agua);
    print("Amostras Comp 2022", pontosComp.size())
                
    // Função para filtrar apenas os pontos estáveis em cada ano (imagem, pontos, banda da imagem, referência)
    var pontos_complementares = filterPoint.filtrarPontosEstaveis(col9_int_1year, pontosComp, 'classification_2023', "reference")
    print("Amostras Comp 2023", pontos_complementares.size())
    
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
  
  // =================================================================================================================
  //                                    CLASSIFY REGION:
  // Classificador sem informações de importância e árvores 
  // print(training)
  var classifier = ee.Classifier.smileRandomForest({numberOfTrees: RFtrees, variablesPerSplit:1}).train(training, 'reference', bandNamesShort);
  
  var classifier_prob = classifier.setOutputMode('MULTIPROBABILITY')
  
  var classified = mosaicoTotal.classify(classifier).mask(mask_regiao);
  var classified_prob = mosaicoTotal.classify(classifier_prob).mask(mask_regiao);
  var max_prob = classified_prob.arrayReduce(ee.Reducer.max(), [0]);
  var img_max_prob = max_prob.arrayFlatten([['prob_'+ano]]).multiply(100)
  
  // // print("Image_max_prob", img_max_prob)
  // var imageVisParam3 = {"opacity":1,"bands":["classification"],"min":17.347148895263672,"max":99.36353302001953,"palette":["ffff55","38761d"]};
  // Map.addLayer(img_max_prob, imageVisParam3, 'RF classified_prob', false)

  classified = classified.select(['classification'],['classification_'+ano]).toInt8()

  if (i_ano == 0){ var classified_serie = classified;
                   var classified_max_prob_serie = img_max_prob 
  }  
  else {classified_serie = classified_serie.addBands(classified); 
        classified_max_prob_serie = classified_max_prob_serie.addBands(img_max_prob);
  }
  
  // =================================================================================================================
  //                                    CALCULATE ACURACY:
  var acura_region = require('users/schirmbeckj/MapBiomas:Coll05_final/Coll05/Passo008_acuracia_class_2017_Pampa_Regioes_function.js').acura_region;
  // o 'calcula_confusao' como ultimo parâmetro da função de acuracia é usado para
  // ativar ou desativar o cáculo da Matriz de Confusão
  var acc = acura_region(classified, String(ano), regiao, version_out, calcula_confusao);
}

// =================================================================================================================
//                                   PRINTA E EXPORTA A COLEÇÃO
// =================================================================================================================

Map.addLayer(mosaicos
  .filterMetadata('year', 'equals', 2023)
  .filterBounds(limite).mosaic(), 
  visParMedian2, "Mosaico 2023")
Map.addLayer(mosaicos
  .filterMetadata('year', 'equals', 2024)
  .filterBounds(limite).mosaic(), 
  visParMedian2, "Mosaico 2024")

print('classified_serie', classified_serie)
Map.addLayer(col9_int_1year, vis, "Classificação col9 2023")
Map.addLayer(classified_serie.select('classification_2023'), vis, "Classificação 2023")
Map.addLayer(classified_serie.select('classification_2024'), vis, "Classificação 2024")

// -----------------------------------------------------------------------------------------------------
// Mascara e seta as propriedas da imagem
classified_serie = classified_serie.mask(mask_regiao)
classified_serie = classified_serie
    .set('collection', collection_out)
    .set('version', version_out)
    .set('biome', bioma)

var col10_85_22 = ee.Image('projects/mapbiomas-brazil/assets/LAND-COVER/COLLECTION-10/GENERAL/classification-pam/0'+regiao+'_RF_col10_85-22_v'+version_8522)
print("Col 10 - 85 a 22", col10_85_22)

var classified_total = col10_85_22.addBands(classified_serie)
print("Col 10 total", classified_total)

// Exporta a classificação
Export.image.toAsset({
  'image': classified_total.toInt8(),
  'description': '0'+ regiao + '_' +'RF_col' + collection_out + '_v' + version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'RF_col' + collection_out + '_v' + version_out,
  'scale': 30,
  'pyramidingPolicy': {
      '.default': 'mode'
  },
  'maxPixels': 1e13,
  'region': limite
});
 
// // Seta as propriedades da imagem 
// classified_max_prob_serie = classified_max_prob_serie    
//         .set('collection', collection_out)
//         .set('version', version_out)
//         .set('biome', bioma)
        
// Export.image.toAsset({
//   'image': classified_max_prob_serie.toInt8(),
//   'description': regiao + '-'+'RF_PROB_col' + collection_out + '_v' + version_out,
//   'assetId': dirout + '0'+ regiao + '_' + 'RF_PROB_col' + collection_out + '_v' + version_out,
//   'scale': 30,
//   'pyramidingPolicy': {
//       '.default': 'mode'
//   },
//   'maxPixels': 1e13,
//   'region': limite
// });

var blank = ee.Image(0).mask(0);
var outline = blank.paint(limite, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline, visPar, 'Limite região 0' + String(regiao), false)
Map.centerObject(limite)
