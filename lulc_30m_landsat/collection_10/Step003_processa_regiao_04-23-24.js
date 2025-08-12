/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = /* color: #ea9999 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.55063505247176, -28.63841079267688]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54874677732528, -28.638203634086395]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55466909483016, -28.641423962294695]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.556063843517904, -28.643457802863608]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55767316892684, -28.64494549460448]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54122028227152, -28.639199813619065]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54496464605631, -28.638747834111488]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54094133253397, -28.639312808191722]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54147777433695, -28.63929397577139]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54172453756632, -28.639284559559965]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54197130079569, -28.63921864605629]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.455223910645635, -28.62283213565412]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.45819579823414, -28.62552555988862]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4600626157085, -28.626872246091956]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4611247704784, -28.627691550224373]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.46238989479757, -28.628702057322396]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.068205979973385, -28.824048175541865]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06747910133035, -28.82475079181291]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06791093698175, -28.824182119477722]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07343381497025, -28.82491698691529]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07301807257294, -28.825234219626385]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07278740259766, -28.82553735220273]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07254063936829, -28.824921686666215]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.072186587778326, -28.8253282143181]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07132944044695, -28.82716723349525]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0716083901845, -28.827900376227362]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.073756717922166, -28.829883844171306]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07254704165645, -28.82991439109103]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.070961391470995, -28.83069104357426]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07003871156987, -28.829487967089758]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06765690996465, -28.83121738516371]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07160769735516, -28.821735484237575]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07438110147656, -28.821782483173326]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07242308889569, -28.822346468747707]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07322775160016, -28.822285370458026]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06998227869214, -28.82096469866448]),
            {
              "reference": 22,
              "system:index": "35"
            })]),
    arocho = 
    /* color: #ff8c00 */
    /* shown: false */
    ee.FeatureCollection([]),
    agua = /* color: #0000ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.51745433392109, -29.02631092648959]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.515533872266424, -29.027136474236137]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51446098866047, -29.028196542912497]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51418203892292, -29.028768787851323]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51311988415302, -29.029265981698476]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52045840801777, -29.028721882647808]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52154202045978, -29.02712709304882]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51020164074482, -29.03139544523683]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50668258251728, -29.034397257556034]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50696153225483, -29.033843804973394]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50744432987751, -29.033346633174038]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.51181547244517, -29.03060723697763]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.508826802922584, -29.032790072991187]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50826890344749, -29.033015208901453]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50967507344975, -29.0400497384847]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44407419383313, -28.76539211640477]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.4408984583595, -28.763736845987985]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44566206156995, -28.77028253472672]),
            {
              "reference": 33,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44115595042493, -28.763812086121877]),
            {
              "reference": 33,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44059805094983, -28.763774466061708]),
            {
              "reference": 33,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.36991647898938, -28.85007678852987]),
            {
              "reference": 33,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.395536939499635, -28.841393385863316]),
            {
              "reference": 33,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.39819769084241, -28.83872431560923]),
            {
              "reference": 33,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.370560209152956, -28.848911525521036]),
            {
              "reference": 33,
              "system:index": "23"
            })]),
    floresta = /* color: #006400 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.7071791038415, -28.237563800433332]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.706513916005804, -28.239454190549832]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70990422820063, -28.237563800433332]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70928195570917, -28.238490095775845]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70582727049799, -28.237147910112494]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70582727049799, -28.237582704500326]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70119241332026, -28.237922977133053]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70241550063105, -28.236826539208717]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.73578024080165, -28.236822756203317]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.731488706377824, -28.23629343729165]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.74067795750427, -28.268999967997516]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7418366717987, -28.270360650994313]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.74265206333923, -28.27141894797774]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7432957935028, -28.272590621661216]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6378143861731, -28.380614311034698]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.65146146564087, -28.373798894849795]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0457591986747, -28.733162795079554]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04713248969033, -28.734442244470603]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05108070136025, -28.73730213352699]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05331229926064, -28.737603169927173]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06434154272988, -28.74012431573033]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07678699255898, -28.741667076441598]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07794570685341, -28.743736597714385]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.08318137885048, -28.746709111077852]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.02709102393105, -28.72382986690999]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11276490235403, -28.720907518102084]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.114138193369655, -28.723843046419447]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11448151612356, -28.725875286972713]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11353737855032, -28.728359082888403]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11345154786184, -28.730315971437]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11327988648489, -28.733477021699123]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.11156327271536, -28.7349822501249]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.073673554183586, -28.770077207391584]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07560474467431, -28.76987030931369]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.074939556838615, -28.7692872307053]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07586223673974, -28.77372606971162]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07676345896874, -28.77303016251875]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07777196955834, -28.771431439225776]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0783942420498, -28.769889118246816]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07925254893456, -28.768553675570292]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.08038980555688, -28.76706774039281]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07753593516503, -28.76706774039281]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.070969887496574, -28.77391415193995]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05784262595289, -28.76442021326936]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.059387578345465, -28.76410044418883]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.058164491034674, -28.762652066085764]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05728472647779, -28.7615234458399]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33963650438366, -29.045996282535896]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.339100062580684, -29.046277666335584]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33697575304089, -29.047046778139]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33671826097546, -29.047421952547765]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.333048999043086, -29.049710486894885]),
            {
              "reference": 3,
              "system:index": "51"
            })]),
    aumi = /* color: #45c2a5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.507647544663534, -28.45719221474239]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50902083567916, -28.453758726455124]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.508849174302206, -28.45251358776803]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.50745442561446, -28.457890217952816]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.508591682236776, -28.45475859993684]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.515264150070514, -28.369831196743853]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.52110063688692, -28.365450811339066]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.522516843246784, -28.364544502127277]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.53011285917696, -28.35982401651463]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.526980039047565, -28.360466014892886]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.52483427183565, -28.363978054939384]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.52161562101778, -28.36352489501218]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.521744367050495, -28.367150120248674]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.518053647446, -28.36756550273203]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51668035643038, -28.36896268642427]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.445149052917486, -28.34916083549765]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44388305026246, -28.348688727974917]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44484864550782, -28.34534614668091]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44422637301636, -28.34647923687241]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.443453896820074, -28.349141951237026]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.358598817901914, -29.067042515717837]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.36801873596222, -29.066423594981888]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.35364209564239, -29.068280346041213]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37125884445221, -29.06831785581897]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.37263213546783, -29.065860936542663]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.375056852417295, -29.065673383047113]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61514603472447, -28.689904432549582]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61513530588841, -28.689617376371316]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.609164002441524, -28.69108118093763]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.611674550079464, -28.689443556813636]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.613884690307735, -28.693189348991435]),
            {
              "reference": 11,
              "system:index": "30"
            })]),
    campo = /* color: #b8af4f */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.49095076048415, -29.006338273025722]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49288195097487, -29.007389172193115]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49266737425368, -29.00558762422002]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49678724730055, -29.00622567605247]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.498203453660416, -29.00975365624292]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50052088224928, -29.009153157483087]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49803179228346, -29.01271856771163]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49755972349684, -29.01132994888263]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50090712034743, -29.00427397568972]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.502237496018815, -29.004198909555054]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49232405149977, -29.00821487118413]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22241442344156, -29.503475426279476]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22471039435831, -29.50244828692936]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21604149482218, -29.507042320193467]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21430342338053, -29.508685663585442]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21548359534708, -29.50734111188524]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.2155050530192, -29.510347654201606]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21649210593668, -29.511356039701848]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.17086340748598, -29.495547213357277]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.172773140304585, -29.49687324528352]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.17111017071535, -29.494529332002703]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.17109944187929, -29.49350210191715]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70462726939537, -28.23455618118999]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.70673012126304, -28.23402685103388]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.7138540684066, -28.23924441936854]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.72033428538658, -28.237694298897058]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.74022227790282, -28.23754246157439]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67249448856425, -28.217700190019965]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.66970499118876, -28.219288415527874]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.67137868961405, -28.21925060090938]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.74589217182922, -28.276426817905552]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.74518406864929, -28.276748069449894]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63694153975669, -28.38708919466018]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.643614875785744, -28.386862664299265]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.640846836082375, -28.387353479469528]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63427005957786, -28.385191987940303]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.640814649574196, -28.386437918568006]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63676987837974, -28.384672845857743]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.637081014625466, -28.38559786088899]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.63925896834556, -28.386938174473357]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05114793468072, -28.739812243164053]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05936623820301, -28.74212679680872]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.057563793745004, -28.734299907395425]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06734849223133, -28.73670824350574]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06872178324696, -28.742954606594747]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.064001095380746, -28.74310511676018]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04288674601551, -28.734224645997642]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.03190041789051, -28.735654603287035]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.04486085185047, -28.737009281616896]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06958009013172, -28.738363942384442]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.09206466087194, -28.743895148339874]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05275881001461, -28.8302483979143]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06417429158199, -28.82186413384131]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07116949269283, -28.82306729843028]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.07043993184078, -28.821412943536174]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.0685516566943, -28.825360792416394]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.05026972004879, -28.83415831708203]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29774722638084, -28.59067541237881]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.296202273988264, -28.590920346942287]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.294442744874495, -28.592371101502277]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29349860730125, -28.593652270699707]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29163178982689, -28.59497110503351]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.28834876599266, -28.597495684600474]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.28879937710716, -28.599530376237418]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29605207028343, -28.599549215790738]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.297961803102034, -28.597552204344534]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29787597241356, -28.59947385755721]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.30004319729759, -28.591749351999553]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.299442382478254, -28.58995944653669]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.289850803041, -28.588866647166565]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.28997954907371, -28.590279747647763]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.2908593136306, -28.595762397691026]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.28337058606102, -28.591768192947594]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.303412051820295, -28.60171574189442]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32353934826805, -28.604014094670813]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.327616305970686, -28.603298219688558]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.330105395936506, -28.597458004754206]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.322423549317854, -28.589808716264418]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.321908565186995, -28.58539976019701]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31032142224266, -28.584683758429136]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.31100806775047, -28.58916811019632]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.310664744996565, -28.595084147206443]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29946384015037, -28.6187826373858]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32950458111717, -28.621344316087466]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33448276104881, -28.61411118004532]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34152087750389, -28.61350839622015]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33092637867304, -28.543975499083533]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32599111408564, -28.5475191465077]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.328608950084174, -28.551967386196026]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.327063997691596, -28.55004486497914]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.32041211933466, -28.543410012400273]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.10613699265826, -28.986422960543088]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.10673780747759, -28.98706113066872]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.10476370164263, -28.980454002251623]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.10313291856158, -28.98049154394617]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.115707114423394, -28.982180906099163]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.12552494885706, -28.976185684390263]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.124194573185676, -28.97753723257128]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.116448353550666, -28.972074616820784]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.043489426476114, -28.967035229751854]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.03901550183927, -28.96516727103592]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.254581862034684, -29.13086813919852]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.256620340886, -29.13075567817931]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.26535361343849, -29.129518598849028]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.26209204727638, -29.127175604781055]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.35765468032867, -29.053125279232376]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.35988627822906, -29.05248751718885]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.3379565373233, -29.05567628796984]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33726989181549, -29.054288246923985]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.3489428654483, -29.06145333918586]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.35486518295318, -29.062953819016045]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.326826274128535, -29.052261580091912]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.319584309788326, -29.054052935031937]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.545104817909085, -28.75296123638079]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.54541595415481, -28.75245331163642]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.549106673759304, -28.750383963068288]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.54993279413589, -28.750252275862586]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64490454219395, -28.738120713191247]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.64345614932591, -28.73817715714015]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.620725491486674, -28.68555144696738]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62133120871281, -28.687057365155805]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62084031570399, -28.695975173200168]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62019658554041, -28.69473289808155]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.623629813079475, -28.69503405703992]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62873673904383, -28.68829541815774]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.627148871307014, -28.687730708052186]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.61453176010096, -28.699363121312686]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.627406363372444, -28.701960473926906]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62356544006312, -28.70388021485999]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55650670379637, -28.645404077275906]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55976826995848, -28.646571612937265]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55363137573241, -28.651844192748804]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55260140747069, -28.652973996791143]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54178674072264, -28.652973996791143]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53818185180663, -28.654141448179633]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53710896820067, -28.646119665190692]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54466206878661, -28.648115753044323]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54440457672118, -28.64604434037694]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.541443417968736, -28.64532875194825]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56453187316893, -28.639942850822322]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5642743811035, -28.642729995019128]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56410271972655, -28.644613158637615]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56109864562987, -28.64438718078843]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54603535980223, -28.65176887204651]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54590661376952, -28.649245597255934]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55075604766844, -28.648341722860405]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54114301055907, -28.633181835305855]),
            {
              "reference": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.539941380920396, -28.635253501950377]),
            {
              "reference": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53168017715453, -28.634707339259386]),
            {
              "reference": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53730426307964, -28.63984965438246]),
            {
              "reference": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.538656096423146, -28.640113306562966]),
            {
              "reference": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52330368115286, -28.644265644621346]),
            {
              "reference": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51478498532156, -28.643794855326473]),
            {
              "reference": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51377647473196, -28.643757192091595]),
            {
              "reference": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.512800582371916, -28.651401639273185]),
            {
              "reference": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.515075095616545, -28.651401639273185]),
            {
              "reference": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52123344751474, -28.651250997178717]),
            {
              "reference": 12,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51950999848409, -28.6526342502161]),
            {
              "reference": 12,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.518887725992634, -28.651768065399324]),
            {
              "reference": 12,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51695653550191, -28.65103368571096]),
            {
              "reference": 12,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51174213330602, -28.657174233776907]),
            {
              "reference": 12,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51605512540197, -28.660036234875044]),
            {
              "reference": 12,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52798559110021, -28.66173080395908]),
            {
              "reference": 12,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52923013608312, -28.659734975281054]),
            {
              "reference": 12,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.529873866246696, -28.657136575346932]),
            {
              "reference": 12,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52154828946447, -28.658718217759493]),
            {
              "reference": 12,
              "system:index": "165"
            })]),
    agric = /* color: #ffefc3 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.63017437414243, -29.45122677587139]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.64416477636411, -29.44980672151889]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.66673169052011, -29.44699929423697]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.742520188444914, -29.43855306367556]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.743721818083586, -29.445280206930462]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.742005204314054, -29.443187365691813]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.7638061991871, -29.428611024745994]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.743721818083586, -29.408275403394686]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.444998184530164, -28.384272028092017]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.392813125936414, -28.392427015418548]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.40259782442274, -28.394239149633236]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.38440171846571, -28.438777703441456]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.47057572969618, -28.384272028092017]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.46679917940321, -28.38336587966901]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.474695602743054, -28.36599653855808]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.430661250476355, -28.329626815901438]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.36935362151407, -28.379085918246936]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.36909612944864, -28.37969004243711]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.41810545256876, -28.406872068597377]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20877322716552, -28.31978883979622]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20276507897216, -28.321753327539568]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.21666965050537, -28.271269594278603]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.22439441246826, -28.26748990862621]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29795131249267, -28.339129907293653]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.29297313256103, -28.36073334249721]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20714244408447, -28.41751579849069]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.20285090966064, -28.41766677510131]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.203709216545406, -28.418270679391092]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.341993246926464, -28.413066846032496]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33581343735615, -28.41336881172422]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.33529845322529, -28.414425684865144]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.44421759690205, -28.385282319956342]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.445590887917675, -28.385131297195876]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.52644165487492, -28.318433085241026]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6129589888593, -28.30543616330908]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.38567932577336, -28.29818137680618]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.34722717733586, -28.465170267920584]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.1844921919843, -28.431965135776732]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.761069203153404, -29.425542479164466]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.76184167934969, -29.42718714383319]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.74338808132723, -29.44086673142318]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.743559742704186, -29.437503069280066]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.74270143581942, -29.445799900962054]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.60414628937572, -28.026839653645048]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.60783700898021, -28.037067458236752]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.62457399323314, -28.01797477011603]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.5131791627486, -28.784740677492373]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51269636512592, -28.784016634206175]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.511290887602115, -28.782587339197296]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51089392066791, -28.78109220043041]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.51531163116479, -28.786577377197098]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.514206561050656, -28.7860508100345]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.516717108688596, -28.790282078139015]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.507934413320804, -28.78653370913349]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19914839286805, -29.009157796831595]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19638035316468, -29.010180519146367]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19626233596802, -29.01116570079416]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.194223857116704, -29.01125014449828]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1932689907074, -29.010555827548455]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19440624732972, -29.00926100779967]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18155169871584, -29.004258851953132]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18444848445193, -29.00582584529427]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.179125482456385, -29.00829733801481]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17929714383334, -29.003718382292007]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18406074704379, -29.00818474317624]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83450739685057, -29.089769239966248]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83390658203123, -29.09181307660889]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83120291534422, -29.093388115703274]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.8292717248535, -29.096838117151993]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83141749206541, -29.098244334578144]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82300608459471, -29.09188807901682]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82079594436644, -29.090219262526013]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82374549922144, -29.084860370848123]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.8052060705105, -29.088460667863576]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.80091453608667, -29.091385816518464]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.85309959468042, -29.084860370848123]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.84966636714136, -29.0922858455425]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82799146409557, -29.10613128132457]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82975099320934, -29.107987316689854]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.827347733931994, -29.10811855024653]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41910956085205, -28.94623228828304]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41917393386841, -28.948278967272316]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4253322857666, -28.951546059105063]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.426190592651366, -28.949705985575946]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42363712966919, -28.946495166746857]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40790865600586, -28.95391181989257]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.410226084594726, -28.956540379606313]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40889570892334, -28.95744158471984]),
            {
              "reference": 21,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41335890472412, -28.956840782182315]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.41056940734863, -28.962773554476836]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.414002634887694, -28.962848650681394]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38463297067466, -28.949264231003202]),
            {
              "reference": 21,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38727226434531, -28.952456188070737]),
            {
              "reference": 21,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38664999185386, -28.954052129714732]),
            {
              "reference": 21,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.382251169069434, -28.95480315256653]),
            {
              "reference": 21,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38001957116904, -28.953601513389334]),
            {
              "reference": 21,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.380963708742286, -28.950725844538496]),
            {
              "reference": 21,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67321416931151, -29.403531496393796]),
            {
              "reference": 21,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67711946563719, -29.406223334983036]),
            {
              "reference": 21,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.68458673553465, -29.408167396303277]),
            {
              "reference": 21,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.68106767730711, -29.407120598673774]),
            {
              "reference": 21,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.678750248718245, -29.399269272867254]),
            {
              "reference": 21,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.666776867675765, -29.407643998835994]),
            {
              "reference": 21,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.6653606613159, -29.406821511656826]),
            {
              "reference": 21,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.66544649200438, -29.407905697906504]),
            {
              "reference": 21,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.665489407348616, -29.40928895322964]),
            {
              "reference": 21,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.66643354492186, -29.408915102295865]),
            {
              "reference": 21,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.6708538253784, -29.404316623344837]),
            {
              "reference": 21,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67132589416502, -29.40771877006776]),
            {
              "reference": 21,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67364332275389, -29.408167396303277]),
            {
              "reference": 21,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67437288360594, -29.408616020558824]),
            {
              "reference": 21,
              "system:index": "110"
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
          [-52.687954543289926, -27.41585219024954]]]);
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

var regiao = 4
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
var visParMedian = {'bands':['swir1_median','nir_median','red_median'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
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
  var percent_Flo = 30
  var percent_Umi = 9
  var percent_Cam = 28
  var percent_Agr = 62
  var percent_Anv = 7
  var percent_Agu = 43
  }
    if (ano > 2023){ // ajustar para período 3
  var percent_Flo = 30
  var percent_Umi = 11
  var percent_Cam = 30
  var percent_Agr = 60
  var percent_Anv = 11
  var percent_Agu = 43
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
  // var acc = acura_region(classified, String(ano), regiao, version_out, calcula_confusao);
}

// =================================================================================================================
//                                   PRINTA E EXPORTA A COLEÇÃO
// =================================================================================================================

Map.addLayer(mosaicos
  .filterMetadata('year', 'equals', 2023)
  .filterBounds(limite).mosaic(), 
  visParMedian, "Mosaico 2023")
Map.addLayer(mosaicos
  .filterMetadata('year', 'equals', 2024)
  .filterBounds(limite).mosaic(), 
  visParMedian, "Mosaico 2024")

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
