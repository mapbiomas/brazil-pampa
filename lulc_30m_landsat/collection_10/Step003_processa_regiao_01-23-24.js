/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = /* color: #ea9999 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.101585718194855, -31.673837126834986]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09947213749112, -31.67380973447206]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09867820362271, -31.67380973447206]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.105653688265335, -31.673805975438015]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09378567193699, -31.691331471399817]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09349599336338, -31.6938054152431]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08816130265348, -31.673302807189888]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.17924048432759, -31.637713689454674]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.178457279295245, -31.63768628644185]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.520091315595465, -31.440982937416784]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.520112773267584, -31.441513845055056]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53653421351809, -31.43067581991307]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.53769292781252, -31.43067581991307]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5273316442373, -31.426149579564992]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.52708488100793, -31.42619535482602]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93346168581081, -31.241272889529803]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.75722851803755, -31.323230869083233]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.75827994397139, -31.322424337883405]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.758827114610426, -31.321874426285905]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.759363556413405, -31.321342842021966]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.76178827336287, -31.319454777101022]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.755597734956496, -31.324853075685922]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.756380939988844, -31.324009898341394]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.75399913838362, -31.326145321960066]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.752615118531935, -31.32720843325474]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.75319447567915, -31.32671353811118]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.63010081527135, -32.065131292442636]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.63013300177953, -32.06534041050789]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.624704210733384, -32.061830800526224]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.636083881088695, -32.05541946525083]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.6355259816136, -32.0556922568094]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.605072917359784, -32.053796488134985]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.60512656154008, -32.05406019133217]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.39209211577762, -32.0373254603032]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40155239167538, -32.02927466786209]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40131635728207, -32.02926557219873]),
            {
              "reference": 22,
              "system:index": "35"
            })]),
    arocho = /* color: #ff8c00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-52.727051034650124, -31.40081248344669]),
            {
              "reference": 29,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.72087122507981, -31.39973188900462]),
            {
              "reference": 29,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.72112871714524, -31.399750204268297]),
            {
              "reference": 29,
              "system:index": "2"
            })]),
    agua = /* color: #0000ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.59182118864307, -30.908638322099932]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.58999728651294, -30.90814123963556]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.59530897795387, -30.908405007622406]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.589408118121106, -30.906269370583605]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.599413916715676, -30.920276320003847]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.59503655160337, -30.921951449225887]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.89527294515489, -30.944826607606736]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90365216611742, -30.942130464370152]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90361997960924, -30.941578343744595]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93679028935736, -30.96096157742668]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93631822057074, -30.96307759314868]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.27651113800484, -31.006833258763674]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37729160688842, -30.982539037759352]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37460939787353, -30.981747998654583]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.79734903801149, -30.906308563180417]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.363970045029234, -30.786142387822913]),
            {
              "reference": 33,
              "system:index": "15"
            })]),
    floresta = /* color: #006400 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-52.5735225648774, -31.39892978571758]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5739731759919, -31.39937851248316]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.573125597943196, -31.398755789047677]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.580275364073756, -31.400409172466375]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.149299358068035, -30.712528278741495]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1498150826674, -30.71712401978478]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.14858126652055, -30.716035631607163]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15033006679826, -30.716330788937064]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15084505092912, -30.716395354482547]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15107035648637, -30.72011241228717]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15040516865068, -30.720333771010424]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.14904077156077, -30.7127649369482]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.149663044052225, -30.712543560850417]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.16884369147046, -30.71951251174748]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1712469507478, -30.720065911045857]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17293137800915, -30.720065911045857]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17450851690991, -30.72008435763444]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17418665182812, -30.72008435763444]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17392915976269, -30.72032416296481]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17772130672016, -30.720341179499638]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17744235698261, -30.720331956230353]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17796806994953, -30.720331956230353]),
            {
              "reference": 3,
              "system:index": "21"
            })]),
    aumi = /* color: #45c2a5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-52.529209190547725, -31.425032656271036]),
            {
              "reference": 11,
              "system:index": "0"
            })]),
    campo = /* color: #b8af4f */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.15701641595721, -30.71430516512464]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1562761262691, -30.712146760965986]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.16077150857806, -30.717376656990456]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.16049255884051, -30.716315942629812]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15595426118731, -30.716887807473746]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.151877303484675, -30.716325166283234]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.155085225466486, -30.713410447894763]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.15503158128619, -30.711989951944176]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1596449807918, -30.712285121655874]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52440256042526, -30.87371205632167]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.523458422852016, -30.874982829817156]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51843732757614, -30.875185415338795]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51691383285568, -30.873067454628693]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.514253081512905, -30.876603501998563]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51395267410324, -30.87702708225506]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52442401809738, -30.87931070007345]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52614063186691, -30.87791106980237]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.5278143302922, -30.87732174567697]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.526998938751674, -30.877561159040052]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53212732238815, -30.874669742259496]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.5312904731755, -30.877284912798775]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53159088058517, -30.877579575427816]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52184909744308, -30.88111545629588]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50412506027267, -30.880102587091535]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51489681167648, -30.8837304509111]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.526719989014126, -30.871078370645737]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.359726309640955, -32.132650509871816]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36251580701644, -32.13305026579561]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36234414563949, -32.13054267693986]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.359554648264, -32.13508535970106]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.361185431345056, -32.13439488650085]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53526035756608, -30.99651875683726]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.5337154051735, -30.98298019014727]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53560368031999, -30.98235472080103]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53697697133561, -30.977534790086374]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53096882314225, -30.97709325754459]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54933659047624, -30.97933769343248]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54830662221452, -30.980331115416]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54605356664201, -30.988903549496637]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53695551366349, -30.995709440004507]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50432758309323, -30.961167116988147]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.500164794702116, -30.95951107554406]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.491925048608366, -30.96955728562512]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.490465926904264, -30.96617186770321]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52123622872311, -30.955683669895905]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53428249337155, -30.96698143508314]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.48487450242228, -30.958589388088406]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.04657837120679, -30.800706696243697]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.03911110130933, -30.79827375440249]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.03833862511304, -30.789573640404086]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.060997926870854, -30.787140416800607]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06537529198316, -30.80299213096475]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54214521381889, -30.859204820890767]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54260655376945, -30.8592370557395]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54217203590904, -30.859637687955267]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54169996712242, -30.85939822982066]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54247244331871, -30.859034436510278]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52294596169029, -30.843615699549716]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.5236326071981, -30.84341304731925]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52370770905052, -30.84381835135216]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52420123550926, -30.84347752762084]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28153730628242, -30.78573028798557]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27055097815742, -30.789122087052945]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.26823354956855, -30.792587497315353]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24377180335273, -30.800992441591223]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.24849249121894, -30.79793283203413]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.228150618049995, -30.79933362922024]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.235360395882026, -30.808327735264506]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.23832155463447, -30.807148228333315]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.23883653876533, -30.803904509615922]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2440722107624, -30.802282609197626]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.231669676277534, -30.808806905819342]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.23218466040839, -30.811976743140427]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.290300063674636, -30.932405074272978]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.290815047805495, -30.933178116434526]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29120128590364, -30.934724182006427]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.295063666885085, -30.928723835377752]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.2986685558011, -30.933325361851875]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.297080688064284, -30.934172018600858]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29991310078401, -30.933951152345706]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29695194203157, -30.92577874222267]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29639404255647, -30.92607325561958]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29836814839143, -30.92710404536636]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28892677265901, -30.925042454762487]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.279356650893874, -30.927913943801627]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27888458210725, -30.926110069730417]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.27948539692659, -30.923128080838033]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.32482938910934, -30.933529597282618]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.32324152137252, -30.932719746410864]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.4985134045347, -30.818667601301687]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.49289149443948, -30.814171137477068]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.4939214627012, -30.820252370347983]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.50563735167825, -30.827143968785002]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.514349166558624, -30.824748549474254]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.50864142577493, -30.81560855453952]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.50568026702249, -30.809305873975035]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.50499362151468, -30.80772092432729]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.49752635161722, -30.813102274948562]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52821082274759, -30.817598788807697]),
            {
              "reference": 12,
              "system:index": "98"
            })]),
    agric = /* color: #ffefc3 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-52.894694413913946, -31.542510144787077]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.86102430923448, -31.563939167452197]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71166954102072, -31.627648901118217]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.69982490601095, -31.63901255091874]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.70510349335226, -31.637587603446605]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.749698645317785, -31.680960921806037]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.725250777609986, -31.695692160997964]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.70635603058587, -31.570064035778778]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.669959298375275, -31.610899135183086]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.67225526929202, -31.61263514312031]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.68530153394046, -31.61064329969746]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.69806884885135, -31.61656388364276]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.77334702618137, -31.663336963727076]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.77399075634494, -31.655958161341335]),
            {
              "reference": 21,
              "system:index": "13"
            })]),
    geom_limite = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-53.18927256781215, -30.28920430878052],
          [-53.429735407958574, -30.067787234577363],
          [-53.957079157958574, -30.115315480957904],
          [-54.594286189208574, -30.400004197789062],
          [-54.713583219936865, -30.864860507746354],
          [-54.460897673061865, -31.3164500041102],
          [-53.982992399624365, -31.410260466945605],
          [-53.851156462124365, -31.663080244302673],
          [-53.807211149624365, -32.06895649628371],
          [-53.763265837124365, -32.42668460704181],
          [-53.362264860561865, -32.60270543845504],
          [-53.164510954311865, -32.533264713052134],
          [-52.725057829311865, -32.11084154277273],
          [-52.07949740090629, -31.434849239210415],
          [-51.91208230681668, -31.264980485528042],
          [-51.85440408416043, -31.172200282850383],
          [-52.15328627777078, -31.000987205479728],
          [-51.85665541839578, -30.927977354349707],
          [-51.55727797698953, -30.713336175933474],
          [-51.33480483245828, -30.4532408649499],
          [-51.32931166839578, -30.261270954860564],
          [-51.42818862152078, -30.06417101307813],
          [-51.61770278167703, -30.06417101307813],
          [-52.00497084808328, -30.08556233297065],
          [-52.30709487152078, -30.225679666397998],
          [-52.89211684417703, -30.244663291023567]]]);
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
var version_out = '08' // mudar a cada nova versao que for exportada
var versionMosaics = '2' // versão dos mosaicos da col 10
var version_8522 = '08'
// ----------------------------------------------------------------------
// Versões das amostras
var version_samples = '02';

// Bloco dos ano para colocar no nome de saída
var regiao = 1
var collection_out = 10
var bioma = 'PAMPA'

// -----------------------------------------------------------------------
// Pocentagens calculadas no for de anos
var nSamplesMin = 60;
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
    var percent_Flo = 28
    var percent_Umi = 8
    var percent_Cam = 29
    var percent_Agr = 49
    var percent_Anv = 6
    var percent_Agu = 25
  }
    if (ano > 2023){ // ajustar para período 3
    var percent_Flo = 28
    var percent_Umi = 8
    var percent_Cam = 27
    var percent_Agr = 49
    var percent_Anv = 6
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