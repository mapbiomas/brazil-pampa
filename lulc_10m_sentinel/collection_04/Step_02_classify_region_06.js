/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = 
    /* color: #ea9999 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.08753170603441, -29.95873882681714]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.08712401026415, -29.958543625213743]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.08650173777269, -29.958320537197636]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.085707803904285, -29.957967313481547]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.088475843607654, -29.95915711467651]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.088229080378284, -29.959008390305932]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13891054736495, -30.143511165156433]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13792349444747, -30.14410495402337]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.137279764283896, -30.144884296488097]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95768898149524, -30.143819907764993]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95758169313464, -30.143810629814617]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95763533731494, -30.14391268722069]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95833271165881, -30.14478480983971]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.958279067478514, -30.14479408769847]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41807738916078, -29.827205602737443]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.418152491013196, -29.827419676859222]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41846362725892, -29.82842488834215]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41774479524293, -29.824697673685755]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41776625291505, -29.82302225311342]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41776625291505, -29.82362726933762]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41772333757081, -29.82422297404168]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41783062593141, -29.822305536847463]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41774479524293, -29.825572604377115]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.417905727783825, -29.826307912545147]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42632531833718, -29.81829033497262]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42648625087807, -29.818262409736572]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.426153656960224, -29.818281026561475]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.427140709877705, -29.81822517607639]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.4183323354728, -29.817080234256256]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41831087780068, -29.817517733898075]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41821431827614, -29.81802969913291]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.361172216634536, -30.13374001663265]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34915592024782, -30.12928604528578]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.334736364583755, -30.122604711486876]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36323215315797, -30.13463078678626]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36185886214235, -30.13507616884849]),
            {
              "reference": 22,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34417774031618, -30.15348353557134]),
            {
              "reference": 22,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34640933821657, -30.15244450149578]),
            {
              "reference": 22,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59015479782116, -29.974619594448683]),
            {
              "reference": 22,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.58933940628063, -29.9736902081059]),
            {
              "reference": 22,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60384479263317, -29.97692443505855]),
            {
              "reference": 22,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60431686141979, -29.979898343919622]),
            {
              "reference": 22,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6050035069276, -29.980270076266436]),
            {
              "reference": 22,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.960221693115244, -29.960958003866335]),
            {
              "reference": 22,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95575849731446, -29.959247691157003]),
            {
              "reference": 22,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.96253912170411, -29.956570620881546]),
            {
              "reference": 22,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.955672666625986, -29.950100736760056]),
            {
              "reference": 22,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95241110046388, -29.950100736760056]),
            {
              "reference": 22,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94914953430177, -29.950100736760056]),
            {
              "reference": 22,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.933663543724506, -29.90644119624887]),
            {
              "reference": 22,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93338459398696, -29.90993800698584]),
            {
              "reference": 22,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93458622362563, -29.909101015591084]),
            {
              "reference": 22,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93349188234755, -29.908282617204343]),
            {
              "reference": 22,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.934199985527485, -29.907464212093377]),
            {
              "reference": 22,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93555181887099, -29.907520012655464]),
            {
              "reference": 22,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.940444489765085, -29.90973392813852]),
            {
              "reference": 22,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93954326753608, -29.910738310585845]),
            {
              "reference": 22,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93636753206245, -29.907315928853922]),
            {
              "reference": 22,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.936453362750925, -29.906106907200076]),
            {
              "reference": 22,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93576671724311, -29.905325685404264]),
            {
              "reference": 22,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93615295534126, -29.909343332229273]),
            {
              "reference": 22,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93559448762325, -29.908413335804017]),
            {
              "reference": 22,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93437140031246, -29.910217520951555]),
            {
              "reference": 22,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9353155378857, -29.909938525384433]),
            {
              "reference": 22,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95807520762176, -29.95680924848204]),
            {
              "reference": 22,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.957216900736995, -29.955284777130505]),
            {
              "reference": 22,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9575602234909, -29.956995158023208]),
            {
              "reference": 22,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95910517588348, -29.955545054381975]),
            {
              "reference": 22,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95889059916229, -29.956995158023208]),
            {
              "reference": 22,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95807520762176, -29.95721824901369]),
            {
              "reference": 22,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9566590012619, -29.952087029573754]),
            {
              "reference": 22,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.96056429758758, -29.952719150618595]),
            {
              "reference": 22,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95356567311566, -29.952015844243125]),
            {
              "reference": 22,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.95232112813275, -29.95212739538762]),
            {
              "reference": 22,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.958765750122154, -30.001960447179954]),
            {
              "reference": 22,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96064329643258, -30.001644543802264]),
            {
              "reference": 22,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95992446441659, -30.000891946409503]),
            {
              "reference": 22,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9592056324006, -30.001105647483996]),
            {
              "reference": 22,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95931292076119, -30.001858243256034]),
            {
              "reference": 22,
              "system:index": "78"
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
            ee.Geometry.Point([-54.71050560465746, -29.825651984908827]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.710709452542595, -29.82567990808045]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70934689036303, -29.826619983639297]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.709443449887566, -29.826350061859088]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71585929385119, -29.82905855426223]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7076302765935, -29.828593182783717]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7080272435277, -29.828230191525957]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.701170890873534, -29.82590378007618]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.08299803932891, -29.968372350560045]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0831214209436, -29.96865582948863]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.08275664051757, -29.96918560761337]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89204828925681, -30.123196569259456]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89187126346183, -30.123001691406234]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.891034414249184, -30.12271401387239]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89140992351127, -30.12271401387239]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.893029977756264, -30.123693042052334]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89293878264976, -30.123693042052334]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.890535523372414, -30.12218041622785]),
            {
              "reference": 33,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.890519430118324, -30.122268576037506]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.8940814036901, -30.124788057332]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89365761466575, -30.1238786387171]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.891238262134316, -30.122718653839264]),
            {
              "reference": 33,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89562099166465, -30.124690620023873]),
            {
              "reference": 33,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89556734748435, -30.12468598014966]),
            {
              "reference": 33,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89509527869773, -30.125154606344182]),
            {
              "reference": 33,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.895014812427284, -30.125242763498562]),
            {
              "reference": 33,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89814226813865, -30.126759982189668]),
            {
              "reference": 33,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37864587190803, -30.19501365842645]),
            {
              "reference": 33,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37858149889167, -30.195199120897797]),
            {
              "reference": 33,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37578127268012, -30.196237704281607]),
            {
              "reference": 33,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37556669595893, -30.196126428014487]),
            {
              "reference": 33,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37511608484443, -30.195848236796483]),
            {
              "reference": 33,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37624261263068, -30.196747718896734]),
            {
              "reference": 33,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.373206352025825, -30.194457268916466]),
            {
              "reference": 33,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.957706269050604, -30.145969569189774]),
            {
              "reference": 33,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95779746415711, -30.145983485810465]),
            {
              "reference": 33,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95762043836213, -30.145969569189774]),
            {
              "reference": 33,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.957537289882666, -30.146426497210054]),
            {
              "reference": 33,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95763921382523, -30.146424177783835]),
            {
              "reference": 33,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95843851211167, -30.14606234662401]),
            {
              "reference": 33,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95836609246827, -30.146069304928055]),
            {
              "reference": 33,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.957443412567144, -30.14607626323161]),
            {
              "reference": 33,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95707863214112, -30.146795285287176]),
            {
              "reference": 33,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.958792563701635, -30.145800250147406]),
            {
              "reference": 33,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.958698686386114, -30.14587911110741]),
            {
              "reference": 33,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.958709415222174, -30.14563093081445]),
            {
              "reference": 33,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.1307215081855, -29.936122287272283]),
            {
              "reference": 33,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.13333934418404, -29.94493585050519]),
            {
              "reference": 33,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.12209552399361, -29.938093320675456]),
            {
              "reference": 33,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.130270897071, -29.936419804250434]),
            {
              "reference": 33,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.130914627234574, -29.936326830290337]),
            {
              "reference": 33,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.131858764807816, -29.936512778123664]),
            {
              "reference": 33,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13040396264783, -29.972643909359526]),
            {
              "reference": 33,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13027521661512, -29.972546322261366]),
            {
              "reference": 33,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13023766568891, -29.972629968351377]),
            {
              "reference": 33,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13389083436719, -29.972783319333473]),
            {
              "reference": 33,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13366552880994, -29.972783319333473]),
            {
              "reference": 33,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12991043618909, -29.972327912694347]),
            {
              "reference": 33,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13069364122144, -29.972676438370943]),
            {
              "reference": 33,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1305058865904, -29.972699673372578]),
            {
              "reference": 33,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.13123091303968, -29.938794306648038]),
            {
              "reference": 33,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.13144548976087, -29.940170278258044]),
            {
              "reference": 33,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.13191755854749, -29.94124872918869]),
            {
              "reference": 33,
              "system:index": "62"
            })]),
    floresta = 
    /* color: #006400 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.14946772204757, -30.144216289038084]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.149296060670615, -30.144513181796448]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.146077409852744, -30.13423275000319]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15232827789556, -30.131263472922658]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.14571931488287, -30.13360178609701]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81796729984427, -30.05636020475284]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.82217300357962, -30.060334602858514]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81552112522269, -30.053314296355296]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.811808947946076, -30.057103095026942]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81150854053641, -30.057381677442702]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81122959079886, -30.057140239394336]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81155145588065, -30.057623114902327]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81225955906058, -30.054670108615046]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.816079024697785, -30.05624877073098]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81590736332083, -30.05398291841984]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.8182247919097, -30.058105988055306]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81888997974539, -30.058551715029335]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.822602157022004, -30.05702880625036]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.355777280735516, -29.82733669018299]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35785867493107, -29.827560071571867]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.357837217258954, -29.826592081947208]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35845948975041, -29.826350083076022]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.355841653751874, -29.825326235213804]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.355584161686444, -29.82564269840029]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36043359558537, -29.825940545189823]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36090566437199, -29.82556823656422]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22290894861537, -30.666714606767847]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22247979517299, -30.666862260968887]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08414206878661, -29.945734424595614]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08242545501708, -29.947035929036716]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.083584169311514, -29.94153230828327]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.0849145449829, -29.939598531399938]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08993564025878, -29.941271994353958]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08495746032714, -29.948895191549404]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.085815767211905, -29.94651532930413]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09087977783202, -29.944507276237005]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.090278963012686, -29.945920354844265]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.219484516415676, -29.965545331438364]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.216780849728664, -29.96698599465631]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21282190922268, -29.966902343814812]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21634096745022, -29.965285080371764]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21915192249783, -29.965489563410042]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.218282886777004, -29.964476438780377]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21886224392422, -29.966316785952653]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.218293615613064, -29.966577034317364]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21710271481045, -29.964569386424422]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.22154445293911, -29.96613089384629]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.712103144783036, -29.997943065847867]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.712414281028764, -29.99796164912044]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71221579756166, -29.998245043596118]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71500529493715, -29.998282210024705]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.714855091232316, -29.9983333138413]),
            {
              "reference": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71457614149477, -29.998458750370432]),
            {
              "reference": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.714860455650346, -29.99849591671898]),
            {
              "reference": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71342815603639, -29.99743667033082]),
            {
              "reference": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.713149206298844, -29.997571399665606]),
            {
              "reference": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71352471556093, -29.99713469012297]),
            {
              "reference": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71406115736391, -29.997065002252217]),
            {
              "reference": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.714130894798295, -29.996828063125648]),
            {
              "reference": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71456541265871, -29.99675372916546]),
            {
              "reference": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71493019308473, -29.996716562164487]),
            {
              "reference": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.715906517166154, -29.9964796222061]),
            {
              "reference": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.499829409163546, -30.7879803175509]),
            {
              "reference": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.496353266280245, -30.788975725954494]),
            {
              "reference": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.52125275641989, -30.78933940434201]),
            {
              "reference": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.52354872733664, -30.792343989181063]),
            {
              "reference": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51674664527487, -30.78812279727297]),
            {
              "reference": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.513163214030975, -30.78812279727297]),
            {
              "reference": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.512176161113494, -30.787754125425202]),
            {
              "reference": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25815791038131, -30.33297343479252]),
            {
              "reference": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25787896064376, -30.33332531844028]),
            {
              "reference": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25788432506179, -30.33312622653174]),
            {
              "reference": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.26027685550307, -30.333538300033826]),
            {
              "reference": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25340618198707, -30.332029101248065]),
            {
              "reference": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.205695934102444, -29.970965054652456]),
            {
              "reference": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.20529896716824, -29.971067290380052]),
            {
              "reference": 3,
              "system:index": "75"
            })]),
    aumi = 
    /* color: #45c2a5 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.123332277406455, -30.142249351949182]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13037039386153, -30.143362717381354]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12440516101241, -30.14158132665977]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12075735675216, -30.141135973954306]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74111070155528, -29.989129842652577]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73527421473887, -29.98626772305748]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72677697657969, -29.984632189103987]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72690572261241, -29.980097158609883]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72887982844737, -29.986490748327554]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73029603480723, -29.989278521935663]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7335146856251, -29.990988317687805]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73887910365489, -29.990765302520497]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64565676280866, -29.947302658639327]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64153688976179, -29.94507150372495]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64102190563093, -29.948641327561905]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.635357080191476, -29.94522024894311]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.639648614615304, -29.94819510658994]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.649089990347726, -29.94715391653559]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.720223954786874, -29.9034438559788]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72236972199879, -29.901732554503262]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71953730927906, -29.89853308594248]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71824984895191, -29.901360528553795]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64562205668333, -29.899887292488895]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64802531596067, -29.9010405854633]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.644463342388896, -29.900705759845923]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64579371806028, -29.901189396487645]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.271121164339554, -29.97941885142058]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.271872182863724, -29.979195810267896]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25796761133052, -29.980255251282287]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.258579507187804, -29.983107772426635]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25997425587555, -29.983219288672927]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.264029755906066, -29.98284756736498]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.26149775059601, -29.980840248258968]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25825764210602, -29.980858834733077]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.99721284267374, -29.93636451002555]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.997084096641025, -29.936736405203828]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50446753713663, -30.04130241500101]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35613179617145, -29.838052437087683]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.263302796658564, -29.924679810642946]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.26373195010095, -29.925832816543437]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.268066399869014, -29.924977361831356]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.26913928347497, -29.924047511414354]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.882455800424246, -30.109992958616946]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87264224743801, -30.093414814469227]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87315723156887, -30.10277131925879]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8803670094009, -30.097424853539128]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.852042882203634, -30.091632522671862]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.847751347779806, -30.08286912071585]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.876762120484884, -30.090295782739705]),
            {
              "reference": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87006732678371, -30.093414814469227]),
            {
              "reference": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87109729504543, -30.108562997413994]),
            {
              "reference": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.886718480348165, -30.11346338301592]),
            {
              "reference": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.886203496217306, -30.11851201091592]),
            {
              "reference": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.38819994253909, -30.108545646732587]),
            {
              "reference": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.38714851660525, -30.107357637653227]),
            {
              "reference": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.38783516211306, -30.106967819061712]),
            {
              "reference": 11,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.386826651523464, -30.114002879913066]),
            {
              "reference": 11,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.387019770572536, -30.114151371841064]),
            {
              "reference": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40574161349295, -30.15228927097111]),
            {
              "reference": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.406342428312286, -30.153254090208467]),
            {
              "reference": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40801612673758, -30.154293115755245]),
            {
              "reference": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40844528017996, -30.15308710293893]),
            {
              "reference": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40666429339407, -30.153755050320736]),
            {
              "reference": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.4060205632305, -30.154181792113082]),
            {
              "reference": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40323106585501, -30.15850476790682]),
            {
              "reference": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39969054995535, -30.1580594916011]),
            {
              "reference": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39943305788992, -30.156204152018223]),
            {
              "reference": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39831725893973, -30.154942501163394]),
            {
              "reference": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40569869814871, -30.159877690525157]),
            {
              "reference": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.403831880674346, -30.15933965556059]),
            {
              "reference": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.22355813099232, -29.927782283898722]),
            {
              "reference": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.219781580699355, -29.92860052202161]),
            {
              "reference": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.21948117328969, -29.9322081280725]),
            {
              "reference": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.21016136957955, -29.956891449366363]),
            {
              "reference": 11,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.209860962169884, -29.95770944807057]),
            {
              "reference": 11,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07610325809889, -29.999584265198035]),
            {
              "reference": 11,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07358654798358, -30.010070391641293]),
            {
              "reference": 11,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0721488839516, -30.01138963409304]),
            {
              "reference": 11,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07431610883563, -30.007654831821704]),
            {
              "reference": 11,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07609709562152, -30.00546219583161]),
            {
              "reference": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.075496280802184, -30.00674433631922]),
            {
              "reference": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07858618558734, -30.004830410367244]),
            {
              "reference": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.078993881357604, -30.00570375979895]),
            {
              "reference": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07959469617694, -30.00509055781038]),
            {
              "reference": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.077942455423766, -30.007524761547227]),
            {
              "reference": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.077727878702575, -30.00875113164475]),
            {
              "reference": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07716997922748, -30.009884581435692]),
            {
              "reference": 11,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68692983860687, -29.96386821084572]),
            {
              "reference": 11,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6883031296225, -29.9522675915418]),
            {
              "reference": 11,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68795980686859, -29.964463077906053]),
            {
              "reference": 11,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68280996556, -29.96238102761726]),
            {
              "reference": 11,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.689333097884216, -29.96773478308974]),
            {
              "reference": 11,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.69516958470062, -29.96773478308974]),
            {
              "reference": 11,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.700319426009216, -29.973683061994052]),
            {
              "reference": 11,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.269610377304, -29.959576112638135]),
            {
              "reference": 11,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.26257226084892, -29.959501750794107]),
            {
              "reference": 11,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.27879426097099, -29.964297975806442]),
            {
              "reference": 11,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.2774638852996, -29.969242678640576]),
            {
              "reference": 11,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25940024169083, -29.94525171929848]),
            {
              "reference": 11,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25982939513321, -29.946218557488262]),
            {
              "reference": 11,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.29611526419145, -29.95472536088932]),
            {
              "reference": 11,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.29053626944047, -29.95465099541672]),
            {
              "reference": 11,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.332679137482465, -29.96260778552047]),
            {
              "reference": 11,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86928478762458, -30.088332343121248]),
            {
              "reference": 11,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.870915570705634, -30.086921292236894]),
            {
              "reference": 11,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.886107602565986, -30.09590711419826]),
            {
              "reference": 11,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.703754799707944, -29.976069856329513]),
            {
              "reference": 11,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70004262243133, -29.977036394791455]),
            {
              "reference": 11,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7058361939035, -29.97480590722738]),
            {
              "reference": 11,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.704484360559995, -29.980363445664807]),
            {
              "reference": 11,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71858439733827, -29.97762212412708]),
            {
              "reference": 11,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.719957688353894, -29.977073803810306]),
            {
              "reference": 11,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.14141697097779, -29.938020977243838]),
            {
              "reference": 11,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.997140732428264, -29.95233863496005]),
            {
              "reference": 11,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.99602493347807, -29.9530823044785]),
            {
              "reference": 11,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.995595780035686, -29.94304229669732]),
            {
              "reference": 11,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.995595780035686, -29.944381022964752]),
            {
              "reference": 11,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.955169525763225, -29.928166348175786]),
            {
              "reference": 11,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.971649017950725, -29.932108691130317]),
            {
              "reference": 11,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93053611817045, -29.945719731213593]),
            {
              "reference": 11,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92899116577787, -29.944678515243897]),
            {
              "reference": 11,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93113693298979, -29.93984415545844]),
            {
              "reference": 11,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.95336708130522, -29.944901633869303]),
            {
              "reference": 11,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93113693298979, -29.91983484561185]),
            {
              "reference": 11,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92839035095854, -29.918198218529035]),
            {
              "reference": 11,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93027862610502, -29.917156714560196]),
            {
              "reference": 11,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.95860275330229, -29.92734810648344]),
            {
              "reference": 11,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.00194725098295, -29.936497153361017]),
            {
              "reference": 11,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.034820404669475, -29.93143924767461]),
            {
              "reference": 11,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03791030945463, -29.929951579427403]),
            {
              "reference": 11,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04220184387846, -29.92920773696427]),
            {
              "reference": 11,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1007069571567, -30.25091867203477]),
            {
              "reference": 11,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10006322699313, -30.251224511032945]),
            {
              "reference": 11,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09900107222323, -30.250112364657642]),
            {
              "reference": 11,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.931198931274416, -29.9296292762325]),
            {
              "reference": 11,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93059811645508, -29.92881104656743]),
            {
              "reference": 11,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.930469370422365, -29.93074503311633]),
            {
              "reference": 11,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.931241846618654, -29.932902127620235]),
            {
              "reference": 11,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93325886779785, -29.93234426283464]),
            {
              "reference": 11,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.930469370422365, -29.935114960461817]),
            {
              "reference": 11,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92911753707886, -29.935654214789153]),
            {
              "reference": 11,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93042645507813, -29.936658335748675]),
            {
              "reference": 11,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.9310701852417, -29.93859216978445]),
            {
              "reference": 11,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.924493408737185, -29.935486860310675]),
            {
              "reference": 11,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.924493408737185, -29.93669552521922]),
            {
              "reference": 11,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92357072883606, -29.937104608477853]),
            {
              "reference": 11,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92657480293274, -29.93862935853214]),
            {
              "reference": 11,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92769060188294, -29.93866654726592]),
            {
              "reference": 11,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.925480461654665, -29.931228523881114]),
            {
              "reference": 11,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.925288648980576, -29.928847432103307]),
            {
              "reference": 11,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.90535721518174, -30.245214503024936]),
            {
              "reference": 11,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.90535721518174, -30.246697435981996]),
            {
              "reference": 11,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.90471348501816, -30.247846693630475]),
            {
              "reference": 11,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.903898093477636, -30.246660362930818]),
            {
              "reference": 11,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.907674643770605, -30.246808655051574]),
            {
              "reference": 11,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53697511684876, -29.861282791463953]),
            {
              "reference": 11,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53739354145508, -29.86244583530905]),
            {
              "reference": 11,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.539067239880374, -29.862483052488273]),
            {
              "reference": 11,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53859517109375, -29.863692603257135]),
            {
              "reference": 11,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53724333775025, -29.862762180890055]),
            {
              "reference": 11,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.531255578086856, -29.862266219013456]),
            {
              "reference": 11,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53109464554596, -29.862540695878003]),
            {
              "reference": 11,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.07901039193924, -30.13976635566937]),
            {
              "reference": 11,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.079450274217685, -30.13912614874831]),
            {
              "reference": 11,
              "system:index": "163"
            })]),
    campo = 
    /* color: #b8af4f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.04492984258206, -30.25026541599503]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.043513636222194, -30.25311989526517]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.04668937169583, -30.247299635399045]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.04510150395901, -30.2484118136136]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.057190497048204, -30.241966678001884]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.05676134360582, -30.24278232085411]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.05586012137682, -30.242114977205784]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0748056637399, -30.17193722451063]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.074998782788974, -30.17284620019355]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.075706885968906, -30.172957502762273]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.07012789121793, -30.174923827415352]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.160152879404585, -30.136977360677463]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.158393350290815, -30.137923772655647]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.19321915214018, -30.15048606780036]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.193326440500776, -30.150782941690455]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.193884339975874, -30.15146945913911]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.191888776468794, -30.148760470624183]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.192081895517866, -30.144381400364413]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.163406161182834, -30.12930386801233]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.162869719379856, -30.12943377833165]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.162923363560154, -30.129758553382043]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16284826170774, -30.129971976404835]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16294482123227, -30.13004621039157]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.31464323781426, -29.873183284803545]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.31387076161797, -29.873480989807277]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.313527438864064, -29.870876040898743]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.31554446004326, -29.874932288976314]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.31532988332207, -29.8771650156941]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.317475650533986, -29.876569626789856]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.33112273000176, -29.878802316853402]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.334255550131154, -29.874783438751344]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.33511385701592, -29.871397036122502]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.335457179769826, -29.87336935053499]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.816121940042024, -30.05777169150793]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81268871250296, -30.05524585889074]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.81213081302786, -30.0541686459699]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36027000659508, -29.827910696865516]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35959408992333, -29.828087539490436]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36003397220177, -29.82822715186799]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92539154132047, -30.08313698584985]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92569194873014, -30.083842540805918]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.926206932861, -30.084510956647833]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92388950427213, -30.08146591456161]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.939382137238226, -30.089763176541727]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.941141666351996, -30.08889056797053]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.940626682221136, -30.089577515788513]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.934167922913275, -30.09013449700239]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.93300920861884, -30.08879773681829]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.933910430847845, -30.08889056797053]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.934704364716254, -30.090394420495183]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.935948909699164, -30.090802870317663]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.93646389383002, -30.092325259336775]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9365497245185, -30.092770832176292]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24357929904545, -30.66228776506833]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.2547372885474, -30.658817667435397]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25632515628422, -30.65796858202149]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.257183463168985, -30.65597504782356]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.254179389072306, -30.665388597960597]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25263443667973, -30.663801279267478]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25563133230019, -30.661581780758144]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.25447261800576, -30.6609172987681]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.256489639184956, -30.659329906632525]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.253743057153706, -30.656561137026888]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24056804647255, -30.66106496182738]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.66443757760446, -29.758082534824208]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.66446439969461, -29.758347983804374]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.66518859612863, -29.758622746043276]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.6646789764158, -29.757826399176786]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.66435174691598, -29.7571371581837]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.96669316406249, -30.072987655295805]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.950385333251944, -30.061251220634404]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.944377185058585, -30.055902510348066]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94695210571288, -30.05293087977834]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9399139892578, -30.057834022395532]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00563100081175, -30.143891817808328]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00674679976195, -30.141219733994294]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00960171069793, -30.137879527471263]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0093442186325, -30.142221773904424]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.003464816471855, -30.136394954949214]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.99917328204803, -30.138213553211145]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00088989581756, -30.14107128277181]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.91200122277681, -30.172411507538715]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90444812219087, -30.170556438038666]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.907881349729934, -30.167068812854744]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90770968835298, -30.16810769283529]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90813884179536, -30.169257868613485]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.902345270323195, -30.169517583867215]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90393313806001, -30.16476839679162]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90217360894624, -30.165807301015917]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90590724389497, -30.16372948161888]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9278706456969, -30.158074924754317]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92863239305713, -30.158269733354977]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92573912856388, -30.154994318356348]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92664035079289, -30.154446979797356]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92681737658787, -30.15501751060108]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92798145530033, -30.15439131807882]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.925717670891764, -30.15446089522207]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.929193813775065, -30.155295817112528]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92835696456242, -30.155708636991324]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72910525077336, -29.97598871926656]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73075749152653, -29.97262434584162]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73129393332951, -29.971434705872614]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72824694388859, -29.97461324334808]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72828985923283, -29.97520804608246]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.727667586741376, -29.975245221135108]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10108246641879, -30.252772227119717]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.101640365893886, -30.253096595663955]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10223045187716, -30.25338389262297]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93276709878124, -30.248347045180218]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92635125481762, -30.248671428335236]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93162984215893, -30.249681643299688]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92832536065258, -30.24990407455709]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.9238621648518, -30.250358203477273]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92354029977001, -30.250988419725363]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.937938397761954, -30.24995968229275]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93697280251659, -30.2502469884256]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92405528390087, -30.252804902761678]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.9237548764912, -30.252341517423254]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27997175343259, -31.187707707063026]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27997175343259, -31.189102791555207]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.2687708485864, -31.18245759956041]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27396360523923, -31.180988985906783]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.26808420307859, -31.180401534066583]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.931393711085626, -29.841717968111887]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.932681171412774, -29.843876989796517]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.926673023219415, -29.852065958083244]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93208035659344, -29.852140400168935]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.931136219020196, -29.84715265770259]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.946414081569024, -29.867846438607724]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94478329848797, -29.867846438607724]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9464999122575, -29.86457144973601]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93263282683737, -29.858184419373444]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.932482623132536, -29.858854355081448]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93432798293478, -29.86093857074856]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93138828185446, -29.86300413440179]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9279550543154, -29.861980662259743]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93005790618307, -29.85567212041972]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9404511547586, -29.85958257005391]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94542933469024, -29.866635179965403]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.698461287558516, -29.56978794328424]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69841837221428, -29.566092616866147]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69665884310051, -29.563740975109884]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69056486421867, -29.562397155237967]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.686230414450606, -29.561053317488433]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.705499404013594, -29.571878169058312]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70004915529533, -29.571728868652198]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70703421474505, -29.876521433418826]),
            {
              "reference": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70973788143206, -29.875628342966568]),
            {
              "reference": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.708407505760675, -29.879200656791667]),
            {
              "reference": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.706905468712336, -29.88068908311924]),
            {
              "reference": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70596133113909, -29.878902968860245]),
            {
              "reference": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.709909542809015, -29.877265669353395]),
            {
              "reference": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.55011794102173, -29.855355709500014]),
            {
              "reference": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.54994627964478, -29.85747721727248]),
            {
              "reference": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.544538946270755, -29.853718023540186]),
            {
              "reference": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.54737135899048, -29.85382968480001]),
            {
              "reference": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.54509684574585, -29.85487185053555]),
            {
              "reference": 12,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5429081631897, -29.85598844460693]),
            {
              "reference": 12,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53320929539185, -29.849921466392892]),
            {
              "reference": 12,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53690001499634, -29.8482092463253]),
            {
              "reference": 12,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.534496755719, -29.84642255060254]),
            {
              "reference": 12,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53063437473755, -29.85546736892797]),
            {
              "reference": 12,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.537286253094486, -29.854499649736155]),
            {
              "reference": 12,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53492590916138, -29.857365560092816]),
            {
              "reference": 12,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53546235096436, -29.85770053125707]),
            {
              "reference": 12,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53694293034058, -29.856956149365423]),
            {
              "reference": 12,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.532102878262535, -29.860909596995846]),
            {
              "reference": 12,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53171664016439, -29.860528114236022]),
            {
              "reference": 12,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53218870895101, -29.86133294810756]),
            {
              "reference": 12,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53058713457917, -29.86003306932326]),
            {
              "reference": 12,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53087144873475, -29.859156144430145]),
            {
              "reference": 12,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.533646961690415, -29.858203412570568]),
            {
              "reference": 12,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5330676045432, -29.857705610303544]),
            {
              "reference": 12,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53179623747014, -29.857645129485128]),
            {
              "reference": 12,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.07861342500504, -30.13759520231374]),
            {
              "reference": 12,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.079418087709506, -30.137149831618824]),
            {
              "reference": 12,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.08385982583817, -30.137094160140656]),
            {
              "reference": 12,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.07010131334499, -30.1371111118105]),
            {
              "reference": 12,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.07072358583645, -30.136480166304764]),
            {
              "reference": 12,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.07216124986843, -30.13883691273478]),
            {
              "reference": 12,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.069800905935324, -30.137203897574086]),
            {
              "reference": 12,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.072740607015646, -30.143429622997772]),
            {
              "reference": 12,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.072043232671774, -30.14302139074148]),
            {
              "reference": 12,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.073298506490744, -30.141657511637803]),
            {
              "reference": 12,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.073781304113425, -30.140377118180606]),
            {
              "reference": 12,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.091744118834065, -30.14505463864278]),
            {
              "reference": 12,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09187286486678, -30.14587108464105]),
            {
              "reference": 12,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09465163340621, -30.14549069586885]),
            {
              "reference": 12,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.096947604322956, -30.146334971402773]),
            {
              "reference": 12,
              "system:index": "188"
            })]),
    agric = 
    /* color: #ffefc3 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.74806298732188, -29.992586578392483]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.75338449000743, -29.993515787903213]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.756946463579204, -29.993552956102715]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74553098201182, -29.994705163384605]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.75398530482676, -29.995225510676327]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.75222577571299, -29.995745855240237]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.750208754533794, -29.99582018995526]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70796984264265, -29.95384709095401]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.711746392935616, -29.95295469372869]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.712261377066476, -29.947897624829597]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71260469982038, -29.9395677742729]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71895617076765, -29.9395677742729]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5904974945549, -29.89364095062043]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.589725018358614, -29.89676616752332]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58809423527756, -29.893417717091587]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5875792511467, -29.89631971396601]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57839536747971, -29.89959366027138]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57933950505295, -29.902495477296352]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57976865849533, -29.905992426540653]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56955480656662, -29.92362410879474]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56878233037033, -29.919681429769597]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56792402348557, -29.92459115716105]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56792402348557, -29.921615593708133]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.55283015311405, -29.93538718835302]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.55205767691776, -29.936279743212896]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5911106401746, -29.927948919825837]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5911106401746, -29.924973456746066]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59008067191288, -29.92207229460531]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58905070365116, -29.92393202365447]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58802073538944, -29.925568556477838]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5870765978162, -29.927651377520565]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.75640745604236, -30.01728457658346]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.755034165026736, -30.02441890618942]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.752802567126345, -30.018176395855875]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78558989012439, -30.011636201620792]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78318663084705, -30.00687942585078]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78490324461658, -30.005541541570395]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78112669432361, -30.005095576134487]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.76619215452869, -30.043887068175025]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.762072281481814, -30.04299548020914]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85013456785877, -30.044481455694324]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85253782713611, -30.055476981464597]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.855456070544314, -30.063351405004195]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.857172684313845, -30.071522314334217]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86180754149158, -30.04002346237118]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86180754149158, -30.04671037712797]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85579939329822, -30.041063678755823]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8547694250365, -30.03571387815062]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.534598502650674, -29.851876371011564]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.532066497340615, -29.847968076138798]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.541593703761514, -29.843650162988663]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54116455031913, -29.842682329255393]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.538847121730264, -29.84536246123234]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.5475160212664, -29.86166504755356]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54837432815116, -29.86039964530088]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.297147813919814, -29.881573519419447]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29804903614882, -29.88231771765134]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29877859700087, -29.879750210278036]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.460822632046295, -29.79911802967266]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.46047930929239, -29.799937323509884]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.4831386110502, -29.797442180472128]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.483310272427154, -29.79807528235812]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.48262362691934, -29.799192511207835]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.44191842290933, -29.80988572496765]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.441060116024566, -29.808843089896122]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.442090084286285, -29.808712759747888]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.22992122794107, -29.87652216129537]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.230007058629546, -29.87734082051197]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.22983539725259, -29.873656801118855]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.2307366194816, -29.878382740704968]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.23193824912027, -29.87864321905236]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.24039257193521, -29.88441077955887]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.241036302098784, -29.885601460181412]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.23065078879312, -29.879573493310588]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.22983539725259, -29.880764231698016]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.229062921056304, -29.87935022828005]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.228032952794585, -29.88113633452821]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.23258197928384, -29.885527043059096]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.224513894567046, -29.874773185001576]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.22541511679605, -29.875777919812602]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.22511470938638, -29.877005915281043]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.239491349706206, -29.8847456599212]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.244040376195464, -29.886382836612054]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13386649792386, -29.97190003699957]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09816093151761, -29.968033626832533]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09687347119046, -29.971156508267676]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09515685742093, -29.96706700078263]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09026450817777, -29.976361092535996]),
            {
              "reference": 21,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09447021191312, -29.97859154517941]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.09618682568265, -29.972866616032277]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.545455396427144, -29.93078973917855]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.561634481204976, -29.927851553802874]),
            {
              "reference": 21,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56382316376113, -29.92896733061695]),
            {
              "reference": 21,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56506770874404, -29.92803751747387]),
            {
              "reference": 21,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.566183507694234, -29.927777168237167]),
            {
              "reference": 21,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56845802093886, -29.931347612678813]),
            {
              "reference": 21,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5685009362831, -29.932314586004132]),
            {
              "reference": 21,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.60213465346059, -29.945995747894823]),
            {
              "reference": 21,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.60350794447621, -29.943541442485483]),
            {
              "reference": 21,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.60230631483754, -29.94807814135338]),
            {
              "reference": 21,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.60076136244496, -29.949788646217883]),
            {
              "reference": 21,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.52274126661977, -29.932384745577902]),
            {
              "reference": 21,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.52540201796254, -29.936178162901225]),
            {
              "reference": 21,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.52711863173207, -29.935211227121084]),
            {
              "reference": 21,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22140967178479, -29.876023165088203]),
            {
              "reference": 21,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22115217971936, -29.867538440541043]),
            {
              "reference": 21,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.225787036897096, -29.871185471980844]),
            {
              "reference": 21,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.226817005158814, -29.873715986872156]),
            {
              "reference": 21,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.226130359651, -29.876320861615728]),
            {
              "reference": 21,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.182871692658814, -29.863221373886848]),
            {
              "reference": 21,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18175589370862, -29.860839464056998]),
            {
              "reference": 21,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18167006302014, -29.85808530994692]),
            {
              "reference": 21,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18381583023206, -29.859722924253777]),
            {
              "reference": 21,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.221581333161744, -29.88971628559495]),
            {
              "reference": 21,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22595869827405, -29.887855917661643]),
            {
              "reference": 21,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22741781997815, -29.886218765161413]),
            {
              "reference": 21,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.23828796577116, -29.910679940347247]),
            {
              "reference": 21,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.23365310859342, -29.90978715592656]),
            {
              "reference": 21,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.23639969062467, -29.905843929011215]),
            {
              "reference": 21,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.237654232238285, -29.908185281524784]),
            {
              "reference": 21,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24003603384351, -29.91041726346773]),
            {
              "reference": 21,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.214394115661136, -29.90453960345924]),
            {
              "reference": 21,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.215810322021, -29.907999280771886]),
            {
              "reference": 21,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24816849157666, -29.905544038282986]),
            {
              "reference": 21,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2473101846919, -29.90234469211921]),
            {
              "reference": 21,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24628021643018, -29.903274745201156]),
            {
              "reference": 21,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24559357092237, -29.900819386269898]),
            {
              "reference": 21,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.23310520574903, -29.89821515158563]),
            {
              "reference": 21,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.25881149694776, -29.919530670609177]),
            {
              "reference": 21,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26057102606153, -29.919902628694242]),
            {
              "reference": 21,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2712998621211, -29.926746409426947]),
            {
              "reference": 21,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27078487799024, -29.92815974030543]),
            {
              "reference": 21,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27190067694043, -29.929498666835205]),
            {
              "reference": 21,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.298385934738604, -29.94054264159905]),
            {
              "reference": 21,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29478104582259, -29.942178901263887]),
            {
              "reference": 21,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2925494479222, -29.94411262798501]),
            {
              "reference": 21,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21976502409407, -29.975939340594806]),
            {
              "reference": 21,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.218735055832354, -29.97564194186217]),
            {
              "reference": 21,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21933587065169, -29.97660848448779]),
            {
              "reference": 21,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21727593412825, -29.96545549782866]),
            {
              "reference": 21,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21985085478255, -29.968206684190413]),
            {
              "reference": 21,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22336991301009, -29.965083710045963]),
            {
              "reference": 21,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2075770663304, -29.96374526251159]),
            {
              "reference": 21,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2086928652806, -29.963076031984745]),
            {
              "reference": 21,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24663002958724, -29.991997549811778]),
            {
              "reference": 21,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2431109713597, -29.991031156959725]),
            {
              "reference": 21,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.243711786179034, -29.997944375661604]),
            {
              "reference": 21,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.248947458176104, -29.997795709357675]),
            {
              "reference": 21,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.271177606491534, -29.971552619001802]),
            {
              "reference": 21,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1322833218674, -30.05320446558583]),
            {
              "reference": 21,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.13091003085177, -30.0567704017157]),
            {
              "reference": 21,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.239228359709195, -30.01947030308202]),
            {
              "reference": 21,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26240264559787, -30.023037453420795]),
            {
              "reference": 21,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.260686031828335, -30.028685178989395]),
            {
              "reference": 21,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.31132613802951, -30.02615860469225]),
            {
              "reference": 21,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.31046783114474, -30.044883448579885]),
            {
              "reference": 21,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20197784091037, -30.019321669032987]),
            {
              "reference": 21,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20541106844943, -30.015011184700683]),
            {
              "reference": 21,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.208500973234585, -30.017686679789673]),
            {
              "reference": 21,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20832931185763, -30.023483338189738]),
            {
              "reference": 21,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.1780292281723, -29.82308004213503]),
            {
              "reference": 21,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.18847283971906, -29.82987172173625]),
            {
              "reference": 21,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.178860370133016, -29.827601363338765]),
            {
              "reference": 21,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.153475163146105, -30.111502059418534]),
            {
              "reference": 21,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15456950442418, -30.11413782468322]),
            {
              "reference": 21,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15059983508214, -30.113079814680617]),
            {
              "reference": 21,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15401160494908, -30.1167549586361]),
            {
              "reference": 21,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15233790652379, -30.11530719097632]),
            {
              "reference": 21,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15160834567174, -30.10933028449317]),
            {
              "reference": 21,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96815367280437, -30.00648380212426]),
            {
              "reference": 21,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96708078919841, -30.005480386604123]),
            {
              "reference": 21,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96613665162517, -30.005963513862074]),
            {
              "reference": 21,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96613665162517, -30.007189903258823]),
            {
              "reference": 21,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95108172238923, -30.001140751364662]),
            {
              "reference": 21,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9508242303238, -30.005080200380874]),
            {
              "reference": 21,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95198294461824, -30.008090428638567]),
            {
              "reference": 21,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9554161721573, -30.007161355587513]),
            {
              "reference": 21,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95593115628816, -30.00504303649831]),
            {
              "reference": 21,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.955759494911206, -30.003073330802692]),
            {
              "reference": 21,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.954042881141675, -30.00143807372802]),
            {
              "reference": 21,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95721861661531, -30.004448412484113]),
            {
              "reference": 21,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95342162838034, -30.01921761011276]),
            {
              "reference": 21,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.953571832085174, -30.017731255809405]),
            {
              "reference": 21,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.94498876323752, -30.018400118002866]),
            {
              "reference": 21,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.944817101860565, -30.01958919520757]),
            {
              "reference": 21,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95546010723166, -30.014981441618037]),
            {
              "reference": 21,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.955545937920135, -30.01152548593431]),
            {
              "reference": 21,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95412973156027, -30.010299150134372]),
            {
              "reference": 21,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98118785610251, -29.98155038893328]),
            {
              "reference": 21,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.982990300560516, -29.98210797765656]),
            {
              "reference": 21,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97985748043112, -29.991177647881003]),
            {
              "reference": 21,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98462108364157, -29.992478557224167]),
            {
              "reference": 21,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98380569210104, -29.987832374148653]),
            {
              "reference": 21,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98831180324606, -29.988092566148136]),
            {
              "reference": 21,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98260406246237, -29.98682877004916]),
            {
              "reference": 21,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.982303655052704, -29.993370599492177]),
            {
              "reference": 21,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.985994374657196, -29.99069444864019]),
            {
              "reference": 21,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98715308895163, -29.988761628158688]),
            {
              "reference": 21,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.28228918202146, -31.18840525187946]),
            {
              "reference": 21,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.278126393630345, -31.188552102764717]),
            {
              "reference": 21,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.26430765278562, -31.188331826351398]),
            {
              "reference": 21,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.271603261306126, -31.18807483655458]),
            {
              "reference": 21,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27353445179685, -31.186312602008346]),
            {
              "reference": 21,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.2737061131738, -31.189359778560934]),
            {
              "reference": 21,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27331987507566, -31.190975109476227]),
            {
              "reference": 21,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.274135266616184, -31.17952034947201]),
            {
              "reference": 21,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27203241474851, -31.181282710460017]),
            {
              "reference": 21,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.14806279797709, -30.860473739235267]),
            {
              "reference": 21,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.148964020206094, -30.862610397484797]),
            {
              "reference": 21,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.149908157779336, -30.865152222005047]),
            {
              "reference": 21,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.370049894044406, -30.686017038482166]),
            {
              "reference": 21,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.36966365594626, -30.684872939433365]),
            {
              "reference": 21,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37069362420798, -30.686718253778913]),
            {
              "reference": 21,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37022155542136, -30.68778851993931]),
            {
              "reference": 21,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37129443902732, -30.689375444476227]),
            {
              "reference": 21,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.38412612695456, -30.698232218569743]),
            {
              "reference": 21,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.38442653436423, -30.696866852219078]),
            {
              "reference": 21,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.38446944970847, -30.692623022673235]),
            {
              "reference": 21,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.38592857141257, -30.693619416806968]),
            {
              "reference": 21,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.38468402642966, -30.69468960645681]),
            {
              "reference": 21,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.373354375550754, -30.698675035940408]),
            {
              "reference": 21,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37670177240134, -30.702697200668958]),
            {
              "reference": 21,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37648719568015, -30.70380418906169]),
            {
              "reference": 21,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37498515863181, -30.703619691878217]),
            {
              "reference": 21,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.36974948663474, -30.703988685892348]),
            {
              "reference": 21,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.36944907922507, -30.70236510167451]),
            {
              "reference": 21,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.39584201593161, -30.689449254284938]),
            {
              "reference": 21,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.39841693658591, -30.692327792806477]),
            {
              "reference": 21,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.39858859796286, -30.69059329910363]),
            {
              "reference": 21,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.40013355035544, -30.691257576970067]),
            {
              "reference": 21,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.40532630700827, -30.69557527167608]),
            {
              "reference": 21,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.4041246773696, -30.694505091846505]),
            {
              "reference": 21,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.40566962976218, -30.694505091846505]),
            {
              "reference": 21,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.399448643194816, -30.703049803544975]),
            {
              "reference": 21,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.40185190247216, -30.70076199564729]),
            {
              "reference": 21,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.40502763794579, -30.721276528267467]),
            {
              "reference": 21,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.39953447388329, -30.724891946788397]),
            {
              "reference": 21,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.339538822638175, -30.706826745052993]),
            {
              "reference": 21,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33919549988427, -30.711328225960184]),
            {
              "reference": 21,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34134126709618, -30.718190735184976]),
            {
              "reference": 21,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33610559509911, -30.718264522953064]),
            {
              "reference": 21,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.30992723511376, -30.69287820013207]),
            {
              "reference": 21,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31851030396142, -30.691180620554775]),
            {
              "reference": 21,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.326578388678215, -30.695978051019377]),
            {
              "reference": 21,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.328295002447746, -30.695756636400507]),
            {
              "reference": 21,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.334303150641105, -30.691549662132903]),
            {
              "reference": 21,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33919549988427, -30.67959199737321]),
            {
              "reference": 21,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33988214539208, -30.682101753503783]),
            {
              "reference": 21,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34408784912743, -30.681068332408152]),
            {
              "reference": 21,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76554651910008, -29.672782784524642]),
            {
              "reference": 21,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76477404290379, -29.671067534928074]),
            {
              "reference": 21,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.763615328609355, -29.670433630934337]),
            {
              "reference": 21,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76395865136326, -29.67129126479543]),
            {
              "reference": 21,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71986220901488, -29.834837953131927]),
            {
              "reference": 21,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7203342778015, -29.83185971048795]),
            {
              "reference": 21,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72252296035765, -29.835619727114626]),
            {
              "reference": 21,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72406791275023, -29.836736536477446]),
            {
              "reference": 21,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7238104206848, -29.838970117746147]),
            {
              "reference": 21,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72132133071898, -29.83781610699329]),
            {
              "reference": 21,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72548411911009, -29.838746761866737]),
            {
              "reference": 21,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73069833343504, -29.841631736870326]),
            {
              "reference": 21,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72953961914061, -29.84137116190629]),
            {
              "reference": 21,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72932504241942, -29.848015611116434]),
            {
              "reference": 21,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56373151607912, -29.906633140942954]),
            {
              "reference": 21,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5363515264551, -29.916751216170994]),
            {
              "reference": 21,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.532746637539084, -29.92114035555571]),
            {
              "reference": 21,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.52733930416506, -29.928876672460294]),
            {
              "reference": 21,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53901227779787, -29.91942935812953]),
            {
              "reference": 21,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53815397091311, -29.920545229351312]),
            {
              "reference": 21,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58476003475588, -29.90574032024977]),
            {
              "reference": 21,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.53291829891604, -29.91842506333679]),
            {
              "reference": 21,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.554976785854514, -29.907451552882048]),
            {
              "reference": 21,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.555663431362326, -29.913477833731513]),
            {
              "reference": 21,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.55562051601809, -29.913924210400225]),
            {
              "reference": 21,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.543690050319846, -29.91236188330622]),
            {
              "reference": 21,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66286663876929, -29.901800059037093]),
            {
              "reference": 21,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.659948395361084, -29.902506904035135]),
            {
              "reference": 21,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.661192940343994, -29.90336255179688]),
            {
              "reference": 21,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66491591226974, -29.90404243981041]),
            {
              "reference": 21,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66686856043258, -29.904991077699357]),
            {
              "reference": 21,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65984906651368, -29.910616863678545]),
            {
              "reference": 21,
              "system:index": "280"
            })]),
    geom_limite = 
    /* color: #00ffff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-54.436990599473475, -29.50044418405526],
          [-54.480935911973475, -29.3473372003158],
          [-54.810525755723475, -29.27069726644914],
          [-55.123636107285975, -29.50044418405526],
          [-55.310403685410975, -29.853617593379905],
          [-55.486184935410975, -29.681958465914906],
          [-55.793802122910975, -29.701046221839807],
          [-55.854226927598475, -29.815496549721807],
          [-55.804788451035975, -30.091543982338468],
          [-55.865213255723475, -30.262497475954387],
          [-55.876199583848475, -30.390517680140285],
          [-55.546609740098475, -30.333640470462637],
          [-55.486184935410975, -30.399993998601285],
          [-55.563089232285975, -30.513638054553784],
          [-55.656473021348475, -30.716918282178188],
          [-55.650979857285975, -30.863203974109837],
          [-55.326883177598475, -31.310108262771582],
          [-55.046731810410975, -31.394547585380934],
          [-54.947854857285975, -31.258469151751306],
          [-54.997293333848475, -31.15980692434044],
          [-55.052224974473475, -30.981013998794033],
          [-54.969827513535975, -30.749969983854527],
          [-54.848977904160975, -30.70747285710552],
          [-54.667703490098475, -30.4378900762508],
          [-54.524881224473475, -30.319416001408495],
          [-54.019510130723475, -30.60351217375263],
          [-54.019510130723475, -30.48523946915366],
          [-53.959085326035975, -30.41894387700458],
          [-53.838235716660975, -30.281473987492404],
          [-53.684427122910975, -30.328899210313686],
          [-53.607522826035975, -30.253007844640514],
          [-53.426248411973475, -30.333640470462637],
          [-53.481180052598475, -30.570410340827642],
          [-53.343850951035975, -30.650780889342965],
          [-53.074685911973475, -30.636602698986827],
          [-52.981302122910975, -30.45209731042225],
          [-52.684671263535975, -30.46156764942685],
          [-52.629739622910975, -30.38104044239972],
          [-52.377054076035975, -30.513638054553784],
          [-52.157327513535975, -30.328899210313686],
          [-51.948587279160975, -30.343122302046503],
          [-51.794778685410975, -30.300446829767296],
          [-51.608011107285975, -30.23877167872155],
          [-51.509134154160975, -30.414206752271696],
          [-51.712381224473475, -30.54202834662728],
          [-51.547586302598475, -30.636602698986827],
          [-51.393777708848475, -30.69330298533878],
          [-51.316873411973475, -30.594055660734607],
          [-50.943338255723475, -30.390517680140285],
          [-50.657693724473475, -30.129559271339616],
          [-50.38563534054228, -29.91776892967322],
          [-50.498391966660975, -29.763056375273283],
          [-50.712625365098475, -29.71535965893161],
          [-51.014749388535975, -29.77736096567085],
          [-51.448709349473475, -29.634223219289826],
          [-51.811258177598475, -29.600795077689305],
          [-52.426492552598475, -29.638997762882433],
          [-52.805520872910975, -29.681958465914906],
          [-53.349344115098475, -29.6246734530868],
          [-53.843728880723475, -29.548242751093383],
          [-54.277688841660975, -29.438272305775005]]]),
    remover_SS = 
    /* color: #bf04c2 */
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
var regiao = 6;
var collection_out = 3;
var version_out = '04'; // mudar a cada nova versao que for exportada
var bioma = 'PAMPA';

