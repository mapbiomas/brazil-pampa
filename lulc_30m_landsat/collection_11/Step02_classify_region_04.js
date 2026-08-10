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
    arocho = /* color: #ff8c00 */ee.FeatureCollection([]),
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
            ee.Geometry.Point([-55.269451923942555, -28.378425988414808]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.269462652778614, -28.379511528359867]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.269451923942555, -28.37790681320915]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.269720144844044, -28.37762362566221]),
            {
              "reference": 3,
              "system:index": "50"
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
            ee.Geometry.Point([-55.613667621673585, -29.812470625497923]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.62154258734131, -29.80967790073602]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.6172725105896, -29.810571581145517]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.612680568756105, -29.811800378668135]),
            {
              "reference": 11,
              "system:index": "23"
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
            ee.Geometry.Point([-54.54114301055907, -28.646006678524454]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53779561370848, -28.646307977563115]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53964097351073, -28.653877831834983]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54307420104979, -28.653237616557433]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54637868255614, -28.651806532979073]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.558180402221666, -28.64777679798198]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56084115356444, -28.64529108983883]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56152779907225, -28.648492369708634]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56423146575926, -28.644085876806926]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.564660619201646, -28.64220270372246]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.56461770385741, -28.63986752214783]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.55208642333983, -28.64446250736694]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54933984130858, -28.645780703677463]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.54856736511229, -28.645404077850593]),
            {
              "reference": 12,
              "system:index": "104"
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
            })]),
    geom_limite = /* color: #0b4a8b */ee.Geometry.Polygon(
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
    remover_SS = /* color: #0b4a8b */ee.Geometry.MultiPoint();
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Coleção 11 
// Script para fazer ajuste fino da classificação das regiões
// Para rodar veja instruções no final do arquivo

// Região e coleção do Sentinel 
// -----------------------------------------------------------------------
var regiao = 4 
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
var nSamplesMin = 50;
var nSamplesMax = 2000;
//definir com 1 para usar e como zero para não usar
var importar_estaveis = 1    //definir com 1 para importar e como zero para gerar a partir de pontos estaveis
var usar_complementares = 1
var Quantidade_amostras = 1; //1 // quantidade final de amostra SS + complementares por classe

// Ativação de funcionalidades
// -----------------------------------------------------------------------
var anos_classifica = [2011]
//var anos_visualiza = [1986,1998,2009,2020]

//Inspeção da classificação
//visualizar diferencas para uma classe x entre a classificação e o mapa de referencia

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

var debug = 1  //variavel para uso de debug, habilita addLayers de comparação
var debug_SS = 0; //habilita print das amostras 
var debug_importancia =1 // habilita o gráfico de importancia das variáveis

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
    limite = geom_limite; //limite.geometry() //aqui usa o limite da regiao com buffer
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
   //Bloco 1Aa
  if (ano <= 1987){ // ajustar para período 1
    var percent_Flo =  34
    var percent_Umi = 8
    var percent_Cam = 55
    var percent_Agr = 40
    var percent_Anv = 1
    var percent_Agu = 45
  }

  //Bloco 1Ab
  if (ano > 1987 && ano <= 1990){// ajustar para período 2
    var percent_Flo =  34
    var percent_Umi = 8
    var percent_Cam = 50
    var percent_Agr = 42
    var percent_Anv = 1
    var percent_Agu = 43
  }
  
  //Bloco 1Ab
  if (ano > 1990 && ano <= 1992){// ajustar para período 2
    var percent_Flo =  34
    var percent_Umi = 8
    var percent_Cam = 46
    var percent_Agr = 45
    var percent_Anv = 1
    var percent_Agu = 43
  }
  
  //Bloco 1B
  if (ano > 1992 && ano <= 1998){// ajustar para período 2
    var percent_Flo =  34
    var percent_Umi = 8
    var percent_Cam = 42
    var percent_Agr = 52
    var percent_Anv = 3
    var percent_Agu = 45
  }
  
  //bloco 2
  if (ano > 1998 && ano <= 2003){// ajustar para período 2
    var percent_Flo = 34
    var percent_Umi = 7
    var percent_Cam = 42
    var percent_Agr = 53
    var percent_Anv = 2
    var percent_Agu = 45
  }
  
    //bloco 2
  if (ano > 2003 && ano <= 2012){// ajustar para período 2
    var percent_Flo = 34
    var percent_Umi = 9
    var percent_Cam = 42
    var percent_Agr = 53
    var percent_Anv = 2
    var percent_Agu = 45
  }
  
  
  //bloco 3Aa
  if (ano > 2012 && ano <= 2017){// ajustar para período 2
    var percent_Flo = 34
    var percent_Umi = 8
    var percent_Cam = 35
    var percent_Agr = 57
    var percent_Anv = 2
    var percent_Agu = 45
  }
  //bloco 3Ab
  if (ano > 2017 && ano <= 2020){// ajustar para período 2
    var percent_Flo = 34
    var percent_Umi = 7
    var percent_Cam = 37
    var percent_Agr = 54
    var percent_Anv = 2
    var percent_Agu = 45
  }
  //bloco 3Ba
  if (ano > 2020 && ano <= 2021){ // ajustar para período 3
    var percent_Flo = 35
    var percent_Umi = 7
    var percent_Cam = 42
    var percent_Agr = 49
    var percent_Anv = 2
    var percent_Agu = 45
  }

  //bloco 3Ba
  if (ano == 2022){ // ajustar para período 3
    var percent_Flo = 36
    var percent_Umi = 7
    var percent_Cam = 33
    var percent_Agr = 59
    var percent_Anv = 2
    var percent_Agu = 45
  }

  if (ano == 2023){ // ajustar para período 3
  var percent_Flo = 36
  var percent_Umi = 7 
  var percent_Cam = 28
  var percent_Agr = 62
  var percent_Anv = 2
  var percent_Agu = 43
  }
    if (ano > 2023){ // ajustar para período 3
  var percent_Flo = 36
  var percent_Umi = 7
  var percent_Cam = 30
  var percent_Agr = 60
  var percent_Anv = 3
  var percent_Agu = 43
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
  
  //print('Explain', exp)
  
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
    //print(chart);
  })

// =================================================================================================================
//                                    CALCULATE DIFFERENCE :
// =================================================================================================================

    //camadas usadas para o processo de coleta de amostras
    // var img = ee.Image('projects/mapbiomas-workspace/AMOSTRAS/col' + collection_out + '/PAMPA/estabilidade_colecoes/pampa_colecoes_' + ano)
    // var estabilidadeMask = img.select('estabilidade').lte(1).selfMask().updateMask(limite_reg_raster);

    // adiciona o mosaico
    Map.addLayer(mosaicoTotalPlus, visParMedian, 'Img_Year_' + String(ano), false)  
    
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
  'description': regiao + '-'+'RF_col' + collection_out + bloco+ '_v' + version_out,
  'assetId': dirout + '0'+ regiao + '_' + 'RF_col' + collection_out + bloco+ '_v' + version_out,
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
  
  var asset_area = 'projects/mapbiomas-workspace/AMOSTRAS/col11/PAMPA/AREAS/areas_col10L_col2S_col11_v'+versionAtual+'_v'+versionAnte+'_r4'

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
Map.centerObject(limite, 7)