/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = /* color: #ea9999 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.56947746261008, -29.884368216024676]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56991734488852, -29.884368216024676]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.570357227166966, -29.88436356489863]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.570861482461765, -29.88436356489863]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57142474635489, -29.884344960392262]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57166614516623, -29.88443798288938]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57221331580527, -29.884619376509107]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.572588825067356, -29.884647283190535]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57299115641959, -29.884647283190535]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57332911475547, -29.884642632077504]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57383337005027, -29.884628678737112]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57427325232871, -29.884619376509107]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.56832411273368, -29.884107752631824]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.569150233110264, -29.884382169401533]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58861139229621, -29.885969540611196]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58809104374732, -29.885946285352293]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58831634930457, -29.885997446914708]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58911564759101, -29.886285811593652]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.589426783836736, -29.886285811593652]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59029045513953, -29.886271858483234]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59072497299994, -29.88625325433297]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59108975342597, -29.88624860329486]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59132042340125, -29.88624860329486]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59188905171241, -29.88625325433297]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58577897957648, -29.885732336715918]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.586411980903996, -29.885732336715918]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.586937693870915, -29.885964889559844]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.587227372444524, -29.885969540611196]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58750632218207, -29.886006749014143]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68612665811302, -29.889787272460396]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68652362504722, -29.88977797071372]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.686925956399456, -29.889759367217746]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.687435576112286, -29.889750065468473]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68790228048088, -29.889768668966177]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.688465544374004, -29.88976401809207]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68510741868736, -29.889717509339153]),
            {
              "reference": 22,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64358212615674, -29.88651870245242]),
            {
              "reference": 22,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.644354602353026, -29.8865326555283]),
            {
              "reference": 22,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64542748595898, -29.8865326555283]),
            {
              "reference": 22,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64167239333813, -29.88651870245242]),
            {
              "reference": 22,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.19511628301981, -29.963079163356092]),
            {
              "reference": 22,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.18627572210672, -29.961666328600984]),
            {
              "reference": 22,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.17752099188211, -29.959509857886435]),
            {
              "reference": 22,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.19228387030008, -29.963822752528745]),
            {
              "reference": 22,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15829491766336, -29.948578062609748]),
            {
              "reference": 22,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15983987005594, -29.959956028079702]),
            {
              "reference": 22,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.165933848937776, -29.959881666519895]),
            {
              "reference": 22,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16662049444559, -29.942553906724577]),
            {
              "reference": 22,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.209530669657006, -30.020647950631563]),
            {
              "reference": 22,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16755946299197, -30.034321167543585]),
            {
              "reference": 22,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.200604278055444, -30.03766487376436]),
            {
              "reference": 22,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.2121055903113, -30.039002324661226]),
            {
              "reference": 22,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25931246897341, -30.015386231907424]),
            {
              "reference": 22,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.31184085032107, -30.04362382133269]),
            {
              "reference": 22,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.6292427363074, -29.956620196580847]),
            {
              "reference": 22,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.63147433420779, -29.964502470960266]),
            {
              "reference": 22,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.62340624949099, -29.961528101231718]),
            {
              "reference": 22,
              "system:index": "56"
            })]),
    arocho = /* color: #ff8c00 */ee.FeatureCollection([]),
    agua = /* color: #0000ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.128378168619115, -29.955309872308792]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13054539350315, -29.958228656007826]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.131618277109105, -29.958767785021383]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13350655225559, -29.960645418415453]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.1202886262302, -29.95793120426595]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.12458016065403, -29.954752133187615]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13724018720432, -29.95858187879528]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.13747622159763, -29.958228656007826]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.14050175336643, -29.957373479850972]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.14129568723484, -29.958488925551855]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15994240430637, -29.96709602723754]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16148735669895, -29.967114616283276]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16290356305881, -29.96601785663469]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16672302869602, -29.967374862558547]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.165306822336156, -29.966036445882104]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.16586472181125, -29.967058849135622]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.1756708779697, -29.96765369709713]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.15099455503269, -29.96570183889635]),
            {
              "reference": 33,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.425853542089726, -30.035777614400214]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.42469482779529, -30.030706185848572]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.4275057828429, -30.039084120351433]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.4275057828429, -30.039845715638606]),
            {
              "reference": 33,
              "system:index": "21"
            })]),
    floresta = /* color: #006400 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.57617896493798, -29.97415680443018]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.583817896212395, -29.9653830101351]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.588796076144035, -29.964342000079117]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.585534509981926, -29.98069946868596]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.58364623483544, -29.973933751461768]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.57969802316552, -29.977502538856953]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.57961219247704, -29.980327737946304]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.57841056283837, -29.958764974816273]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.583560404146965, -29.960772739960376]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.58450454172021, -29.992371106109008]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.58484786447411, -29.983524576837493]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.583817896212395, -29.995121546999364]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0696086970071, -29.857437434613004]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.069662341187396, -29.85773053423214]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0698071804742, -29.858023632990577]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.070161232064166, -29.85885174864078]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.070402630875506, -29.858553999984615]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0706172075967, -29.858842444008715]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06819781806702, -29.85911646162365]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06693181541199, -29.85906993857807]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.53630529436822, -29.932088775746355]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.53670226130242, -29.932125966924843]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.53550063166375, -29.93103811921125]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.540435896251154, -29.931847032747342]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.541122541758966, -29.932776810298396]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54161606821771, -29.933901829519563]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54403005633111, -29.933130123489953]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54376183542962, -29.935064026101482]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54252801928277, -29.93449687586536]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.53800045046563, -29.933130123489953]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54853616747613, -29.935863609467365]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54375110659356, -29.932553664478434]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.542635307643366, -29.932311922608786]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54303227457757, -29.932423495852376]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54230271372552, -29.931865628383513]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54528533015008, -29.93288838302073]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54498492274041, -29.93288838302073]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.547534610393434, -29.93314140452429]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.547534610393434, -29.93353190707434]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54691233790198, -29.932927557240347]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54282465136328, -29.932118652487638]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54342546618262, -29.93233250150992]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.14113736511231, -29.942511532444293]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.134185079345706, -29.94507742232014]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36335297882081, -29.84417973577139]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36333152114869, -29.8454825671537]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.362408841247564, -29.846729546985184]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.362129891510016, -29.845128943173414]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.359640801544195, -29.844663646554675]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36030598937989, -29.843137458427826]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36045619308472, -29.848553459587944]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35672255813599, -29.845222002237016]),
            {
              "reference": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.362365925903326, -29.848869849199506]),
            {
              "reference": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.363491429222115, -29.988527763952792]),
            {
              "reference": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.364714516532906, -29.98859281156099]),
            {
              "reference": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36432827843476, -29.98968932197082]),
            {
              "reference": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.363534344566354, -29.987468411192037]),
            {
              "reference": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36990794373799, -29.984463746931546]),
            {
              "reference": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36968800259877, -29.984979501478218]),
            {
              "reference": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.370557038319596, -29.98502131929704]),
            {
              "reference": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.370079605114945, -29.984770412120003]),
            {
              "reference": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.37143680287648, -29.985597474118975]),
            {
              "reference": 3,
              "system:index": "61"
            })]),
    aumi = /* color: #45c2a5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.69918130372148, -29.968952297406105]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70746396515947, -29.97415699714482]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.703601584178024, -29.975346604515725]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.698065504771286, -29.972484087677746]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.689868674021774, -29.97092268009283]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68549130890947, -29.964862699202868]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.690083250742966, -29.961330638042703]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71037772345855, -29.9161228706198]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70728781867339, -29.920214473167867]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.702481300118706, -29.925942434245794]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.719218284371635, -29.900647653575568]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72376731086089, -29.910691938474727]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72685721564605, -29.900424435742053]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.71956160712554, -29.901614925075492]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.720248252633354, -29.893653257158295]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72402480292632, -29.894769417164696]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72428229499175, -29.888816419356107]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.72565558600738, -29.888369930187974]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63015162626655, -29.942513482512442]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6603640286103, -29.949430077713817]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.660365530626315, -29.94790638484271]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.65830559410288, -29.947915681160357]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.658308310388975, -29.94889052008631]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.869918600022146, -30.096823133219814]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87747170060808, -30.093407163483764]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.886655584275076, -30.098531073823974]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8851106318825, -30.101649845735675]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87687088578875, -30.102986432143513]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87455345719988, -30.098159784898602]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.873437658249685, -30.090956503789645]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.882449880539724, -30.115608856617122]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87772919267351, -30.10944634494924]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88227821916277, -30.103580464744805]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25045058859965, -29.957730954638144]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.24744651450297, -29.958325858430232]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.242554165259804, -29.95914384533116]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.23946426047465, -29.978104382039124]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25238177909037, -29.978699163869035]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.251008488074746, -29.974386914910237]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.25345466269633, -29.97542781972973]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.259763218299355, -29.972416600926465]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.26032111777445, -29.978922206137007]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.23993632926127, -29.97122695846989]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.23864886893412, -29.970074478756217]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.233541942969765, -29.965427247512956]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.233584858314, -29.978661990109018]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.28169295920512, -29.961858026368922]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.26122234000346, -29.96821561233986]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.265277840033974, -29.975149007008262]),
            {
              "reference": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.24530178783593, -29.98377325154422]),
            {
              "reference": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.20941052965819, -29.94204983831771]),
            {
              "reference": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.21790776781737, -29.93825664486915]),
            {
              "reference": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.62557017529955, -29.934596368845632]),
            {
              "reference": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64690350037737, -29.94004321593979]),
            {
              "reference": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.649993405162526, -29.940786977403498]),
            {
              "reference": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.648276791392995, -29.9422744836482]),
            {
              "reference": 11,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64484356385393, -29.93989446297974]),
            {
              "reference": 11,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.886177529891654, -30.095543636657073]),
            {
              "reference": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.88149975736968, -30.088562960580923]),
            {
              "reference": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87931107481353, -30.092684589558775]),
            {
              "reference": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.883173455794974, -30.09461538367656]),
            {
              "reference": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89231442411773, -30.102783710759976]),
            {
              "reference": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.879439820846244, -30.105679591905485]),
            {
              "reference": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.41234273264146, -30.029856286652073]),
            {
              "reference": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.410797780248885, -30.030543644218678]),
            {
              "reference": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.409059708807234, -30.030469335522362]),
            {
              "reference": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.4068924839232, -30.029651936186024]),
            {
              "reference": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40616292307115, -30.02876022013134]),
            {
              "reference": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.405519192907576, -30.026345115533385]),
            {
              "reference": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.4063345844481, -30.024264362851426]),
            {
              "reference": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87643387759749, -30.094094383662018]),
            {
              "reference": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.872743157993, -30.096173669191575]),
            {
              "reference": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87265732730452, -30.105232902846666]),
            {
              "reference": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.865876702914875, -30.10174296853614]),
            {
              "reference": 11,
              "system:index": "73"
            })]),
    campo = /* color: #b8af4f */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.76640278155479, -30.090023718051363]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.74380356163702, -30.07791597442935]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.78761571921535, -30.09033846498427]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.769900960963334, -30.110738363842326]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.770147724192704, -30.111935613219455]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70959157918555, -30.07158369613865]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.701142180026245, -30.06703079085362]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.70097051864929, -30.068776385980772]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.69090847764484, -30.04730516166672]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.67370054577204, -30.041212800125333]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.819646837368836, -30.164210885691656]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.81883144582831, -30.163209069155425]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.82055322045279, -30.147982836271364]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8221410881896, -30.147723064292684]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.82005969399405, -30.146312861615435]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.822098172845365, -30.14640563872683]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.820574678124906, -30.148669373207902]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.856496695019764, -30.151041779595758]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85729062888817, -30.14903786875672]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85857808921532, -30.147683350409817]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8595651421328, -30.14708958307941]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85935056541161, -30.145994815195166]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85456550452904, -30.143155784252652]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85235536430077, -30.142098085172247]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85259139869408, -30.147553464111667]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.962022698473106, -30.171230054648277]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.962044156145225, -30.17176802472108]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89810258643354, -30.237281004935383]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.8976090599748, -30.23822645359834]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89683658377851, -30.238986513576503]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.860323230085896, -30.21443833616857]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.860838214216756, -30.217108435022762]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.854830066023396, -30.20746606975515]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85766247874312, -30.205166596977072]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.850152293501424, -30.20794821045959]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.52743980315069, -29.8431828347781]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.52668342020849, -29.84421115265474]),
            {
              "reference": 12,
              "system:index": "36"
            })]),
    agric = /* color: #ffefc3 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.10026007236297, -29.914903933707365]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11399298251922, -29.917730911664094]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.109873109472346, -29.91951633007289]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.104894929540706, -29.91118410359505]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10008841098602, -29.905678500051724]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.068674379003596, -29.921450497218917]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08206396640594, -29.921450497218917]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.68698507363566, -29.82469046242214]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.706597385952556, -29.820445944872066]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.708614407131755, -29.8199619167806]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.66134988703152, -29.818104073134236]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.658989543098414, -29.816726416289796]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.80996503198617, -29.864560965911448]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.696153539066245, -29.838357183071267]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.69306363428109, -29.84178193169541]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63401212060921, -29.839548413302783]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61238278711312, -29.86024377043717]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.52002896631234, -29.859946025933837]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.03396446932228, -30.214370040103404]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02885754335792, -30.21262701860561]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.03087456453712, -30.208065348121913]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.030016257652356, -30.208658748116896]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.62196990800876, -29.700005079587903]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.62042495561618, -29.69855124194294]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.5930133727909, -29.69199007187554]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.593871679675665, -29.690349712411262]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42682149757821, -29.742206109963124]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42149999489266, -29.741460868245444]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.425190714497155, -29.73721288470322]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.42862394203622, -29.734008146475833]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.402703074116296, -29.755917568989485]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.41265943397958, -29.752936976559518]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39841153969247, -29.744590846241383]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.345088493385816, -29.759495687035592]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34680510715535, -29.759048619784075]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.345603477516676, -29.760389815555]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63497672543263, -29.811085871838362]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63737998470997, -29.80818139624452]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.636607508513684, -29.80185083666299]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.62626785337798, -29.826118098764095]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.626911583541556, -29.826229790882888]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63013023435943, -29.82306513251528]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6327909857022, -29.821799241110984]),
            {
              "reference": 21,
              "system:index": "42"
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
    remover_SS = /* color: #bf04c2 */ee.Geometry.MultiPoint();
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Coleção 11 
// Script para fazer ajuste fino da classificação das regiões
// Para rodar veja instruções no final do arquivo

