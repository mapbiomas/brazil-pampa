/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = /* color: #ea9999 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.63577676017131, -30.80063892093617]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.635444166253464, -30.80064813651438]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6335237045988, -30.80144067293502]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63331985671367, -30.801477534935056]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63186073500957, -30.802030463239152]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6315603275999, -30.802048894127836]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63135647971477, -30.802048894127836]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.624897720406906, -30.803928826206192]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62431836325969, -30.80413156178256]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62973642546977, -30.80256495757594]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62947893340434, -30.802555742181525]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61721070250393, -30.80632229568938]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61752183874966, -30.806313080655272]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.60980780562283, -30.80876424858101]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.598451602124676, -30.81444156831815]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.594681991665475, -30.81657001707927]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57557393464338, -30.831377272523742]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58533717545759, -30.837457415767577]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.585465921490304, -30.837365295258756]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57101196957664, -30.81714575243878]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80713080578617, -30.712541603596375]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.806808940704386, -30.712569275636948]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.806819669540445, -30.71228333083485]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.803815595443766, -30.714450955769873]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.813120264160005, -30.70932181634246]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84749606573555, -30.692897596046052]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84536639177772, -30.69369563249008]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84236768209907, -30.69287453131085]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.84918897360525, -30.68662998921569]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.765867621016646, -30.560341118455465]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76559940011516, -30.56063675122628]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76835671098247, -30.56450299063874]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76745548875346, -30.564632324539016]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.770877987456466, -30.56466927705029]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.762885004592086, -30.562756966110165]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76259532601848, -30.563754698259753]),
            {
              "reference": 22,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77095308930888, -30.56005934263244]),
            {
              "reference": 22,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76953688294902, -30.559819139645438]),
            {
              "reference": 22,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7669405046226, -30.559745230914434]),
            {
              "reference": 22,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.766645461630965, -30.56004548478397]),
            {
              "reference": 22,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7625631395103, -30.564318227624952]),
            {
              "reference": 22,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.753687945862, -30.53955721180666]),
            {
              "reference": 22,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76555403854388, -30.54391863758251]),
            {
              "reference": 22,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76617631103534, -30.544750243141596]),
            {
              "reference": 22,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76585444595355, -30.54541552246067]),
            {
              "reference": 22,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76523485567111, -30.543939427808255]),
            {
              "reference": 22,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.755879310627165, -30.537452661404917]),
            {
              "reference": 22,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.733774797442834, -30.544441999843254]),
            {
              "reference": 22,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73617805672018, -30.554880386873503]),
            {
              "reference": 22,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.734603600028436, -30.552459723485313]),
            {
              "reference": 22,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.729751483920495, -30.540623473466685]),
            {
              "reference": 22,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75477381182043, -30.555721137512283]),
            {
              "reference": 22,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.758314327720086, -30.546017415848386]),
            {
              "reference": 22,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73674400282232, -30.548981069054218]),
            {
              "reference": 22,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73865641784994, -30.555413941007902]),
            {
              "reference": 22,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7415666146311, -30.554125090941064]),
            {
              "reference": 22,
              "system:index": "55"
            })]),
    arocho = /* color: #ff8c00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.5372494305705, -30.17237968749095]),
            {
              "reference": 29,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.53920207873334, -30.172778523001632]),
            {
              "reference": 29,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55118433221315, -30.174710327549263]),
            {
              "reference": 29,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.528761064848645, -30.171626327214227]),
            {
              "reference": 29,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.52500074085845, -30.173342527670904]),
            {
              "reference": 29,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.52529041943206, -30.173296151797082]),
            {
              "reference": 29,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.733481499100215, -30.015304544583653]),
            {
              "reference": 29,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.729726406479365, -30.015360284636007]),
            {
              "reference": 29,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.7321457590108, -30.016465789201984]),
            {
              "reference": 29,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.732971879387385, -30.017464448698778]),
            {
              "reference": 29,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.71778258934069, -30.56723938262071]),
            {
              "reference": 29,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.72892448558856, -30.563604208214272]),
            {
              "reference": 29,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.78176400318194, -30.56675439263891]),
            {
              "reference": 29,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.73953792705584, -30.01719504387157]),
            {
              "reference": 29,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15260767308611, -30.18860100992064]),
            {
              "reference": 29,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.746244901098194, -30.018996408330874]),
            {
              "reference": 29,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.745713823713245, -30.018174269526266]),
            {
              "reference": 29,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.20425092545885, -30.205925143434975]),
            {
              "reference": 29,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.75089459051828, -30.01467168133116]),
            {
              "reference": 29,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.204289897582335, -30.206332822331817]),
            {
              "reference": 29,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.76416616072397, -30.012637134999494]),
            {
              "reference": 29,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.76677326788644, -30.01265571552013]),
            {
              "reference": 29,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.14431838621835, -30.199640481114333]),
            {
              "reference": 29,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.161184116503996, -30.186082865450466]),
            {
              "reference": 29,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15841718136952, -30.186302962938793]),
            {
              "reference": 29,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.14470036446736, -30.201497161975176]),
            {
              "reference": 29,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.77150284596694, -30.02552497251239]),
            {
              "reference": 29,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.779214256489404, -30.56857617852857]),
            {
              "reference": 29,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.76990424939407, -30.024877058889967]),
            {
              "reference": 29,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.770977133000024, -30.02653050749079]),
            {
              "reference": 29,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.7708108360411, -30.02605212491616]),
            {
              "reference": 29,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.76890914984954, -30.0265955301868]),
            {
              "reference": 29,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.771926634991296, -30.026112503426663]),
            {
              "reference": 29,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.770770143946265, -30.032957138416904]),
            {
              "reference": 29,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.759169183397866, -30.04987144715833]),
            {
              "reference": 29,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.75714679780064, -30.05106014680991]),
            {
              "reference": 29,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.755912981653786, -30.04957891341588]),
            {
              "reference": 29,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.741735926823836, -30.04353676776861]),
            {
              "reference": 29,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.73904835339091, -30.044748761577367]),
            {
              "reference": 29,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.72021086565717, -30.00222950288561]),
            {
              "reference": 29,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.71928818575605, -30.002963507801624]),
            {
              "reference": 29,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.7170995031999, -30.00436646411611]),
            {
              "reference": 29,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.15901763788923, -30.18792637871213]),
            {
              "reference": 29,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.193017319362006, -30.190328263545307]),
            {
              "reference": 29,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.758022395630064, -30.53844834351402]),
            {
              "reference": 29,
              "system:index": "44"
            })]),
    agua = /* color: #0000ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.697119200874326, -30.556452290016484]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.695799554039, -30.55653082070602]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69548305337524, -30.556512342902426]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6946837550888, -30.556484626190453]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6933319217453, -30.556784890148545]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69309588735199, -30.55677103183247]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.706528578981434, -30.570219207896915]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.817731934424565, -29.95660897838903]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.91681733189411, -30.008353378743575]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.673998278139045, -29.922649235384853]),
            {
              "reference": 33,
              "system:index": "9"
            })]),
    floresta = /* color: #006400 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.68094862146516, -30.380250443271276]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6897808723526, -30.36350879929541]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69024757672119, -30.36383743018324]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.690134923942566, -30.36426788868972]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.689625304229736, -30.364448402983417]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61586714682548, -30.310054373371784]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61563111243217, -30.309220764690526]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.615459451055216, -30.308451985955827]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.652362119049066, -30.306683010798274]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.652608882278436, -30.3069238380473]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65231920370483, -30.306979413482274]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65372468122863, -30.307766728759432]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.07901260562065, -30.349536012220344]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.08012840457084, -30.35168397130855]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.07474252886894, -30.3490360494612]),
            {
              "reference": 3,
              "system:index": "14"
            })]),
    aumi = /* color: #45c2a5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.55254036740068, -29.636425089941252]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.5521112139583, -29.619787385048394]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.55434281185869, -29.636126679975128]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02880919564807, -29.817927119584645]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.029249077926515, -29.81820171832119]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02881159939273, -29.818557867481314]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.04798494024963, -29.794396540386145]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.04764161749572, -29.794545510430474]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21884115769069, -29.586698220140747]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21977707192099, -29.58662199405119]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.219305003134366, -29.58699518958759]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21823211952841, -29.585614359209064]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21001360725402, -29.63253351821742]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.21024964164733, -29.632011280018506]),
            {
              "reference": 11,
              "system:index": "13"
            })]),
    campo = /* color: #b8af4f */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.76770225198283, -30.56164836279956]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76556721360698, -30.561398925309092]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76585689218059, -30.563311263015493]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76421538026347, -30.562770823571384]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76208034188762, -30.564373656566033]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.765883714270736, -30.55993924121326]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.772594601226, -30.56005934263244]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.754245845337095, -30.540111641205144]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75587662841815, -30.54035882329177]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.732184626983646, -30.56607471628237]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.732935645507816, -30.56629642784252]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73636887304688, -30.56576062403811]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73561785452271, -30.56587148024044]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.90697671382934, -30.431579962789062]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.90708936660796, -30.431223807342093]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.90661729782134, -30.43164471818515]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91138739369236, -30.432561619536305]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91110307953678, -30.432034329303452]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.91182191155277, -30.432806762270314]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.611253747319864, -30.307998125799838]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61485863623588, -30.307998125799838]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61359263358085, -30.307664676182803]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.799138450012215, -30.13413346955818]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.798623465881356, -30.134894333198798]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.79448213516236, -30.133688083242173]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.792400740966805, -30.134411834985123]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.78624238906861, -30.138049071081355]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.78478326736451, -30.13738101735762]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.801627539978035, -30.132667398688074]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.780641936645516, -30.1350984663484]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77433338104249, -30.132927210303194]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.772681140289315, -30.13272307266317]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76935520111085, -30.13164670357982]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76877584396363, -30.13125698084523]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77012767730714, -30.133780872223735]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77051391540528, -30.134838660448366]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76278915344239, -30.132630282687245]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.759227179870614, -30.13159102899764]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75459232269288, -30.135933552109506]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.778882407531746, -30.140127431524046]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77381839691163, -30.139719185605916]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77128639160157, -30.140943918293534]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.77229490219117, -30.124260268113478]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.768153571472176, -30.123128127407725]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7696341508484, -30.121847493587314]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7641409867859, -30.123183806762313]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76280542994846, -30.135899666882956]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75924345637668, -30.13831209799761]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.76842734004367, -30.138646122273407]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7916784186555, -30.578869403413083]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.79118489219676, -30.5788740217998]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.791412879963026, -30.5790472111425]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.79076388517901, -30.579449012432143]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.789701730409114, -30.580363443243616]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80907413329391, -30.572867513059204]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.80954620208053, -30.572802851620363]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75797651155425, -30.535222905952132]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.753432542273096, -30.533449938212495]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75254204888015, -30.533634759984754]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.769551717245655, -30.537508391229984]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86468414128551, -29.793147024113722]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.864233530171006, -29.795027778133516]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86146549046764, -29.791545562134843]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.86837486089, -29.79508364157373]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.856551683552354, -29.79644297567289]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.852753675587266, -29.79350083202475]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19572758165602, -29.62505598172318]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.19726180521254, -29.623554428156623]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.392812103205394, -29.78222347870548]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39611658471174, -29.782931170505687]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39399227517195, -29.786450931720456]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39311251061506, -29.784178930704204]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.39946398156233, -29.78550116707641]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.329814169311526, -30.237322923426316]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34972688903809, -30.230797228641986]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.342560026550295, -30.230203962182667]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34273168792725, -30.232354536066158]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34423372497559, -30.232910711311142]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.345049116516115, -30.233133180528167]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.073326322509075, -30.35162842123642]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.069335195494915, -30.3514062206325]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.06768295474174, -30.351906171281737]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.06446430392387, -30.35166545462135]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.0716740817559, -30.3554613022262]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.088169959519256, -30.34745665903117]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.084972766373504, -30.350067589640148]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.08297317648697, -30.326089925912584]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.0787460150795, -30.32660852729689]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.07535570288468, -30.32318200300268]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.075935060031895, -30.322830082909466]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.06928318167496, -30.321088985953985]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.07653587485123, -30.327719806731242]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.049871384577195, -30.31708017143714]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.04499109881527, -30.312058472615572]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.04497500556118, -30.312401169342426]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.027585236113325, -30.319400934098166]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.0282826104572, -30.318891556000004]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02863129762913, -30.318632235223653]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.028046576063886, -30.318479420873338]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02801438955571, -30.318678542555492]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02620121626164, -30.3193777806057]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02700587896611, -30.319109199693248]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02619048742558, -30.319951985603982]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.02695223478581, -30.318525728277386]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.54967537479797, -30.368645444339283]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.54901018696228, -30.365479588893354]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.54474011021057, -30.366090551434308]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.548859983257444, -30.371940787329535]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.548087507061155, -30.37020056385934]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.544815212062986, -30.370876292608738]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.54091524839537, -30.371181757496952]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70911250570762, -30.308749706202335]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70651612738121, -30.30778641160002]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7067307041024, -30.303821984167428]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.699842791352154, -30.3045815364187]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69739661673057, -30.307990186247697]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70143065908897, -30.307490011356258]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7001217410897, -30.307527061435735]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.700057368073345, -30.308305109869956]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69926343420494, -30.30667490606446]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7087477252816, -30.307286235668748]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69556276181119, -30.31967440827567]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70474664547818, -30.321508142382203]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68800966122525, -30.32302696686569]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.853401269661234, -29.793209768045024]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.853100862251566, -29.79425256606531]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.85597619031553, -29.79622640399424]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.848637666450784, -29.790528237524246]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.844861116157816, -29.789969576288836]),
            {
              "reference": 12,
              "system:index": "128"
            })]),
    agric = /* color: #ffefc3 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-56.35454006582908, -29.913487372805584]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.353338436190406, -29.912892200858614]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.289652065340796, -29.963469113637387]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.28879375845603, -29.965253711302875]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.451700405184546, -29.999006312297357]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.57619764761585, -29.958858754683206]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.582549118563115, -29.957371496500457]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.70219709829944, -29.937737603380192]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.695158981844365, -29.937142576415567]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.60225333626685, -29.77357590350156]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.60002173836646, -29.779684763963488]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.59676017220435, -29.784154425748074]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.63195075447974, -29.741535535720132]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.62525596077857, -29.73631869251258]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.62594260628638, -29.740194087670616]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.69494680503958, -29.94659156229497]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.692543545762234, -29.9477814996244]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.31708881663926, -30.20686365196897]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.31760380077012, -30.211017427514758]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.340042103512744, -30.212025257496393]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.33871172784136, -30.213582862169122]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.335750569088916, -30.21495501728479]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-56.34029959557817, -30.21488084722725]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75680510990586, -30.068060883275926]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75504558079209, -30.06850656542631]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75380103580918, -30.067986602722392]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.75757758610215, -30.06962076202132]),
            {
              "reference": 21,
              "system:index": "26"
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
          [-56.81587236281019, -29.658475576497572]]]);
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

var regiao = 3
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
    var percent_Flo = 20
    var percent_Umi = 12
    var percent_Cam = 60
    var percent_Agr = 26
    var percent_Anv = 8
    var percent_Afr = 8
    var percent_Agu = 25
  }
    if (ano > 2023){ // ajustar para período 3
   var percent_Flo = 20
    var percent_Umi = 12
    var percent_Cam = 48
    var percent_Agr = 32
    var percent_Anv = 8
    var percent_Afr = 8
    var percent_Agu = 25
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
