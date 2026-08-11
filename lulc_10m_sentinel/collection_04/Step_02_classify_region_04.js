/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = 
    /* color: #ea9999 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.579049551542006, -29.245372862548297]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57939287429591, -29.247619547473278]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57999368911525, -29.25241231043553]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.58188196426173, -29.23818313931256]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.53004022842189, -29.31350034856622]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.530383551175795, -29.314997145723318]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.46240564590236, -29.336249295489978]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.53793665176173, -29.37933864349487]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.527636969144545, -29.37664609334096]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.53295847183009, -29.373953471955218]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57896372085353, -29.37021360186814]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.369471578485104, -29.045516483401506]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34818556774292, -29.056921344857024]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.416163473016354, -29.036811925033046]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.45049574840698, -29.036511754751917]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.94542038390413, -28.418410056680624]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.952994942162185, -28.419391392513763]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.988133959716365, -28.413389112320594]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.98854165548663, -28.412360538351926]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.989378504699275, -28.413549531213395]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.98879914755206, -28.41347403999999]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70727353244312, -28.50878571020944]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.707201112799716, -28.508868204298828]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.5662891051876, -29.259273770730267]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56854216076011, -29.258843208996556]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.567383446465676, -29.258300324226923]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.54397700846865, -29.25604501692543]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.55191634715273, -29.253667469671196]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.55146573603823, -29.25407933220802]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.565987622900806, -29.254596599426105]),
            {
              "reference": 22,
              "system:index": "29"
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
            ee.Geometry.Point([-55.31289848139535, -28.80837089891716]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.312828743960964, -28.80838029991221]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31275364210855, -28.8083850004094]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.312029445674526, -28.808742237576393]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31184705546151, -28.80882684619968]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31174513151895, -28.80892555617333]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31165930083047, -28.808930256645937]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.311568105723964, -28.80900076370955]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.3114661817814, -28.809014865116545]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31138035109292, -28.809108874447734]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.313799703624355, -28.80784444184081]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.313735330608, -28.80784444184081]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31462045958291, -28.807397891342667]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31390699198495, -28.807759832419716]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31399282267343, -28.807670522400677]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.314067924525844, -28.807656420811718]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.30886443903695, -28.808225183385495]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.308773243930446, -28.808220482881087]),
            {
              "reference": 33,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.30868204882394, -28.808206381366567]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.30897172739755, -28.808206381366567]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.309052193667995, -28.808196980355824]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.30726047804605, -28.788027509503017]),
            {
              "reference": 33,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.222196886260996, -29.712255861938022]),
            {
              "reference": 33,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21815211506654, -29.710196503624328]),
            {
              "reference": 33,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21788389416505, -29.710988569512867]),
            {
              "reference": 33,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.218055555542, -29.709749216597412]),
            {
              "reference": 33,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.220930883605966, -29.712889502152088]),
            {
              "reference": 33,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21984727116395, -29.712358362832013]),
            {
              "reference": 33,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22148452547593, -29.7039175283339]),
            {
              "reference": 33,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.218609197411965, -29.708493073545]),
            {
              "reference": 33,
              "system:index": "29"
            })]),
    floresta = 
    /* color: #006400 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.32247393737532, -28.80091799700189]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32569258819319, -28.802610283482668]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.3249201119969, -28.802459859130504]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32225936065413, -28.79809745846764]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32303183685042, -28.797420517861532]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32522051940657, -28.797608557359787]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32620757232405, -28.797495733701545]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31955569396712, -28.807273330697292]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32543509612776, -28.80324958455693]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32149856732647, -28.781895712135206]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.337892228825496, -28.784002048753287]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33802097485821, -28.784791914017603]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33909385846417, -28.784002048753287]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.339136773808406, -28.785506548863772]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34145420239727, -28.787763258331992]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34274166272442, -28.792953504760163]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34510200665753, -28.79543570519218]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33106868909161, -28.780842527873975]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33048933194439, -28.781444348754018]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32960956738751, -28.78114343874806]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32986705945294, -28.78157599660864]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.225451763266115, -28.63101756771302]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.226202781790285, -28.630942232056267]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22832709133008, -28.62855029684065]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22899227916577, -28.627552071535398]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.229421432608156, -28.628022933711282]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.231180961721925, -28.628004099264803]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23148136913159, -28.628305450002948]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23077326595166, -28.62924716548336]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23407774745801, -28.630151204395663]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23527937709668, -28.630075868117036]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23600893794873, -28.629812190716052]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23729639827588, -28.630264208712184]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.2206987275559, -28.62184505403563]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.220033539720205, -28.62267381510571]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21835984129491, -28.622052244916464]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21810234922948, -28.622711485907992]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21842421431127, -28.62305052252035]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.220033539720205, -28.623672086799452]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.797789239727564, -28.321647906198226]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7979394434324, -28.321836797524803]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79815402015359, -28.322120133885416]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7978321550718, -28.322346802430214]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79770340903909, -28.31462091040329]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.797510289990015, -28.31462091040329]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79787507041604, -28.320816780374184]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79791798576028, -28.31949452135448]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79781069739968, -28.31979675343734]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24458096039751, -29.099118545714973]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24436638367632, -29.09566862068263]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24210341950413, -29.10166841599802]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24369128724095, -29.10361827418351]),
            {
              "reference": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.245021662912336, -29.091956072222416]),
            {
              "reference": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24549373169896, -29.107855338656353]),
            {
              "reference": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59882369528643, -29.07701990005498]),
            {
              "reference": 3,
              "system:index": "54"
            })]),
    aumi = 
    /* color: #45c2a5 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.372078515237774, -29.558738322625064]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.19946387962342, -29.731509965901314]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20034364418031, -29.73069011228274]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20206025794984, -29.729628019224446]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.203412091293345, -29.728975851248645]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.191417252578745, -29.733857691471485]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.192897831954966, -29.735106062850782]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.192683255233774, -29.735404179091045]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.19171765998841, -29.734379400803256]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.19631851193907, -29.73329868877793]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.19633460519316, -29.733522280069778]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.1964687156439, -29.7332474490367]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72306061111451, -28.51023334330569]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7228782209015, -28.510469037298165]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72264218650819, -28.510865002019912]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.722481253967295, -28.511798341554112]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.41674111893849, -29.066364441822326]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.416376338512464, -29.06519223260228]),
            {
              "reference": 11,
              "system:index": "17"
            })]),
    campo = 
    /* color: #b8af4f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.295930796963944, -28.801641922915397]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.296638900143876, -28.801585513284603]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29457896362044, -28.801566710067558]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.30788811495553, -28.80838029991221]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35211544578553, -28.260342669775365]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.349353427349705, -28.260796269553385]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34973966544785, -28.259756767205044]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35424577659287, -28.26213815759401]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3549465601191, -28.26137616081633]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3439602319941, -28.256329782022878]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34453958914132, -28.257350417231503]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.344925827239464, -28.258276540723458]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3445181314692, -28.259505059469987]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34877747938485, -28.25746116868658]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34829799757655, -28.25658881952428]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33903901205714, -28.26197538194347]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3356808863705, -28.264073232596683]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33243148539363, -28.263491367777128]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.329438699179335, -28.25929916366497]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33088709204738, -28.26226645627304]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33057595580165, -28.258902258390002]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.327464593344374, -28.258855007663595]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.60314420079446, -29.21371928321594]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.60272577618814, -29.213953387555687]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.602275165073635, -29.21444968698696]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56507030741771, -29.251980321306053]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56585887686809, -29.251587171762743]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.565778410597645, -29.251769705667183]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.5648342730244, -29.25119870108713]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56847671286663, -29.25157313067969]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.56758621947368, -29.251835230579072]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.5721996189793, -29.253248686318173]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.572006499930225, -29.252078608455808]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57067612425884, -29.252284543130042]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57336906210979, -29.255429675729584]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.57131985442241, -29.25119870108713]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.471860648078795, -29.074735468415803]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.472348810119506, -29.074716714696457]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47229516593921, -29.074191609169443]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47279405681598, -29.07378840132364]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.471903563423034, -29.075499679575312]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.471855283660766, -29.075068346366006]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47968006535875, -29.06180544548146]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.474573139394394, -29.065331526399532]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47272777959215, -29.06653186685511]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.46131316056071, -29.052339172721766]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.46103421082316, -29.05188898472807]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.45938152139213, -29.049695348310685]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.45797604386833, -29.04871053428089]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.42117212823109, -29.063138489915175]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.42189096024708, -29.062913419735935]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44228237581379, -29.07172437789559]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44245403719074, -29.071986937279465]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.447877463818855, -29.07344835006497]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.440077109468895, -29.07608287169068]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.43824247850271, -29.074531010163476]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.43792061342092, -29.07455445235434]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.43801717294546, -29.074793562396703]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.43802253736349, -29.07405747676586]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.284806138268486, -29.08576487239479]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.280836468926445, -29.090152679072357]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.280836468926445, -29.084864786381146]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.28094375728704, -29.08799630171505]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.28296077846624, -29.084058452648197]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.280071761201896, -29.081167794914613]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27970698077587, -29.081280310134446]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27972843844799, -29.080849001124424]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.301946671272106, -29.153388891408547]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.293485854637964, -29.155572468945604]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.2954198687807, -29.157525087456985]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29477345640811, -29.15785192502776]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29424237902316, -29.15742796397486]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.295352813555326, -29.157863636634204]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29576050932559, -29.15753336881999]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29753613169345, -29.15406197903483]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.292384912983444, -29.155484886858588]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.598713724716816, -29.076780795178784]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59904900084368, -29.07680658102546]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59806731234423, -29.076469020340124]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59736725579134, -29.076304927940864]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.595988600357686, -29.076033002818175]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55321099072319, -29.105074117876278]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.550292747314984, -29.105111614256685]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54507853299003, -29.104924132218063]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54765345364433, -29.1100235219714]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5439198186956, -29.106686449897435]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55205227642875, -29.111354571089766]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55331827908378, -29.109254880131143]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55565716534477, -29.10753010193472]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54040296622138, -29.112683273015985]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.535274582584904, -29.11519531453016]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55010183401923, -29.115851434673676]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53066118307929, -29.10829642658556]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53802914676607, -29.09636741996832]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.543393564795856, -29.093967420226022]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.530167783573674, -29.089344930853816]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.534137452915715, -29.088857402186235]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53596135504584, -29.08739480233612]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53337487148302, -29.09081459950235]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.531738723983935, -29.091372434012413]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53193184303301, -29.091752134765564]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53083158722764, -29.093781592047343]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5278570793133, -29.095450350805866]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54451781324666, -29.086008838877685]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.545022068541456, -29.087208938484704]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.545531688254286, -29.087072990403403]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54285484365742, -29.085540046170745]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26376375998928, -28.712854098542433]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26286253776028, -28.71323048191596]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26702532615139, -28.70893963117194]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24459494539014, -28.70079687344483]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26150359102002, -28.693268054069957]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.25214804597608, -28.689428147671663]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.276633398320186, -28.55722102581166]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21089709622974, -28.56984166745491]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29119251208841, -28.70418609864258]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29137490230142, -28.704967157345138]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.2923619552189, -28.707150326648307]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29316661792337, -28.70664217924021]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.292018632464995, -28.705710569248698]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29069898562967, -28.703141541144852]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28905210929452, -28.69552348445811]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28861222701608, -28.69672810599426]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28909502463876, -28.697001026134714]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28945980506479, -28.69733041156338]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28789339500009, -28.696812805424344]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.34719710337836, -28.660546745595802]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.347132730362006, -28.66006661504651]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.442197438384966, -28.580097340770298]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.441703911926226, -28.579767587093702]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.77261391185563, -27.688683778289125]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.76544850398252, -27.68369043137548]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.765555792343115, -27.684792502642903]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.766800337326025, -27.68369043137548]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.770812922012304, -27.687813640976614]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.77122061778257, -27.688763667202068]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.88316883691575, -29.509823685288964]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.88284697183396, -29.50847914870346]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.88261093744065, -29.509058048589157]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.936415194356165, -29.505081667298935]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93547105678292, -29.505641911846986]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.96106994717568, -29.498458066836474]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.96089828579873, -29.500381685992096]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95332372754067, -29.502043812923134]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.952229386262594, -29.503743262812606]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95690715878457, -29.497711020421253]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.964975243501364, -29.499018348031708]),
            {
              "reference": 12,
              "system:index": "146"
            })]),
    agric = 
    /* color: #ffefc3 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.818411841571816, -28.487254530937644]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81978513258744, -28.488159790093338]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82253171461869, -28.484387825739212]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.805708899677285, -28.49283683874237]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75970365065385, -28.565983023217974]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76571179884721, -28.565681493732654]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.763480200946816, -28.567490657685074]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76880170363236, -28.5952272760146]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76519681471635, -28.592212780570033]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.78219129103471, -28.57728975519698]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.740305915058144, -28.586183530346563]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7459707404976, -28.587690875317392]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.639884009540566, -28.611202658404444]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64005567091752, -28.615723552014245]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67129804152299, -28.554373514420618]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68726254957963, -28.55407195167745]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68365766066361, -28.554373514420618]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.66271497267533, -28.612106852694097]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74682904738236, -28.57653601086935]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74270917433549, -28.588746003939367]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.743052497089394, -28.589801121972446]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.146802185133666, -28.762798769488498]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.236237762526244, -28.791988131015]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2667934876239, -28.791235930432062]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.39983105476257, -28.763099732403457]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38935971076843, -28.765356926604913]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21632504279968, -28.756026874495703]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.191262481764525, -28.731493889388844]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18817257697937, -28.734052813370017]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.13041164150504, -29.00808761427448]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.139338033106604, -28.998479060443803]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.13453151455192, -29.072321843799735]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.131098287012854, -28.916169269667794]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.12423183193473, -28.847026638002994]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.021235005762854, -28.815747039893346]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.88527919521598, -28.834997135811605]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.88253261318473, -28.846425195927218]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84957362880973, -28.78867057213726]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93815089931754, -28.787467010304425]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19907619228629, -28.934799839401595]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20388271084098, -28.911360837322754]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18396999111442, -29.068120827042073]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.35700465908317, -29.01889616942358]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.36524440517692, -29.024300022895343]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.35769130459098, -29.028502824539824]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.34327174892692, -29.050714790840924]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08852626552848, -29.071121570770618]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.35226007150688, -28.74980252458887]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.35534997629204, -28.759735079029394]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.45697351144829, -28.70584716281968]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.46349664377251, -28.70946062933059]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.3807558600811, -28.683260170009397]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.160216227991924, -29.20695465391869]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.156268016322, -29.20755399952362]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15437974117552, -29.20950184853325]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.171202556116924, -29.225682547222664]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28123749874388, -29.21384691675464]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19849671505247, -29.22073871599674]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20347489498411, -29.216244116902136]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0600135220689, -28.58682612003997]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0629317654771, -28.591197334204637]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07340310947124, -28.57190233022925]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07666467563335, -28.573032994496533]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28473208632425, -28.719449565088777]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27288745131448, -28.71990119649146]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27220080580667, -28.722234594330402]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.284817917012724, -28.72027755450365]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28498957838968, -28.7215571616125]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27406683211582, -28.736013605800803]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27526846175449, -28.738421902415787]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.257759001305274, -28.742862053780623]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.258960630943946, -28.743840366846534]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.25732984786289, -28.744668163053888]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.25758733992832, -28.746022724516095]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.25569906478184, -28.742711543264996]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.25492658858555, -28.74173321962782]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26453962569492, -28.72720779886066]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.265998747399024, -28.728261524237052]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.266256239464454, -28.729842092385233]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26565542464512, -28.730519471418045]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.267715361168555, -28.730669999495838]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.37991136078515, -28.67932132689919]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.378280577704096, -28.684516962211074]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.37991136078515, -28.685495821167116]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.37939637665429, -28.6820321253069]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.381027159735346, -28.704468817489854]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.381799635931635, -28.705748618012286]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38240045075097, -28.706877840767326]),
            {
              "reference": 21,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38214295868554, -28.699575318204502]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38222878937402, -28.68090263449687]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.37622064118066, -28.679547229446232]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.37510484223046, -28.68127913278698]),
            {
              "reference": 21,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.3757056570498, -28.683839285266153]),
            {
              "reference": 21,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.333391127630854, -28.67148973741217]),
            {
              "reference": 21,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.33167451386132, -28.662979750618266]),
            {
              "reference": 21,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.288158354803706, -28.666519386587666]),
            {
              "reference": 21,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28858750824609, -28.668628049063827]),
            {
              "reference": 21,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29048792309068, -28.69124859168969]),
            {
              "reference": 21,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47380853132154, -28.659115489985272]),
            {
              "reference": 21,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.476125959910405, -28.658512964639407]),
            {
              "reference": 21,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47758508161451, -28.661676184069854]),
            {
              "reference": 21,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.478357557810796, -28.663333070437922]),
            {
              "reference": 21,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47878671125318, -28.661600870430796]),
            {
              "reference": 21,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.478100065745366, -28.655274331575203]),
            {
              "reference": 21,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.472349409617436, -28.65459646548217]),
            {
              "reference": 21,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.472606901682866, -28.655500285965648]),
            {
              "reference": 21,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48033166364576, -28.652939441027318]),
            {
              "reference": 21,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48212968958905, -28.715958773044086]),
            {
              "reference": 21,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.499982472792176, -28.710538863170427]),
            {
              "reference": 21,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.49517595423749, -28.720174064324883]),
            {
              "reference": 21,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.506505605116395, -28.701203915656716]),
            {
              "reference": 21,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.46107520756754, -28.700126235154855]),
            {
              "reference": 21,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.48236121830973, -28.717892215227987]),
            {
              "reference": 21,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.489914318895664, -28.720752557100262]),
            {
              "reference": 21,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47326316533121, -28.659614548413717]),
            {
              "reference": 21,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.474636456346836, -28.646056955120166]),
            {
              "reference": 21,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.465710064745274, -28.644701099385454]),
            {
              "reference": 21,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.475151440477696, -28.64711149746333]),
            {
              "reference": 21,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47480811772379, -28.64846732203918]),
            {
              "reference": 21,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.166748822069906, -28.827516175497603]),
            {
              "reference": 21,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.163744747973226, -28.826388257300827]),
            {
              "reference": 21,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.16340142521932, -28.829020047416833]),
            {
              "reference": 21,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.15172845158651, -28.826087477051143]),
            {
              "reference": 21,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.15061265263631, -28.825861891293616]),
            {
              "reference": 21,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.16185647282674, -28.824959543375446]),
            {
              "reference": 21,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.165289700365804, -28.82759136960954]),
            {
              "reference": 21,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.46288082009088, -29.094173822555202]),
            {
              "reference": 21,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.355420798118224, -29.257245888956326]),
            {
              "reference": 21,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.35645076637994, -29.261738687988316]),
            {
              "reference": 21,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.40039607887994, -29.239572298073444]),
            {
              "reference": 21,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.41962215309869, -29.207212733652657]),
            {
              "reference": 21,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.424085348899474, -29.19642394062974]),
            {
              "reference": 21,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69937927069662, -28.729363418316314]),
            {
              "reference": 21,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6983493024349, -28.738093785028795]),
            {
              "reference": 21,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69731933417318, -28.74050203369932]),
            {
              "reference": 21,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.608055418157555, -28.685098276315003]),
            {
              "reference": 21,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.61492187323568, -28.67726711875548]),
            {
              "reference": 21,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.58024627509115, -28.801291908361843]),
            {
              "reference": 21,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.673973386907555, -28.842801252313272]),
            {
              "reference": 21,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53149444403646, -28.652565017915826]),
            {
              "reference": 21,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.84872589256364, -28.909335495710422]),
            {
              "reference": 21,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.90571746971208, -28.894908579916798]),
            {
              "reference": 21,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.916360475083174, -28.898214925250386]),
            {
              "reference": 21,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.92116699363786, -28.829661883870177]),
            {
              "reference": 21,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.93146667625505, -28.828158021223416]),
            {
              "reference": 21,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.87104187156755, -28.7974744819581]),
            {
              "reference": 21,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.86520538475114, -28.75925783967794]),
            {
              "reference": 21,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.836709596176924, -28.761364633324074]),
            {
              "reference": 21,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.97232208396989, -28.76798570796389]),
            {
              "reference": 21,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.867608644028486, -28.916548201461598]),
            {
              "reference": 21,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.30032493897916, -29.362436506386715]),
            {
              "reference": 21,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.302899859633456, -29.356451971456085]),
            {
              "reference": 21,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.300668261733065, -29.36423179829498]),
            {
              "reference": 21,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18067695924283, -29.331911702624165]),
            {
              "reference": 21,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18565513917447, -29.330564809534167]),
            {
              "reference": 21,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.13329841920377, -29.34478111705929]),
            {
              "reference": 21,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.12917854615689, -29.348521921088775]),
            {
              "reference": 21,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18926002809049, -29.290149746518004]),
            {
              "reference": 21,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18926002809049, -29.294341681962106]),
            {
              "reference": 21,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.14874794312955, -29.286556522058618]),
            {
              "reference": 21,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.155614398207675, -29.28700568202831]),
            {
              "reference": 21,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22393562623502, -29.366625471605392]),
            {
              "reference": 21,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.22170402833463, -29.364381404525364]),
            {
              "reference": 21,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2038512451315, -29.31904066371136]),
            {
              "reference": 21,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20144798585416, -29.31200580494835]),
            {
              "reference": 21,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20968773194791, -29.3093114752794]),
            {
              "reference": 21,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20917274781705, -29.311706438497858]),
            {
              "reference": 21,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21809913941861, -29.29763522481917]),
            {
              "reference": 21,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26513435670377, -29.32906824079094]),
            {
              "reference": 21,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27388908692838, -29.328768924406713]),
            {
              "reference": 21,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.227540515151034, -29.372160625612484]),
            {
              "reference": 21,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.128663562026034, -29.37470370358058]),
            {
              "reference": 21,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.13724663087369, -29.370215876063877]),
            {
              "reference": 21,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1350150329733, -29.372011030812317]),
            {
              "reference": 21,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15424110719205, -29.30781459472785]),
            {
              "reference": 21,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.15977224343349, -29.778382292596]),
            {
              "reference": 21,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.16560873024989, -29.77599836037983]),
            {
              "reference": 21,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.17075857155849, -29.777488324665804]),
            {
              "reference": 21,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.16766866677333, -29.861784144562375]),
            {
              "reference": 21,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.26276906960536, -29.85612693442055]),
            {
              "reference": 21,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.24182638161708, -29.92369472888653]),
            {
              "reference": 21,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.17075857155849, -29.73993446650664]),
            {
              "reference": 21,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.17487844460536, -29.74559825086796]),
            {
              "reference": 21,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.12489174428977, -29.6151461829327]),
            {
              "reference": 21,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20694588247336, -29.623503067976362]),
            {
              "reference": 21,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23102504023794, -29.674419214457618]),
            {
              "reference": 21,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23651820430044, -29.68545559322925]),
            {
              "reference": 21,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.237376511185204, -29.686797772871067]),
            {
              "reference": 21,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23402911433462, -29.672256538826637]),
            {
              "reference": 21,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.23128253230337, -29.68060868419189]),
            {
              "reference": 21,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.08972830615831, -27.812170751727084]),
            {
              "reference": 21,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.159394075093104, -29.72676564622851]),
            {
              "reference": 21,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.169350434956385, -29.72259157886328]),
            {
              "reference": 21,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20471267860873, -29.71737375051424]),
            {
              "reference": 21,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20110778969271, -29.720802639701706]),
            {
              "reference": 21,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.211064149555995, -29.713422928616964]),
            {
              "reference": 21,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.214583207783534, -29.70798097597516]),
            {
              "reference": 21,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.10978471872048, -29.494795335041207]),
            {
              "reference": 21,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.119226094452905, -29.492852932660387]),
            {
              "reference": 21,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.112016316620874, -29.49599064106981]),
            {
              "reference": 21,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11544954415994, -29.489416283361216]),
            {
              "reference": 21,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34271827606022, -29.576218054214895]),
            {
              "reference": 21,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32898536590397, -29.567260024142485]),
            {
              "reference": 21,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33465019134342, -29.58278677114271]),
            {
              "reference": 21,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.339542540586585, -29.579726399393383]),
            {
              "reference": 21,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33426395324528, -29.577263105954415]),
            {
              "reference": 21,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.428518250249844, -28.37575085782989]),
            {
              "reference": 21,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.42886157300375, -28.37737448484023]),
            {
              "reference": 21,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.427531197332364, -28.376430518672464]),
            {
              "reference": 21,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.42770285870932, -28.377525518647477]),
            {
              "reference": 21,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.27285744659437, -29.63446341705083]),
            {
              "reference": 21,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.26650597564711, -29.640804543311926]),
            {
              "reference": 21,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.265561838073864, -29.634388813189105]),
            {
              "reference": 21,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.276290674133435, -29.637969736216974]),
            {
              "reference": 21,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21271399215699, -29.734025384052593]),
            {
              "reference": 21,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21526745513917, -29.732255281558697]),
            {
              "reference": 21,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.217606341400156, -29.730764644706746]),
            {
              "reference": 21,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.219151293792734, -29.730969608587227]),
            {
              "reference": 21,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21983793930055, -29.73018701697248]),
            {
              "reference": 21,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21872214035035, -29.731398168075113]),
            {
              "reference": 21,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20743540481568, -29.738403924443578]),
            {
              "reference": 21,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20949534133912, -29.74019254978261]),
            {
              "reference": 21,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.212628161468515, -29.737994026644017]),
            {
              "reference": 21,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21423548083949, -29.737042060709896]),
            {
              "reference": 21,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21633833270717, -29.737302907433804]),
            {
              "reference": 21,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21578043323207, -29.738867973531026]),
            {
              "reference": 21,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21599500995326, -29.74270600842778]),
            {
              "reference": 21,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20835607867885, -29.74516525454065]),
            {
              "reference": 21,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20985811572719, -29.74106647751142]),
            {
              "reference": 21,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.212390121037245, -29.741960770425173]),
            {
              "reference": 21,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.676706364766694, -29.483654223100206]),
            {
              "reference": 21,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.677693417684175, -29.484476087883266]),
            {
              "reference": 21,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67855172456894, -29.486605433813278]),
            {
              "reference": 21,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68129830660019, -29.48877209075779]),
            {
              "reference": 21,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68361573518906, -29.482907067513285]),
            {
              "reference": 21,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.68507485689316, -29.485746229437016]),
            {
              "reference": 21,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.688937237874605, -29.485036446413623]),
            {
              "reference": 21,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67812257112656, -29.477900982990448]),
            {
              "reference": 21,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.679195454732515, -29.480366697313837]),
            {
              "reference": 21,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.672709203460045, -29.483169930007023]),
            {
              "reference": 21,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.674468732573814, -29.484328015814697]),
            {
              "reference": 21,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67258045742733, -29.48854931332073]),
            {
              "reference": 21,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.02720075953759, -29.392527950578046]),
            {
              "reference": 21,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.02659994471826, -29.39471531153922]),
            {
              "reference": 21,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52776967400803, -29.11078202106734]),
            {
              "reference": 21,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52542353243695, -29.102641519029355]),
            {
              "reference": 21,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52724223006699, -29.10862215209876]),
            {
              "reference": 21,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.524903343806, -29.108997102360707]),
            {
              "reference": 21,
              "system:index": "247"
            })]),
    geom_limite = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-52.885708449539926, -27.41341405536019],
          [-52.965359328446176, -27.557171832169132],
          [-52.957119582352426, -27.705605102616218],
          [-52.932400344071176, -27.89025613442972],
          [-53.034023879227426, -28.021264565544552],
          [-53.215298293289926, -27.899965912234578],
          [-53.234524367508676, -27.683717776273465],
          [-53.251003859696176, -27.591256277027615],
          [-53.426785109696176, -27.484098106597997],
          [-53.610806105789926, -27.55960678648443],
          [-53.731655715164926, -27.771240733410945],
          [-53.866238234696176, -27.84655135903658],
          [-53.989834426102426, -27.69101403933739],
          [-54.107937453446176, -27.749366583494425],
          [-54.215054152664926, -27.66912378772526],
          [-54.374355910477426, -27.654527849855317],
          [-54.412808058914926, -27.742074223530338],
          [-54.418301222977426, -27.887828553882628],
          [-54.662747023758676, -27.834408016092944],
          [-54.855007765946176, -27.924236544965034],
          [-54.618801711258676, -28.16906402271587],
          [-54.912685988602426, -28.224738794769603],
          [-54.967617629227426, -28.047931963250626],
          [-55.107693312821176, -27.977612755930778],
          [-55.327419875321176, -27.887828553882628],
          [-55.464748976883676, -27.999440871062045],
          [-55.629543898758676, -28.064898683485087],
          [-55.678982375321176, -28.13273877044411],
          [-55.786099074539926, -28.17874867495374],
          [-55.838284133133676, -28.285221931890774],
          [-55.758633254227426, -28.343253439167768],
          [-55.772366164383676, -28.427825907370217],
          [-55.604824660477426, -28.534049766919782],
          [-55.799831984696176, -28.589533318907183],
          [-55.684475539383676, -28.775069402278554],
          [-55.475735305008676, -28.90739360022109],
          [-55.558132765946176, -29.022738826210755],
          [-55.662502883133676, -29.10436385074485],
          [-55.703701613602426, -29.1619425773206],
          [-55.681728957352426, -29.296167375662097],
          [-55.764126418289926, -29.391934384476905],
          [-55.786099074539926, -29.559309785148635],
          [-55.714687941727426, -29.731178511058637],
          [-55.791592238602426, -29.83129959454933],
          [-55.604824660477426, -29.931320453376234],
          [-55.423550246414926, -30.055016637173914],
          [-55.176357863602426, -29.993187812537652],
          [-55.055508254227426, -29.73594845134057],
          [-54.896206496414926, -29.487611313150943],
          [-54.775356887039926, -29.363213731944],
          [-54.522671340164926, -29.324906925856233],
          [-54.500698683914926, -29.482829608932068],
          [-54.385342238602426, -29.482829608932068],
          [-54.302944777664926, -29.415862068780743],
          [-54.077725051102426, -29.478047679080724],
          [-54.083218215164926, -29.59275167517244],
          [-53.742642043289926, -29.650054843938197],
          [-53.550381301102426, -29.66437554316925],
          [-53.594326613602426, -29.49717404460064],
          [-53.352627394852426, -29.415862068780743],
          [-52.990078566727426, -29.21948903383809],
          [-53.039517043289926, -28.883347176650183],
          [-53.132900832352426, -28.6377560984467],
          [-53.110928176102426, -28.35292227741544],
          [-53.017544387039926, -28.478536985915067],
          [-52.792324660477426, -28.49784909221619],
          [-52.506680129227426, -28.53646270331907],
          [-52.237515090164926, -28.377090520789174],
          [-52.034268019852426, -28.173906458433017],
          [-52.199062941727426, -28.062475030263602],
          [-52.226528762039926, -27.946075456550147],
          [-52.248501418289926, -27.6837177762735],
          [-52.462734816727426, -27.65939337902758],
          [-52.687954543289926, -27.41585219024954]]]),
    remover_SS = 
    /* color: #ffc82d */
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
var regiao = 4;
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

  // Define o percentual de cada classe x ano
  if (ano <= 2019){
  //var percent_Flo =  -60.14	    + 12 + ano *  0.03597
  var percent_Flo =  24
  // var percent_Umi =   -7.63	    + desvio + ano *  0.00400
  var percent_Umi = 1  
  var percent_Cam = 26
  // var percent_Cam = 1245.50	    + 15 + ano * -0.60527
  // var percent_Agr =-1069.87	    + -5 + ano *  0.56000
  var percent_Agr = 70
  var percent_Anv = 10
  // var percent_Anv =    4.00	    + desvio + ano * -0.00128
  // var percent_Afr =    0.00000	+ desvio + ano *  0.00000
  // var percent_Agu =  -11.87	    + desvio + ano *  0.00659
  var percent_Agu = 20
  }
  
  if (ano > 2019 && ano <= 2022){ 
 // var percent_Flo =  -60.14	    + 12 + ano *  0.03597
  var percent_Flo =  25
  // var percent_Umi =   -7.63	    + desvio + ano *  0.00400
  var percent_Umi = 1  
  var percent_Cam = 16
  // var percent_Cam = 1245.50	    + 15 + ano * -0.60527
  // var percent_Agr =-1069.87	    + -5 + ano *  0.56000
  var percent_Agr = 70
  var percent_Anv = 5
  // var percent_Anv =    4.00	    + desvio + ano * -0.00128
  // var percent_Afr =    0.00000	+ desvio + ano *  0.00000
  // var percent_Agu =  -11.87	    + desvio + ano *  0.00659
  var percent_Agu = 20
  }
  
  if (ano > 2022){
  //var percent_Flo =  -60.14	    + 12 + ano *  0.03597
  var percent_Flo =  25
  // var percent_Umi =   -7.63	    + desvio + ano *  0.00400
  var percent_Umi = 1  
  var percent_Cam = 18
  // var percent_Cam = 1245.50	    + 15 + ano * -0.60527
  // var percent_Agr =-1069.87	    + -5 + ano *  0.56000
  var percent_Agr = 73
  var percent_Anv = 10
  // var percent_Anv =    4.00	    + desvio + ano * -0.00128
  // var percent_Afr =    0.00000	+ desvio + ano *  0.00000
  // var percent_Agu =  -11.87	    + desvio + ano *  0.00659
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
  var SS_Afr = SS_amostrasF.filter(ee.Filter.eq('reference', 29))
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
              .merge(arocho)
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
var col_Sentinel = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/class_s2_col3_embedding/04_Emb_RF17a24_v03')
  .mask(mask_regiao)
  .select('classification_'+ano_compara)
  .remap(class_in, class_out)
  .rename('classification_'+ano_compara)
// print(col_beta, "S2 Col2")

var class_atual = classified16a23.select('classification_'+ano_compara)

// Coleção para comparar                 
Map.addLayer(col_Sentinel, vis, 'Sentinel Col3v03sf - ' + ano_compara, false)
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
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/S2_EMBEDDING/PAMPA/CLASSIFICATION/areas_col10L_col2S_col3S_v01_v01_r4'

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