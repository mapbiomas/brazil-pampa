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
            })]),
    geom_limite = /* color: #98ff00 */ee.Geometry.Polygon(
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
// Coleção 10
// Script para fazer ajuste fino da classificação das regiões
// Para rodar veja instruções no final do arquivo  
  
//baseado na versao R0X feita pelo Juliano, customizada para calcular a area pelo limite sem buffer
//customizada para incluir mosaico 2017 com duas versões de bandas RGB falsa cor

//var classRegion01 = function (version_out, sufixName, versao_amostra, RFtrees) {
var version_out = '09'//mudar a cada nova versao que for exportada 
var version = '2' //versão dos mosaicos
var version_samples = '02'
var ano_base = 2000
var RFtrees = 100//60, 100 
var classe_diferenca = 12

var desvio = 0
var nSamplesMin = 100;
var nSamplesMax = 2000;

// Bloco dos ano para colocar no nome de saída
var bloco = '_85-22'
var regiao = 3
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
var ano_calcula_area = '2000'
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
    var anos = [1985,1992,2000,2017,2022]
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
 
  //bloco 1A
  if (ano <= 1987){ // ajustar para período 1
    var percent_Flo = 32
    var percent_Umi = 12
    var percent_Cam = 65
    var percent_Agr = 22
    var percent_Anv = 10
    var percent_Afr = 8
    var percent_Agu = 40
  }
  //bloco 1B
  if (ano > 1987 && ano <= 1998){ // ajustar para período 1
    var percent_Flo = 32
    var percent_Umi = 12
    var percent_Cam = 42
    var percent_Agr = 42
    var percent_Anv = 10
    var percent_Afr = 8
    var percent_Agu = 40
  }
  //bloco 2 A
  if (ano > 1998 && ano <= 2002){// ajustar para período 2
    var percent_Flo = 32
    var percent_Umi = 11
    var percent_Cam = 55
    var percent_Agr = 30
    var percent_Anv = 15
    var percent_Afr = 9
    var percent_Agu = 32
  }
  //blcoco 2B
  if (ano > 2002 && ano <= 2012){ // ajustar para período 3
    var percent_Flo = 32
    var percent_Umi = 12
    var percent_Cam = 39
    var percent_Agr = 43
    var percent_Anv = 10
    var percent_Afr = 8
    var percent_Agu = 42
  }
  //Bloco 3A
  if (ano > 2012 && ano <= 2019){ // ajustar para período 3
    var percent_Flo = 27
    var percent_Umi = 13
    var percent_Cam = 40
    var percent_Agr = 42
    var percent_Anv = 12
    var percent_Afr = 8
    var percent_Agu = 28
  }
  //Bloco 3Ba
  if (ano > 2019 && ano <= 2022){ // ajustar para período 3
    var percent_Flo = 27
    var percent_Umi = 19
    var percent_Cam = 56
    var percent_Agr = 31
    var percent_Anv = 7
    var percent_Afr = 8
    var percent_Agu = 28
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
    //var SS_amostras = ee.FeatureCollection(dirsamples + ano+ '_v' + version_samples)
    //print(SS_amostras.size())
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
      // SS_Afr_samples.size().subtract(n_samples_Afr),
      SS_Agu_samples.size().subtract(n_samples_Agu)])
  } 

  if(usar_complementares == 1){
  
    var pontos_complementares = floresta
                .merge(aumi)
                .merge(campo)
                .merge(agric)
                .merge(anv)
                // .merge(arocho)
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
    // print('Área da classe 29 ano: ' + ano_calcula_area +  ' ' , areas.filterMetadata('classe','equals',29).first().get('area'))
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