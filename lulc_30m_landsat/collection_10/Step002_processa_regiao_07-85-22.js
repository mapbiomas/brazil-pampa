/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var controles = ee.FeatureCollection("users/evelezmartin/shp/Controles_regiao_cel_3km"),
    anv = /* color: #ea9999 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.91306658255707, -31.242973629284588]),
            {
              "reference": 22,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.914761738654484, -31.24229483285262]),
            {
              "reference": 22,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91566296088349, -31.241340840431956]),
            {
              "reference": 22,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91006250846039, -31.240019911942227]),
            {
              "reference": 22,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.924975590583195, -31.248275411919643]),
            {
              "reference": 22,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.929996685859074, -31.242129719469354]),
            {
              "reference": 22,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92405291068207, -31.239781408996116]),
            {
              "reference": 22,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91360302436005, -31.243890914009427]),
            {
              "reference": 22,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.901646666859385, -31.224391548590418]),
            {
              "reference": 22,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.901882701252696, -31.225217267627887]),
            {
              "reference": 22,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90553050551295, -31.222850187086294]),
            {
              "reference": 22,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91233258757472, -31.222097846747587]),
            {
              "reference": 22,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92353349242091, -31.221730849287447]),
            {
              "reference": 22,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92130189452052, -31.223786016711486]),
            {
              "reference": 22,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.916345172260996, -31.22486863158086]),
            {
              "reference": 22,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.91259007964015, -31.22697877746386]),
            {
              "reference": 22,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90859895262599, -31.229088876232254]),
            {
              "reference": 22,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.901174598072764, -31.227529242554446]),
            {
              "reference": 22,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89780574355006, -31.226703543716198]),
            {
              "reference": 22,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89808469328761, -31.22431815099352]),
            {
              "reference": 22,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89761262450099, -31.22233639433259]),
            {
              "reference": 22,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.896883063648936, -31.220721598925067]),
            {
              "reference": 22,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.901646666859385, -31.220152743972484]),
            {
              "reference": 22,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.90621715102076, -31.219547184938804]),
            {
              "reference": 22,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.909135394428965, -31.21936368143549]),
            {
              "reference": 22,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58123144135864, -31.93142818008518]),
            {
              "reference": 22,
              "system:index": "25"
            })]),
    arocho = /* color: #ff8c00 */ee.FeatureCollection([]),
    agua = /* color: #0000ff */ee.FeatureCollection([]),
    floresta = /* color: #006400 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.483198503874505, -31.72166724383271]),
            {
              "reference": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49246821822997, -31.72725223668969]),
            {
              "reference": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.492940287016594, -31.723346427393686]),
            {
              "reference": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49680266799804, -31.72225131113039]),
            {
              "reference": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49830470504638, -31.726850712484183]),
            {
              "reference": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50156627120849, -31.72977084884112]),
            {
              "reference": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50259623947021, -31.73411438142317]),
            {
              "reference": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.51426921310302, -31.73728977638988]),
            {
              "reference": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50379786910888, -31.719148411453272]),
            {
              "reference": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.49697432937499, -31.731376884613457]),
            {
              "reference": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.495643953703606, -31.730172360393922]),
            {
              "reference": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.500192980192864, -31.733858885143178]),
            {
              "reference": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50208125533935, -31.735756840684594]),
            {
              "reference": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50478492202636, -31.72597465363356]),
            {
              "reference": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.48937831344482, -31.72130219990274]),
            {
              "reference": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.3947061556876, -31.66020933503083]),
            {
              "reference": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39826812925938, -31.660136277994365]),
            {
              "reference": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39878311339024, -31.65626417286176]),
            {
              "reference": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.39921226683262, -31.647423479135007]),
            {
              "reference": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40088596525791, -31.64574292158167]),
            {
              "reference": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.40354671660069, -31.664227383571028]),
            {
              "reference": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.356614653238815, -31.594490572126436]),
            {
              "reference": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.3590608278604, -31.597597637226723]),
            {
              "reference": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35815960563139, -31.59536787159622]),
            {
              "reference": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.350863997110885, -31.599023197115994]),
            {
              "reference": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.35202271140532, -31.602751481358943]),
            {
              "reference": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34116512931303, -31.602568725806353]),
            {
              "reference": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.34103638328032, -31.598036273362734]),
            {
              "reference": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.36017662681059, -31.6076857457014]),
            {
              "reference": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.363566939005416, -31.60395765901078]),
            {
              "reference": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.37026173270659, -31.597926614522386]),
            {
              "reference": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.333697712470936, -31.573076235625674]),
            {
              "reference": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.10143865404407, -31.337910948991517]),
            {
              "reference": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.10019410906116, -31.33838745803512]),
            {
              "reference": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.10611642656604, -31.33376888411759]),
            {
              "reference": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38026557952453, -33.7155970947934]),
            {
              "reference": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37657485992004, -33.71718560168405]),
            {
              "reference": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37730442077209, -33.71379437159793]),
            {
              "reference": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37661777526428, -33.71497239302094]),
            {
              "reference": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38133846313049, -33.718078008391906]),
            {
              "reference": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38187490493347, -33.71661445652296]),
            {
              "reference": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.375459060969845, -33.72253990278675]),
            {
              "reference": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.366983280482785, -33.723253784368275]),
            {
              "reference": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36239973862037, -31.67920543268705]),
            {
              "reference": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36514632065162, -31.680154974707126]),
            {
              "reference": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35656325180396, -31.676868057110887]),
            {
              "reference": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35493246872291, -31.679570642305578]),
            {
              "reference": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38707606155738, -31.68260182669366]),
            {
              "reference": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39132468063697, -31.684610388333677]),
            {
              "reference": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.387676876376716, -31.689321207851005]),
            {
              "reference": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.371712368320075, -31.685267726340395]),
            {
              "reference": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37531725723609, -31.68161578962106]),
            {
              "reference": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36536089737281, -31.68062974207541]),
            {
              "reference": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39274088699683, -31.685413800820854]),
            {
              "reference": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.396946590732185, -31.68848131180798]),
            {
              "reference": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.385488193820564, -31.692132978415774]),
            {
              "reference": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38759104568824, -31.699362854377362]),
            {
              "reference": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39050928909644, -31.699253315005468]),
            {
              "reference": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.394457500766364, -31.703634788996336]),
            {
              "reference": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38999430496558, -31.702575951744926]),
            {
              "reference": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39003722030982, -31.70337920869744]),
            {
              "reference": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.391710918735114, -31.70578893781895]),
            {
              "reference": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39033762771949, -31.70104244188389]),
            {
              "reference": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3890072520481, -31.70027567744678]),
            {
              "reference": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5763069056073, -31.933586126691736]),
            {
              "reference": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.3603006842594, -33.28245298197719]),
            {
              "reference": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35568734227969, -33.28361918865123]),
            {
              "reference": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.26637405477186, -29.97384385687981]),
            {
              "reference": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.26626676641126, -29.974252787309368]),
            {
              "reference": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61661758456493, -30.723636577492634]),
            {
              "reference": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61660953793788, -30.723844093725127]),
            {
              "reference": 3,
              "system:index": "70"
            })]),
    aumi = /* color: #45c2a5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-51.7871008812877, -31.80626230515951]),
            {
              "reference": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7961238324138, -31.811431919877013]),
            {
              "reference": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.803679947542335, -31.820011343495384]),
            {
              "reference": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80399108378806, -31.818461545174046]),
            {
              "reference": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80404472796836, -31.816200616266585]),
            {
              "reference": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80372286288657, -31.81490602721293]),
            {
              "reference": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80234957187095, -31.82470616200082]),
            {
              "reference": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.06752665647377, -31.625234155991386]),
            {
              "reference": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.07113154538978, -31.6271708749411]),
            {
              "reference": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.06851370939125, -31.630605711273912]),
            {
              "reference": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.06817038663734, -31.633163485729035]),
            {
              "reference": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.062076407755505, -31.610616108997085]),
            {
              "reference": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03203566678871, -31.665275837032564]),
            {
              "reference": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.06516631254066, -31.67674445368408]),
            {
              "reference": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.070316153849255, -31.676525321415408]),
            {
              "reference": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.071603614176404, -31.67805923643606]),
            {
              "reference": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.08035834440101, -31.680469623127046]),
            {
              "reference": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.08859809049476, -31.680907868529474]),
            {
              "reference": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87912720898403, -31.151838457831534]),
            {
              "reference": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.894397714085905, -31.16081615492177]),
            {
              "reference": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.89692971939596, -31.16081615492177]),
            {
              "reference": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.87527457953792, -31.130725172903183]),
            {
              "reference": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.853622402146456, -31.130204571541263]),
            {
              "reference": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.066359654700086, -33.00736061615269]),
            {
              "reference": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.02653421524696, -32.990084284777296]),
            {
              "reference": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.99529184464149, -32.98864443780806]),
            {
              "reference": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.57976617210789, -32.17491232412393]),
            {
              "reference": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.59847726219578, -32.143231695102145]),
            {
              "reference": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.609806913074685, -32.15660284505246]),
            {
              "reference": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56980981224461, -32.169972033548106]),
            {
              "reference": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58663262718601, -32.178399426719935]),
            {
              "reference": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.52213136925744, -30.45982219364115]),
            {
              "reference": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.500478676000206, -32.12640406811176]),
            {
              "reference": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.50786605986152, -32.12431657702233]),
            {
              "reference": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.51078430326972, -32.12453464584369]),
            {
              "reference": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.51430336149726, -32.127296805806445]),
            {
              "reference": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.50039878996406, -32.12173605640006]),
            {
              "reference": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.496965562425, -32.09214571950113]),
            {
              "reference": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.495248948655465, -32.09701751533637]),
            {
              "reference": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.51112762602363, -32.09047325207663]),
            {
              "reference": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85436213329873, -31.114923931064205]),
            {
              "reference": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85560667828164, -31.115126007567454]),
            {
              "reference": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.85732329205117, -31.11534645417129]),
            {
              "reference": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.851486805234764, -31.115199489825617]),
            {
              "reference": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.860692146573875, -31.114611630167563]),
            {
              "reference": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.38635441940791, -31.562817646004973]),
            {
              "reference": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.386697742161815, -31.564645965081436]),
            {
              "reference": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.927527975286026, -31.201772216886503]),
            {
              "reference": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.92795712872841, -31.205809962752664]),
            {
              "reference": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.925811361516494, -31.211535924975255]),
            {
              "reference": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.16748733003311, -33.54734059461455]),
            {
              "reference": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.163882441117096, -33.54505148180575]),
            {
              "reference": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.16954726655655, -33.56250443523033]),
            {
              "reference": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14396972139053, -33.5221570189428]),
            {
              "reference": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.278559526559995, -33.116098853935156]),
            {
              "reference": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.276070436594175, -33.11753661819333]),
            {
              "reference": 11,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.272808870432065, -33.11660207410257]),
            {
              "reference": 11,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35495867969198, -33.17137222272098]),
            {
              "reference": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.465178808481, -33.58745479415646]),
            {
              "reference": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.351910581587745, -33.21834619778594]),
            {
              "reference": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.197731566610614, -33.18514499127412]),
            {
              "reference": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.19751698988942, -33.18435483307357]),
            {
              "reference": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.19679815787343, -33.18462420598804]),
            {
              "reference": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.91051955652806, -33.18603036650799]),
            {
              "reference": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.90994019938084, -33.18524021629299]),
            {
              "reference": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55112466701452, -32.64274855602226]),
            {
              "reference": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.41244168406818, -32.42435980379301]),
            {
              "reference": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40247552737185, -32.39766016436333]),
            {
              "reference": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40200345858523, -32.39726157229477]),
            {
              "reference": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40114515170046, -32.39666368089274]),
            {
              "reference": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40127389773318, -32.394571029809036]),
            {
              "reference": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40290468081423, -32.39446231933677]),
            {
              "reference": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40515773638674, -32.395748718203635]),
            {
              "reference": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40562980517336, -32.39648250089841]),
            {
              "reference": 11,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.407807758893455, -32.397198159758]),
            {
              "reference": 11,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40801160677859, -32.40017850084417]),
            {
              "reference": 11,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40722840174624, -32.39996109327082]),
            {
              "reference": 11,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40212147578188, -32.39891028261929]),
            {
              "reference": 11,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.399031570996726, -32.39946286560726]),
            {
              "reference": 11,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39863460406252, -32.399055222746625]),
            {
              "reference": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39943926676699, -32.39402747613892]),
            {
              "reference": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.399820140447105, -32.39438078639666]),
            {
              "reference": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39995961531588, -32.39350203781451]),
            {
              "reference": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39936416491457, -32.39339332605534]),
            {
              "reference": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36208238238446, -32.23473771757346]),
            {
              "reference": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36485042208783, -32.2368068395801]),
            {
              "reference": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36568727130047, -32.239819687360516]),
            {
              "reference": 11,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37006463641278, -32.24564545295679]),
            {
              "reference": 11,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3709873163139, -32.24856726945257]),
            {
              "reference": 11,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37178125018231, -32.24700655929294]),
            {
              "reference": 11,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3670605623161, -32.24849467887711]),
            {
              "reference": 11,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35873498553387, -32.243213558856816]),
            {
              "reference": 11,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.361674686614194, -32.245409525784254]),
            {
              "reference": 11,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35725440615765, -32.24148941538655]),
            {
              "reference": 11,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.381270022860704, -32.24099958546275]),
            {
              "reference": 11,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38534698056334, -32.24089069050504]),
            {
              "reference": 11,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38431701230162, -32.241362567712336]),
            {
              "reference": 11,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.371742816439806, -32.22397408890871]),
            {
              "reference": 11,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37221488522643, -32.25537257392412]),
            {
              "reference": 11,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34350451993102, -32.24180721899142]),
            {
              "reference": 11,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.341798634997545, -32.24089976508983]),
            {
              "reference": 11,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3418630080139, -32.24128997137846]),
            {
              "reference": 11,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34245309399718, -32.24280540781277]),
            {
              "reference": 11,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.337839694491564, -32.241362567712336]),
            {
              "reference": 11,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.338569255343614, -32.241008660036655]),
            {
              "reference": 11,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33976015614623, -32.24087254133271]),
            {
              "reference": 11,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33941683339232, -32.23979265905387]),
            {
              "reference": 11,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.337818236819444, -32.239357072652666]),
            {
              "reference": 11,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.337313981524645, -32.2383769956137]),
            {
              "reference": 11,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3400069193756, -32.237741754848486]),
            {
              "reference": 11,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34063992070311, -32.23792325266321]),
            {
              "reference": 11,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.341777177325426, -32.23843144461547]),
            {
              "reference": 11,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34192738103026, -32.23890333459718]),
            {
              "reference": 11,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34037169980162, -32.236572724754105]),
            {
              "reference": 11,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33672389554137, -32.23683589985347]),
            {
              "reference": 11,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.33658907910895, -32.185887251186855]),
            {
              "reference": 11,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34268305799078, -32.19620163274786]),
            {
              "reference": 11,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.29577658673834, -32.191734632115846]),
            {
              "reference": 11,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.29478416940283, -32.19075858144896]),
            {
              "reference": 11,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.269565350746255, -32.19639844836796]),
            {
              "reference": 11,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.26916838381205, -32.19497756953234]),
            {
              "reference": 11,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.26900208685313, -32.194364723569905]),
            {
              "reference": 11,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27068114969645, -32.19437380279947]),
            {
              "reference": 11,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27267671320353, -32.19321053767803]),
            {
              "reference": 11,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27386224958811, -32.19325139472209]),
            {
              "reference": 11,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.274280674194436, -32.19451795399016]),
            {
              "reference": 11,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27289665434275, -32.19495375525357]),
            {
              "reference": 11,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.273294028617954, -32.187014238246135]),
            {
              "reference": 11,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27433472571573, -32.18847610059556]),
            {
              "reference": 11,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27539688048563, -32.18988346142167]),
            {
              "reference": 11,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27741390166483, -32.18474421912373]),
            {
              "reference": 11,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.26553365950312, -32.182574023549904]),
            {
              "reference": 11,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.26681575541224, -32.179118863452416]),
            {
              "reference": 11,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.26735219721522, -32.179663706866314]),
            {
              "reference": 11,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.266874764010566, -32.18040378061515]),
            {
              "reference": 11,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27178323525772, -32.1779803785124]),
            {
              "reference": 11,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27353203553543, -32.17374405679914]),
            {
              "reference": 11,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27407384175644, -32.174257148052185]),
            {
              "reference": 11,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.271692040151216, -32.17177793700824]),
            {
              "reference": 11,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2713111664711, -32.17316285259612]),
            {
              "reference": 11,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.268831202215985, -32.17058269645594]),
            {
              "reference": 11,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.18161581426791, -29.7194848522035]),
            {
              "reference": 11,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.17852590948275, -29.72179558962032]),
            {
              "reference": 11,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.14204786688021, -29.73834189627764]),
            {
              "reference": 11,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.14058874517611, -29.74124839805216]),
            {
              "reference": 11,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.14788435369662, -29.74467647135865]),
            {
              "reference": 11,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.1805340048521, -29.720782266410815]),
            {
              "reference": 11,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.18025505511455, -29.722440763506338]),
            {
              "reference": 11,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.176886200591845, -29.723242050036212]),
            {
              "reference": 11,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.17647850482158, -29.722161243444265]),
            {
              "reference": 11,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.18291580645732, -29.71513571689169]),
            {
              "reference": 11,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.18358099429302, -29.715508436221874]),
            {
              "reference": 11,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.0914113293924, -29.809319874267178]),
            {
              "reference": 11,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.09113237965485, -29.80980395388008]),
            {
              "reference": 11,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.08548901188752, -29.812894560784013]),
            {
              "reference": 11,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.084587789658514, -29.813248298855424]),
            {
              "reference": 11,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.101067281846014, -29.81056730543172]),
            {
              "reference": 11,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.10042355168244, -29.811256178659345]),
            {
              "reference": 11,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.083536363724676, -29.810325267765723]),
            {
              "reference": 11,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.100015855912176, -29.81799571502247]),
            {
              "reference": 11,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35793771564318, -33.285590087412196]),
            {
              "reference": 11,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35665025531603, -33.284630428956284]),
            {
              "reference": 11,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35716523944689, -33.28451831863521]),
            {
              "reference": 11,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35819520770861, -33.2866169999599]),
            {
              "reference": 11,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35858233883617, -33.28852480705193]),
            {
              "reference": 11,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.358239016082265, -33.28943958106662]),
            {
              "reference": 11,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35958012058971, -33.28929608773769]),
            {
              "reference": 11,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36111434414623, -33.28902703710993]),
            {
              "reference": 11,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6214501673888, -30.810084278169203]),
            {
              "reference": 11,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.611880045623664, -30.81111631598801]),
            {
              "reference": 11,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.610850077361945, -30.810968882692638]),
            {
              "reference": 11,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6204665545013, -30.72490933668682]),
            {
              "reference": 11,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.62042363915706, -30.725149130016128]),
            {
              "reference": 11,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.62016614709163, -30.72517679843882]),
            {
              "reference": 11,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.62016614709163, -30.72490011385454]),
            {
              "reference": 11,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61822422776485, -30.724143838605723]),
            {
              "reference": 11,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61823495660091, -30.723811813451643]),
            {
              "reference": 11,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.288104326171826, -31.804757722802893]),
            {
              "reference": 11,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.291623384399365, -31.807128343755927]),
            {
              "reference": 11,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.28969219390864, -31.807055402479797]),
            {
              "reference": 11,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.28947761718745, -31.804721251236185]),
            {
              "reference": 11,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.285400659484814, -31.808295396341506]),
            {
              "reference": 11,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.27844961346941, -31.8113587843595]),
            {
              "reference": 11,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.28879221143084, -31.811067032270838]),
            {
              "reference": 11,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.28900678815203, -31.812088160549468]),
            {
              "reference": 11,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.29349308523174, -31.826620668616307]),
            {
              "reference": 11,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.29398661169048, -31.826894140159567]),
            {
              "reference": 11,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.29570322546001, -31.82554500601935]),
            {
              "reference": 11,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.298635646119926, -31.82536887495979]),
            {
              "reference": 11,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.29762713553033, -31.824274965852293]),
            {
              "reference": 11,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04598645496206, -31.67736585778519]),
            {
              "reference": 11,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04811076450186, -31.67605106521498]),
            {
              "reference": 11,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.050149243353175, -31.67605106521498]),
            {
              "reference": 11,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.04969863223867, -31.677438901270992]),
            {
              "reference": 11,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.052917283056544, -31.675996281787192]),
            {
              "reference": 11,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.051908772466945, -31.677895421755416]),
            {
              "reference": 11,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.60613681330392, -30.04121824367136]),
            {
              "reference": 11,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.604763522288295, -30.04329864043055]),
            {
              "reference": 11,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.60171653284738, -30.039769370122194]),
            {
              "reference": 11,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.62188674463937, -30.055148638668552]),
            {
              "reference": 11,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58527489947258, -30.022519548395792]),
            {
              "reference": 11,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58581134127556, -30.022872542513788]),
            {
              "reference": 11,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.586884224881516, -30.02201792301361]),
            {
              "reference": 11,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.58869169431882, -30.024437913781913]),
            {
              "reference": 11,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57376654506944, -30.023794343225635]),
            {
              "reference": 11,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57443173290513, -30.023422773889664]),
            {
              "reference": 11,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.57822974087022, -30.023831500082633]),
            {
              "reference": 11,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.576899365198834, -30.02574505939266]),
            {
              "reference": 11,
              "system:index": "207"
            })]),
    campo = /* color: #b8af4f */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-50.977208535551455, -31.213394729407003]),
            {
              "reference": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97730509507599, -31.212752423791198]),
            {
              "reference": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97612492310944, -31.21323874130143]),
            {
              "reference": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97655407655182, -31.216642893839193]),
            {
              "reference": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97889296281281, -31.21396362502313]),
            {
              "reference": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97981564271393, -31.21161461456203]),
            {
              "reference": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97404352891388, -31.21300934656108]),
            {
              "reference": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97537390458527, -31.21231198313302]),
            {
              "reference": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97985855805817, -31.21245879691369]),
            {
              "reference": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98305575120392, -31.225542659583414]),
            {
              "reference": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.983184497236635, -31.225799547594914]),
            {
              "reference": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98554484116974, -31.22458849799899]),
            {
              "reference": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98674647080841, -31.223450831212734]),
            {
              "reference": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98700396287384, -31.222533348023514]),
            {
              "reference": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98957888352814, -31.22245994898366]),
            {
              "reference": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98829142320099, -31.22139565650077]),
            {
              "reference": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.98854891526642, -31.222276451134643]),
            {
              "reference": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.01461570359997, -31.206564229417005]),
            {
              "reference": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.01384322740368, -31.209996150515682]),
            {
              "reference": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.01661126710705, -31.212216738980928]),
            {
              "reference": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.018778491991085, -31.214565734484264]),
            {
              "reference": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02064530946545, -31.211519369707528]),
            {
              "reference": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0233918914967, -31.21390508539707]),
            {
              "reference": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02613847352795, -31.214088599495426]),
            {
              "reference": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02463643647961, -31.220144364922408]),
            {
              "reference": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.021289039629025, -31.219630557461265]),
            {
              "reference": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.02120320894055, -31.21669446125358]),
            {
              "reference": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00377621703055, -31.226584083055577]),
            {
              "reference": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.0024887567034, -31.224969360216427]),
            {
              "reference": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00381913237479, -31.225354694309228]),
            {
              "reference": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00225272231009, -31.223941794955117]),
            {
              "reference": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00122275404837, -31.224510627105197]),
            {
              "reference": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00045027785208, -31.224198687317777]),
            {
              "reference": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.000364447163605, -31.225152852837503]),
            {
              "reference": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.001094008015656, -31.228308870159985]),
            {
              "reference": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00220980696585, -31.22955656886796]),
            {
              "reference": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00465598158743, -31.232455569903728]),
            {
              "reference": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.00169482283499, -31.234767367742144]),
            {
              "reference": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.999634886311554, -31.23495084133822]),
            {
              "reference": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.99624457411673, -31.232969307645092]),
            {
              "reference": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.994656706379914, -31.23267574356349]),
            {
              "reference": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.99345507674124, -31.231721653999116]),
            {
              "reference": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96907644815714, -31.21519270260841]),
            {
              "reference": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.969918661787815, -31.215697358649336]),
            {
              "reference": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97084134168894, -31.21559642765664]),
            {
              "reference": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97114174909861, -31.21511012227254]),
            {
              "reference": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96881358209456, -31.206787482521047]),
            {
              "reference": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97184984269942, -31.207264654348847]),
            {
              "reference": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.97014395776595, -31.2046860625575]),
            {
              "reference": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96903888765181, -31.204585119812023]),
            {
              "reference": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.966968222292316, -31.20433735079824]),
            {
              "reference": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.96677510324324, -31.206392896306507]),
            {
              "reference": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.9673973757347, -31.20709030338319]),
            {
              "reference": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.42969825600253, -30.513375790160197]),
            {
              "reference": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.43390395973788, -30.513819453461842]),
            {
              "reference": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.42901161049472, -30.518440825788947]),
            {
              "reference": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.42403343056308, -30.513819453461842]),
            {
              "reference": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.412156609045134, -30.494268618563314]),
            {
              "reference": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.4050541195737, -30.48766759127416]),
            {
              "reference": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.422606495367155, -30.49622850122642]),
            {
              "reference": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.41969898079501, -30.49718697019694]),
            {
              "reference": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.414413392479965, -30.479492059266992]),
            {
              "reference": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.41552919143016, -30.479381104486293]),
            {
              "reference": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.417632043297836, -30.478012651793172]),
            {
              "reference": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.41621583693797, -30.47808662270082]),
            {
              "reference": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.416923940117904, -30.480971444258564]),
            {
              "reference": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.41969197982127, -30.487498962049795]),
            {
              "reference": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.411409318383285, -30.48250628242398]),
            {
              "reference": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.41001456969554, -30.482894611135627]),
            {
              "reference": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.40440234296917, -30.490177739849624]),
            {
              "reference": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.737226361364804, -31.837919446569934]),
            {
              "reference": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.738427991003476, -31.83850278013075]),
            {
              "reference": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73941504392096, -31.838903819814604]),
            {
              "reference": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73930775556036, -31.83657047358607]),
            {
              "reference": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74658190640875, -31.838830903638097]),
            {
              "reference": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74111020001837, -31.837846529615533]),
            {
              "reference": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.736990326971494, -31.835276170158608]),
            {
              "reference": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73559557828375, -31.834948034010743]),
            {
              "reference": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7513455096192, -31.84056264726279]),
            {
              "reference": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.739667574909014, -31.821753153121]),
            {
              "reference": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.73771492674617, -31.821096783506963]),
            {
              "reference": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.734475461420104, -31.82174374738113]),
            {
              "reference": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.734711495813414, -31.82320232996635]),
            {
              "reference": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.737458077844664, -31.82285591868879]),
            {
              "reference": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.710262193538455, -31.826353423880967]),
            {
              "reference": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.72564734444788, -31.832014136024647]),
            {
              "reference": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76943451696011, -31.804138619357637]),
            {
              "reference": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.777187436768656, -31.806280540640486]),
            {
              "reference": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77937611932481, -31.804420503040653]),
            {
              "reference": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.8147285285239, -31.802458713287788]),
            {
              "reference": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.807904988790014, -31.802203405666038]),
            {
              "reference": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.800378581074014, -31.803197792112325]),
            {
              "reference": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80292131522013, -31.80281483347839]),
            {
              "reference": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80454136946513, -31.803234264280388]),
            {
              "reference": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80420877554728, -31.805304036226723]),
            {
              "reference": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.807856579807535, -31.803225146239726]),
            {
              "reference": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80128338958868, -31.804728380500418]),
            {
              "reference": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80159452583441, -31.807445472591503]),
            {
              "reference": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.80284979965338, -31.80803811629067]),
            {
              "reference": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77782986446086, -31.8137388411205]),
            {
              "reference": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.79650159520155, -31.816060708500334]),
            {
              "reference": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.79612608593946, -31.81553193408099]),
            {
              "reference": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.795836407365854, -31.817054431545305]),
            {
              "reference": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7957183901692, -31.818066377051494]),
            {
              "reference": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.79576130551344, -31.819625298427894]),
            {
              "reference": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.796308476152475, -31.819570599877764]),
            {
              "reference": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.79293962162977, -31.817273231513298]),
            {
              "reference": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.79271431607252, -31.818403689755954]),
            {
              "reference": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24657432688237, -30.241074018489403]),
            {
              "reference": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24902050150395, -30.24199162455672]),
            {
              "reference": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.250651284585004, -30.24010079057132]),
            {
              "reference": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.25570456636906, -30.254874279812785]),
            {
              "reference": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.255404158959394, -30.25587516359855]),
            {
              "reference": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.25591914309025, -30.257450608155217]),
            {
              "reference": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.25707785738469, -30.25919283506295]),
            {
              "reference": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27360085429303, -30.28356001626593]),
            {
              "reference": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27212027491681, -30.282615003941146]),
            {
              "reference": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.269995965377014, -30.275443731495702]),
            {
              "reference": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.26881579341046, -30.275499324770422]),
            {
              "reference": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27977235863823, -30.290879723087546]),
            {
              "reference": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.2786136443438, -30.289897724543533]),
            {
              "reference": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27556665490288, -30.28817457126246]),
            {
              "reference": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27596717736374, -30.301839591000395]),
            {
              "reference": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27719026467453, -30.302654736497267]),
            {
              "reference": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.27341371438156, -30.30309935845715]),
            {
              "reference": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.294558743852775, -30.33783043436748]),
            {
              "reference": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.2974984449331, -30.339423081777525]),
            {
              "reference": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.30093167247216, -30.340108282575315]),
            {
              "reference": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29348586024682, -30.34103422197963]),
            {
              "reference": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29185507716576, -30.340515696992245]),
            {
              "reference": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29138300837914, -30.335756250060317]),
            {
              "reference": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.28977368297021, -30.334348742826215]),
            {
              "reference": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.302026013750236, -30.348515491064795]),
            {
              "reference": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.300030450243156, -30.347052614613382]),
            {
              "reference": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.30513773706404, -30.3639722330327]),
            {
              "reference": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31451224514526, -30.43680084979423]),
            {
              "reference": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.299406043973384, -30.411858909909224]),
            {
              "reference": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.35260636214334, -30.52117668804405]),
            {
              "reference": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.418831897793076, -30.568475745364765]),
            {
              "reference": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.04577108420877, -31.325089882676448]),
            {
              "reference": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.048710785289096, -31.325603116071726]),
            {
              "reference": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.05306669272928, -31.32366014632163]),
            {
              "reference": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39973805904267, -32.41162921007212]),
            {
              "reference": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3988797521579, -32.41157486512246]),
            {
              "reference": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.398858294485784, -32.41098612607]),
            {
              "reference": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39922307491181, -32.41074157179606]),
            {
              "reference": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39920161723969, -32.410026020299426]),
            {
              "reference": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39951275348542, -32.41038832556375]),
            {
              "reference": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39972733020661, -32.41082308996101]),
            {
              "reference": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.397828326224065, -32.40886663367948]),
            {
              "reference": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39899776935456, -32.409020615572615]),
            {
              "reference": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.39941619396088, -32.408902864736795]),
            {
              "reference": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.403252848932745, -32.412518745764366]),
            {
              "reference": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40362835819483, -32.41227872435567]),
            {
              "reference": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40312382351895, -32.410788717376114]),
            {
              "reference": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40419670712491, -32.41377766704651]),
            {
              "reference": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37664618271863, -32.419781445600954]),
            {
              "reference": 12,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37868466156995, -32.42012559842629]),
            {
              "reference": 12,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.381259582224246, -32.41923804373001]),
            {
              "reference": 12,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.38265433091199, -32.42001691872854]),
            {
              "reference": 12,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3809806324867, -32.42331347797853]),
            {
              "reference": 12,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.349248121554666, -32.400440913763454]),
            {
              "reference": 12,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35311050253611, -32.40580345258748]),
            {
              "reference": 12,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.357487867648416, -32.40848460253801]),
            {
              "reference": 12,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.358260343844705, -32.40457154617774]),
            {
              "reference": 12,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35662956076365, -32.399716221922645]),
            {
              "reference": 12,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.358775327975565, -32.39986116075617]),
            {
              "reference": 12,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36220855551463, -32.40833967754986]),
            {
              "reference": 12,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36555595236521, -32.412542407723315]),
            {
              "reference": 12,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.3578597588588, -32.41549862907507]),
            {
              "reference": 12,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.35816016626847, -32.41263653992648]),
            {
              "reference": 12,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.360005526070715, -32.41100619539892]),
            {
              "reference": 12,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.342705996338665, -32.392478892252555]),
            {
              "reference": 12,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34716919213945, -32.39222522840374]),
            {
              "reference": 12,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.34725502282792, -32.396175056073595]),
            {
              "reference": 12,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.344465525452435, -32.39545032999325]),
            {
              "reference": 12,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36321756064046, -32.38467649216243]),
            {
              "reference": 12,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.36137220083821, -32.3852563426573]),
            {
              "reference": 12,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.315244380279594, -32.34657699444058]),
            {
              "reference": 12,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.31056660775762, -32.33609838963324]),
            {
              "reference": 12,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.316960994049126, -32.33878160816629]),
            {
              "reference": 12,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.317948046966606, -32.33838275639112]),
            {
              "reference": 12,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.300009433075004, -32.329281206403934]),
            {
              "reference": 12,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.30430096749883, -32.328991102112134]),
            {
              "reference": 12,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.30215520028692, -32.32605374380138]),
            {
              "reference": 12,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.21019670604806, -32.193261493247434]),
            {
              "reference": 12,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2160761082087, -32.19789183888638]),
            {
              "reference": 12,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.21867248653512, -32.199961799549165]),
            {
              "reference": 12,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.211527081719446, -32.19890866755269]),
            {
              "reference": 12,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.20918819545846, -32.19529524270041]),
            {
              "reference": 12,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2081153118525, -32.19318885849782]),
            {
              "reference": 12,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.81133628346229, -31.886492872738977]),
            {
              "reference": 12,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.809920077102426, -31.885600106604773]),
            {
              "reference": 12,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.82758841920886, -31.890583735832717]),
            {
              "reference": 12,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.82597909379992, -31.889053342287742]),
            {
              "reference": 12,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.82971272874865, -31.890164702033545]),
            {
              "reference": 12,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.83295283723864, -31.89273353142395]),
            {
              "reference": 12,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.829433779011104, -31.893863064925256]),
            {
              "reference": 12,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29879649928133, -33.10707931041138]),
            {
              "reference": 12,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.297659242659016, -33.107995981953245]),
            {
              "reference": 12,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29523452570955, -33.10754663435316]),
            {
              "reference": 12,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.29414018443148, -33.10668388051933]),
            {
              "reference": 12,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.30396779826204, -33.10731297269295]),
            {
              "reference": 12,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.30628522685091, -33.11196811479024]),
            {
              "reference": 12,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.30401071360628, -33.11353175582864]),
            {
              "reference": 12,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.301950777082844, -33.114376469867956]),
            {
              "reference": 12,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.39719092799233, -33.699571442656776]),
            {
              "reference": 12,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.388479113111956, -33.7122453479838]),
            {
              "reference": 12,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38753497553871, -33.71403025481933]),
            {
              "reference": 12,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36443496130707, -33.69862785850096]),
            {
              "reference": 12,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.385720972049256, -33.710338027340015]),
            {
              "reference": 12,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38108611487152, -33.68798735771767]),
            {
              "reference": 12,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.371301416385194, -33.676845555908905]),
            {
              "reference": 12,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.39924012347605, -33.737411788676155]),
            {
              "reference": 12,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.421298610414524, -33.73362877280978]),
            {
              "reference": 12,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.922171803320346, -33.18590568976909]),
            {
              "reference": 12,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92577669223636, -33.18310421195261]),
            {
              "reference": 12,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18652723689297, -33.029857286314524]),
            {
              "reference": 12,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18825457949856, -33.026025370159054]),
            {
              "reference": 12,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18857644458035, -33.02678996767338]),
            {
              "reference": 12,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.122180759557374, -32.83597333470511]),
            {
              "reference": 12,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12707310880054, -32.83539639519919]),
            {
              "reference": 12,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12720185483325, -32.83330495806281]),
            {
              "reference": 12,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.12870389188159, -32.83665844549893]),
            {
              "reference": 12,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14179307187427, -32.83925460684514]),
            {
              "reference": 12,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14398175443042, -32.83975940717918]),
            {
              "reference": 12,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14548379147876, -32.84249970176051]),
            {
              "reference": 12,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14694291318286, -32.84516780203889]),
            {
              "reference": 12,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1449688073479, -32.835288218624456]),
            {
              "reference": 12,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.139604389318116, -32.83247558141919]),
            {
              "reference": 12,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11385518277515, -32.84130984739952]),
            {
              "reference": 12,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.117159664281495, -32.84419431528474]),
            {
              "reference": 12,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1215370293938, -32.8457446780398]),
            {
              "reference": 12,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.124111950048096, -32.842247309744025]),
            {
              "reference": 12,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.130892574437745, -32.84152618574241]),
            {
              "reference": 12,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1147574414278, -32.81316011650328]),
            {
              "reference": 12,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11604490175495, -32.812655164965406]),
            {
              "reference": 12,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.116087817099185, -32.81680289614826]),
            {
              "reference": 12,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11068048372516, -32.81297977699772]),
            {
              "reference": 12,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.134798907187076, -32.80807440208531]),
            {
              "reference": 12,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.125078581717105, -32.81734389028921]),
            {
              "reference": 12,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.120357893850894, -32.81929144192097]),
            {
              "reference": 12,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11454286470661, -32.82336673589195]),
            {
              "reference": 12,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11394204988727, -32.82329460842035]),
            {
              "reference": 12,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.110079668905826, -32.81736192337051]),
            {
              "reference": 12,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.48450541128055, -32.45660418742076]),
            {
              "reference": 12,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.488625284327426, -32.464335093805154]),
            {
              "reference": 12,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.49464892713452, -32.4518240913612]),
            {
              "reference": 12,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.4951853689375, -32.45278375220448]),
            {
              "reference": 12,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.404825142468894, -32.39643720584301]),
            {
              "reference": 12,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.405307940091575, -32.39731592586228]),
            {
              "reference": 12,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.4057263646979, -32.398094990067705]),
            {
              "reference": 12,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40891282900759, -32.398783459817004]),
            {
              "reference": 12,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.40809743746706, -32.39788663634567]),
            {
              "reference": 12,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.17937196865825, -29.73035973817051]),
            {
              "reference": 12,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.17859949246196, -29.731067796294536]),
            {
              "reference": 12,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.173063413055225, -29.731850381038704]),
            {
              "reference": 12,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.170273915679736, -29.732260303944518]),
            {
              "reference": 12,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.169587270171924, -29.740272097130795]),
            {
              "reference": 12,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.169544354827686, -29.741129134787904]),
            {
              "reference": 12,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.17180100457921, -29.712583397021447]),
            {
              "reference": 12,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.17135039346471, -29.71396248669185]),
            {
              "reference": 12,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.17379656808629, -29.714353846525896]),
            {
              "reference": 12,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19057381796487, -29.720587443895187]),
            {
              "reference": 12,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.19049871611245, -29.72114649200728]),
            {
              "reference": 12,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.189672595735864, -29.720671301310524]),
            {
              "reference": 12,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12743945657624, -29.812616868329865]),
            {
              "reference": 12,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12600179254426, -29.813305727438177]),
            {
              "reference": 12,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12454267084016, -29.818667495555303]),
            {
              "reference": 12,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12675281106843, -29.818313776656964]),
            {
              "reference": 12,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.13121600686921, -29.81864887880237]),
            {
              "reference": 12,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12767549096955, -29.819077063242435]),
            {
              "reference": 12,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.121581512087715, -29.81339881614288]),
            {
              "reference": 12,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.122075038546456, -29.813771170095063]),
            {
              "reference": 12,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12600179254426, -29.81928184645675]),
            {
              "reference": 12,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.126860099429024, -29.819542479031885]),
            {
              "reference": 12,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.12804027139558, -29.814999928299056]),
            {
              "reference": 12,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.128555255526436, -29.81349190476092]),
            {
              "reference": 12,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92899708438396, -31.92240311080719]),
            {
              "reference": 12,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.91946987796306, -31.915482092419943]),
            {
              "reference": 12,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92592863727092, -31.92070933075236]),
            {
              "reference": 12,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.924555346255296, -31.920454350408413]),
            {
              "reference": 12,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.93893198657512, -31.916046721323074]),
            {
              "reference": 12,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.95088390994548, -31.918796960942995]),
            {
              "reference": 12,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92828898120403, -31.921984221868936]),
            {
              "reference": 12,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92869667697429, -31.920782182149363]),
            {
              "reference": 12,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92818169284343, -31.921000735994163]),
            {
              "reference": 12,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92753796267986, -31.92125571482338]),
            {
              "reference": 12,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.92504887271404, -31.920144730469033]),
            {
              "reference": 12,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.552908677587524, -31.928889021087365]),
            {
              "reference": 12,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55222203207971, -31.93209414285353]),
            {
              "reference": 12,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.553638238439575, -31.926557953261227]),
            {
              "reference": 12,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.55449654532434, -31.925647363841044]),
            {
              "reference": 12,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.56501080466272, -31.93351455881286]),
            {
              "reference": 12,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58216485009582, -31.93338126051919]),
            {
              "reference": 12,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.58122071252258, -31.93198815843836]),
            {
              "reference": 12,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.60425552354248, -31.920692325898003]),
            {
              "reference": 12,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.597303237775876, -31.926301715657985]),
            {
              "reference": 12,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.59700283036621, -31.92437125000304]),
            {
              "reference": 12,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5433220354025, -31.93935458367921]),
            {
              "reference": 12,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.543386408418854, -31.94022861936595]),
            {
              "reference": 12,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54169125232144, -31.94153965731075]),
            {
              "reference": 12,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54585248536551, -31.93639063989867]),
            {
              "reference": 12,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54654880413819, -31.936307605863504]),
            {
              "reference": 12,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.54551883587647, -31.937691537740047]),
            {
              "reference": 12,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35785450963782, -33.282470920062714]),
            {
              "reference": 12,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36005524487644, -33.278919749873594]),
            {
              "reference": 12,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36005524487644, -33.27921573979409]),
            {
              "reference": 12,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61994813034046, -30.813327788267824]),
            {
              "reference": 12,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61977646896351, -30.814064934381452]),
            {
              "reference": 12,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61844609329212, -30.81498635906886]),
            {
              "reference": 12,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.61775944778431, -30.813806933885118]),
            {
              "reference": 12,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.258212083073296, -29.97344284265518]),
            {
              "reference": 12,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.25782584497515, -29.97418635427632]),
            {
              "reference": 12,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.2555298740584, -29.969297663383493]),
            {
              "reference": 12,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.25791167566363, -29.97024567927718]),
            {
              "reference": 12,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.254757397862114, -29.969279074746144]),
            {
              "reference": 12,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.25977849313799, -29.970580270962433]),
            {
              "reference": 12,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.260722630711236, -29.9724762692287]),
            {
              "reference": 12,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.260958665104546, -29.97158403925757]),
            {
              "reference": 12,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.243057670180306, -29.98557184273736]),
            {
              "reference": 12,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.242092074934945, -29.986482532485628]),
            {
              "reference": 12,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.244817199294076, -29.987058678829026]),
            {
              "reference": 12,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24668401676844, -29.987634821829314]),
            {
              "reference": 12,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24743503529261, -29.98707726413929]),
            {
              "reference": 12,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.24119085270594, -29.990106623212316]),
            {
              "reference": 12,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.2422637363119, -29.988564077688306]),
            {
              "reference": 12,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71655034127808, -32.03196349051928]),
            {
              "reference": 12,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.716142645507816, -32.03218177975988]),
            {
              "reference": 12,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71322440209961, -32.03332778973652]),
            {
              "reference": 12,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71245192590332, -32.033546075725084]),
            {
              "reference": 12,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71185111108399, -32.03370978987504]),
            {
              "reference": 12,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.723840249716496, -32.03055312418013]),
            {
              "reference": 12,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.72323943489716, -32.03069865263951]),
            {
              "reference": 12,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31822979635811, -30.035908497342437]),
            {
              "reference": 12,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31780064291573, -30.03607103862243]),
            {
              "reference": 12,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31829416937447, -30.036112834908476]),
            {
              "reference": 12,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.319383146234514, -30.036242867685672]),
            {
              "reference": 12,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31906664557076, -30.03582026053594]),
            {
              "reference": 12,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31438889792135, -30.04936192557644]),
            {
              "reference": 12,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31331601431539, -30.048795427964645]),
            {
              "reference": 12,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.312457707430625, -30.04836823090127]),
            {
              "reference": 12,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.31407776167562, -30.049343351935626]),
            {
              "reference": 12,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.30560852698965, -31.798871722221957]),
            {
              "reference": 12,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.303548590466214, -31.799236460330242]),
            {
              "reference": 12,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.30162309058907, -31.800403612602715]),
            {
              "reference": 12,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0322613460263, -31.687860671142378]),
            {
              "reference": 12,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03159079377258, -31.687970223963774]),
            {
              "reference": 12,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03181609932983, -31.688280622922214]),
            {
              "reference": 12,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.03237936322296, -31.688344528461254]),
            {
              "reference": 12,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.593991739332246, -30.025942745583237]),
            {
              "reference": 12,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.59321926313596, -30.026407195229908]),
            {
              "reference": 12,
              "system:index": "351"
            })]),
    agric = /* color: #ffefc3 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.07438999119681, -32.936177258833624]),
            {
              "reference": 21,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.04949909153861, -32.94957488397558]),
            {
              "reference": 21,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.08692127171439, -32.943236475638585]),
            {
              "reference": 21,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09241443577689, -32.96253839460648]),
            {
              "reference": 21,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.05670886937064, -32.93084645642585]),
            {
              "reference": 21,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.120738562974154, -32.97204376042028]),
            {
              "reference": 21,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.43179954644267, -33.62761374653268]),
            {
              "reference": 21,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.428881303034466, -33.62604145150681]),
            {
              "reference": 21,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.438811246061405, -33.580504140140405]),
            {
              "reference": 21,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4494542514325, -33.57435437396789]),
            {
              "reference": 21,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.44610685458191, -33.57549854968875]),
            {
              "reference": 21,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.286285104487106, -33.584936949686096]),
            {
              "reference": 21,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.38413208935039, -33.39796998897325]),
            {
              "reference": 21,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.713549339483734, -31.817156383563503]),
            {
              "reference": 21,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.160251872048576, -33.008680448674426]),
            {
              "reference": 21,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.16746164988061, -33.016165696280325]),
            {
              "reference": 21,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.15716196726342, -33.00464966758056]),
            {
              "reference": 21,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.101887003884514, -33.0147262749305]),
            {
              "reference": 21,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.09673716257592, -33.01443838784082]),
            {
              "reference": 21,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.07304789255639, -32.99212427966815]),
            {
              "reference": 21,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.07974268625756, -32.991548357011]),
            {
              "reference": 21,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71539021007614, -31.804841420641935]),
            {
              "reference": 21,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71702099315719, -31.797327980725317]),
            {
              "reference": 21,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.707965855522914, -31.791528354526218]),
            {
              "reference": 21,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70161438457565, -31.79473825550452]),
            {
              "reference": 21,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.70200062267379, -31.786932165887276]),
            {
              "reference": 21,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71976757518844, -31.790105749127726]),
            {
              "reference": 21,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.739680294915004, -31.805570848291662]),
            {
              "reference": 21,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.76392746440963, -31.807284980599782]),
            {
              "reference": 21,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77216721050338, -31.815381090518866]),
            {
              "reference": 21,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77298260204391, -31.814214127456736]),
            {
              "reference": 21,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7752141999443, -31.81042139567303]),
            {
              "reference": 21,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.77130622965109, -31.798720454906935]),
            {
              "reference": 21,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.741694642126674, -31.79492708703603]),
            {
              "reference": 21,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.74697322946798, -31.792009005805188]),
            {
              "reference": 21,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.722425652563686, -31.787887059108638]),
            {
              "reference": 21,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.721481514990444, -31.79000277152108]),
            {
              "reference": 21,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71427173715841, -31.787704667840647]),
            {
              "reference": 21,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.71482963663351, -31.78781410264462]),
            {
              "reference": 21,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.7135850916506, -31.80335252950876]),
            {
              "reference": 21,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.6926546258023, -31.79633701032534]),
            {
              "reference": 21,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69166757288482, -31.798197210646688]),
            {
              "reference": 21,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69394208612945, -31.793491925648045]),
            {
              "reference": 21,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.6915388268521, -31.78539389763409]),
            {
              "reference": 21,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.69055177393462, -31.786926011394087]),
            {
              "reference": 21,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.67218400660064, -31.78386175848603]),
            {
              "reference": 21,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.671025292306204, -31.78342399978072]),
            {
              "reference": 21,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.67793466272857, -31.77835314374641]),
            {
              "reference": 21,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.67596055689361, -31.779447596635734]),
            {
              "reference": 21,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.67531682673003, -31.780213705951997]),
            {
              "reference": 21,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.510894292636245, -31.65705224088343]),
            {
              "reference": 21,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.51424168948683, -31.653837567721588]),
            {
              "reference": 21,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.509606832309096, -31.654641246437173]),
            {
              "reference": 21,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.51098012332472, -31.65047665415734]),
            {
              "reference": 21,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.508662694735854, -31.649380677805688]),
            {
              "reference": 21,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54023743529063, -31.677700920085886]),
            {
              "reference": 21,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54564476866465, -31.67514437110811]),
            {
              "reference": 21,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.544528969714456, -31.677847006472874]),
            {
              "reference": 21,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.54573059935313, -31.67054240557508]),
            {
              "reference": 21,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.542039879748636, -31.67908873148209]),
            {
              "reference": 21,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.552768715808206, -31.681645171856673]),
            {
              "reference": 21,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50679640635204, -31.65099900391788]),
            {
              "reference": 21,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.50568060740184, -31.646103570343595]),
            {
              "reference": 21,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.504650639140124, -31.646395842270937]),
            {
              "reference": 21,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.470207410526335, -31.611247444804953]),
            {
              "reference": 21,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.46900578088766, -31.60996826513208]),
            {
              "reference": 21,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.47411270685202, -31.614427043843076]),
            {
              "reference": 21,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.47200985498434, -31.61344028335051]),
            {
              "reference": 21,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.47200985498434, -31.61574270822761]),
            {
              "reference": 21,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.476215558719694, -31.613257548778012]),
            {
              "reference": 21,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.46415634698874, -31.61782580546908]),
            {
              "reference": 21,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.156079506562655, -29.923892796658638]),
            {
              "reference": 21,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.15865442721695, -29.922553794717672]),
            {
              "reference": 21,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.15479204623551, -29.932837179228574]),
            {
              "reference": 21,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.149813866303866, -29.937671879515015]),
            {
              "reference": 21,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.30222423494204, -29.961275116743824]),
            {
              "reference": 21,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29844768464907, -29.958300650433344]),
            {
              "reference": 21,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29801853120669, -29.964249494043322]),
            {
              "reference": 21,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.29964931428774, -29.962911035274008]),
            {
              "reference": 21,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.30076511323794, -29.96491871666833]),
            {
              "reference": 21,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.297589377764304, -29.971461989315777]),
            {
              "reference": 21,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.374984070582876, -30.186796685186994]),
            {
              "reference": 21,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.376529022975454, -30.171289493842778]),
            {
              "reference": 21,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.37137918166686, -30.176186765305705]),
            {
              "reference": 21,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.37558488540221, -30.179080493137363]),
            {
              "reference": 21,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63575486800101, -30.491306176268438]),
            {
              "reference": 21,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63069085738089, -30.498406157186682]),
            {
              "reference": 21,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.622966095418, -30.494264564619755]),
            {
              "reference": 21,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.64300756117728, -30.494264564619755]),
            {
              "reference": 21,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63691358229544, -30.49252652236299]),
            {
              "reference": 21,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.6365273441973, -30.493340077922827]),
            {
              "reference": 21,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-50.63699941298392, -30.49345101679028]),
            {
              "reference": 21,
              "system:index": "91"
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
          [-50.02869170013813, -29.831768133537253]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Coleção 10
// Script para fazer ajuste fino da classificação das regiões
// Para rodar veja instruções no final do arquivo 
//baseado na versao R0X feita pelo Juliano, customizada para calcular a area pelo limite sem buffer
//customizada para incluir mosaico 2017 com duas versões de bandas RGB falsa cor
     
var version_out = '09'//mudar a cada nova versao que for exportada
var version = '2' //versão dos mosaicos
var version_samples = '02'
//var ano_base = 2000
var RFtrees = 100//60, 100 
var classe_diferenca = 12 // classe para mapa de diferenças

var desvio = 0
var nSamplesMin = 50;
var nSamplesMax = 2000;

// Bloco dos ano para colocar no nome de saída
var bloco = '_85-22'
var regiao = 7 
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
var ano_calcula_area = '1990'
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
    var anos = [1990, 1992,1993]
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

// Bloco 1Aa 
if (ano <= 1987){ // ajustar para período 1
    var percent_Flo = 3
    var percent_Umi = 4
    var percent_Cam = 16
    var percent_Agr = 35
    var percent_Anv = 12
    var percent_Agu = 47
    
 }
  // Bloco 1Ab
 if (ano > 1987 && ano <= 1990){ // ajustar para período 1 //CUIDADO data alterada na col9!!
    var percent_Flo = 5
    var percent_Umi = 5
    var percent_Cam = 16
    var percent_Agr = 35
    var percent_Anv = 12
    var percent_Agu = 47
 }
 
 // Bloco 1B
 if (ano > 1990 && ano <= 1993){ // ajustar para período 1 //CUIDADO data alterada na col9!!
    var percent_Flo = 13
    var percent_Umi = 5
    var percent_Cam = 20
    var percent_Agr = 32
    var percent_Anv = 12
    var percent_Agu = 47
 }
 
 // Bloco 1C
  if (ano > 1993 && ano <= 1998){// ajustar para período 2//CUIDADO data alterada na col9!!
    var percent_Flo = 18
    var percent_Umi = 6
    var percent_Cam = 19
    var percent_Agr = 32
    var percent_Anv = 10
    var percent_Agu = 47
  
 }
  // Bloco 2 A
  if (ano > 1998 && ano <= 2002){// ajustar para período 2//CUIDADO data alterada na col9!!
   var percent_Flo = 18
    var percent_Umi = 5
    var percent_Cam = 18
    var percent_Agr = 32
    var percent_Anv = 10
    var percent_Agu = 47
 }
 // Bloco 2 Ba1
  if (ano > 2002 && ano <= 2006){// ajustar para período 2
    var percent_Flo = 22
    var percent_Umi = 6
    var percent_Cam = 22
    var percent_Agr = 40
    var percent_Anv = 10
    var percent_Agu = 41
 }  
  // Bloco 2 Ba2
  if (ano > 2006 && ano <= 2010){// ajustar para período 2
    var percent_Flo = 22
    var percent_Umi = 6
    var percent_Cam = 15
    var percent_Agr = 40
    var percent_Anv = 10
    var percent_Agu = 41
 } 
 
  // Bloco 2 Bb
  if (ano > 2010 && ano <= 2012){// ajustar para período 2
    var percent_Flo = 22
    var percent_Umi = 6
    var percent_Cam = 15
    var percent_Agr = 40
    var percent_Anv = 10
    var percent_Agu = 41
 } 
 
   // Bloco 3A
  if (ano > 2012 && ano <= 2022){ // ajustar para período 3
    var percent_Flo = 24
    var percent_Umi = 7
    var percent_Cam = 20
    var percent_Agr = 32
    var percent_Anv = 10
    var percent_Agu = 41
 } 
 
    // Bloco 3B
//   if (ano > 2022){ // ajustar para período 3
//     var percent_Flo = 21
//     var percent_Umi = 5
//     var percent_Cam = 26
//     var percent_Agr = 32
//     var percent_Anv = 13
//     var percent_Agu = 43
// } 
  
  
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

    //print('SS_Flo_samples',SS_Flo_samples)
    //print('SS_Flo',SS_Flo)
    //Map.addLayer(SS_Flo,{color:'0000ff'},'todos')
    //Map.addLayer(SS_Flo_samples,{color:'ff0000'},'selecao')
    
    //cria variavel com todas as amostras estáveis
    var SS_amostras = SS_Flo_samples
            .merge(SS_Umi_samples)
            .merge(SS_Cam_samples)
            .merge(SS_Agr_samples)
            .merge(SS_Anv_samples)
            //.merge(SS_Afr_samples)
            .merge(SS_Agu_samples)
   
    deficit_amostras = deficit_amostras.set(String(ano),[
      SS_Flo_samples.size().subtract(n_samples_Flo),
      SS_Umi_samples.size().subtract(n_samples_Umi),
      SS_Cam_samples.size().subtract(n_samples_Cam),
      SS_Agr_samples.size().subtract(n_samples_Agr),
      SS_Anv_samples.size().subtract(n_samples_Anv),
//      SS_Afr_samples.size().subtract(n_samples_Afr),
      SS_Agu_samples.size().subtract(n_samples_Agu)])
  }

  if(usar_complementares == 1){
  
    var pontos_complementares = floresta
                .merge(aumi)
                .merge(campo)
                .merge(agric)
                .merge(anv)
//                .merge(arocho)
                .merge(agua)
                
    // Samples 
    var trainingComp = mosaicoTotal.sampleRegions({
        'collection': pontos_complementares,
        'properties': ['reference'],
        'tileScale': 4,
        'scale': 30
    });
    var complementares = trainingComp.map(function (feature) {return feature.set('comp_coll', '7')});
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
    'description': regiao + '-'+'RF_PROB_col' + collection_out + bloco + '_v' + version_out,
    'assetId': dirout + '0'+ regiao + '_' + 'RF_PROB_col' + collection_out + bloco + '_v' + version_out,
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
}

//***************************************************************
//***************************************************************
//***************************************************************

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

 