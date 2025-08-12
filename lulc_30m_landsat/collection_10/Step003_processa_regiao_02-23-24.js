/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = /* color: #ea9999 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.636108230157454, -30.903605725535925]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63698799471434, -30.90415806539923]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63751370768126, -30.904701196490137]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63776047091063, -30.904931335853284]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62939197878416, -30.901985510217063]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.631870339913924, -30.901957892672787]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64930731643274, -30.91273575209239]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64904445994928, -30.912758764121556]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6492644010885, -30.91247801698761]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65388140132138, -30.951305773410077]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.654192537567106, -30.951572604946886]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65496588948733, -30.971471517042033]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6547083974219, -30.97176588963355]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65445090535647, -30.97180268614367]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65413976911074, -30.972032664010545]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.653828632865014, -30.97205106221596]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.656339180502954, -30.971002358848118]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65686489346987, -30.97068038620445]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6576802850104, -30.97044120582336]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90416215143537, -31.44367358966887]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90443037233686, -31.443618669594308]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90176962099409, -31.44472621821047]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90765975199079, -31.442840631746645]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.906350833991524, -31.443124387474754]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.912552101233956, -31.441815442601186]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.91064236841535, -31.442318885100896]),
            {
              "reference": 22,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90527795038557, -31.447151795481656]),
            {
              "reference": 22,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90527795038557, -31.447673515217225]),
            {
              "reference": 22,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.907058937171456, -31.448213537848524]),
            {
              "reference": 22,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.92248986145068, -31.457178837287472]),
            {
              "reference": 22,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.92272589584399, -31.457910996313213]),
            {
              "reference": 22,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.922854641876704, -31.458881098205776]),
            {
              "reference": 22,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.92274735351611, -31.45926547542127]),
            {
              "reference": 22,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.9219534196477, -31.453353213295177]),
            {
              "reference": 22,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93305224303025, -31.465757691220222]),
            {
              "reference": 22,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93891855639605, -31.47973526640463]),
            {
              "reference": 22,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95134254855303, -31.483541513550716]),
            {
              "reference": 22,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.95157858294634, -31.483267029754362]),
            {
              "reference": 22,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.703239388664684, -30.989270274413954]),
            {
              "reference": 22,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.702735133369885, -30.989297866736226]),
            {
              "reference": 22,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.702456183632336, -30.989297866736226]),
            {
              "reference": 22,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69866890450331, -30.99147763497615]),
            {
              "reference": 22,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.03268336360825, -30.84247885877772]),
            {
              "reference": 22,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.03163193767441, -30.842460435647087]),
            {
              "reference": 22,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.02867077892197, -30.84319735811337]),
            {
              "reference": 22,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.029293051413426, -30.84293943589396]),
            {
              "reference": 22,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.02223347728623, -30.844413267809152]),
            {
              "reference": 22,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.024572363547215, -30.843768469131934]),
            {
              "reference": 22,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00913538971794, -30.846957054815984]),
            {
              "reference": 22,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.016516828926925, -30.845685909834767]),
            {
              "reference": 22,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.018276358040694, -30.845335881447795]),
            {
              "reference": 22,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.961637184213856, -30.854788953331802]),
            {
              "reference": 22,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.948515817713, -30.856990209471775]),
            {
              "reference": 22,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.96784918029235, -30.853729753502503]),
            {
              "reference": 22,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.84817225783604, -30.895789227919924]),
            {
              "reference": 22,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.83178314487916, -30.902033576477123]),
            {
              "reference": 22,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.8317724160431, -30.902199281492276]),
            {
              "reference": 22,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.820188400810316, -30.90684662954445]),
            {
              "reference": 22,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81988799340065, -30.90703994231343]),
            {
              "reference": 22,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81943738228615, -30.907104379816317]),
            {
              "reference": 22,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81936228043373, -30.90735292406393]),
            {
              "reference": 22,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.81936228043373, -30.90774875245909]),
            {
              "reference": 22,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.78002904819089, -30.921870475632755]),
            {
              "reference": 22,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.78874086307126, -30.918685861487166]),
            {
              "reference": 22,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6264532184689, -30.994436600022826]),
            {
              "reference": 22,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.626914558419465, -30.994156092819818]),
            {
              "reference": 22,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62806790829587, -30.993103033827182]),
            {
              "reference": 22,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62586849690366, -30.994983816618063]),
            {
              "reference": 22,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62559491158414, -30.9952229354891]),
            {
              "reference": 22,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59789692922097, -31.020612798071532]),
            {
              "reference": 22,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17658677645894, -31.8143651032069]),
            {
              "reference": 22,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.1771017605898, -31.814729780151644]),
            {
              "reference": 22,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.179934173309526, -31.817063678499213]),
            {
              "reference": 22,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.183238654815874, -31.817610677392384]),
            {
              "reference": 22,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18478360720845, -31.81502152067066]),
            {
              "reference": 22,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.185727744781694, -31.81334400010111]),
            {
              "reference": 22,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18628564425679, -31.818485868882064]),
            {
              "reference": 22,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19731488772603, -31.82092906789024]),
            {
              "reference": 22,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.203966766082964, -31.821658368498095]),
            {
              "reference": 22,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19259419985982, -31.82027269241795]),
            {
              "reference": 22,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19611325808736, -31.821257253876635]),
            {
              "reference": 22,
              "system:index": "80"
            })]),
    arocho = /* color: #ff8c00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.51246825293231, -30.769077660170147],
                  [-54.51215175226855, -30.76904078574923],
                  [-54.512017641817806, -30.768953208942914],
                  [-54.51233950689959, -30.76888867861358]]]),
            {
              "reference": 29,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.51369833407136, -30.77797107860704],
                  [-54.51385390219422, -30.7780793871251],
                  [-54.513778800341804, -30.77824300188924],
                  [-54.51354813036652, -30.778037907281522]]]),
            {
              "reference": 29,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.516832025779024, -30.747211031977056],
                  [-54.51710829330756, -30.747236388891846],
                  [-54.517089517844454, -30.747577554005538],
                  [-54.51663086010291, -30.74759599532861]]]),
            {
              "reference": 29,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.51473990274741, -30.74902979738754],
                  [-54.51477208925559, -30.74936634590305],
                  [-54.51447168184592, -30.74939400737257],
                  [-54.51417127443625, -30.749223428183956],
                  [-54.51449313951804, -30.748965253702213]]]),
            {
              "reference": 29,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.56863697960867, -30.99830223362549],
                  [-54.56808980896963, -30.99831143019623],
                  [-54.56810053780569, -30.99809071225382],
                  [-54.56860479310049, -30.998044729284846]]]),
            {
              "reference": 29,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.56535395577444, -30.99640772114484],
                  [-54.56483897164358, -30.996389327635317],
                  [-54.56483897164358, -30.996186998796407],
                  [-54.56532176926626, -30.996205392344955]]]),
            {
              "reference": 29,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.56806835129751, -30.999166707397894],
                  [-54.56803616478933, -30.999359833446306],
                  [-54.56755336716665, -30.999359833446306],
                  [-54.567488994150295, -30.999175903885256]]]),
            {
              "reference": 29,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.63847766964227, -30.91946692543743],
                  [-54.63806997387201, -30.919724641715444],
                  [-54.63749061672479, -30.919844295465634],
                  [-54.63719020931512, -30.919522150412593],
                  [-54.63829527942926, -30.91930125032065]]]),
            {
              "reference": 29,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.640079094360445, -30.91977098511486],
                  [-54.640604807327364, -30.91943963564757],
                  [-54.640830112884615, -30.9194074210548],
                  [-54.64077646870432, -30.91992285323713],
                  [-54.640057636688326, -30.9198906388071]]]),
            {
              "reference": 29,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.51486888576655, -30.780877732924477],
                  [-54.51525780607371, -30.780866211082685],
                  [-54.51524171281962, -30.781264866006396],
                  [-54.51487425018458, -30.78105286474977]]]),
            {
              "reference": 29,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.513628836442784, -30.779241125219706],
                  [-54.513113852311925, -30.77924573403445],
                  [-54.513113852311925, -30.7789830312416],
                  [-54.513634200860814, -30.778980726827957]]]),
            {
              "reference": 29,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-54.50690617802856, -30.7687350751507],
                  [-54.506629910500024, -30.768725856513978],
                  [-54.50661649945495, -30.76847003899265],
                  [-54.50690349581954, -30.768474648323366]]]),
            {
              "reference": 29,
              "system:index": "11"
            })]),
    agua = /* color: #0000ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.69614253979234, -30.779125320798997]),
            {
              "reference": 33,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69971524220018, -30.783678727580263]),
            {
              "reference": 33,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70638857822923, -30.786637404699466]),
            {
              "reference": 33,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70160351734666, -30.78475713445548]),
            {
              "reference": 33,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.708051547818464, -30.784471403896823]),
            {
              "reference": 33,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.703760013394636, -30.789835623065052]),
            {
              "reference": 33,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.699747428708356, -30.785033647091073]),
            {
              "reference": 33,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.700294599347394, -30.784471403896823]),
            {
              "reference": 33,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71777317088011, -30.811994675627602]),
            {
              "reference": 33,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71779462855223, -30.811404946480426]),
            {
              "reference": 33,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.718073578289776, -30.808705046505864]),
            {
              "reference": 33,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71800920527342, -30.814150842006615]),
            {
              "reference": 33,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.706690916541994, -30.842207570181575]),
            {
              "reference": 33,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70673383188623, -30.842778687091485]),
            {
              "reference": 33,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70648706865686, -30.843091878792393]),
            {
              "reference": 33,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70696986627954, -30.84340506947104]),
            {
              "reference": 33,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70672310305017, -30.84361693317397]),
            {
              "reference": 33,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.706690916541994, -30.844261732869562]),
            {
              "reference": 33,
              "system:index": "17"
            })]),
    floresta = /* color: #006400 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.7614431428421, -31.279010018748522]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76233900065307, -31.27874869077046]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76281643385772, -31.277332005444816]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.067048543655396, -31.16282014835947]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06594347354126, -31.16542742205913]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.06821798678589, -31.16140631501268]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.068593496047974, -31.161002358752903]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75085046224789, -31.309181543936162]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75135471754269, -31.308631555007025]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.752632821462825, -31.304148490786435]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75109654799355, -31.300560476207124]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75147742167366, -31.3014405323392]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76823540700807, -31.169580817215717]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76872893346681, -31.1711597661807]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.768943510188, -31.17380352876749]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76757021917238, -31.17648393493328]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.765660486353774, -31.177475298815896]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76606818212404, -31.176171836748132]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.77143260015382, -31.170205055999062]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.766951954988045, -31.163501412338313]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.764205372956795, -31.16239973375248]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76266042056422, -31.159829100569237]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76259163202108, -31.155015040984914]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76246288598836, -31.15251766082573]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.75408129766059, -31.13937388814149]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74586206777358, -31.132300016770998]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.748994887902974, -31.130114289180728]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74534708364272, -31.127046838644837]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74833169210671, -31.12027677339983]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74839606512307, -31.119358290217885]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74556365240334, -31.11524337645271]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74337496984719, -31.117190634666322]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74206605184792, -31.11720900483661]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73337569463967, -31.101189387057826]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72893395651101, -31.08599347885805]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72687401998757, -31.084357982335867]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.721586008809155, -31.071868203426032]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72117831303889, -31.074477976819875]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72394546752374, -30.945109848025208]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72774079597018, -30.715103944838077]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71447995460055, -30.738787676345954]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71602490699313, -30.738013066912586]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71143296515963, -30.732959509684058]),
            {
              "reference": 3,
              "system:index": "42"
            })]),
    aumi = /* color: #45c2a5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.51740856710632, -30.285964709162545]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51921101156433, -30.28162880160541]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52273006979187, -30.270917918211254]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52174301687439, -30.276403222520432]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52200050893982, -30.281554681861802]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52195778760787, -30.26019852680206]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52361002836104, -30.260782345267163]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52582016858931, -30.264007184727333]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52292338285323, -30.263636518911927]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52437255192135, -30.270386307977688]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.522055123332485, -30.27377761484575]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51990935612057, -30.267458200150777]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52164742756222, -30.274203836382302]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.52497336674069, -30.26821803399045]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.51999518680905, -30.26488213434555]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53768455999048, -30.231457646008177]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53764164464624, -30.233089099354782]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53648293035181, -30.234423904683588]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.53495943563135, -30.23642607869522]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.5342298747793, -30.237649609405185]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69579305682289, -30.925639662095527]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69894733462441, -30.92795893391701]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72352953118037, -30.47149751075355]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.714356376349436, -30.47025840678754]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71458168190669, -30.470628290219192]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.715858413397775, -30.470249159683746]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7162231938238, -30.470683772612777]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71704141992362, -30.47600107975955]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71516387361319, -30.47600107975955]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71593634980948, -30.47524748236503]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71078852733267, -30.483167909105124]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.711389342152, -30.483990788706546]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71201161464346, -30.48449930633052]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71190432628286, -30.483792003822156]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72287204277107, -30.511099177953934]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71737887870857, -30.505553085993327]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72746398460457, -30.508141301607434]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73372962486336, -30.50810432758369]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73441627037117, -30.513465414242958]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73862197410652, -30.512762943855456]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74038150322029, -30.5184934751292]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73536040794441, -30.52274494131215]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73364379417488, -30.518012862904307]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72420645978362, -30.51464075517728]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72578359868438, -30.516729625031335]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73304900198874, -30.52544646772589]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72429267069347, -30.54820195042052]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.725494300332144, -30.549513978060276]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72433558603771, -30.54239924937545]),
            {
              "reference": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72626677652843, -30.540237007757234]),
            {
              "reference": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72856274744518, -30.54230684687228]),
            {
              "reference": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71912137171276, -30.547980197518413]),
            {
              "reference": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.715855335389946, -30.556703679502277]),
            {
              "reference": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71405289093194, -30.556703679502277]),
            {
              "reference": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71581242004571, -30.56115671964029]),
            {
              "reference": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72248575607476, -30.559992666634034]),
            {
              "reference": 11,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.723880504762505, -30.557886249507614]),
            {
              "reference": 11,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.727903818284844, -30.561433873059716]),
            {
              "reference": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72556493202386, -30.564944414516646]),
            {
              "reference": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72921273628411, -30.564353174324086]),
            {
              "reference": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.725311902814575, -30.56752868047141]),
            {
              "reference": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72350945835657, -30.567556394028777]),
            {
              "reference": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7227584398324, -30.569625650612508]),
            {
              "reference": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.721567539029785, -30.571251464104343]),
            {
              "reference": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72722952893961, -30.57767971934538]),
            {
              "reference": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72666090062845, -30.57629417640268]),
            {
              "reference": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.727535584912275, -30.578859298770922]),
            {
              "reference": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71684590732898, -30.580809033358534]),
            {
              "reference": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71828357136096, -30.58160337674634]),
            {
              "reference": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71694246685352, -30.582314585652867]),
            {
              "reference": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69911368373032, -30.601461484199177]),
            {
              "reference": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.698148088484956, -30.603687002244445]),
            {
              "reference": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69609888079758, -30.605450758235907]),
            {
              "reference": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.687376481536276, -30.61595747547412]),
            {
              "reference": 11,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.686625463012106, -30.614812547108887]),
            {
              "reference": 11,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.685874444487936, -30.61636373712351]),
            {
              "reference": 11,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68582080030764, -30.617416316194095]),
            {
              "reference": 11,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67985034644246, -30.630201332797654]),
            {
              "reference": 11,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67950165927052, -30.63084756224186]),
            {
              "reference": 11,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67894375979542, -30.63138762210972]),
            {
              "reference": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67399640129333, -30.64789101229374]),
            {
              "reference": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.689118606339235, -30.69549695604966]),
            {
              "reference": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71253611768356, -30.723864452055608]),
            {
              "reference": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71262194837204, -30.721927616923754]),
            {
              "reference": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.711978218208465, -30.720848506186393]),
            {
              "reference": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70639603075564, -30.723810950919145]),
            {
              "reference": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70936820443979, -30.808348514082553]),
            {
              "reference": 11,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71038744386545, -30.807915415657128]),
            {
              "reference": 11,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.710494732226046, -30.809140986998294]),
            {
              "reference": 11,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.709786629046114, -30.809085698402313]),
            {
              "reference": 11,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.713187670077, -30.808016779293375]),
            {
              "reference": 11,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70484063562265, -30.807804837022896]),
            {
              "reference": 11,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.705033754671724, -30.80864338848918]),
            {
              "reference": 11,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72369368443728, -30.819024670131817]),
            {
              "reference": 11,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72419793973208, -30.819632780015606]),
            {
              "reference": 11,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.722534970142846, -30.822700912068804]),
            {
              "reference": 11,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.722534970142846, -30.82342877285472]),
            {
              "reference": 11,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.723039225437645, -30.823272145050204]),
            {
              "reference": 11,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72095783124209, -30.82046201456097]),
            {
              "reference": 11,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.720560864307885, -30.819568283695315]),
            {
              "reference": 11,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72039043400797, -30.823565312806412]),
            {
              "reference": 11,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.724671239595736, -30.82602525366291]),
            {
              "reference": 11,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72706377003702, -30.826108171919653]),
            {
              "reference": 11,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72751438115152, -30.82545403705956]),
            {
              "reference": 11,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72785770390543, -30.82687285913432]),
            {
              "reference": 11,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.727964992266024, -30.827434854288818]),
            {
              "reference": 11,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.727213973741854, -30.827241380918416]),
            {
              "reference": 11,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72214996312174, -30.826642532300973]),
            {
              "reference": 11,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72225725148233, -30.82793235545105]),
            {
              "reference": 11,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72072654064267, -30.832283625645026]),
            {
              "reference": 11,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7092264064755, -30.834344772937296]),
            {
              "reference": 11,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71892528115943, -30.83547015076798]),
            {
              "reference": 11,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72020201265052, -30.83396854435709]),
            {
              "reference": 11,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72285203515723, -30.834898990361683]),
            {
              "reference": 11,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71719793855384, -30.829727938073923]),
            {
              "reference": 11,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.711533113114385, -30.829801640352084]),
            {
              "reference": 11,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72280047172113, -30.899444732383515]),
            {
              "reference": 11,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.723395029266165, -30.900506497751262]),
            {
              "reference": 11,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.723137537200735, -30.899912709619553]),
            {
              "reference": 11,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72193054314403, -30.89869290074085]),
            {
              "reference": 11,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72158722039013, -30.900092227350115]),
            {
              "reference": 11,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71999246863857, -30.91517066581202]),
            {
              "reference": 11,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72279805926815, -30.91452634314528]),
            {
              "reference": 11,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71780915050045, -30.915617086829304]),
            {
              "reference": 11,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71832413463131, -30.914788675040402]),
            {
              "reference": 11,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71882302550808, -30.913992472505804]),
            {
              "reference": 11,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.718662092967186, -30.913573658108763]),
            {
              "reference": 11,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71993797692191, -30.923841097292538]),
            {
              "reference": 11,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71918695839774, -30.926031563348765]),
            {
              "reference": 11,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71703674377145, -30.931092369908892]),
            {
              "reference": 11,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71801306785287, -30.93026869370577]),
            {
              "reference": 11,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73224997260606, -30.941829612665643]),
            {
              "reference": 11,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71160027689236, -30.964270935893285]),
            {
              "reference": 11,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71123549646634, -30.965623304481923]),
            {
              "reference": 11,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71095654672879, -30.967306838614284]),
            {
              "reference": 11,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71210453218716, -30.967601224047304]),
            {
              "reference": 11,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71064541048306, -30.96451013173176]),
            {
              "reference": 11,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69917504468575, -30.97164103798512]),
            {
              "reference": 11,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69772665181771, -30.971300669149024]),
            {
              "reference": 11,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68712206788777, -30.99843116056458]),
            {
              "reference": 11,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68756195016621, -31.001042947480514]),
            {
              "reference": 11,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68741174646138, -31.001649901801407]),
            {
              "reference": 11,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68770361395483, -31.003015374019814]),
            {
              "reference": 11,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.688368801790524, -31.00548909729924]),
            {
              "reference": 11,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68955970259314, -31.0070615794718]),
            {
              "reference": 11,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.696611897432135, -31.02137159350872]),
            {
              "reference": 11,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69878985115223, -31.022465714361175]),
            {
              "reference": 11,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69978763290577, -31.023017367169082]),
            {
              "reference": 11,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70232018679751, -31.028932348061307]),
            {
              "reference": 11,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70149943083895, -31.028918557636374]),
            {
              "reference": 11,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70108637065066, -31.02841290734323]),
            {
              "reference": 11,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.701134650412925, -31.027286676588172]),
            {
              "reference": 11,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67842384891957, -31.07069215979243]),
            {
              "reference": 11,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68049592944441, -31.076139526484557]),
            {
              "reference": 11,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.681922864640335, -31.07712925938482]),
            {
              "reference": 11,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68107528659163, -31.080970167303303]),
            {
              "reference": 11,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67925226327037, -31.082216534053625]),
            {
              "reference": 11,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.66711335139523, -31.094989682677344]),
            {
              "reference": 11,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.668250608017544, -31.093740210670685]),
            {
              "reference": 11,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68924945536043, -31.098460076445757]),
            {
              "reference": 11,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68851989450838, -31.095906084434993]),
            {
              "reference": 11,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68888467493441, -31.100223944506272]),
            {
              "reference": 11,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.719134210314245, -31.112884526182278]),
            {
              "reference": 11,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72482049342582, -31.113490767425752]),
            {
              "reference": 11,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73490559932181, -31.11762412725896]),
            {
              "reference": 11,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73969066020438, -31.11775271778906]),
            {
              "reference": 11,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.739261506762, -31.11457464363658]),
            {
              "reference": 11,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73451936122367, -31.114023521686057]),
            {
              "reference": 11,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.766030811497025, -31.16133368499349]),
            {
              "reference": 11,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76393802303276, -31.200159402372964]),
            {
              "reference": 11,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.76711375850639, -31.195166956839838]),
            {
              "reference": 11,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.769967628898236, -31.19219338984854]),
            {
              "reference": 11,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79197583041205, -31.24886797898604]),
            {
              "reference": 11,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79389629206671, -31.24812501820222]),
            {
              "reference": 11,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.796669026048306, -31.247598501464353]),
            {
              "reference": 11,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79415311399234, -31.245777754058444]),
            {
              "reference": 11,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.79334308686984, -31.247061912048608]),
            {
              "reference": 11,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7927422720505, -31.245974965170458]),
            {
              "reference": 11,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.78437404112248, -31.244594504639416]),
            {
              "reference": 11,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.782857083808516, -31.246655895724825]),
            {
              "reference": 11,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82024561723705, -31.277022632852326]),
            {
              "reference": 11,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.82229482492443, -31.27951672651951]),
            {
              "reference": 11,
              "system:index": "181"
            })]),
    campo = /* color: #b8af4f */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-54.27706935251015, -31.49594053685169]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.282262109162986, -31.50373450711828]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.28316333139199, -31.50278316527928]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74161974996038, -30.60154402811378]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.739946051535085, -30.6006575012174]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.837229674500634, -31.818789640474023]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85027593914907, -31.814377146720997]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85001844708364, -31.81601818141853]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84624189679067, -31.810693829344338]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84014791790884, -31.812225523717654]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84199327771108, -31.812918424732818]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84323782269399, -31.81528883626402]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.83633918110769, -31.81457771919265]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.8725597316448, -31.81337427782901]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.874394362610985, -31.816546953053766]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.86014644753988, -31.798135655578054]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85539357316549, -31.799106775340185]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85772173059042, -31.799795215562717]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.86897627961691, -31.79868276655832]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.8769531692272, -31.797009508615538]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19715395518514, -31.8144836233719]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.20349469729634, -31.81017121484798]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18289533206197, -31.824320266830803]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.17860379763814, -31.81863173332392]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18589940615865, -31.80878536640268]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.199460654937944, -31.813015785991045]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19027677127095, -31.823663915466675]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.19104924746724, -31.825049540651506]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.21027532168599, -31.80156403022155]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.166759162628374, -31.802220538652083]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.16406622477742, -31.805749191549353]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.18032041140767, -31.80229348374532]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.179977088653764, -31.822715844147304]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60538059830508, -30.856539458747566]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60040241837344, -30.85768151852315]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6003595030292, -30.85867620466514]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59619671463809, -30.857055229362686]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59864288925967, -30.854071089543318]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60023075699649, -30.852155296523126]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59675461411319, -30.8524868788227]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.606539312599516, -30.85410793134176]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60911423325381, -30.85116054274669]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.61121708512149, -30.8491341605501]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6133628523334, -30.85171318500725]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59478050827823, -30.86663332234234]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.591304365394926, -30.866228114716474]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.589823786018705, -30.867167457050357]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.59100395798526, -30.85160265680986]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.593578878639555, -30.85237635151687]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.587356153725004, -30.854255298393987]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.58302170395694, -30.855655274096534]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60885674118838, -30.830489436072703]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.618813101051664, -30.83859628312491]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.629026952980375, -30.842649449869814]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64413315415225, -30.838301500683592]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64593559861026, -30.830784242507335]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65014130234561, -30.830120926756262]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65632111191592, -30.829605011336763]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.654776159523344, -30.8276150258903]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64069992661319, -30.836090603512105]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6399274504169, -30.84058604091967]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63069671330193, -30.881747738262643]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.637777745101246, -30.876922733544166]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6454595917199, -30.87789880372161]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.637563168380055, -30.88476784656984]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62125533756951, -30.87990616208016]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.622585713240895, -30.880495470309892]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.618809162947926, -30.87835921073153]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.627306401107106, -30.885725422005873]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63498824772576, -30.882742174682416]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.66382735905388, -30.872613172776042]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.662539898726735, -30.875523068391654]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.65863460240105, -30.88163724468994]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.628336369368824, -30.88009032129134]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.07202425223858, -31.77869218184674]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.07490494472057, -31.779535820666872]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08262434226543, -31.77655796928444]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.084598448100394, -31.776503245237837]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08414783698589, -31.77677686514705]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.072099354090994, -31.779699987326573]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.07313200456173, -31.780808104657233]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.92890285576722, -31.55223966918566]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.9293320092096, -31.552230526463575]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.935039749993294, -31.528474710453406]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.933280220879524, -31.529901327272118]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93169235314271, -31.530998709995565]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90160067225571, -31.814984183534385]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90140755320664, -31.815020651049206]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.90162212992783, -31.81516652096449]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.75673293334856, -31.797169137983182]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.75716208679094, -31.79804452315189]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.434701551060336, -31.640659527160654]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.43508778915848, -31.638540404132517]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.431954969029086, -31.6369692989904]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.43706189499344, -31.638321181752637]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.43637524948563, -31.638723089054306]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.43929349289383, -31.640878744027937]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.4395939003035, -31.63967304486233]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.87227932833283, -31.811112528915814]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.86970440767853, -31.81393655785827]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.718445248632655, -30.712410689608387]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71762985709213, -30.714476849607045]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6983179521849, -30.710971730605223]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69861835959457, -30.70927446931642]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70763058188461, -30.711663540497774]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69355036843532, -30.710259422637073]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.695653220302994, -30.711181841536373]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70308342751273, -30.69957063580267]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70153847512015, -30.697651763663146]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.698883287674086, -30.700291597601076]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.69227432466139, -30.695162257768924]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.692403070694105, -30.69195166894373]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.697681658035414, -30.69003264532271]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70785259461989, -30.692948070007624]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.711629144912855, -30.695162257768924]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70085739350905, -30.690327882209047]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.715877763992445, -30.691029066195277]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63321743369532, -30.728053906773084]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63373778224421, -30.727931708160252]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.632580277904715, -30.72282902020109]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.632049200519766, -30.722554634642876]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.632092115864005, -30.723220998215325]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.29906507590465, -30.69226431514584]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.727588926617365, -30.8717493981909]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73067883140252, -30.871491552753668]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73737362510369, -30.872559765049036]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73896149284051, -30.873259621821404]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72797516471551, -30.868986732406732]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.734326635662775, -30.86906040452774]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.706073151578266, -30.51832257862216]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.707360611905415, -30.51336845298206]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71190963839467, -30.52179771010114]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71371208285268, -30.517287409057037]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.71997772311147, -30.51018880649669]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.723840104092915, -30.509893020141725]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73019157504018, -30.511076160162634]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.715881075880866, -30.53612076143502]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.713628020308356, -30.534993372008127]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72130986692701, -30.5283396597301]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.7169325018147, -30.529799818954196]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.70877858640943, -30.530280372886498]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38662259064468, -30.367777447607722]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38756672821792, -30.366462970390835]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.39034549675735, -30.36526881732049]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.389186782462914, -30.365102190151386]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.39000058451024, -30.36881886170702]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38063053570541, -30.36323152683616]),
            {
              "reference": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38571600399764, -30.361972532745675]),
            {
              "reference": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38558725796493, -30.362916779832897]),
            {
              "reference": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.378677887542565, -30.366360427251557]),
            {
              "reference": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.37857059918197, -30.365527297866723]),
            {
              "reference": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.38309816799911, -30.365453241577917]),
            {
              "reference": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.07256592090094, -31.389849158824184]),
            {
              "reference": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.07187927539313, -31.38933627600534]),
            {
              "reference": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.082221873354555, -31.386808455473403]),
            {
              "reference": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0846251326319, -31.3850865677467]),
            {
              "reference": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.082032196941014, -31.39110764624886]),
            {
              "reference": 12,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.081774704875585, -31.391409875404744]),
            {
              "reference": 12,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08264374059641, -31.391135121666867]),
            {
              "reference": 12,
              "system:index": "158"
            })]),
    agric = /* color: #ffefc3 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-55.00411016135059, -30.78085850210668]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00488263754688, -30.784434815810616]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-55.00106317190967, -30.785983281519634]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64463088163622, -30.5960835691203]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64308592924364, -30.601846120986508]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.643429251997546, -30.588104085359998]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63630530485399, -30.57302993478904]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63604781278856, -30.562609667028415]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.62926718839891, -30.565122458118985]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.63278624662645, -30.55477525357435]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.640425177900866, -30.55440569014941]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.60746163088331, -30.574990593966163]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.64385384279737, -30.582749483757265]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.749866232627646, -30.58307458564345]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.74871093047082, -30.58511931914778]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.870339443917906, -30.547235931609162]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.855744470460394, -30.559752665738014]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.929108070841714, -31.678595318758884]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.93271295975773, -31.687067867625426]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.931082176676675, -31.683416001727103]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.899153160563394, -31.684730690001494]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.89726488541691, -31.684730690001494]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.88524858903019, -31.69305661666281]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.885935234538, -31.695393584622504]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.889368462077066, -31.698606819461542]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.891600059977456, -31.699483136922005]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.865164207926675, -31.640605426974524]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.86585085343449, -31.64192072119117]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.862417625895425, -31.640605426974524]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.864649223795816, -31.642651432160896]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68938970051774, -30.49281266984773]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.687158102617346, -30.495918927158563]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.66037892781266, -30.494291852364512]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.66415547810563, -30.50065208092024]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.77697285186768, -31.76346331156018]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.77525623809815, -31.76182134369861]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.77255257141114, -31.761748366673032]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.04529166137695, -31.677517303671095]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0575654498291, -31.684237052862514]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05657839691162, -31.68073115744512]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06434607421875, -31.67313459651993]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.111315129405284, -31.671380467509824]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06273678546399, -31.66212926791209]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06247929339856, -31.661983156801035]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05224865389954, -31.650795330624632]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0626341672052, -31.648164974689017]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.0622908444513, -31.647105504743195]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06271999789368, -31.649224432559876]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08834721477488, -31.685260949544396]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.08980633647898, -31.686539093547356]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.07723214061716, -31.694244103070226]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.949159050406976, -31.717910296085282]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.968895206703266, -31.728724696733188]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.927673510580455, -31.863050660853094]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.680128368947116, -31.06559928025771]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.678411755177585, -31.0648640714283]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.680643353077976, -31.063761247528298]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.3407237366046, -31.575111204797153]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.34710349707223, -31.572845444952716]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.414970061700046, -31.604644775343367]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.42604222051352, -31.603968591755375]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.401342188270036, -31.61384826610114]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.426190172584, -31.616927276202947]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.428840195090714, -31.615812631489156]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.708410494094984, -30.678480793441228]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.711672060257094, -30.680326229942146]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.67922806001295, -30.676044763265335]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.724117510086195, -30.687929056372127]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.723001711136, -30.685050386688946]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.722143404251234, -30.701583115023194]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72016929841627, -30.699959490327085]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72403167939772, -30.695309868480326]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.6813034252399, -30.833372044519052]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.68014471094547, -30.83256134650051]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72814682609246, -30.875432828696212]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72797516471551, -30.876906161256837]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.72939137107537, -30.87786381527349]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.73108645667596, -30.874178463320643]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.734712803264095, -30.87357069908481]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.072512276720644, -31.394034544259956]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06522023700209, -31.389262230616996]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06631457828016, -31.391240479042523]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06622874759169, -31.388895883742475]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06813848041029, -31.39118552826012]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.06794536136122, -31.39226622107764]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.068739295229626, -31.39336521796624]),
            {
              "reference": 21,
              "system:index": "85"
            })]),
    geom_limite = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-54.66864130560269, -30.205264512163527],
          [-54.72082636419644, -30.32150579532849],
          [-54.85540888372769, -30.447081062382164],
          [-55.13006708685269, -30.754410885813872],
          [-55.12457392279019, -30.85113543176813],
          [-55.18225214544644, -30.952473561908217],
          [-55.09985468450894, -31.241754178708785],
          [-54.87188837591519, -31.480975667548215],
          [-54.77026484075894, -31.452863576116005],
          [-54.61370966497769, -31.476290905224626],
          [-54.51483271185269, -31.569941565855707],
          [-54.48187372747769, -31.658822659679622],
          [-54.23193476263394, -31.847996074924524],
          [-54.09460566107144, -31.95059473274715],
          [-54.02868769232144, -31.919127760890696],
          [-53.975129342712066, -31.96690669895937],
          [-53.89959833685269, -32.01466078537585],
          [-53.862519479430816, -32.0623899999106],
          [-53.77325556341519, -32.10078811751355],
          [-53.72656366888394, -32.17172396660816],
          [-53.65789911810269, -32.08682703211134],
          [-53.56451532904019, -32.03328978060587],
          [-53.52331659857144, -31.993698638260202],
          [-53.52606318060269, -31.958751078007218],
          [-53.59198114935269, -31.942437663280113],
          [-53.64965937200894, -31.962246432826223],
          [-53.68811152044644, -31.90747059378258],
          [-53.730683541930816, -31.88181962793702],
          [-53.54528925482144, -31.575791613787633],
          [-53.58923456732144, -31.55472972350657],
          [-53.631806588805816, -31.585150926908007],
          [-53.758149362243316, -31.51961600555351],
          [-53.69143121092605, -31.446936946558505],
          [-53.9248906835823, -31.278076663030046],
          [-54.08144585936355, -31.282771320339478],
          [-54.2764531835823, -31.202930377591752],
          [-54.5126592382698, -30.934736776805643],
          [-54.5126592382698, -30.807434135199067],
          [-54.4302617773323, -30.82158722054178],
          [-54.3863164648323, -30.78148139727577],
          [-54.3094121679573, -30.828662981165937],
          [-54.26821343748855, -30.809793127562582],
          [-54.3203984960823, -30.64216089488993],
          [-54.2215215429573, -30.519203303107382],
          [-54.19680230467605, -30.410303286529906],
          [-54.5346318945198, -30.139896997130435]]]);
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
var version_out = '11' // mudar a cada nova versao que for exportada
var versionMosaics = '2' // versão dos mosaicos da col 10
var version_8522 = '11'
// ----------------------------------------------------------------------
// Versões das amostras
var version_samples = '02';

var regiao = 2
var collection_out = 10
var bioma = 'PAMPA'

// -----------------------------------------------------------------------
// Pocentagens calculadas no for de anos
var nSamplesMin = 0;
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
  var percent_Flo = 22;
  var percent_Umi = 0;
  var percent_Cam = 33;
  var percent_Agr = 44;
  var percent_Anv = 10; //260 amostras
  var percent_Agu =  30;
  }
    if (ano > 2023){ // ajustar para período 3
  var percent_Flo = 22;
  var percent_Umi = 0;
  var percent_Cam = 26;
  var percent_Agr = 47;
  var percent_Anv = 10; //260 amostras
  var percent_Agu = 30;
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
  // var acc = acura_region(classified, String(ano), regiao, version_out, calcula_confusao);
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
