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
            ee.Geometry.Point([-52.35182461229562, -30.419603859420068]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3516583153367, -30.419363309473457]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35134986129999, -30.419337866655976]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.638555236961615, -30.023127738102396]),
            {
              "reference": 33,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.638555236961615, -30.02370367169342]),
            {
              "reference": 33,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.638812729027045, -30.024261023596058]),
            {
              "reference": 33,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63934917083002, -30.02535713986409]),
            {
              "reference": 33,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64125890364863, -30.02615599662793]),
            {
              "reference": 33,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.658886595306406, -30.185656126437294]),
            {
              "reference": 33,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.66096798950196, -30.1863980447193]),
            {
              "reference": 33,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65727726989747, -30.184840009872655]),
            {
              "reference": 33,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.667426748809824, -30.190960719283954]),
            {
              "reference": 33,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69875092411195, -29.85582132820709]),
            {
              "reference": 33,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.69849343204652, -29.856342402038294]),
            {
              "reference": 33,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94849733924253, -29.781194307236053]),
            {
              "reference": 33,
              "system:index": "32"
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
            ee.Geometry.Point([-54.800072643704944, -30.462070782891978]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79846331829601, -30.460424646217707]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80187508816295, -30.456651374064545]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80339858288341, -30.46066509488238]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.802518818326526, -30.461090502604556]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80193946117931, -30.461330949625815]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80105661823604, -30.45709448829715]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.805627102397416, -30.459720985170947]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.800906414531205, -30.46195900057761]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79824566318843, -30.4609232312433]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79996227695796, -30.459092112084758]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65384404235841, -30.188672029577816]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.651655359802255, -30.18937683049692]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65247075134278, -30.190971887636874]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.650925798950205, -30.184294731993706]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.649895830688486, -30.185147949328197]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64684884124757, -30.182996343609236]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65133349472047, -30.194254656494163]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.649659796295175, -30.197889685276206]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.537243324216824, -30.096696552399884]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.536937552389126, -30.096408798264058]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53753836720846, -30.09669191121078]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.537227230962735, -30.09689612332474]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79738325689467, -29.867276849519634]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.800001092893204, -29.87077503431552]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.797469087583146, -29.872524080714495]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80141729925307, -29.874198670869443]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.91474832822798, -29.904850789466078]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.911336558361036, -29.903492930531932]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.911336558361036, -29.903492930531932]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.915327685375196, -29.897410239417308]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.914855616588575, -29.898154319425526]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.915606635112745, -29.905929623096494]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.914855616588575, -29.906041225908673]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93728961278914, -29.922855741139838]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.936109440822584, -29.922632573075532]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93645276357649, -29.92319049229824]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93716086675642, -29.923506645136467]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93758709017882, -29.950718283282615]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93844539706359, -29.949007794408914]),
            {
              "reference": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93900329653869, -29.94960275039777]),
            {
              "reference": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93921787325988, -29.950457993395503]),
            {
              "reference": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.941792793914175, -29.94514049371902]),
            {
              "reference": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94273693148742, -29.946962606048885]),
            {
              "reference": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94136364047179, -29.952577476947223]),
            {
              "reference": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80186028968811, -29.836106544085276]),
            {
              "reference": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80327649604797, -29.837223348005683]),
            {
              "reference": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80183883201599, -29.83737225425171]),
            {
              "reference": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80256839286804, -29.837260574587997]),
            {
              "reference": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80334086906433, -29.837744518895676]),
            {
              "reference": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82003586408053, -29.846204394474878]),
            {
              "reference": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81973545667086, -29.845013243629992]),
            {
              "reference": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.818898607458216, -29.845329644458957]),
            {
              "reference": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.4260535407084, -30.72229915180428]),
            {
              "reference": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.433465130567, -30.715258096719207]),
            {
              "reference": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.4324566199774, -30.715719283368543]),
            {
              "reference": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.4315553977484, -30.716162020476972]),
            {
              "reference": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.43170560145323, -30.71717661868399]),
            {
              "reference": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.49806940137927, -30.7299785206516]),
            {
              "reference": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.500665779705685, -30.73071630557333]),
            {
              "reference": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.49961435377185, -30.730753194671163]),
            {
              "reference": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.49995767652575, -30.730826972824484]),
            {
              "reference": 3,
              "system:index": "73"
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
            ee.Geometry.Point([-54.54898473113701, -29.892846651943742]),
            {
              "reference": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54302878843802, -29.89361120969149]),
            {
              "reference": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67546196447067, -29.812432862214916]),
            {
              "reference": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.673573689324186, -29.813503386431755]),
            {
              "reference": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93348535811992, -29.793684749365774]),
            {
              "reference": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93863519942851, -29.78847062101649]),
            {
              "reference": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.938034384609175, -29.78820990746826]),
            {
              "reference": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.939793913722944, -29.788321641929237]),
            {
              "reference": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.965757696987104, -29.783896861834258]),
            {
              "reference": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00771931152635, -29.775562850375998]),
            {
              "reference": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9985783432036, -29.77589809573118]),
            {
              "reference": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07938793640428, -29.769438837399626]),
            {
              "reference": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.059303555300765, -29.767650733890576]),
            {
              "reference": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0665133331328, -29.768246771940063]),
            {
              "reference": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.924207957546145, -30.148259728472468]),
            {
              "reference": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.924218686382204, -30.14849630526529]),
            {
              "reference": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.924207957546145, -30.14877463017754]),
            {
              "reference": 11,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92379489735785, -30.14816695310472]),
            {
              "reference": 11,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92362860039893, -30.1477587404501]),
            {
              "reference": 11,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92450836495581, -30.14721600055478]),
            {
              "reference": 11,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92480877236548, -30.146960865384248]),
            {
              "reference": 11,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92339793042365, -30.149428690630273]),
            {
              "reference": 11,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92258790330115, -30.149317361497776]),
            {
              "reference": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92282393769446, -30.1488905986592]),
            {
              "reference": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5435833544922, -30.08995411690955]),
            {
              "reference": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54808946563722, -30.09051109600209]),
            {
              "reference": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.538433513183605, -30.093927165801798]),
            {
              "reference": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53959759189607, -30.098252780475416]),
            {
              "reference": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53753765537263, -30.09744522300707]),
            {
              "reference": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5389914126587, -30.09942233476739]),
            {
              "reference": 11,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.542467555542004, -30.09548663668668]),
            {
              "reference": 11,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52139612152101, -30.095932195278316]),
            {
              "reference": 11,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.553453883667004, -30.084866896017115]),
            {
              "reference": 11,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55250974609376, -30.08572097327851]),
            {
              "reference": 11,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54708575138171, -30.09238101351439]),
            {
              "reference": 11,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54652785190661, -30.09427468314624]),
            {
              "reference": 11,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54476832279284, -30.09642822413685]),
            {
              "reference": 11,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.543695439186884, -30.096873778484635]),
            {
              "reference": 11,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.541892994728876, -30.09724507224039]),
            {
              "reference": 11,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5463015725689, -30.09539528571075]),
            {
              "reference": 11,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54960605407525, -30.09287041342703]),
            {
              "reference": 11,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.540679662473686, -30.0964720498646]),
            {
              "reference": 11,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.832746085983274, -29.977561139756997]),
            {
              "reference": 11,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83128696427917, -29.977003525507097]),
            {
              "reference": 11,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83135133729553, -29.978286033602036]),
            {
              "reference": 11,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83229547486877, -29.978787880088007]),
            {
              "reference": 11,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83559995637512, -29.977635488087152]),
            {
              "reference": 11,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83465581880188, -29.978062989905496]),
            {
              "reference": 11,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83188777909851, -29.979085269401697]),
            {
              "reference": 11,
              "system:index": "105"
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
            ee.Geometry.Point([-54.52595770358824, -29.90738362606437]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52597916126036, -29.907941630729944]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.526301026342146, -29.908536832261095]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52625811099791, -29.90920642973235]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53243225634729, -29.903386122794377]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5326682907406, -29.90403715405796]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.531831441527956, -29.90427896458658]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.50869134667556, -29.908783049174676]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51216748955886, -29.908969048463998]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51068691018264, -29.908504049589453]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54135079397452, -29.911903196093473]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54101077939517, -29.89929832970497]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62194179374707, -29.911012848099425]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62084745246899, -29.911812624673853]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54833973096168, -29.906990973332366]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81134681638137, -30.20996231043302]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81027393277542, -30.21148286144519]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.803793715795436, -30.211964982469713]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80345039304153, -30.212669616640873]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80512409146682, -30.210704045569372]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80203418668167, -30.209665614813016]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81572418149368, -30.20922056970574]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.8156383508052, -30.210963651546226]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80168196911388, -30.459462845624504]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.801767799802356, -30.460424646217707]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80339858288341, -30.45961081556456]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80221533253047, -30.458703688444842]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80277323200557, -30.459536022919917]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50908383865356, -30.139803732075784]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.508697600555415, -30.140174864480446]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.503236623001094, -30.143821166129047]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.504706473541255, -30.143570661166088]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50410565872192, -30.1425500788173]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.504170031738276, -30.141761439772164]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50524291534423, -30.141715049043803]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.505210728836055, -30.14251296653298]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50389108200073, -30.142809864416723]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.504191489410395, -30.14278203027807]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.503193707656855, -30.144915958133065]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50229248542785, -30.14489740243759]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50782856483459, -30.14124186236877]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50576862831115, -30.141149080401696]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51374329916872, -30.136286383915966]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51313175551333, -30.137529716290526]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51182283751406, -30.138216325963068]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.512681144398826, -30.13786374321439]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51445526179971, -30.13389115273092]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.914702483007865, -29.87733892264793]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.914938517401175, -29.877487769059062]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.91313607294317, -29.87944135761282]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.902450152227836, -29.87644583951597]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.903973646948295, -29.877059835028266]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.903437205145316, -29.877450557477108]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90255744058843, -29.877822672671893]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90088374216314, -29.881171646943752]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90360886652227, -29.878511082121975]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.901699133703666, -29.878436659707813]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90103394586797, -29.87899482646023]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68119980824278, -30.253168807745887]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68343140614317, -30.254206779126896]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68351723683165, -30.258062005372782]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67126994605941, -30.249867615030766]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67180638786239, -30.249756399423728]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67125385280532, -30.25047466466671]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.670899801215356, -30.250664656530194]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69630873017174, -30.267754382137078]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6996883135305, -30.267337398910744]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70337903313499, -30.27024790478352]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70496690087181, -30.26991432681691]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.42863919019876, -30.722050128281147]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.428510444166044, -30.722336044123377]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.42613937139688, -30.719670537733442]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.436340458630966, -30.718449463156112]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.439387448071884, -30.718910634542947]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.447326786755966, -30.718320334772564]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44423688197081, -30.71887374091317]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.46219915580784, -30.710303275578166]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.46031088066135, -30.70987896011525]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.462757055282935, -30.709141015733938]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.462757055282935, -30.709141015733938]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.463293497085914, -30.70832927039409]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.4617056293491, -30.707665110035236]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.460053388595924, -30.708532207369437]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.45981735420261, -30.706742657506624]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47883039892975, -30.704458840651906]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47842806757752, -30.704352755534345]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47818666876618, -30.703757754234914]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47942048491303, -30.703028987953996]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.484948034878414, -30.706419892848746]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.497414942379635, -30.704704101944472]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.49436795293872, -30.70490704654584]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.49359547674243, -30.707065612705343]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50108420431201, -30.708541527576166]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.49097764074389, -30.709353271129878]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.487158175106686, -30.708707566586046]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48923956930224, -30.71090294440008]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48505532323901, -30.70505464235142]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.4898618417937, -30.701290878777055]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.487437124844234, -30.701973533070024]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48260914861743, -30.704796349543475]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48524844228808, -30.70881825910052]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48655736028735, -30.71093984107927]),
            {
              "reference": 12,
              "system:index": "111"
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
            ee.Geometry.Point([-54.88732585723877, -30.203387166532956]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.88269100006104, -30.201161778913455]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.950411413269045, -30.126715857383253]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.9474502545166, -30.129314099398982]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94603404815674, -30.12437738110765]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94736442382813, -30.123226681974806]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.88852748687744, -30.059407232134944]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.89101657684326, -30.059927239908177]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.88629588897705, -30.055841390969192]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.761042409343275, -29.84546688583214]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75563507596925, -29.84583912030646]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75726585905031, -29.841744464776404]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.759068303508315, -29.846434692579315]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71451492772751, -29.727663138155474]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72593040929489, -29.7216256458029]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73914833532028, -29.719016740426767]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.741036610466765, -29.722520112034694]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70902176366501, -29.726694182372523]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71760483251266, -29.72483077956807]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71666069493942, -29.727663138155474]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.782534547788224, -29.867202418723235]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.781247087461075, -29.867946724188492]),
            {
              "reference": 21,
              "system:index": "39"
            })]),
    geom_limite = /* color: #00ffff */ee.Geometry.Polygon(
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
    remover_SS = /* color: #ffc82d */ee.Geometry.MultiPoint();
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
var anos_classifica = [2001]
//var anos_visualiza = [1986,1998,2009,2020]
 
//Inspeção da classificação
//visualizar diferencas para uma classe x entre a classificação e o mapa de referencia
//var classe_diferenca = 3// classe para mapa de diferenças
var classes_list = [11 //3,11, 12, 21, 22, 33, 29
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
  if (ano == 1985){ // ajustar para período 1
    var percent_Flo = 18
    var percent_Umi = 7
    var percent_Cam = 60
    var percent_Agr = 18
    var percent_Anv = 12
    var percent_Agu = 32
  }

//bloco 1Ba
  if (ano > 1985 && ano <= 1987){// ajustar para período 2
    var percent_Flo = 18
    var percent_Umi = 7
    var percent_Cam = 60
    var percent_Agr = 27
    var percent_Anv = 12
    var percent_Agu = 32
  }



  //bloco 1Ba
  if (ano > 1987 && ano <= 1994){// ajustar para período 2
    var percent_Flo = 17
    var percent_Umi = 5
    var percent_Cam = 47
    var percent_Agr = 35
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
   if (ano == 1995){// ajustar para período 2
    var percent_Flo = 17
    var percent_Umi = 5
    var percent_Cam = 39
    var percent_Agr = 40
    var percent_Anv = 18
    var percent_Agu = 32
  }
  
  //bloco 1Bb
  if (ano > 1995 && ano <= 1997){// ajustar para período 2
    var percent_Flo = 17
    var percent_Umi = 5
    var percent_Cam = 42
    var percent_Agr = 37
    var percent_Anv = 18
    var percent_Agu = 32
  }
  
  
  //Bloco 2Aa
  if (ano > 1997 && ano <= 2002){// ajustar para período 2
    var percent_Flo = 17
    var percent_Umi = 5
    var percent_Cam = 39
    var percent_Agr = 37
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
   if (ano == 2003){// ajustar para período 2
    var percent_Flo = 17
    var percent_Umi = 5
    var percent_Cam = 50
    var percent_Agr = 29
    var percent_Anv = 10
    var percent_Agu = 32
  }
  //Bloco 2Ab
  if (ano > 2003 && ano <= 2006){// ajustar para período 2
    var percent_Flo = 8
    var percent_Umi = 4
    var percent_Cam = 45
    var percent_Agr = 29
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 2B
  if (ano > 2006 && ano <= 2012){// ajustar para período 2
    var percent_Flo = 8
    var percent_Umi = 4
    var percent_Cam = 30
    var percent_Agr = 40
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 3A
  if (ano > 2012 && ano <= 2017){ // ajustar para período 3
    var percent_Flo = 16
    var percent_Umi = 7
    var percent_Cam = 50
    var percent_Agr = 35
    var percent_Anv = 10
    var percent_Agu = 32
  }
    if (ano == 2018){ // ajustar para período 3
    var percent_Flo = 16
    var percent_Umi = 9
    var percent_Cam = 50
    var percent_Agr = 35
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
    if (ano > 2018 && ano <= 2020){ // ajustar para período 3
    var percent_Flo = 16
    var percent_Umi = 7
    var percent_Cam = 50
    var percent_Agr = 35
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 3Ba
  if (ano > 2020 && ano <= 2021){ // ajustar para período 3
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 60
    var percent_Agr = 25
    var percent_Anv = 10
    var percent_Agu = 32
  }
  
  //Bloco 3Bb
  if (ano == 2022){ // ajustar para período 3
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 45
    var percent_Agr = 40
    var percent_Anv = 10
    var percent_Agu = 34
  }
  
 if (ano == 2023){ // ajustar para período 3
    var percent_Flo = 16
    var percent_Umi = 5
    var percent_Cam = 36
    var percent_Agr = 46
    var percent_Anv = 13
    var percent_Agu = 34
  }
    if (ano == 2024){ // ajustar para período 3
    var percent_Flo = 18
    var percent_Umi = 5
    var percent_Cam = 40
    var percent_Agr = 44
    var percent_Anv = 15
    var percent_Agu = 34
  }
    if (ano == 2025){ // ajustar para período 3
    var percent_Flo = 19
    var percent_Umi = 5
    var percent_Cam = 40
    var percent_Agr = 44
    var percent_Anv = 15
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
    if(debug_SS == 1){
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
}
  
  
    if(debug == 1){
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
  'description': regiao + '-'+'RF_col' + collection_out + bloco+ '_61v' + version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'RF_col' + collection_out + bloco+ '_61v' + version_out,
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
    'description': regiao + '-'+'RF_PROB_col' + collection_out + bloco+ '_61v' + version_out,
    'assetId': dirout + '0'+ regiao + '_' + 'RF_PROB_col' + collection_out + bloco+ '_61v' + version_out,
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


var subregions = ee.FeatureCollection('projects/ee-geokarten/assets/Region6_col10')
var blank = ee.Image(0).mask(0);
var outline = blank.paint(subregions, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
if (debug == 1){Map.addLayer(outline, visPar, 'Subregions', false)}


var blank = ee.Image(0).mask(0);
var outline = blank.paint(limite, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
if (debug == 1){Map.addLayer(outline, visPar, 'Limite região 0' + String(regiao), false)}
Map.centerObject(limite, 7)