// Região e coleção do Sentinel 
// -----------------------------------------------------------------------
var regiao = 6 //61
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
var nSamplesMin = 60;
var nSamplesMax = 2000;
//definir com 1 para usar e como zero para não usar
var importar_estaveis = 1    //definir com 1 para importar e como zero para gerar a partir de pontos estaveis
var usar_complementares = 1
var Quantidade_amostras = 1; //1 // quantidade final de amostra SS + complementares por classe

// Ativação de funcionalidades
// -----------------------------------------------------------------------
var anos_classifica = [2000]
//var anos_visualiza = [1986,1998,2009,2020]

//Inspeção da classificação
//visualizar diferencas para uma classe x entre a classificação e o mapa de referencia
//var classe_diferenca = 22// classe para mapa de diferenças
var classes_list = [3 //3,11, 12, 21, 22, 33, 29
];
 
// cálculo de área das classes para ajuste de amostras
var calc_area = 0

//conjunto de flags para ativar e desativar recursos de processamento
//*****************************************
//Exportar
var exporta_colecao = 1//ativar a geometria do bioma antes de dar o Run (0/1)
var exporta_prob = 0
//*************************************

var debug = 1   //variavel para uso de debug, habilita addLayers de comparação
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
  debug_SS = 0
  debug_importancia = 0

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
    limite = limite; //limite.geometry() //aqui usa o limite da regiao com buffer
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
  if (ano == 1985){ // ajustar para período 1
    var percent_Flo = 16
    var percent_Umi = 7
    var percent_Cam = 60
    var percent_Agr = 21
    var percent_Anv = 8
    var percent_Agu = 32
  }

  if (ano > 1985 && ano <= 1987){ // ajustar para período 1
    var percent_Flo = 16
    var percent_Umi = 7
    var percent_Cam = 58
    var percent_Agr = 27
    var percent_Anv = 8
    var percent_Agu = 32
  }

  //bloco 1Ba
  if (ano > 1987 && ano <= 1994){// ajustar para período 2
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 38
    var percent_Agr = 40
    var percent_Anv = 7
    var percent_Agu = 32
  }
    if (ano == 1995){ // ajustar para período 1
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 31
    var percent_Agr = 45
    var percent_Anv = 18
    var percent_Agu = 32
  }
  
  //bloco 1Bb
  if (ano > 1995 && ano <= 1997){// ajustar para período 2
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 42
    var percent_Agr = 39
    var percent_Anv = 18
    var percent_Agu = 32
  }
  
    //Bloco 2Aa
  if (ano > 1997 && ano <= 2002){// ajustar para período 2
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 30
    var percent_Agr = 45
    var percent_Anv = 10
    var percent_Agu = 32
  }

    if (ano == 2003){ // ajustar para período 1
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 36
    var percent_Agr = 38
    var percent_Anv = 15
    var percent_Agu = 32
  }
  
  //Bloco 2Ab
  if (ano > 2003 && ano <= 2006){// ajustar para período 2
     var percent_Flo = 8
    var percent_Umi = 3
    var percent_Cam = 39
    var percent_Agr = 33
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 2B
  if (ano > 2006 && ano <= 2012){// ajustar para período 2
    var percent_Flo = 8
    var percent_Umi = 3
    var percent_Cam = 31
    var percent_Agr = 42
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 3A
  if (ano > 2012 && ano <= 2017){ // ajustar para período 3
     var percent_Flo = 6
    var percent_Umi = 7
    var percent_Cam = 47
    var percent_Agr = 38
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
   if (ano == 2018){ // ajustar para período 3
     var percent_Flo = 6
    var percent_Umi = 9
    var percent_Cam = 47
    var percent_Agr = 38
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
   if (ano > 2018 && ano <= 2020){ // ajustar para período 3
     var percent_Flo = 6
    var percent_Umi = 7
    var percent_Cam = 47
    var percent_Agr = 38
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 3Ba
  if (ano == 2021){ // ajustar para período 3
    var percent_Flo = 12
    var percent_Umi = 8
    var percent_Cam = 60
    var percent_Agr = 25
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 3Bb
  if (ano == 2022){ // ajustar para período 3
    var percent_Flo = 8
    var percent_Umi = 8
    var percent_Cam = 50
    var percent_Agr = 35
    var percent_Anv = 10
    var percent_Agu = 34
  }
     if (ano == 2023){ // ajustar para período 3
    var percent_Flo = 8
    var percent_Umi = 8
    var percent_Cam = 39
    var percent_Agr = 42
    var percent_Anv = 11
    var percent_Agu = 34
  }
    if (ano == 2024){ // ajustar para período 3
    var percent_Flo = 14
    var percent_Umi = 8
    var percent_Cam = 50
    var percent_Agr = 35
    var percent_Anv = 11
    var percent_Agu = 34
  }
 
     if (ano == 2025){ // ajustar para período 3
    var percent_Flo = 16
    var percent_Umi = 8
    var percent_Cam = 50
    var percent_Agr = 35
    var percent_Anv = 11
    var percent_Agu = 34
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
  

  //Amostras
  if (importar_estaveis == 1){
    
    var SS_amostras = ee.FeatureCollection(dirsamples + ano + '_v01')
            .filter(ee.Filter.lt('outlier', 5))
            .filterMetadata('ID','equals',regiao)
    //        .filterBounds(limite2.geometry())
    
  // permite remover amostras estáveis dentro de polígono digitalizados em tela
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
  
    ///3 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 
 classified = classified.updateMask(maskNoData.unmask(0).not())
    .unmask(0)
    .mask(limite_reg_raster);
 
  ///3 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  
  //if (debug == 1){print('classified',classified)}
  
  if (i_ano == 0){ var classified_serie = classified;
  //                 var   classified_max_prob_serie = img_max_prob 
  }  
  else {classified_serie = classified_serie.addBands(classified); 
//        classified_max_prob_serie = classified_max_prob_serie.addBands(img_max_prob);
  }

 // // ==============================================================================================================
  //                                        VERIFICA A IMPORTÂNCIA DAS BANDAS:
    if(debug == 1){
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
    Map.addLayer(mosaicoTotalReg, visParMedian, 'Img_Year_' + String(ano), false)  
    
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
  'description': regiao + '-'+'RF_col' + collection_out + bloco+ '_63v' + version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'RF_col' + collection_out + bloco+ '_63v' + version_out,
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
    'description': regiao + '-'+'RF_PROB_col' + collection_out + bloco+ '_63v' + version_out,
    'assetId': dirout + '0'+ regiao + '_' + 'RF_PROB_col' + collection_out + bloco+ '_63v' + version_out,
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
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/AREAS/areas_col10L_col2S_col11_v'+versionAtual+'_v'+versionAnte+'_r6'

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

var subregions = ee.FeatureCollection('projects/ee-geokarten/assets/Region6_col10')
var blank = ee.Image(0).mask(0);
var outline = blank.paint(subregions, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline, visPar, 'Subregions', false)

Map.centerObject(limite, 7)