//Parâmetros do classificador
// -----------------------------------------------------------------------
var nSamplesMin = 60;
var nSamplesMax = 1000;
var Quantidade_amostras = 0; //1 // quantidade final de amostra SS + complementares por classe
var RFtrees = 100; //60, 100

// Ativação de funcionalidades
// -----------------------------------------------------------------------
var exporta_colecao = 0; //ativar a geometria do bioma antes de dar o Run (0/1)
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
var classes_list = [33 //3,11, 12, 21, 22, 33, 29
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
  
// c24 = asset_s2_2024.filter(ee.Filter.eq('year', 2024));

// Junção dos mosaicos Sentinel-2
var s2_all = asset_s2.merge(asset_s2_2024)
  .filter(ee.Filter.eq('version', "3"))
  .filter(ee.Filter.eq('biome', "PAMPA"));

//amostras
var dirsamples = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/SAMPLES/';
//pontos estaveis com propriedades
var versao_pt = 'mosaic_and_embedding_S2_embed_v1';

// Variáveis para usar ao exportar o asset
var dirout = 'projects/mapbiomas-brazil/assets/LAND-COVER-10M/COLLECTION-3/GENERAL/classification-pam/';

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

  // Define o percentual de amostras de cada classe
  if (ano <= 2019){
  var percent_Flo = 18
  var percent_Umi = 6
  // var percent_Umi = -18.67	  + desvio + ano *  0.00977
  // var percent_Cam =1047.10	  + desvio + ano * -0.49695
  var percent_Cam = 41
  // var percent_Agr =-739.03    + 4 + ano *  0.38306
  var percent_Agr = 46
  var percent_Anv = 13
  // var percent_Anv = -16.71 	  + desvio + ano *  0.00932
  // var percent_Agu = -11.74	  + desvio + ano *  0.00770
  var percent_Agu = 20 
  }
  
 if (ano > 2019 && ano <= 2021){ 
  var percent_Flo = 18
  var percent_Umi = 6
  // var percent_Umi = -18.67	  + desvio + ano *  0.00977
  // var percent_Cam =1047.10	  + desvio + ano * -0.49695
  var percent_Cam = 33
  // var percent_Agr =-739.03    + 4 + ano *  0.38306
  var percent_Agr = 52
  var percent_Anv = 13
  // var percent_Anv = -16.71 	  + desvio + ano *  0.00932
  // var percent_Agu = -11.74	  + desvio + ano *  0.00770
  var percent_Agu = 20
  }

if (ano > 2021 && ano <= 2022){ 
  var percent_Flo = 21
  var percent_Umi = 8
  // var percent_Umi = -18.67	  + desvio + ano *  0.00977
  // var percent_Cam =1047.10	  + desvio + ano * -0.49695
  var percent_Cam = 29
  // var percent_Agr =-739.03    + 4 + ano *  0.38306
  var percent_Agr = 55
  var percent_Anv = 13
  // var percent_Anv = -16.71 	  + desvio + ano *  0.00932
  // var percent_Agu = -11.74	  + desvio + ano *  0.00770
  var percent_Agu = 20
  }

  if (ano > 2022){
  var percent_Flo = 21
  var percent_Umi = 8
  // var percent_Umi = -18.67	  + desvio + ano *  0.00977
  // var percent_Cam =1047.10	  + desvio + ano * -0.49695
  var percent_Cam = 29
  // var percent_Agr =-739.03    + 4 + ano *  0.38306
  var percent_Agr = 55
  var percent_Anv = 18
  // var percent_Anv = -16.71 	  + desvio + ano *  0.00932
  // var percent_Agu = -11.74	  + desvio + ano *  0.00770
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
  'description': regiao+'-'+'Emb_RF17a24_v'+version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'Emb_RF17a24_v'+version_out,
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
var col_Sentinel = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/06_Emb_RF17a24_v03')
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
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/areas_col10L_col2S_col3S_v01_v01_r6'

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