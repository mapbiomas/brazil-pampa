/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = 
    /* color: #ea9999 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.19714815645214, -29.837236306447704]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19839270143505, -29.837459665704554]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.196933579730945, -29.83749689219879]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19804937868114, -29.837720250872973]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.198693108844715, -29.838166966723005]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19826395540233, -29.838315871562415]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11304818107149, -29.94582913391666]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11301599456331, -29.945996470996743]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.112189874186726, -29.94661933432039]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.112211331858845, -29.94695400553989]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11236153556368, -29.94716782267387]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11274777366182, -29.947205008215448]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11315546943209, -29.946916819904455]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11364899589083, -29.94683315217387]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.1142927260544, -29.94689822708151]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11431418372652, -29.947046969567662]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11451803161165, -29.94712134072731]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.114957913890095, -29.946312551379833]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11536560966036, -29.9463497372412]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11576257659456, -29.946368330166674]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11599861098787, -29.946795966493248]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.116438493266315, -29.946572852117484]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11656723929903, -29.946210290189338]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11689983321688, -29.94584772693946]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11732898665926, -29.94602436048272]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11756502105257, -29.94568038960912]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.117661580577106, -29.945410789984685]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.117929801478596, -29.945364307216963]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.118412599101276, -29.94521556221425]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11856280280611, -29.944964554517714]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11876665069124, -29.944564800211758]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.118670091166706, -29.94428590090727]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.118455514445515, -29.94440675736858]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11808000518343, -29.944574096841773]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11765085174105, -29.944471833863837]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11736117316744, -29.944490427140366]),
            {
              "reference": 22,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.116470679774494, -29.944564800211758]),
            {
              "reference": 22,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.1163097472336, -29.944313790872926]),
            {
              "reference": 22,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.116953477397175, -29.943960517396928]),
            {
              "reference": 22,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11637412024996, -29.943133108818678]),
            {
              "reference": 22,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11506520225069, -29.94369091311055]),
            {
              "reference": 22,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11360608054659, -29.943579352502425]),
            {
              "reference": 22,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11300526572725, -29.94353286887878]),
            {
              "reference": 22,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.11287651969454, -29.94383036369475]),
            {
              "reference": 22,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.126064530519734, -29.974540639931067]),
            {
              "reference": 22,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.126525870470296, -29.974364057054657]),
            {
              "reference": 22,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12712668528963, -29.974215355441597]),
            {
              "reference": 22,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.127523652223836, -29.9736577224102]),
            {
              "reference": 22,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12773822894503, -29.973295259261306]),
            {
              "reference": 22,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.128070822862874, -29.972904912852755]),
            {
              "reference": 22,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12815665355135, -29.972449506771003]),
            {
              "reference": 22,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12858580699373, -29.971901157902533]),
            {
              "reference": 22,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.129014960436116, -29.97206845109848]),
            {
              "reference": 22,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12920807948519, -29.972282214216705]),
            {
              "reference": 22,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12919735064913, -29.972468094815206]),
            {
              "reference": 22,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12934755435396, -29.972542446957238]),
            {
              "reference": 22,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12911151996065, -29.972607505035857]),
            {
              "reference": 22,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.129079333452474, -29.972384448588926]),
            {
              "reference": 22,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12917589297701, -29.973072204358505]),
            {
              "reference": 22,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12918662181307, -29.973481137964402]),
            {
              "reference": 22,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12968014827181, -29.973462550109737]),
            {
              "reference": 22,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.126579514650594, -29.975628011778706]),
            {
              "reference": 22,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12684773555208, -29.975209793245888]),
            {
              "reference": 22,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12849997630526, -29.975172618179982]),
            {
              "reference": 22,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12915443530489, -29.974893804742244]),
            {
              "reference": 22,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12996982684542, -29.97458710905691]),
            {
              "reference": 22,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.130516997484456, -29.974531346103298]),
            {
              "reference": 22,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.13044189563204, -29.975674480395888]),
            {
              "reference": 22,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.13042043795992, -29.975999760107516]),
            {
              "reference": 22,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.129551402239095, -29.97503321155894]),
            {
              "reference": 22,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12940119853426, -29.975265555818673]),
            {
              "reference": 22,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.127298346666585, -29.97571165527399]),
            {
              "reference": 22,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.126515141634236, -29.975990466416256]),
            {
              "reference": 22,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.124777070192586, -29.97458710905691]),
            {
              "reference": 22,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.123586169389974, -29.973527607585833]),
            {
              "reference": 22,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.395237543838405, -32.23654876134932]),
            {
              "reference": 22,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39609585072317, -32.237855554681964]),
            {
              "reference": 22,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3978124644927, -32.24061427887905]),
            {
              "reference": 22,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39618168141165, -32.240977262668274]),
            {
              "reference": 22,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39463672901907, -32.239234927252284]),
            {
              "reference": 22,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39360676075735, -32.2376377570985]),
            {
              "reference": 22,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38983021046438, -32.24046908495725]),
            {
              "reference": 22,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38631115223684, -32.23560495447502]),
            {
              "reference": 22,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38184795643606, -32.22769111113093]),
            {
              "reference": 22,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38433704640188, -32.22994190735065]),
            {
              "reference": 22,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38485203053274, -32.23132140006145]),
            {
              "reference": 22,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38957271839895, -32.23248306189158]),
            {
              "reference": 22,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38716945912161, -32.23110358681508]),
            {
              "reference": 22,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38880024220266, -32.23495154397271]),
            {
              "reference": 22,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39034519459524, -32.23720216036518]),
            {
              "reference": 22,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08766017231607, -32.638700973938306]),
            {
              "reference": 22,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08733830723428, -32.64392283602856]),
            {
              "reference": 22,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08789620670938, -32.64394090422628]),
            {
              "reference": 22,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08886180195474, -32.641646213912985]),
            {
              "reference": 22,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08864722523355, -32.64200758637175]),
            {
              "reference": 22,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53472098861962, -31.953686171760946]),
            {
              "reference": 22,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53483900581627, -31.953804512786913]),
            {
              "reference": 22,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53483900581627, -31.953922853660426]),
            {
              "reference": 22,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54838700757605, -31.95185577731745]),
            {
              "reference": 22,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54830117688758, -31.95209246393306]),
            {
              "reference": 22,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54823680387122, -31.952247220236607]),
            {
              "reference": 22,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.527852015358036, -31.95502368608993]),
            {
              "reference": 22,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.52772326932532, -31.95505099517334]),
            {
              "reference": 22,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.527637438636845, -31.95514202539272]),
            {
              "reference": 22,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.527637438636845, -31.95526036454306]),
            {
              "reference": 22,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.083156514572146, -31.317356108003725]),
            {
              "reference": 22,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.082888293670656, -31.317686071180404]),
            {
              "reference": 22,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.08459417860413, -31.318291000668182]),
            {
              "reference": 22,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.083692956375124, -31.31804352998379]),
            {
              "reference": 22,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.07506697218323, -31.319097567273584]),
            {
              "reference": 22,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0701344603576, -31.31540552984514]),
            {
              "reference": 22,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.273933525864315, -30.478213568930926]),
            {
              "reference": 22,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.27263533670111, -30.47734440834996]),
            {
              "reference": 22,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.27062904435797, -30.479840912557034]),
            {
              "reference": 22,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.2708865364234, -30.480099805625745]),
            {
              "reference": 22,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.11829213226319, -31.35118453890912]),
            {
              "reference": 22,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.117712775115976, -31.350763069141237]),
            {
              "reference": 22,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.115266600494394, -31.3515143834969]),
            {
              "reference": 22,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12118891799928, -31.347831053266688]),
            {
              "reference": 22,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12228325927735, -31.34704305841742]),
            {
              "reference": 22,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.11983708465577, -31.348838944033176]),
            {
              "reference": 22,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12593106353761, -31.3462733826568]),
            {
              "reference": 22,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.1261456402588, -31.346401662387585]),
            {
              "reference": 22,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.34684386782789, -33.699354494580554]),
            {
              "reference": 22,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.349011092711926, -33.70001501355877]),
            {
              "reference": 22,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.350534587432385, -33.69501636536828]),
            {
              "reference": 22,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.25901543789161, -33.21193338670323]),
            {
              "reference": 22,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.25882768326057, -33.21165063332009]),
            {
              "reference": 22,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.259187099268566, -33.21219369853404]),
            {
              "reference": 22,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.25910126858009, -33.21202763762795]),
            {
              "reference": 22,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.259171006014476, -33.212292437301805]),
            {
              "reference": 22,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.26826468320954, -33.21842719133808]),
            {
              "reference": 22,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.26855039874333, -33.21883994587359]),
            {
              "reference": 22,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.268416288292585, -33.21856170260816]),
            {
              "reference": 22,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.181107820472285, -33.24004292733195]),
            {
              "reference": 22,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18103271861987, -33.23995992334976]),
            {
              "reference": 22,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18121510883288, -33.23993748982754]),
            {
              "reference": 22,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.181207062205836, -33.2400317105822]),
            {
              "reference": 22,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18100589652972, -33.23975802144246]),
            {
              "reference": 22,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18094152351336, -33.23967053047116]),
            {
              "reference": 22,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.0743043601417, -33.24650162330798]),
            {
              "reference": 22,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.0742131650352, -33.24642086864464]),
            {
              "reference": 22,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.074113923301645, -33.24631543883299]),
            {
              "reference": 22,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.074113923301645, -33.24640740952683]),
            {
              "reference": 22,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.07393421529765, -33.246138226735376]),
            {
              "reference": 22,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.05836981789364, -33.23238612159269]),
            {
              "reference": 22,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.057806554000514, -33.23189029646279]),
            {
              "reference": 22,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.05714673058285, -33.231403442808016]),
            {
              "reference": 22,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.05670148388638, -33.23105120137715]),
            {
              "reference": 22,
              "system:index": "148"
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
            ee.Geometry.Point([-52.541319222796254, -31.95313998043466]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.541319222796254, -31.953231012547914]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.541287036288075, -31.953422179692094]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54116901909142, -31.95352231470407]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54119047676354, -31.953604243269048]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.541061730730824, -31.953658862271766]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54097590004235, -31.953667965435724]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54099735771447, -31.953795409636488]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.541533799517445, -31.954441731075267]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54400143181115, -31.95596193399585]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54385122810631, -31.955852698696866]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54370102440148, -31.955852698696866]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53839025055199, -31.954150431834805]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53821858917504, -31.954232359839562]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.538068385470204, -31.95425056605292]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53786453758507, -31.95425056605292]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53734955345421, -31.9541686380644]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.537671418536, -31.954205050512748]),
            {
              "reference": 33,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54461297546654, -31.955807183950608]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54474172149926, -31.955734360309673]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54483828102379, -31.955652433644627]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54495629822045, -31.955488580095277]),
            {
              "reference": 33,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54496702705651, -31.955124460050243]),
            {
              "reference": 33,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54542836700707, -31.954041194381468]),
            {
              "reference": 33,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54535326515465, -31.954050297507543]),
            {
              "reference": 33,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54137286697655, -31.95259378586075]),
            {
              "reference": 33,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.540462921127904, -31.951291368311644]),
            {
              "reference": 33,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54061312483274, -31.951236747901238]),
            {
              "reference": 33,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54065604017698, -31.951318678504656]),
            {
              "reference": 33,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54036636160337, -31.951418815809614]),
            {
              "reference": 33,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5405165653082, -31.951418815809614]),
            {
              "reference": 33,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54065604017698, -31.951537159756544]),
            {
              "reference": 33,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53616065786802, -31.950326402946878]),
            {
              "reference": 33,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.768165669841636, -31.18205514758137]),
            {
              "reference": 33,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.767951093120445, -31.180788464271437]),
            {
              "reference": 33,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.767951093120445, -31.18111890502961]),
            {
              "reference": 33,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.20084978555661, -30.071458402772905]),
            {
              "reference": 33,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19891859506589, -30.067280178446705]),
            {
              "reference": 33,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19400478815061, -30.06453173915647]),
            {
              "reference": 33,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.201321854343234, -30.06798584649123]),
            {
              "reference": 33,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65697168851675, -30.50351362905885]),
            {
              "reference": 33,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65997576261343, -30.505510300479013]),
            {
              "reference": 33,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.654568429239404, -30.506767442934414]),
            {
              "reference": 33,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65774416471304, -30.50628677273812]),
            {
              "reference": 33,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.010625008058746, -33.245414053005135]),
            {
              "reference": 33,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.01097905964871, -33.24577296618321]),
            {
              "reference": 33,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.010147574854095, -33.246477329010894]),
            {
              "reference": 33,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.00955212445279, -33.24577296618321]),
            {
              "reference": 33,
              "system:index": "47"
            })]),
    floresta = 
    /* color: #006400 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.86115534291739, -31.084285109954788]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.860812020163486, -31.082998743615388]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84527666554923, -31.074692073240406]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8435600517797, -31.074618559642964]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84248716817374, -31.075390449581153]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8450191734838, -31.07553747552552]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.845362496237705, -31.078624967833594]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84622080312247, -31.07840443599415]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84347422109122, -31.07028115678648]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84373171315665, -31.07134714701264]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84381754384513, -31.071714727078383]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84330255971427, -31.071825000821022]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86463148580069, -31.08123455575273]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8773707507635, -31.092643244159472]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.876684105255684, -31.09271674381635]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87573996768244, -31.092496244675146]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87312213168391, -31.087204111767708]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87346545443781, -31.087681885869706]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87380877719172, -31.08779214109057]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.889902031281075, -31.101720021644713]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88260642276057, -31.095803678059013]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88346472964533, -31.095950672425747]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.127374609376325, -31.098633314224617]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12780376281871, -31.099515250740815]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12849040832652, -31.100286938474994]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.137888868714704, -31.112780057792534]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13793178405894, -31.11083270910153]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13964839782847, -31.11296376787125]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.14145084228648, -31.113441412412136]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.139090498353376, -31.108223934108388]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13767429199351, -31.107819751288034]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.138103445435895, -31.106974636194934]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.134884794618024, -31.113698604631015]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13471313324107, -31.113000509844344]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13621517028941, -31.102675456010097]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.135614355470075, -31.102050772609353]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.175053635213736, -31.147705370858965]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.175096550557974, -31.146309676551926]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17488197383678, -31.146934068650264]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.175547161672476, -31.14665860205497]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17425970134533, -31.14625458293404]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17522529659069, -31.149174500563024]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.174817600820425, -31.14954177943159]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17245725688732, -31.149045952622842]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.172071018789175, -31.14989069303866]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17125562724865, -31.14922959248402]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17125562724865, -31.15007433126338]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17297224101818, -31.149449959847846]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16147092876232, -31.13953292135026]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15576318797863, -31.14449157025804]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15670732555187, -31.145373080693975]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15503362712658, -31.144675218941405]),
            {
              "reference": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73453277699382, -30.96198400976582]),
            {
              "reference": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.735305253190106, -30.961450404111563]),
            {
              "reference": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73245138279826, -30.959573560539138]),
            {
              "reference": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73322385899455, -30.95926074969121]),
            {
              "reference": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73315948597819, -30.958359112691426]),
            {
              "reference": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.733588639420574, -30.957733482016142]),
            {
              "reference": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.734854642075604, -30.958359112691426]),
            {
              "reference": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.35850179363333, -30.36359677575701]),
            {
              "reference": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.36056173015677, -30.364855748938947]),
            {
              "reference": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.36056173015677, -30.366596067532598]),
            {
              "reference": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.360347153435576, -30.367595811016116]),
            {
              "reference": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.35871637035452, -30.368151219645988]),
            {
              "reference": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.35927426982962, -30.36578145417414]),
            {
              "reference": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.3582443015679, -30.36452249290921]),
            {
              "reference": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.3657544868096, -30.372261145456054]),
            {
              "reference": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.367642761956084, -30.371668734374133]),
            {
              "reference": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.36652696300589, -30.372557349650897]),
            {
              "reference": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00486342057714, -31.21187462449246]),
            {
              "reference": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00434843644628, -31.212608694511555]),
            {
              "reference": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.004691759200185, -31.214076817453993]),
            {
              "reference": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00589338883886, -31.214076817453993]),
            {
              "reference": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97846594020641, -31.204198401081282]),
            {
              "reference": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97919550105846, -31.205519830262944]),
            {
              "reference": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97743597194469, -31.20507935592025]),
            {
              "reference": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97704973384655, -31.20750193942097]),
            {
              "reference": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.975891019552115, -31.20735511794487]),
            {
              "reference": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97580518886364, -31.209080255894253]),
            {
              "reference": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98649110957897, -31.20845627346]),
            {
              "reference": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0072621361903, -31.21539325838041]),
            {
              "reference": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98580446407116, -31.217265056010323]),
            {
              "reference": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.990117456167106, -31.217705473596503]),
            {
              "reference": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98310079738415, -31.220549787760255]),
            {
              "reference": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98524656459606, -31.21719165287983]),
            {
              "reference": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.003871823995475, -31.211539440694892]),
            {
              "reference": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00303497478283, -31.21203494033918]),
            {
              "reference": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00200500652111, -31.216402565627668]),
            {
              "reference": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.299420704940225, -30.19958964575809]),
            {
              "reference": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.298648228743936, -30.200146006264696]),
            {
              "reference": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29787575254765, -30.198847826858188]),
            {
              "reference": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29435669432011, -30.19654815274626]),
            {
              "reference": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29229675779667, -30.194322610526626]),
            {
              "reference": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29362713346806, -30.19502737100544]),
            {
              "reference": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28980766783085, -30.192467953584313]),
            {
              "reference": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28654610166874, -30.192430860089168]),
            {
              "reference": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28731857786503, -30.191095484958165]),
            {
              "reference": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28847729215946, -30.191095484958165]),
            {
              "reference": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.297918667891885, -30.203372835196465]),
            {
              "reference": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.292940487960244, -30.19958964575809]),
            {
              "reference": 3,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.291953435042764, -30.19695616336323]),
            {
              "reference": 3,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.30195271025028, -30.20311320919547]),
            {
              "reference": 3,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.3035405779871, -30.20400335263355]),
            {
              "reference": 3,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.30431305418339, -30.204708043812975]),
            {
              "reference": 3,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.30276810179081, -30.205894880710762]),
            {
              "reference": 3,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.295172085860635, -30.19706743869258]),
            {
              "reference": 3,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27217572549324, -30.178979688277774]),
            {
              "reference": 3,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27151053765755, -30.1787199979599]),
            {
              "reference": 3,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27311986306648, -30.178664349945585]),
            {
              "reference": 3,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27241175988655, -30.17794092289951]),
            {
              "reference": 3,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27118867257576, -30.17723604015587]),
            {
              "reference": 3,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27121013024788, -30.176252905802848]),
            {
              "reference": 3,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.271810945067216, -30.177050543858932]),
            {
              "reference": 3,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.274064000639726, -30.174212406972106]),
            {
              "reference": 3,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27449315408211, -30.17395270408993]),
            {
              "reference": 3,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.269343312773515, -30.173563148483442]),
            {
              "reference": 3,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.698376650660514, -31.829431681066897]),
            {
              "reference": 3,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.699578280299185, -31.827754422289207]),
            {
              "reference": 3,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70266818508434, -31.82895767624094]),
            {
              "reference": 3,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70571517452526, -31.83045260627069]),
            {
              "reference": 3,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70275401577282, -31.830379683416332]),
            {
              "reference": 3,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70168113216686, -31.831437059165427]),
            {
              "reference": 3,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69953536495495, -31.830780758402298]),
            {
              "reference": 3,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69850539669323, -31.830233837534788]),
            {
              "reference": 3,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69726085171032, -31.82957752821595]),
            {
              "reference": 3,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69743251308727, -31.831692285979642]),
            {
              "reference": 3,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.707045550196646, -31.834098675528658]),
            {
              "reference": 3,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70816134914684, -31.83530184677364]),
            {
              "reference": 3,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70271110042858, -31.826514689691614]),
            {
              "reference": 3,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.700264925807, -31.826113596168923]),
            {
              "reference": 3,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69923495754528, -31.82574896418149]),
            {
              "reference": 3,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7316410296119, -31.847555660968734]),
            {
              "reference": 3,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73116896082528, -31.848321205543286]),
            {
              "reference": 3,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.72996733118661, -31.85127396081067]),
            {
              "reference": 3,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73241350580819, -31.850727161411854]),
            {
              "reference": 3,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.736018394724205, -31.849888729370456]),
            {
              "reference": 3,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.737262939707115, -31.849159651834505]),
            {
              "reference": 3,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74404356409676, -31.84387366734513]),
            {
              "reference": 3,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74558851648934, -31.84514962236998]),
            {
              "reference": 3,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74357149531014, -31.847701479472803]),
            {
              "reference": 3,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74859259058602, -31.849815821876216]),
            {
              "reference": 3,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.752712463632896, -31.85127396081067]),
            {
              "reference": 3,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75219747950204, -31.851711397995505]),
            {
              "reference": 3,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34531635214336, -31.565586443636956]),
            {
              "reference": 3,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.33407253195293, -31.57041298510578]),
            {
              "reference": 3,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.335617484345505, -31.57012047455255]),
            {
              "reference": 3,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.316906394257614, -31.568877294463938]),
            {
              "reference": 3,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.31579059530742, -31.57041298510578]),
            {
              "reference": 3,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.31424564291484, -31.571144257474135]),
            {
              "reference": 3,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.29896778036601, -31.565586443636956]),
            {
              "reference": 3,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34454387594707, -31.56500139133195]),
            {
              "reference": 3,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35226863790996, -31.58225889129137]),
            {
              "reference": 3,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35424274374492, -31.580869634539482]),
            {
              "reference": 3,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.3561310188914, -31.57933411614212]),
            {
              "reference": 3,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.358620108857224, -31.576774862598743]),
            {
              "reference": 3,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36025089193828, -31.575166152978372]),
            {
              "reference": 3,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54507632063352, -31.95051757613558]),
            {
              "reference": 3,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5451085071417, -31.950708748926456]),
            {
              "reference": 3,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54386396215879, -31.953539880352928]),
            {
              "reference": 3,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.543681571945775, -31.953330507061594]),
            {
              "reference": 3,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54363865660154, -31.953530777176272]),
            {
              "reference": 3,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54150361822568, -31.951482539492293]),
            {
              "reference": 3,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.541707466110815, -31.95168281363579]),
            {
              "reference": 3,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54602045820676, -31.952201703703803]),
            {
              "reference": 3,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54549474523984, -31.95245659599704]),
            {
              "reference": 3,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54473299787961, -31.951081989895428]),
            {
              "reference": 3,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54514069364988, -31.950945438497317]),
            {
              "reference": 3,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.546369986396854, -31.950526679610824]),
            {
              "reference": 3,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54817243085486, -31.95079978344895]),
            {
              "reference": 3,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54768963323218, -31.950617714313747]),
            {
              "reference": 3,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97471069388081, -31.23054361850859]),
            {
              "reference": 3,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97451757483174, -31.23147937195391]),
            {
              "reference": 3,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97347687773396, -31.229048228570097]),
            {
              "reference": 3,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.27252804834051, -30.479082721752185]),
            {
              "reference": 3,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.27456652719183, -30.4795820187998]),
            {
              "reference": 3,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.172878457962135, -31.913091739597952]),
            {
              "reference": 3,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.17255659288035, -31.9133012045539]),
            {
              "reference": 3,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.177955503750994, -31.9185420637126]),
            {
              "reference": 3,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.177644367505266, -31.918583043596097]),
            {
              "reference": 3,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.17799841909523, -31.918651343361372]),
            {
              "reference": 3,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76867794846356, -31.172971760234446]),
            {
              "reference": 3,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76829171036542, -31.173577617420804]),
            {
              "reference": 3,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76791620110333, -31.17310027571907]),
            {
              "reference": 3,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76218700264752, -31.17180593322905]),
            {
              "reference": 3,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76151108597577, -31.171824292820663]),
            {
              "reference": 3,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.761607645500305, -31.172870783659917]),
            {
              "reference": 3,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.759869574058655, -31.174780140658022]),
            {
              "reference": 3,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76045966004193, -31.173779568954963]),
            {
              "reference": 3,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76794838761151, -31.17500044860375]),
            {
              "reference": 3,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77698936381704, -31.22243244669097]),
            {
              "reference": 3,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77842166343099, -31.2233866300411]),
            {
              "reference": 3,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77921023288137, -31.222744392307515]),
            {
              "reference": 3,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77910294452077, -31.223923353942528]),
            {
              "reference": 3,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.778072976259054, -31.222230598978744]),
            {
              "reference": 3,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77975203910238, -31.223652698680862]),
            {
              "reference": 3,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.778325103906454, -31.22405638760061]),
            {
              "reference": 3,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.755951772629615, -31.218557781015377]),
            {
              "reference": 3,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75635946839988, -31.21866788409872]),
            {
              "reference": 3,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75654185861289, -31.217943036443355]),
            {
              "reference": 3,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75662768930137, -31.21935602546435]),
            {
              "reference": 3,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.756477485596534, -31.219612930290065]),
            {
              "reference": 3,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71170116218385, -30.624199366264833]),
            {
              "reference": 3,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71128273757753, -30.624023949506554]),
            {
              "reference": 3,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71128273757753, -30.624199366264833]),
            {
              "reference": 3,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37599539915919, -33.52727483633692]),
            {
              "reference": 3,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.375818373364204, -33.52731061154692]),
            {
              "reference": 3,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36453047003132, -33.526960164673746]),
            {
              "reference": 3,
              "system:index": "206"
            })]),
    aumi = 
    /* color: #45c2a5 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.91402115965694, -31.189287318489715]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91333451414913, -31.18869991814449]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.928869868763385, -31.200594064551826]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89741877589788, -31.159713360080346]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88922194514837, -31.161990212925048]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88608912501898, -31.160043874371695]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88175467525091, -31.150825765786163]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88042429957952, -31.150385036942897]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.893127241474055, -31.153690453318056]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89523009334173, -31.155747098664076]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89557341609564, -31.15618780257464]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89617423091497, -31.156591779359]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89072398219671, -31.168122754064896]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89132479701605, -31.166764081578556]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89342764888372, -31.16746178069486]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89226893458929, -31.16724145521328]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89226893458929, -31.16793915081362]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89321307216253, -31.167755547206482]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89420012508001, -31.16823291584483]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.899607458454035, -31.168379798018798]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.898834982257746, -31.167865709413473]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.815003589683954, -30.93978009631901]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.81680603414196, -30.94151009616779]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.81556148915905, -30.944859581334914]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.81367321401257, -30.94614781360244]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.813458637291376, -30.94290879655657]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.808193419179574, -30.852719064837874]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.810167525014535, -30.85448748012812]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.80656263609852, -30.858245254353353]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.80527517577137, -30.85375064438643]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78532183883277, -30.905357299885313]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78566516158668, -30.902153724449025]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78060115096656, -30.90859758895097]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78034365890113, -30.909775848684266]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.779742844081795, -30.907492957275984]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.779013283229745, -30.909591746557208]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65379380007753, -30.438635913334963]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.655381667814346, -30.437451892751902]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.654695022306534, -30.436859877069022]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65606831332216, -30.430421474449094]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6555533291913, -30.42790520159572]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66656111498842, -30.427960708314657]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66576718112001, -30.427664672115316]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66409348269472, -30.429551887494135]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66776274462709, -30.42622148277839]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66750525256166, -30.426832065488096]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66593884249696, -30.42537036110984]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.665166366300674, -30.428053219442727]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.665895927152725, -30.4279792105473]),
            {
              "reference": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66722630282411, -30.434121757783906]),
            {
              "reference": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66024008876068, -30.42422568409867]),
            {
              "reference": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65843764430267, -30.42233836568202]),
            {
              "reference": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65908137446625, -30.42418867820611]),
            {
              "reference": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.50712411342598, -30.087678563378716]),
            {
              "reference": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.50617997585274, -30.08827268797124]),
            {
              "reference": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.50806825099922, -30.088124157157758]),
            {
              "reference": 11,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.5220586532209, -30.097035611063347]),
            {
              "reference": 11,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.516222166404496, -30.094065215675375]),
            {
              "reference": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.49184625087715, -30.079434716320097]),
            {
              "reference": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.49339120326973, -30.079508988279724]),
            {
              "reference": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.49407784877754, -30.080325976155144]),
            {
              "reference": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03974326733185, -31.58051234467643]),
            {
              "reference": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0385630953653, -31.580292985613262]),
            {
              "reference": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03950723293854, -31.57853809452264]),
            {
              "reference": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03970035198761, -31.57908650153773]),
            {
              "reference": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04126676205231, -31.575759449391402]),
            {
              "reference": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04382022503449, -31.58001878605833]),
            {
              "reference": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04274734142853, -31.57959834517404]),
            {
              "reference": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04345544460846, -31.58109729965417]),
            {
              "reference": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03970035198761, -31.583345686173303]),
            {
              "reference": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03693231228424, -31.577752038840895]),
            {
              "reference": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03680356625153, -31.578446693039755]),
            {
              "reference": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03673919323517, -31.580183305888095]),
            {
              "reference": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03652461651398, -31.57915962222929]),
            {
              "reference": 11,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03545173290802, -31.575028213222268]),
            {
              "reference": 11,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.045908348867215, -31.587579654866246]),
            {
              "reference": 11,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03711070329837, -31.591765340594254]),
            {
              "reference": 11,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03698195726565, -31.592185726585676]),
            {
              "reference": 11,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.037668602773465, -31.589133315618476]),
            {
              "reference": 11,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0332578421804, -31.590529270945616]),
            {
              "reference": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.033794283983376, -31.59075774485972]),
            {
              "reference": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03395521652427, -31.59142488548225]),
            {
              "reference": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0337084532949, -31.591242107704634]),
            {
              "reference": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.035448190817185, -31.590240962800884]),
            {
              "reference": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03589880193169, -31.58943672767739]),
            {
              "reference": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03901016438896, -31.59025924079121]),
            {
              "reference": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.02982628072197, -31.59020440680951]),
            {
              "reference": 11,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.02815258229668, -31.588394867309432]),
            {
              "reference": 11,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.026199934133835, -31.588742155393195]),
            {
              "reference": 11,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.026929494985886, -31.58855937235257]),
            {
              "reference": 11,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.038789569213755, -31.669348102422365]),
            {
              "reference": 11,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0387251961974, -31.669658563643292]),
            {
              "reference": 11,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.039025603607065, -31.67015164697887]),
            {
              "reference": 11,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04213696606434, -31.673840557768287]),
            {
              "reference": 11,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0345838654784, -31.667266159187417]),
            {
              "reference": 11,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.032051860168345, -31.666407800584093]),
            {
              "reference": 11,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0321162331847, -31.66664521971472]),
            {
              "reference": 11,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.036300479247934, -31.666097328497674]),
            {
              "reference": 11,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03870373852528, -31.666115591590305]),
            {
              "reference": 11,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03891831524647, -31.666827849402278]),
            {
              "reference": 11,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.039068518951304, -31.667302684909497]),
            {
              "reference": 11,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03921872265614, -31.667722729681003]),
            {
              "reference": 11,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.039519130065806, -31.66781404351042]),
            {
              "reference": 11,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.039025603607065, -31.66838018724916]),
            {
              "reference": 11,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3731703347311, -31.924703729777455]),
            {
              "reference": 11,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.372505146895406, -31.924521608942577]),
            {
              "reference": 11,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37214036646938, -31.924794790059654]),
            {
              "reference": 11,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37237640086269, -31.925923930067555]),
            {
              "reference": 11,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3721618241415, -31.926816305103806]),
            {
              "reference": 11,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.372075993453024, -31.92736265289269]),
            {
              "reference": 11,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.371797043715475, -31.933317633252138]),
            {
              "reference": 11,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.373771149550436, -31.933299422890993]),
            {
              "reference": 11,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.62347598394454, -32.23525372367279]),
            {
              "reference": 11,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.61163134893477, -32.21223623315981]),
            {
              "reference": 11,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.61763949712813, -32.21172789473061]),
            {
              "reference": 11,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.627767518368366, -32.236633135745514]),
            {
              "reference": 11,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6254500897795, -32.22748506464258]),
            {
              "reference": 11,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.625793412533405, -32.231333175021746]),
            {
              "reference": 11,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.61120219549239, -32.217028998649916]),
            {
              "reference": 11,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.9881143961262, -32.967757654621145]),
            {
              "reference": 11,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98732046225779, -32.96835173485027]),
            {
              "reference": 11,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98727754691355, -32.967235580818496]),
            {
              "reference": 11,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98639778235667, -32.968243720560345]),
            {
              "reference": 11,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.986762562782694, -32.968477751354946]),
            {
              "reference": 11,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98369411566966, -32.96755962699025]),
            {
              "reference": 11,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98302892783396, -32.967235580818496]),
            {
              "reference": 11,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98794273474925, -32.96937786401728]),
            {
              "reference": 11,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.99006704428904, -32.96890980657754]),
            {
              "reference": 11,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.03948883874737, -33.006311833580675]),
            {
              "reference": 11,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.03916697366558, -33.00683367632215]),
            {
              "reference": 11,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.0381799207481, -33.00746348241581]),
            {
              "reference": 11,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.038008259371146, -33.00478227672491]),
            {
              "reference": 11,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.040518807009086, -33.003450640925024]),
            {
              "reference": 11,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.03944592340313, -33.003036750027505]),
            {
              "reference": 11,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.032794045046195, -33.003342669573755]),
            {
              "reference": 11,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.03335194452129, -33.00246089859194]),
            {
              "reference": 11,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.03249363763653, -33.001939029981656]),
            {
              "reference": 11,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39404044153136, -31.902182377667742]),
            {
              "reference": 11,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.396615362185656, -31.898976213570503]),
            {
              "reference": 11,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.399018621463, -31.902182377667742]),
            {
              "reference": 11,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40022025110167, -31.904222605764886]),
            {
              "reference": 11,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40399680139464, -31.903785417837092]),
            {
              "reference": 11,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40056357385558, -31.918065815921363]),
            {
              "reference": 11,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39558539392394, -31.9104887378438]),
            {
              "reference": 11,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.391637182254016, -31.90495124769619]),
            {
              "reference": 11,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38425574304503, -31.905825610398892]),
            {
              "reference": 11,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38786063196105, -31.906845689719294]),
            {
              "reference": 11,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39833197595519, -31.934674918488795]),
            {
              "reference": 11,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40399680139464, -31.928264743167052]),
            {
              "reference": 11,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.399361944216906, -31.935840356891312]),
            {
              "reference": 11,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40176520349425, -31.938025514069864]),
            {
              "reference": 11,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40004858972472, -31.939336583441683]),
            {
              "reference": 11,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38528571130675, -31.94472633881259]),
            {
              "reference": 11,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.398160314578234, -31.966282198844706]),
            {
              "reference": 11,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.41721472742003, -31.874489096658017]),
            {
              "reference": 11,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.420647954959094, -31.88979430771775]),
            {
              "reference": 11,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.421334600466906, -31.893146538202963]),
            {
              "reference": 11,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39077648795756, -31.967583477623624]),
            {
              "reference": 11,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.43987164176615, -31.97340843470833]),
            {
              "reference": 11,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.45085796989115, -32.045316171743075]),
            {
              "reference": 11,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.446051451336466, -32.04939022418682]),
            {
              "reference": 11,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.50956616080912, -32.06306607377514]),
            {
              "reference": 11,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.48244366325053, -32.04298806035464]),
            {
              "reference": 11,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.47866711295756, -32.04415212345051]),
            {
              "reference": 11,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.499266478191934, -32.04036886426592]),
            {
              "reference": 11,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.50544628776225, -32.03629441029156]),
            {
              "reference": 11,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23534297939674, -31.879036822468496]),
            {
              "reference": 11,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23491382595436, -31.880494499222785]),
            {
              "reference": 11,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23008584972755, -31.882043255501184]),
            {
              "reference": 11,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22768259045021, -31.882535207928484]),
            {
              "reference": 11,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22605180736915, -31.883008937412285]),
            {
              "reference": 11,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22555828091041, -31.886416073842955]),
            {
              "reference": 11,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22233963009254, -31.880385174266305]),
            {
              "reference": 11,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.385564118634065, -32.03121683474331]),
            {
              "reference": 11,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.386830121289094, -32.02936134006284]),
            {
              "reference": 11,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.387280732403596, -32.028888364818194]),
            {
              "reference": 11,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39283826948245, -32.034582096817424]),
            {
              "reference": 11,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39150789381107, -32.033708959619645]),
            {
              "reference": 11,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39094999433597, -32.03358162641604]),
            {
              "reference": 11,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39163663984378, -32.03418190996856]),
            {
              "reference": 11,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39187267423709, -32.03243561961603]),
            {
              "reference": 11,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39167955518802, -32.03203542338672]),
            {
              "reference": 11,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39273098112186, -32.03332695947765]),
            {
              "reference": 11,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39369657636722, -32.03389086388908]),
            {
              "reference": 11,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39273098112186, -32.03500047210762]),
            {
              "reference": 11,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39197996259769, -32.0343638132985]),
            {
              "reference": 11,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40315940977176, -32.03292676714358]),
            {
              "reference": 11,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40212944151004, -32.03259933575122]),
            {
              "reference": 11,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.4030950367554, -32.03339972153233]),
            {
              "reference": 11,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40423229337772, -32.034454764827956]),
            {
              "reference": 11,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40397480131229, -32.03289038593557]),
            {
              "reference": 11,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.403760224591096, -32.03414552925922]),
            {
              "reference": 11,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.402279645214875, -32.033090482400716]),
            {
              "reference": 11,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5351415660552, -32.635169001743996]),
            {
              "reference": 11,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.532051661270046, -32.64413125679675]),
            {
              "reference": 11,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54423961903372, -32.626639570462125]),
            {
              "reference": 11,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53977642323294, -32.62945870973107]),
            {
              "reference": 11,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54217968251028, -32.627362435150864]),
            {
              "reference": 11,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53874645497122, -32.63950568889132]),
            {
              "reference": 11,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55608425404348, -32.638638368279636]),
            {
              "reference": 11,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54089222218313, -32.62916957132898]),
            {
              "reference": 11,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.538317301528835, -32.62960327858178]),
            {
              "reference": 11,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.51651630665579, -32.618615380350754]),
            {
              "reference": 11,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.51565799977102, -32.62006123349665]),
            {
              "reference": 11,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.51917705799856, -32.61312092544146]),
            {
              "reference": 11,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.902779442292626, -31.17667097683934]),
            {
              "reference": 11,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.842294553776654, -31.10478149061567]),
            {
              "reference": 11,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85465417291728, -31.108749883530944]),
            {
              "reference": 11,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11936832326184, -32.58050117593146]),
            {
              "reference": 11,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12383151906262, -32.582236935187495]),
            {
              "reference": 11,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12211490529309, -32.5875886480051]),
            {
              "reference": 11,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11524845021496, -32.599448061979174]),
            {
              "reference": 11,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11713672536145, -32.59988191321695]),
            {
              "reference": 11,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.113188513691526, -32.59077059604898]),
            {
              "reference": 11,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12108493703137, -32.59250615645899]),
            {
              "reference": 11,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.114218481953245, -32.59221689872472]),
            {
              "reference": 11,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11833835500012, -32.58816719241535]),
            {
              "reference": 11,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.122458228046995, -32.58281551413834]),
            {
              "reference": 11,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12760806935559, -32.57572766470684]),
            {
              "reference": 11,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13035465138684, -32.56834992026528]),
            {
              "reference": 11,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13138461964856, -32.57124322571248]),
            {
              "reference": 11,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.218588599140745, -32.54917941463438]),
            {
              "reference": 11,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.22202182667981, -32.548600618706224]),
            {
              "reference": 11,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21515537160168, -32.54440423662193]),
            {
              "reference": 11,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21970439809094, -32.54498305960563]),
            {
              "reference": 11,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.2092330540968, -32.543029517079944]),
            {
              "reference": 11,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18073726552258, -32.54375305630477]),
            {
              "reference": 11,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.190865286762815, -32.54208890737094]),
            {
              "reference": 11,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18992114918957, -32.54331893346954]),
            {
              "reference": 11,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21592784779797, -32.540280014851234]),
            {
              "reference": 11,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.21824527638684, -32.53716863447863]),
            {
              "reference": 11,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95241225175014, -31.21557916628178]),
            {
              "reference": 11,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.956038598338274, -31.218992409775556]),
            {
              "reference": 11,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95556652955165, -31.219781475411516]),
            {
              "reference": 11,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95820582322231, -31.21789137695131]),
            {
              "reference": 11,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88640506962655, -31.15555475020439]),
            {
              "reference": 11,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.885224897659995, -31.156050542965936]),
            {
              "reference": 11,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88207061985848, -31.15256157584708]),
            {
              "reference": 11,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.344738211669906, -30.135856130087483]),
            {
              "reference": 11,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34593984130858, -30.137563395882573]),
            {
              "reference": 11,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.3418199682617, -30.13871392791263]),
            {
              "reference": 11,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34289285186766, -30.13912217798944]),
            {
              "reference": 11,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34456655029295, -30.139938673076365]),
            {
              "reference": 11,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.42700035624991, -30.249524565087512]),
            {
              "reference": 11,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.42678577952872, -30.249746996700527]),
            {
              "reference": 11,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.425755811267, -30.24969138884448]),
            {
              "reference": 11,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76290802907352, -31.852545641046436]),
            {
              "reference": 11,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76342301320438, -31.853037750947525]),
            {
              "reference": 11,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.764088201040074, -31.853311144202294]),
            {
              "reference": 11,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.756084489339635, -31.853128882122505]),
            {
              "reference": 11,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.756599473470494, -31.852527414703374]),
            {
              "reference": 11,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.004534898764355, -33.078055383514204]),
            {
              "reference": 11,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.00311869240449, -33.078127303406085]),
            {
              "reference": 11,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.01242951489508, -33.03235295185045]),
            {
              "reference": 11,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.01294449902594, -33.03296458647602]),
            {
              "reference": 11,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.28970385984354, -30.494721385721707]),
            {
              "reference": 11,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.3017847582189, -30.49505544104156]),
            {
              "reference": 11,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.30154872382559, -30.49549918792851]),
            {
              "reference": 11,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.302342657694, -30.497643936015237]),
            {
              "reference": 11,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.30354428733267, -30.498309537875983]),
            {
              "reference": 11,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.301183943399565, -30.500398758577173]),
            {
              "reference": 11,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.30109811271109, -30.500565154756803]),
            {
              "reference": 11,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64842869002001, -30.400944148528122]),
            {
              "reference": 11,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64821411329882, -30.40286889464382]),
            {
              "reference": 11,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65014530378954, -30.405015682092518]),
            {
              "reference": 11,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65104652601855, -30.407976690776774]),
            {
              "reference": 11,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64555336195605, -30.399278472230666]),
            {
              "reference": 11,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.62705684858935, -30.400203851458905]),
            {
              "reference": 11,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64593960005419, -30.40538581308902]),
            {
              "reference": 11,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.39260222084236, -30.041803751576836]),
            {
              "reference": 11,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.393042103120806, -30.042258839411357]),
            {
              "reference": 11,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.391819015810015, -30.041246498320152]),
            {
              "reference": 11,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.21629165347582, -32.06780969933238]),
            {
              "reference": 11,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.21639894183642, -32.06864614422763]),
            {
              "reference": 11,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.21552990611559, -32.071137250005094]),
            {
              "reference": 11,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.217225062213004, -32.06961895638463]),
            {
              "reference": 11,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.237756383171046, -31.98236882934535]),
            {
              "reference": 11,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2369195339584, -31.981763656196595]),
            {
              "reference": 11,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23943008159634, -31.981208531452545]),
            {
              "reference": 11,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23742915367123, -31.980598800404504]),
            {
              "reference": 11,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2341432445543, -31.97574875475979]),
            {
              "reference": 11,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23341368370225, -31.976818113046797]),
            {
              "reference": 11,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23350487880876, -31.976103692083324]),
            {
              "reference": 11,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23274313144853, -31.976576939712785]),
            {
              "reference": 11,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.19277298963461, -31.999797790852522]),
            {
              "reference": 11,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.192467217806914, -32.00053477360455]),
            {
              "reference": 11,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.191421283220656, -32.00011236758584]),
            {
              "reference": 11,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.812802550368446, -31.16654682749228]),
            {
              "reference": 11,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.814572808318275, -31.167428132806315]),
            {
              "reference": 11,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.81548475938334, -31.167685178645115]),
            {
              "reference": 11,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.816300150923865, -31.163893681793443]),
            {
              "reference": 11,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.81674003320231, -31.163397930067674]),
            {
              "reference": 11,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.814291386031215, -31.165988329770567]),
            {
              "reference": 11,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80744102420718, -31.16203896681641]),
            {
              "reference": 11,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80621793689639, -31.163287539666687]),
            {
              "reference": 11,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.8079130929938, -31.162589809808026]),
            {
              "reference": 11,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76627203027712, -31.171485165792724]),
            {
              "reference": 11,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76636322538363, -31.17113633169438]),
            {
              "reference": 11,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.766454420490135, -31.170865525390084]),
            {
              "reference": 11,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.762490756609864, -31.173194605150684]),
            {
              "reference": 11,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7625873161344, -31.17266677310898]),
            {
              "reference": 11,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76259268055243, -31.17201501122476]),
            {
              "reference": 11,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.29899942179857, -31.817713334363532]),
            {
              "reference": 11,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.297111146652085, -31.81176911264127]),
            {
              "reference": 11,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3012739350432, -31.818515592654034]),
            {
              "reference": 11,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.295866601669175, -31.816108796873255]),
            {
              "reference": 11,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95561763249799, -31.22505209395243]),
            {
              "reference": 11,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95235606633588, -31.22321714975484]),
            {
              "reference": 11,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95141192876264, -31.227143886883304]),
            {
              "reference": 11,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.94969531499311, -31.22578606165679]),
            {
              "reference": 11,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95342894994184, -31.224281421728396]),
            {
              "reference": 11,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.94252971391944, -31.218601754432118]),
            {
              "reference": 11,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.94673541765479, -31.215739030588136]),
            {
              "reference": 11,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.93087230369458, -31.204581536173418]),
            {
              "reference": 11,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.929198605269285, -31.20507707227274]),
            {
              "reference": 11,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.94280947803636, -31.208617453589063]),
            {
              "reference": 11,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92982758640428, -31.19163991039014]),
            {
              "reference": 11,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92733849643846, -31.198357875521516]),
            {
              "reference": 11,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.93154420017381, -31.19498059747623]),
            {
              "reference": 11,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.926222697488264, -31.18785855085764]),
            {
              "reference": 11,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92039921107497, -31.185048293339]),
            {
              "reference": 11,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.908512866948605, -31.179795900871298]),
            {
              "reference": 11,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91736039960683, -31.17972101063787]),
            {
              "reference": 11,
              "system:index": "322"
            })]),
    campo = 
    /* color: #b8af4f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.92796864653438, -31.186423707374228]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92247548247188, -31.179668178955023]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92101636076778, -31.17893385334142]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91758313322872, -31.174454343774503]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9194714083752, -31.17467465247814]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.917411471851764, -31.175115268347867]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.94230237150997, -31.205365986944397]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.93397679472774, -31.190976074175357]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92968526030391, -31.188039088398583]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.93097272063106, -31.187011121845533]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.922389651783405, -31.181136813096725]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92444958830684, -31.179080718919742]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92384877348751, -31.179080718919742]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.663474137362336, -30.428459063416728]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.664504105624054, -30.425942739941505]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66407495218167, -30.426664339340572]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66858106332669, -30.42984671403612]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66840940194974, -30.430605288029255]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6678085871304, -30.43130835134048]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.665512616213654, -30.432159421199906]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66731506067166, -30.42355548984224]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66630655008206, -30.423907047536414]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66317372995267, -30.42349998061682]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66310935693631, -30.424092077392956]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.50272319465547, -30.395826765740527]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.501435734328325, -30.394049950250604]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.50126407295137, -30.39567869901754]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.50272319465547, -30.397381452780284]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.50375316291719, -30.397381452780284]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.501693226393755, -30.397455484879192]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28892992652401, -30.031855783468068]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28721331275448, -30.03976923593028]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29107569373593, -30.040363648155445]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.286097513804286, -30.02869765655412]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.294852244028895, -30.022083841272853]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.2937364450787, -30.022046683760887]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.292620646128505, -30.025205022564993]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28918741858944, -30.02840041589896]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28772829688534, -30.027099977552815]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28146265662655, -30.02747153310683]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28193472541317, -30.028437571029603]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.2827501169537, -30.02810317435249]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.283093439707606, -30.028660501520978]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56964249906405, -32.11783788140093]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57314009961947, -32.116874669498294]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58041425046786, -32.115402571292385]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57936282453402, -32.113857751350686]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57689519224032, -32.11543891968209]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57863326368197, -32.116111362280996]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.578547432993496, -32.11689284340186]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57790370282992, -32.117801533966514]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57618708906039, -32.1176924915764]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.574792340372646, -32.11542074548906]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57468505201205, -32.11651119066708]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57326884565219, -32.115766054538156]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57043643293246, -32.11489369231672]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5690202265726, -32.113857751350686]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56016042211889, -32.10508055660078]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56269242742895, -32.10498967528921]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56219890097021, -32.10211777925802]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56166245916723, -32.10060908883177]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.559581064971674, -32.1014088796315]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55696322897314, -32.102135956099175]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55612637976049, -32.10284485008218]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.551040911468256, -32.10211777925802]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54919555166601, -32.10260855269923]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54968907812475, -32.10404450428737]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55172755697607, -32.10458979644385]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55342271307348, -32.1042989743656]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55749967077612, -32.10695269149652]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56018187979101, -32.10684363614762]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.19190991917811, -31.91181539075359]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.1915665964242, -31.910777151703254]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.19107306996546, -31.912033965902914]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.190729747211556, -31.912525758090357]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.19036496678553, -31.91248932912958]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.190493712818245, -31.909356384544225]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2064803979807, -31.89884166540481]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.20869053820897, -31.894815579406014]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.20963467578221, -31.8933763475748]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.21100796679784, -31.891754907549718]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.212316884797104, -31.891700251770512]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.212831868927964, -31.892811579570786]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.21326102237035, -31.894032202844993]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.99556586442368, -31.18098701979308]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.99436423478501, -31.181244028832328]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.999471160749366, -31.182639208585886]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00260398087876, -31.18491551035959]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0020889967479, -31.18517250873402]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.99904200730698, -31.18300635773537]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00080153642075, -31.182382203334054]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.99689624009507, -31.18139089082723]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.993505927900245, -31.186714484328242]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.99595210252183, -31.186898051178197]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00608012376206, -31.202169566035348]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00689551530259, -31.2032707819207]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0075821608104, -31.201912613817534]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96872415706432, -31.206951357710366]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97035494014538, -31.20654759575223]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.978637601583365, -31.212493733991096]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9803542153529, -31.2121634027861]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96151437923229, -31.197113757647557]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.95971193477428, -31.197334013620292]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.960698987691764, -31.19682008221967]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97679224178112, -31.199279585777823]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9757622735194, -31.199977045299725]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29613231656481, -30.200725545222]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28866504666735, -30.195977862452576]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28909420010973, -30.19390067924826]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28763507840563, -30.195977862452576]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28857921597887, -30.196942254044668]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.703612322657584, -31.83322363204327]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.704556460230826, -31.832749646691127]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70472812160778, -31.833916375486737]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7037410686903, -31.83431743510361]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.704556460230826, -31.83592165614148]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70541476711559, -31.836906050698563]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70412730678844, -31.836869591828155]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.700565333216666, -31.830744297111956]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70322608455944, -31.826769930116885]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70425605282116, -31.825639574304414]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70425605282116, -31.823925782640913]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.706573481410025, -31.826150059288462]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.72142219051647, -31.83971334046025]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71949100002575, -31.83810918534052]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7182035396986, -31.837307097322256]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71661567196178, -31.836432084259705]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.720048899500846, -31.83887480830846]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7191047619276, -31.838182102087362]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75228331019051, -31.842743521013404]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.751768326059654, -31.84474860983533]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7452022783912, -31.84092067517608]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.740009521738365, -31.839863408088103]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.729795669809654, -31.835780055932364]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.745760177866295, -31.841285247224818]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75121042658456, -31.842779977562795]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75288412500985, -31.842925803616254]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.756489013925865, -31.84558708860141]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.758248543039635, -31.84522253355262]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75979349543221, -31.84627973922486]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.761510109201744, -31.84668074510331]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76185343195565, -31.847227568491725]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74159738947518, -31.846644290095494]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7411682360328, -31.843144542264234]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73670504023202, -31.843727842789953]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7345592730201, -31.843946579536254]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76328036715157, -31.83723841673168]),
            {
              "reference": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76244351793893, -31.836481894944]),
            {
              "reference": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76507208277352, -31.836554812976754]),
            {
              "reference": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76601622034676, -31.837703264392264]),
            {
              "reference": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76440689493783, -31.83812253674416]),
            {
              "reference": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.761767601267174, -31.83711081108186]),
            {
              "reference": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76634881426461, -31.83812253674416]),
            {
              "reference": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76793668200143, -31.83759388868282]),
            {
              "reference": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76729295183785, -31.836080844733836]),
            {
              "reference": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76655266214974, -31.8353607729369]),
            {
              "reference": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76392409731515, -31.834549546080606]),
            {
              "reference": 12,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76895679063651, -31.8351809372833]),
            {
              "reference": 12,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76991165704581, -31.833130065100423]),
            {
              "reference": 12,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.765823970507114, -31.83149844978978]),
            {
              "reference": 12,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.762294183443515, -31.83103357087386]),
            {
              "reference": 12,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7378051620292, -31.8145011213215]),
            {
              "reference": 12,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73973635251992, -31.815850416837172]),
            {
              "reference": 12,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74316958005898, -31.816907959001167]),
            {
              "reference": 12,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74166754301064, -31.81719969263934]),
            {
              "reference": 12,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.740852151470115, -31.812495375340383]),
            {
              "reference": 12,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7392642837333, -31.811656595923143]),
            {
              "reference": 12,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73621729429238, -31.810635462873513]),
            {
              "reference": 12,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75089434202187, -31.82022637475188]),
            {
              "reference": 12,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.75239637907021, -31.817527891880662]),
            {
              "reference": 12,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.745358262615134, -31.81621508791689]),
            {
              "reference": 12,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74291208799355, -31.8132247425551]),
            {
              "reference": 12,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74025133665078, -31.812240095454523]),
            {
              "reference": 12,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73651770170205, -31.810963685441973]),
            {
              "reference": 12,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19439310790596, -29.859391281966815]),
            {
              "reference": 12,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19362063170967, -29.860396171691086]),
            {
              "reference": 12,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.192268798366165, -29.863950422676034]),
            {
              "reference": 12,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41737121511943, -31.52586769046826]),
            {
              "reference": 12,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.419001998200486, -31.528428340688937]),
            {
              "reference": 12,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41737121511943, -31.530111015465312]),
            {
              "reference": 12,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41393798758037, -31.52674563559541]),
            {
              "reference": 12,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.412307204499314, -31.521624172688085]),
            {
              "reference": 12,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41719955374248, -31.516795107625974]),
            {
              "reference": 12,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.422521056428025, -31.509624217241083]),
            {
              "reference": 12,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42440933157451, -31.50501406857989]),
            {
              "reference": 12,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.427756728425095, -31.503477301831886]),
            {
              "reference": 12,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42938751150615, -31.50838023127226]),
            {
              "reference": 12,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42938751150615, -31.509843742458038]),
            {
              "reference": 12,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.389047087922165, -31.534427303425666]),
            {
              "reference": 12,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.38896125723369, -31.52630666406339]),
            {
              "reference": 12,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39042037893779, -31.535305168086037]),
            {
              "reference": 12,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39359611441142, -31.534866236787554]),
            {
              "reference": 12,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40569824148662, -31.53589040660759]),
            {
              "reference": 12,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40732902456767, -31.534500459129273]),
            {
              "reference": 12,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.421748580231736, -31.526818797316842]),
            {
              "reference": 12,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57441066075176, -32.95420756628321]),
            {
              "reference": 12,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57870219517559, -32.95903284226366]),
            {
              "reference": 12,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.583508713730275, -32.964289932589544]),
            {
              "reference": 12,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58634112645, -32.969042649117846]),
            {
              "reference": 12,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.59131930638164, -32.979915326671694]),
            {
              "reference": 12,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.592005951889455, -32.983155269681966]),
            {
              "reference": 12,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58711360264629, -32.97005076823618]),
            {
              "reference": 12,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58719943333477, -32.975955234868366]),
            {
              "reference": 12,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.576985581406056, -32.96277765098199]),
            {
              "reference": 12,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5713207559666, -32.95492777345477]),
            {
              "reference": 12,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57380984593242, -32.95838468618172]),
            {
              "reference": 12,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58591197300762, -32.971274897411604]),
            {
              "reference": 12,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85720334671157, -31.09651995143666]),
            {
              "reference": 12,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86029325149673, -31.097475403550256]),
            {
              "reference": 12,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.839865547639306, -31.080496322792385]),
            {
              "reference": 12,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.850851875764306, -31.087405925215197]),
            {
              "reference": 12,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.849392754060204, -31.092624547211386]),
            {
              "reference": 12,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.857375008088525, -31.09651995143666]),
            {
              "reference": 12,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85643087051528, -31.098210360175013]),
            {
              "reference": 12,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86303983352798, -31.101591087403783]),
            {
              "reference": 12,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.79292862734209, -31.114818863233367]),
            {
              "reference": 12,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.793872764915335, -31.11717027488835]),
            {
              "reference": 12,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78831098253529, -31.08442249772685]),
            {
              "reference": 12,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.79989812547963, -31.07707160905412]),
            {
              "reference": 12,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.76788327867787, -31.077292143985535]),
            {
              "reference": 12,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.761531807730606, -31.07721863239857]),
            {
              "reference": 12,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.82143769647685, -31.080306070106822]),
            {
              "reference": 12,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.820321897526654, -31.07802725672865]),
            {
              "reference": 12,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8640955486497, -31.117200537943567]),
            {
              "reference": 12,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86418137933818, -31.118964057895074]),
            {
              "reference": 12,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8655546703538, -31.12021319803528]),
            {
              "reference": 12,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.86641297723857, -31.120066241225068]),
            {
              "reference": 12,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8655546703538, -31.12212361586016]),
            {
              "reference": 12,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84397633056984, -31.11988946068414]),
            {
              "reference": 12,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85187275390968, -31.1375226858296]),
            {
              "reference": 12,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.859769177249525, -31.139506218555]),
            {
              "reference": 12,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87634165175015, -31.156761551860765]),
            {
              "reference": 12,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87368090040738, -31.15352969515887]),
            {
              "reference": 12,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87968904860074, -31.16050742967593]),
            {
              "reference": 12,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.879002403092926, -31.159846403174196]),
            {
              "reference": 12,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90240524075673, -31.135189552652985]),
            {
              "reference": 12,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89759872220204, -31.135446685931225]),
            {
              "reference": 12,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89892909787343, -31.136254814553176]),
            {
              "reference": 12,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89253471158192, -31.12971612182669]),
            {
              "reference": 12,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89141891263173, -31.128503842750895]),
            {
              "reference": 12,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90317771695302, -31.14330728115432]),
            {
              "reference": 12,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90167567990468, -31.14268286517108]),
            {
              "reference": 12,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9015898492162, -31.141029979484834]),
            {
              "reference": 12,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90515182278798, -31.135116085874035]),
            {
              "reference": 12,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.904207685214736, -31.135116085874035]),
            {
              "reference": 12,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89365051053212, -31.130524299271222]),
            {
              "reference": 12,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89433715603993, -31.13390387580558]),
            {
              "reference": 12,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89789912961171, -31.13684254013518]),
            {
              "reference": 12,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90253398678944, -31.141654406352576]),
            {
              "reference": 12,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.907512166721084, -31.142095175783542]),
            {
              "reference": 12,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.16082454579602, -32.552507418797134]),
            {
              "reference": 12,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1632707204176, -32.54903471600222]),
            {
              "reference": 12,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15936542409192, -32.54780476821153]),
            {
              "reference": 12,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.156318434651, -32.54516394102274]),
            {
              "reference": 12,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14696288960705, -32.54599599084769]),
            {
              "reference": 12,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14756370442639, -32.54881766761662]),
            {
              "reference": 12,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.147392043049436, -32.55402668402129]),
            {
              "reference": 12,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15370059865246, -32.55496716865317]),
            {
              "reference": 12,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1557605351759, -32.55554592352801]),
            {
              "reference": 12,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15078235524426, -32.55062638812742]),
            {
              "reference": 12,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.159150847370725, -32.54932411303329]),
            {
              "reference": 12,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.158936270649534, -32.55091578002702]),
            {
              "reference": 12,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.0969942596879, -32.64197144919156]),
            {
              "reference": 12,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09647927555704, -32.63969477740778]),
            {
              "reference": 12,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09265980991983, -32.6401645715683]),
            {
              "reference": 12,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09362540516519, -32.64117642753399]),
            {
              "reference": 12,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10409674915933, -32.64000195079195]),
            {
              "reference": 12,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10220847401285, -32.640977671015484]),
            {
              "reference": 12,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1004704025712, -32.64242316289439]),
            {
              "reference": 12,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09959063801431, -32.64329044680908]),
            {
              "reference": 12,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09783110890054, -32.64381442676563]),
            {
              "reference": 12,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09589991840982, -32.643669880877326]),
            {
              "reference": 12,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09068570408487, -32.64309169498808]),
            {
              "reference": 12,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46140475343548, -31.953324431599565]),
            {
              "reference": 12,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.45960230897747, -31.955181465129378]),
            {
              "reference": 12,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46226306032025, -31.95765745143374]),
            {
              "reference": 12,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.464537573564876, -31.95947798701539]),
            {
              "reference": 12,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.44376654695355, -31.960424651255625]),
            {
              "reference": 12,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.44715685914837, -31.956419466624848]),
            {
              "reference": 12,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.44419570039593, -31.956747170109953]),
            {
              "reference": 12,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.44170661043011, -31.95856772373559]),
            {
              "reference": 12,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.43917460512005, -31.95856772373559]),
            {
              "reference": 12,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46213431428753, -31.96326458542426]),
            {
              "reference": 12,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.462778044451106, -31.964575294647943]),
            {
              "reference": 12,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02144176839334, -31.299813968657215]),
            {
              "reference": 12,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.020776580557644, -31.299960646411943]),
            {
              "reference": 12,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.01966078160745, -31.30019899727646]),
            {
              "reference": 12,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.01809437154275, -31.300419012923996]),
            {
              "reference": 12,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.01914579747659, -31.300088989260065]),
            {
              "reference": 12,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.018502067313015, -31.300584024322546]),
            {
              "reference": 12,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.01809437154275, -31.300419012923996]),
            {
              "reference": 12,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02058346150857, -31.30379252185963]),
            {
              "reference": 12,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.022536109671414, -31.303315837707093]),
            {
              "reference": 12,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02307255147439, -31.304049196942877]),
            {
              "reference": 12,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02388794301492, -31.30408586475482]),
            {
              "reference": 12,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.024982284292996, -31.30111572575227]),
            {
              "reference": 12,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02515394566995, -31.299557282037064]),
            {
              "reference": 12,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02455313085061, -31.299612286371676]),
            {
              "reference": 12,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.663271904326024, -30.384515195971808]),
            {
              "reference": 12,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66254234347397, -30.385181570598466]),
            {
              "reference": 12,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66067552599961, -30.38427455957316]),
            {
              "reference": 12,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.1258004403871, -31.99686610683611]),
            {
              "reference": 12,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.118225882129046, -31.99570144280628]),
            {
              "reference": 12,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.11835462816176, -31.996065401904502]),
            {
              "reference": 12,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.11882669694838, -31.996119995644662]),
            {
              "reference": 12,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.12414819963393, -31.99384522893717]),
            {
              "reference": 12,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.12382633455214, -31.994372979839895]),
            {
              "reference": 12,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.11754111373902, -31.349736873982287]),
            {
              "reference": 12,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.11809901321412, -31.34948032344302]),
            {
              "reference": 12,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.11694029891969, -31.34992012393904]),
            {
              "reference": 12,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.11992291534425, -31.347006407333538]),
            {
              "reference": 12,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12438611114503, -31.3533468323623]),
            {
              "reference": 12,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.119987288360605, -31.347299615604758]),
            {
              "reference": 12,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.565468633844056, -30.813312215976477]),
            {
              "reference": 12,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56565907068411, -30.813685396963955]),
            {
              "reference": 12,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56576635904471, -30.813581735723968]),
            {
              "reference": 12,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.565573239995636, -30.813501110237752]),
            {
              "reference": 12,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56615527935187, -30.814192183638117]),
            {
              "reference": 12,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56386521266342, -30.81088518077735]),
            {
              "reference": 12,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.72221477166318, -30.636796671463276]),
            {
              "reference": 12,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.723011017171615, -30.636958054778283]),
            {
              "reference": 12,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7220722440164, -30.63702728901857]),
            {
              "reference": 12,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.730054203704825, -30.611912548909853]),
            {
              "reference": 12,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.728058640197744, -30.61124772567121]),
            {
              "reference": 12,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.728552166656485, -30.61218955724553]),
            {
              "reference": 12,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74997111071225, -30.99167478470837]),
            {
              "reference": 12,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74954195726987, -30.99179434836674]),
            {
              "reference": 12,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74559374559995, -30.99207026392946]),
            {
              "reference": 12,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74527188051816, -30.99270486669484]),
            {
              "reference": 12,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38280157721318, -33.688915160324804]),
            {
              "reference": 12,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.383155628803145, -33.68870091083629]),
            {
              "reference": 12,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38858978426732, -33.689205288989214]),
            {
              "reference": 12,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38834838545598, -33.68852236918787]),
            {
              "reference": 12,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.386680051448714, -33.68929902265608]),
            {
              "reference": 12,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42175961534226, -33.74043785162625]),
            {
              "reference": 12,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.421362648408056, -33.74101775989358]),
            {
              "reference": 12,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42435599366868, -33.7395813645528]),
            {
              "reference": 12,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42300416032517, -33.74103560316272]),
            {
              "reference": 12,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42226387063706, -33.738992524729234]),
            {
              "reference": 12,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4232080082103, -33.739599208120715]),
            {
              "reference": 12,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41498778522014, -33.72639471445229]),
            {
              "reference": 12,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41332481563091, -33.72797409855273]),
            {
              "reference": 12,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41330335795879, -33.72695687144666]),
            {
              "reference": 12,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41372178256511, -33.726296559678865]),
            {
              "reference": 12,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41422603785991, -33.727037179288125]),
            {
              "reference": 12,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33242335368022, -33.55833513931802]),
            {
              "reference": 12,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33160796213969, -33.556904632979574]),
            {
              "reference": 12,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33564200449809, -33.55411507747874]),
            {
              "reference": 12,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.327831411846724, -33.54921525552903]),
            {
              "reference": 12,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33658614207133, -33.54356402094703]),
            {
              "reference": 12,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.32920470286235, -33.53830589487852]),
            {
              "reference": 12,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.324312353619185, -33.53930746736336]),
            {
              "reference": 12,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.32916178751811, -33.54588894068007]),
            {
              "reference": 12,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.122256030086284, -33.45760426481954]),
            {
              "reference": 12,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12392972851158, -33.45867837858832]),
            {
              "reference": 12,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12637590313316, -33.45806971575312]),
            {
              "reference": 12,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12551548039622, -33.451117084870134]),
            {
              "reference": 12,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12341262852854, -33.45156466737388]),
            {
              "reference": 12,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.124099274036354, -33.450669500056435]),
            {
              "reference": 12,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40449587191411, -33.38546397223128]),
            {
              "reference": 12,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.403079665554245, -33.38019624762641]),
            {
              "reference": 12,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4001185068018, -33.377902716790544]),
            {
              "reference": 12,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.402822173488815, -33.382453882963375]),
            {
              "reference": 12,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46328431061046, -32.767928152846295]),
            {
              "reference": 12,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46405678680675, -32.76619599779128]),
            {
              "reference": 12,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46116000107067, -32.764157063759406]),
            {
              "reference": 12,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46116000107067, -32.7615226196716]),
            {
              "reference": 12,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.53285310593578, -31.666510826099977]),
            {
              "reference": 12,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.52555749741527, -31.65832863590754]),
            {
              "reference": 12,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.529462793740954, -31.662237182725406]),
            {
              "reference": 12,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.53225229111644, -31.658949630967438]),
            {
              "reference": 12,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.53483875148688, -31.661065258059587]),
            {
              "reference": 12,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.52466781490241, -31.660188577906794]),
            {
              "reference": 12,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.51711471431647, -31.666946106871716]),
            {
              "reference": 12,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.5159130846778, -31.6639874654925]),
            {
              "reference": 12,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.52754314296637, -31.66932025711202]),
            {
              "reference": 12,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.5243244921485, -31.66796882518445]),
            {
              "reference": 12,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.303376786910874, -31.807064518737707]),
            {
              "reference": 12,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.30839788218675, -31.80925273175314]),
            {
              "reference": 12,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.31329023142992, -31.804329179580122]),
            {
              "reference": 12,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.30964242716966, -31.801703177799624]),
            {
              "reference": 12,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.30444967051683, -31.799332417647758]),
            {
              "reference": 12,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88178583481204, -30.264979051637724]),
            {
              "reference": 12,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88277288772952, -30.260679284712886]),
            {
              "reference": 12,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88032671310794, -30.260531013529867]),
            {
              "reference": 12,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88762232162845, -30.26609102968207]),
            {
              "reference": 12,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8857769618262, -30.26768484291708]),
            {
              "reference": 12,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.94570753455597, -32.92014694041103]),
            {
              "reference": 12,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.94680187583405, -32.921570967930016]),
            {
              "reference": 12,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.94632980704743, -32.917734350395165]),
            {
              "reference": 12,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.94100830436188, -32.91330312035944]),
            {
              "reference": 12,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.95319626212555, -32.91679768611387]),
            {
              "reference": 12,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92950167778254, -32.891420630326614]),
            {
              "reference": 12,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92821421745539, -32.89365483822062]),
            {
              "reference": 12,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92718424919367, -32.89120441366925]),
            {
              "reference": 12,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.0147770676138, -33.242767022802056]),
            {
              "reference": 12,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.00825393528958, -33.24632030594224]),
            {
              "reference": 12,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.00932681889554, -33.24710990480148]),
            {
              "reference": 12,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.01173007817288, -33.24414887229839]),
            {
              "reference": 12,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36893129678365, -33.38261462617702]),
            {
              "reference": 12,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36717176766988, -33.38540970735724]),
            {
              "reference": 12,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.365326407867634, -33.386592214653135]),
            {
              "reference": 12,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.367085936981404, -33.38945883224826]),
            {
              "reference": 12,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.96051423414421, -33.12480491349257]),
            {
              "reference": 12,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.95740287168694, -33.125559667837905]),
            {
              "reference": 12,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.95838992460442, -33.126961337267204]),
            {
              "reference": 12,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.95991341932488, -33.126961337267204]),
            {
              "reference": 12,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9273103301228, -31.210821430893947]),
            {
              "reference": 12,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92879090949902, -31.208252112337817]),
            {
              "reference": 12,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.929327351302, -31.208582457205434]),
            {
              "reference": 12,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.931966644972654, -31.210179107799025]),
            {
              "reference": 12,
              "system:index": "410"
            })]),
    agric = 
    /* color: #ffefc3 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.936170665771655, -30.991498018474367]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9330807609865, -30.992748833185782]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.93102082446306, -30.992380948208606]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91926202014177, -30.992454525317537]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.916687099487476, -30.99311671674405]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91333970263689, -30.992895986779356]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.911966411621265, -30.992969563491016]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.886217205078296, -30.99561828731063]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.81238575368542, -30.927779661133524]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.81234283834118, -30.92505542621464]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.814445690208856, -30.92218385134841]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.801742748314325, -30.93492120588016]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.80341644673962, -30.936761723739938]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.807280892120815, -30.868638229901915]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.82135712503097, -30.852797351611713]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.82170044778488, -30.855155229494823]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.82195793985031, -30.85736568736302]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73431686209402, -30.830623860358042]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73637679861746, -30.83246638314101]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.730711973178, -30.83394037590381]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7277937297698, -30.833645579162024]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72710708426199, -30.836077625204396]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72547630118093, -30.83312968268531]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85329974410621, -30.925828192043866]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85287059066383, -30.924539685934867]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85257018325416, -30.925570492210838]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8540722203025, -30.92240440902124]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85420096633521, -30.919864103709255]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85707629439918, -30.9189436865844]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85548842666236, -30.91802326060364]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85475886581031, -30.9161455641432]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.854673035121834, -30.914562379669082]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.847892410732186, -30.915151474626807]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.84862197158424, -30.91382600587134]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.47836547432364, -30.401762730392857]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.477979236225494, -30.402243916444814]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.47755008278311, -30.40165168712106]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.47750716743887, -30.40257704386101]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.47682052193106, -30.402243916444814]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.46931033668936, -30.40157765820305]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78411950658223, -30.186191040153634]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.687817474111526, -30.181442656607405]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71373834203145, -30.132016211002885]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7878960568752, -30.178474800663704]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7428788585015, -30.163043033650947]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74150556748587, -30.159184083148478]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74459547227103, -30.16437878901991]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.740990583355014, -30.16630818149034]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68894863109868, -30.195689644588303]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.678648948481495, -30.143598323565243]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.47948602051395, -30.062289045527244]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.48377755493778, -30.063403312116247]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.48497918457645, -30.06414614954062]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.48163178772587, -30.05812900610928]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.4767394384827, -30.056791813458204]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.05179912267604, -31.549021970175872]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.05016833959498, -31.544852652217642]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.051627461299084, -31.5425850502209]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.05403072057643, -31.5401710907863]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.05566150365748, -31.539366423769316]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.588322275798795, -32.244775842279815]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58497487894821, -32.24383212087698]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58274328104782, -32.24150907257298]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5866485773735, -32.24248911582131]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98559624870489, -31.18301538907953]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27845072575732, -30.068724083035534]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27312922307177, -30.068426962477993]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.269266842090325, -30.065158577472015]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.263258693896965, -30.06270721788889]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.26471781560107, -30.06456431405689]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.26609110661669, -30.066867064916092]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.25991129704638, -30.063375776523127]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24420428105517, -30.045991784687345]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24283099003954, -30.044357235349015]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24471926518603, -30.04703193840499]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.249525783740715, -30.050152334020765]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27306360948495, -30.019512393721115]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.26782793748788, -30.01787740762241]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.265939662341395, -30.019883977711274]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.266197154406825, -30.022336397123475]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34139347839053, -30.08902875175762]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34044934081729, -30.097940124131828]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.33959103393252, -30.100910403085138]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.33864689635928, -30.102766782103327]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34233761596377, -30.107073447136017]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34431172179873, -30.10662793876744]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34362507629092, -30.10432611353193]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.333754547116115, -30.088657427144668]),
            {
              "reference": 21,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.336501129147365, -30.090514036265517]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.33718777465518, -30.093633061110122]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.33718777465518, -30.096974764253837]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34619999694522, -30.116280170351686]),
            {
              "reference": 21,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34190846252139, -30.108706960635775]),
            {
              "reference": 21,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34345341491397, -30.1071476983355]),
            {
              "reference": 21,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.337016113278224, -30.084424228005986]),
            {
              "reference": 21,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.33787442016299, -30.086280916603734]),
            {
              "reference": 21,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.33607197570498, -30.085612512724055]),
            {
              "reference": 21,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.35113526153262, -30.13187024442578]),
            {
              "reference": 21,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.34959030914004, -30.123555844559537]),
            {
              "reference": 21,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.775917634311675, -31.82833156394613]),
            {
              "reference": 21,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77445851260757, -31.826581359323544]),
            {
              "reference": 21,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77772007876968, -31.82308085052866]),
            {
              "reference": 21,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77926503116226, -31.824174773785135]),
            {
              "reference": 21,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.492924958477815, -31.629481295829766]),
            {
              "reference": 21,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.496701508770784, -31.63474299040623]),
            {
              "reference": 21,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.48880508543094, -31.63386606197989]),
            {
              "reference": 21,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49498489500125, -31.63912750851245]),
            {
              "reference": 21,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49155166746219, -31.6154486552997]),
            {
              "reference": 21,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.481251984845, -31.627727331496796]),
            {
              "reference": 21,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.488461762677034, -31.617495213843117]),
            {
              "reference": 21,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41567733884891, -31.589424202495618]),
            {
              "reference": 21,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.46614578367313, -31.61194016453122]),
            {
              "reference": 21,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.462712556134065, -31.617202851092106]),
            {
              "reference": 21,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49635818601688, -31.638250621428355]),
            {
              "reference": 21,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.502194672833284, -31.642342690408693]),
            {
              "reference": 21,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71697496537161, -30.22011841761829]),
            {
              "reference": 21,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71697496537161, -30.22605152960252]),
            {
              "reference": 21,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.712168446816925, -30.224271633588472]),
            {
              "reference": 21,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.714915028848175, -30.227831393402454]),
            {
              "reference": 21,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65792345169974, -30.473143126646846]),
            {
              "reference": 21,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66204332474661, -30.476102067102623]),
            {
              "reference": 21,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64419054154349, -30.481427933313576]),
            {
              "reference": 21,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.49862169388724, -30.636932786771887]),
            {
              "reference": 21,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.544626942910675, -30.60916123919295]),
            {
              "reference": 21,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.55080675248099, -30.60679733534075]),
            {
              "reference": 21,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.492441884316925, -30.505686525044567]),
            {
              "reference": 21,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.492441884316925, -30.51337701053479]),
            {
              "reference": 21,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.48626207474661, -30.50923605547029]),
            {
              "reference": 21,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61535143021536, -30.679460975664668]),
            {
              "reference": 21,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61123155716849, -30.68241362717097]),
            {
              "reference": 21,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.67028307084036, -30.53703622693271]),
            {
              "reference": 21,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71086202285903, -30.787259544663215]),
            {
              "reference": 21,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59452600510812, -30.180873074737804]),
            {
              "reference": 21,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.695806217510466, -30.213513777062055]),
            {
              "reference": 21,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.69717950852609, -30.2434743440736]),
            {
              "reference": 21,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.67829675706125, -30.205206261391854]),
            {
              "reference": 21,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66868371995187, -30.11585620258141]),
            {
              "reference": 21,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.600705814678435, -30.179092361604962]),
            {
              "reference": 21,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59624261887765, -30.18651178731962]),
            {
              "reference": 21,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.578733158428435, -30.17820199296943]),
            {
              "reference": 21,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.627141666729216, -30.183544084089313]),
            {
              "reference": 21,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.618901920635466, -30.174640437969753]),
            {
              "reference": 21,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.69820947678781, -30.21915062039996]),
            {
              "reference": 21,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.704045963604216, -30.216183901008293]),
            {
              "reference": 21,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72910852463937, -30.150596575211125]),
            {
              "reference": 21,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.73460168870187, -30.13842399011294]),
            {
              "reference": 21,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.737004947979216, -30.14317444590065]),
            {
              "reference": 21,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71709222825265, -30.13990853211284]),
            {
              "reference": 21,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.45170373948312, -30.226567027430097]),
            {
              "reference": 21,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66628046067453, -30.118528972984606]),
            {
              "reference": 21,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.717778873760466, -30.147924672986864]),
            {
              "reference": 21,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.7249886515925, -30.15297153865276]),
            {
              "reference": 21,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.136652739023255, -33.477453607635546]),
            {
              "reference": 21,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.13485029456525, -33.47799054319987]),
            {
              "reference": 21,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14579370734601, -33.47657660572422]),
            {
              "reference": 21,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.140901358102845, -33.47765048439551]),
            {
              "reference": 21,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.134163649057434, -33.479046506768825]),
            {
              "reference": 21,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.82306661376953, -32.99148127581075]),
            {
              "reference": 21,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.82289495239257, -32.99216518406753]),
            {
              "reference": 21,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.819890878295894, -32.992885081770204]),
            {
              "reference": 21,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6959043317953, -32.90204268495648]),
            {
              "reference": 21,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.69830759107264, -32.90207871669358]),
            {
              "reference": 21,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6508014249924, -32.7666518528082]),
            {
              "reference": 21,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.63629603863986, -32.75957857275819]),
            {
              "reference": 21,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.636982684147675, -32.757304899117216]),
            {
              "reference": 21,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.63337779523166, -32.75661917662487]),
            {
              "reference": 21,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.64818447633227, -32.77034352334415]),
            {
              "reference": 21,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6524760107561, -32.76897227391466]),
            {
              "reference": 21,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6649214605852, -32.768034038449116]),
            {
              "reference": 21,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.662260709242425, -32.77027135284822]),
            {
              "reference": 21,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.65856998963793, -32.76897227391466]),
            {
              "reference": 21,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.66844051881274, -32.768611415290565]),
            {
              "reference": 21,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22985451324464, -31.72078316337342]),
            {
              "reference": 21,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22337429626466, -31.71563586210226]),
            {
              "reference": 21,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.229210783081065, -31.711108921258454]),
            {
              "reference": 21,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22552006347657, -31.719797532062625]),
            {
              "reference": 21,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.480433054174426, -31.613759537604306]),
            {
              "reference": 21,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.4801219179287, -31.614554426094045]),
            {
              "reference": 21,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.4796713068142, -31.614791977658587]),
            {
              "reference": 21,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.48088366528893, -31.614362557080096]),
            {
              "reference": 21,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.03833100256738, -31.108207454677945]),
            {
              "reference": 21,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.03841683325586, -31.107178622117992]),
            {
              "reference": 21,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.03292366919336, -31.10416554835145]),
            {
              "reference": 21,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.03461882529077, -31.104147175657186]),
            {
              "reference": 21,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.03620669302759, -31.106737690465458]),
            {
              "reference": 21,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.701696460310956, -30.621974472518403]),
            {
              "reference": 21,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70126730686857, -30.622122195042742]),
            {
              "reference": 21,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.701723282401105, -30.62162363061959]),
            {
              "reference": 21,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.27800487879578, -33.58940190461088]),
            {
              "reference": 21,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.273541682994995, -33.58768591183109]),
            {
              "reference": 21,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28761791590515, -33.58643464557902]),
            {
              "reference": 21,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.286802524364624, -33.58117912916639]),
            {
              "reference": 21,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.32325743921555, -33.49361623086246]),
            {
              "reference": 21,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.3175926137761, -33.49576355239422]),
            {
              "reference": 21,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.321712486822975, -33.49447516586586]),
            {
              "reference": 21,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29155176648146, -33.333936131064405]),
            {
              "reference": 21,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29241007336623, -33.33608740443566]),
            {
              "reference": 21,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.292710480775895, -33.33995956261573]),
            {
              "reference": 21,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.26473743205424, -33.5754792031643]),
            {
              "reference": 21,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.261390035203654, -33.57304781108425]),
            {
              "reference": 21,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28087360148783, -33.56754116997296]),
            {
              "reference": 21,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.27014476542826, -33.56811330487983]),
            {
              "reference": 21,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.268342320970255, -33.573262348434326]),
            {
              "reference": 21,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.453509775277716, -31.611142834001196]),
            {
              "reference": 21,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.45490452396546, -31.614834086658014]),
            {
              "reference": 21,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.45808025943909, -31.612696101719116]),
            {
              "reference": 21,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.456535307046515, -31.609351975525314]),
            {
              "reference": 21,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.446502440738975, -30.848614642448823]),
            {
              "reference": 21,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.452768080997764, -30.850456819827865]),
            {
              "reference": 21,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.45444177942306, -30.856498913298694]),
            {
              "reference": 21,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.4504506524089, -30.853809491869615]),
            {
              "reference": 21,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.45663046197921, -30.854841059689978]),
            {
              "reference": 21,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.44920610742599, -30.85093578015155]),
            {
              "reference": 21,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.57762791390265, -30.746290125223446]),
            {
              "reference": 21,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.57565380806769, -30.746788046362454]),
            {
              "reference": 21,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.574323432396305, -30.747009343820228]),
            {
              "reference": 21,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.57696272606696, -30.74671428043021]),
            {
              "reference": 21,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.63395340823577, -30.76603424320857]),
            {
              "reference": 21,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.63238699817107, -30.76358198589995]),
            {
              "reference": 21,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.631786183351736, -30.76767519252835]),
            {
              "reference": 21,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.72708809887036, -30.965238210398773]),
            {
              "reference": 21,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.72760308300122, -30.9661213831086]),
            {
              "reference": 21,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7291480353938, -30.962919843170997]),
            {
              "reference": 21,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.500777735054676, -31.61065548975988]),
            {
              "reference": 21,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49985505515355, -31.613286906548854]),
            {
              "reference": 21,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49441011291181, -31.610043276320166]),
            {
              "reference": 21,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.4936161790434, -31.615598438833395]),
            {
              "reference": 21,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.502993181759464, -31.617425722459018]),
            {
              "reference": 21,
              "system:index": "227"
            })]),
    geom_limite = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-50.076069858944706, -29.74771250288023],
          [-50.177689817313556, -29.677343322889183],
          [-50.22712662368082, -29.671377497533527],
          [-50.22987322490845, -29.721478713106173],
          [-50.25596496155418, -29.759634248280243],
          [-50.29304278361418, -29.85853249682898],
          [-50.3520923280188, -29.870441257274233],
          [-50.41663476429225, -29.839475183474832],
          [-50.504522483430556, -29.871631840163023],
          [-50.50726905195743, -29.9144914240591],
          [-50.66038515551571, -30.032294764156614],
          [-50.726987565761725, -30.07151986553254],
          [-50.7695581425367, -30.075084971808817],
          [-50.85607263077293, -30.148735968977217],
          [-51.033907966222344, -30.34684498359118],
          [-51.15749995066238, -30.398382528572675],
          [-51.23646145454027, -30.39364451573394],
          [-51.36760629543155, -30.503150897736923],
          [-51.42802905010157, -30.57707200316948],
          [-51.459613666832894, -30.6154887287128],
          [-51.52827581875177, -30.597759793052276],
          [-51.555054050303866, -30.570569153761593],
          [-51.601057699146374, -30.567021974130896],
          [-51.61959607159783, -30.629669731016502],
          [-51.681392138458065, -30.652413966700184],
          [-51.68036213942526, -30.608692951986157],
          [-51.72258972688531, -30.547510216279687],
          [-51.8022378403002, -30.55046678353819],
          [-51.81597027563408, -30.583574272839243],
          [-51.785758928831655, -30.630851078135677],
          [-51.760184902641974, -30.637346544241243],
          [-51.74696065775601, -30.679874370666408],
          [-51.783694970253094, -30.711764254991657],
          [-51.82180715206678, -30.69168634743204],
          [-51.88531905623028, -30.708216968662487],
          [-51.901111348180024, -30.759563113012593],
          [-51.92514309709263, -30.785520857209118],
          [-51.940248764144876, -30.82739244213375],
          [-51.91553039215831, -30.849205608685185],
          [-51.97183334158233, -30.872192502733007],
          [-52.024703181538335, -30.891638649225825],
          [-52.06178037238966, -30.883094473351235],
          [-52.08787235031566, -30.873371189055273],
          [-52.120830169371224, -30.889871002399158],
          [-52.16752042268083, -30.8845678171144],
          [-52.16305790756948, -30.86953930614929],
          [-52.177819756875536, -30.852742461806137],
          [-52.20528461326978, -30.84979514414916],
          [-52.249228369642616, -30.87160323512326],
          [-52.24579524707026, -30.90106572124792],
          [-52.21283741146682, -30.92521818373661],
          [-52.22862969605469, -30.935819788828073],
          [-52.354967994913466, -30.96408502747521],
          [-52.43118291542428, -31.014705932236325],
          [-52.450408292629, -31.0352997640373],
          [-52.423630013520864, -31.10175795998327],
          [-52.409210963340385, -31.10998847778954],
          [-52.337802378542534, -31.091174761049956],
          [-52.230689478527246, -31.093526628265703],
          [-52.269140220937544, -31.166407074481185],
          [-52.18674566529267, -31.22514077261618],
          [-52.08237926053936, -31.25801569908498],
          [-52.255407683766926, -31.375332813988525],
          [-52.4311824744845, -31.56507587844466],
          [-52.57399945273164, -31.68902032522373],
          [-52.546534541377504, -31.780119074057104],
          [-52.66737974858964, -31.77778442013355],
          [-52.790971466427926, -31.754433824236465],
          [-52.95301372861237, -31.86879610637575],
          [-52.859633258623205, -31.936412950664927],
          [-53.172731631899424, -32.20173553159407],
          [-53.332027076584716, -32.396742776491166],
          [-53.49132301978385, -32.3410695678564],
          [-53.64512580273293, -32.37355019148058],
          [-53.694562215687675, -32.45701758982158],
          [-53.20568835288731, -32.739302935885185],
          [-53.54075779778598, -33.103561661498354],
          [-53.57920767240407, -33.420481277616425],
          [-53.581989864151225, -33.71684387374902],
          [-53.502305632611964, -33.720258662940616],
          [-53.43360419801349, -33.767732384759015],
          [-53.36486514218515, -33.76721355953684],
          [-53.1837147853746, -33.63798034005475],
          [-52.661885135976505, -33.2047321959197],
          [-52.491603814946686, -32.979235832175725],
          [-52.326815471615674, -32.55429682724444],
          [-52.23343531936628, -32.3132186874899],
          [-52.039354479885766, -32.14355603183673],
          [-51.80773091853532, -31.941073846430832],
          [-51.30237812274273, -31.639929953900996],
          [-50.76681327805835, -31.145254538705927],
          [-50.51825577096785, -30.788471081710323],
          [-50.29441572225099, -30.506110495394086],
          [-50.23666881083668, -30.340218118710634],
          [-50.19279581685783, -30.18613533694897],
          [-50.02869170013813, -29.831768133537253]]]),
    remover_SS = 
    /* color: #ff0000 */
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
var regiao = 7;
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
var classes_list = [21 //3,11, 12, 21, 22, 33, 29
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
 
 if (ano <= 2019){
  // Define o percentual de cada classe
  // var percent_Flo = -67.15    + 20 + ano *  0.03533
  var percent_Flo = 19
  // var percent_Umi =   8.23	  + desvio + ano * -0.00086
  var percent_Umi = 18
  // var percent_Cam =-168.52    + 5 + ano *  0.09066
  var percent_Cam = 17
  // var percent_Agr = 230.34    + desvio + ano * -0.09970
  var percent_Agr = 57
  var percent_Anv = 20
  // var percent_Anv =  58.27	  + desvio + ano * -0.02647
  // var percent_Afr =   0.00000 + desvio + ano *  0.00000
  // var percent_Agu =  38.84	  + desvio + ano *  0.00103
  var percent_Agu = 40
}  
  // // Exemplos de blocos - colar o bloco dentro e ativar *******************
  
  // if (ano > 2018 && ano <= 2020){ 
  //  .... bloco de amostras aqui
  // }

 if (ano > 2019){
  var percent_Flo = 19
  // var percent_Umi =   8.23	  + desvio + ano * -0.00086
  var percent_Umi = 18
  // var percent_Cam =-168.52    + 5 + ano *  0.09066
  var percent_Cam = 14
  // var percent_Agr = 230.34    + desvio + ano * -0.09970
  var percent_Agr = 59
  var percent_Anv = 24
  // var percent_Anv =  58.27	  + desvio + ano * -0.02647
  // var percent_Afr =   0.00000 + desvio + ano *  0.00000
  // var percent_Agu =  38.84	  + desvio + ano *  0.00103
  var percent_Agu = 40
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
var col_Sentinel = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/07_Emb_RF17a24_v03')
  .mask(mask_regiao)
  .select('classification_'+ano_compara)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)
// print(col_beta, "S2 Col2")

var class_atual = classified16a23.select('classification_'+ano_compara)

// Coleção para comparar                 
Map.addLayer(col_Sentinel, vis, 'Sentinel Col3_v03sf - ' + ano_compara, false)
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
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/areas_col10L_col2S_col3S_v02_v01_r7'

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
         .filter(ee.Filter.eq('col', 'Col3_sf_v02'))
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