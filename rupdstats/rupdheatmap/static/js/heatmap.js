/* Data points defined as an array of LatLng objects */
var weights

function setWeights(jsonData) {
  let temp = jsonData
  weights = temp
  console.log("WEIGHTS SET")
  console.log(weights)
}

function getHeatmapData() {

  return [
  // {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
  // {location: new google.maps.LatLng(37.785, -122.435), weight: 3},
  // 'Entrance 1'
  {location: new google.maps.LatLng(29.720595860657813, -95.39389445408264), weight: weights.entrance1 ? weights.entrance1 : 0},
  // 'Entrance 2'
  {location: new google.maps.LatLng(29.71862984400406, -95.39552578841001), weight: weights.entrance2 ? weights.entrance2 : 0},
  // 'Entrance 3'
  {location: new google.maps.LatLng(29.716058893620623, -95.39743392213153), weight: weights.entrance3 ? weights.entrance3 : 0},
  // 'Entrance 4'
  {location: new google.maps.LatLng(29.71443265606742, -95.39882489811542), weight: weights.entrance4 ? weights.entrance4 : 0},
  // 'Entrance 5'
  {location: new google.maps.LatLng(29.712790903816188, -95.40014454199758), weight: weights.entrance5 ? weights.entrance5 : 0},
  // 'Entrance 8'
  {location: new google.maps.LatLng(29.71347598818237, -95.4065878411558), weight: weights.entrance8 ? weights.entrance8 : 0},
  // 'Entrance 16'
  {location: new google.maps.LatLng(29.717904975140854, -95.41049929201775), weight: weights.entrance16 ? weights.entrance16 : 0},
  // 'Entrance 17'
  {location: new google.maps.LatLng(29.718425482416805, -95.40906929928423), weight: weights.entrance17 ? weights.entrance17 : 0},
  // 'Entrance 18'
  {location: new google.maps.LatLng(29.71917427763413, -95.40723974965725), weight: weights.entrance18 ? weights.entrance18 : 0},
  // 'Entrance 20'
  {location: new google.maps.LatLng(29.720388775068166, -95.40412741236945), weight: weights.entrance20 ? weights.entrance20 : 0},
  // 'Entrance 21'
  {location: new google.maps.LatLng(29.721265395668, -95.40177213010296), weight: weights.entrance21 ? weights.entrance21 : 0},
  // 'Entrance 22'
  {location: new google.maps.LatLng(29.721466286806955, -95.40116228026072), weight: weights.entrance22 ? weights.entrance22 : 0},
  // 'Entrance 23'
  {location: new google.maps.LatLng(29.722215059327716, -95.39935376003892), weight: weights.entrance23 ? weights.entrance23 : 0},
  // 'Entrance 25'
  {location: new google.maps.LatLng(29.721922856080997, -95.39614679091575), weight: weights.entrance25 ? weights.entrance25 : 0},
  // 'Entrance 27'
  {location: new google.maps.LatLng(29.72134757845444, -95.3950112084509), weight: weights.entrance27 ? weights.entrance27 : 0},
  // 'Academic Quad'
  {location: new google.maps.LatLng(29.718790, -95.398483), weight: weights.academicquad ? weights.academicquad : 0},
  // 'Allen Center'
  {location: new google.maps.LatLng(29.717522, -95.398125), weight: weights.allencenter ? weights.allencente : 0},
  // 'Alumni Drive'
  {location: new google.maps.LatLng(29.717167, -95.402527), weight: weights.alumnidrive ? weights.alumnidrive : 0},
  // 'BRC'
  {location: new google.maps.LatLng(29.711205, -95.401981), weight: weights.brc ? weights.brc : 0},
  // 'Baker College'
  {location: new google.maps.LatLng(29.717121134876557, -95.3992434809301), weight: weights.bakercollege ? weights.bakercollege : 0},
  // 'Brown College'
  {location: new google.maps.LatLng(29.721467723169113, -95.39632537316551), weight: weights.browncollege ? weights.browncollege : 0},
  // 'Cambridge Building'
  {location: new google.maps.LatLng(29.71692856611316, -95.39767427016585), weight: weights.cambridgebuilding ? weights.cambridgebuilding : 0},
  // 'Facilities & Engineering'
  // {location: new google.maps.LatLng(29.722657239455113, -95.39990800693391), weight: weights.facilitiesengineering},
  // 'Fondren Library'
  {location: new google.maps.LatLng(29.718294978334633, -95.40018131336284), weight: weights.fondrenlibrary ? weights.fondrenlibrary : 0},
  // 'Greenbriar Lot'
  {location: new google.maps.LatLng(29.715981935590918, -95.41218831719355), weight: weights.greenbriarlot ? weights.greenbriarlot : 0},
  // 'Hanszen College'
  {location: new google.maps.LatLng(29.71591247679036, -95.40023290347972), weight: weights.hanszencollege ? weights.hanszencollege : 0},
  // 'Jones College'
  {location: new google.maps.LatLng(29.721606482816366, -95.39678197175353), weight: weights.jonescollege ? weights.jonescollege : 0},
  //'Lovett College'
  {location: new google.maps.LatLng(29.71673354090306, -95.39806260484436), weight: weights.lovettcollege ? weights.lovettcollege : 0},
  //'Martel College'
  {location: new google.maps.LatLng(29.721793078529906, -95.39769370933875), weight: weights.martelcollege ? weights.mcmartelcollege : 0},
  // 'McMurtry College'
  {location: new google.maps.LatLng(29.720450238743076, -95.39773539109628), weight: weights.mcmurtrycollege ? weights.mcmurtrycollege : 0},
  // 'Rec Center'
  {location: new google.maps.LatLng(29.71835049688027, -95.40354656883738), weight: weights.reccenter ? weights.reccenter : 0},
  // 'Rice Graduate Apartments'
  {location: new google.maps.LatLng(29.726292218963764, -95.39863645296526), weight: weights.ricegraduateapartments ? weights.ricegraduateapartments : 0},
  // 'Rice Memorial Center'
  {location: new google.maps.LatLng(29.71930860420297, -95.40183484503329), weight: weights.ricememorialcenter ? weights.ricememorialcenter : 0},
  // 'Rice Stadium'
  {location: new google.maps.LatLng(29.716408929076717, -95.40933901620431), weight: weights.ricestadium ? weights.ricestadium : 0},
  // 'Sid Richardson College'
  {location: new google.maps.LatLng(29.7151337695249, -95.39904448748513), weight: weights.sidrichardsoncollege ? weights.sidrichardsoncollege : 0},
  // 'South Colleges Lot'
  {location: new google.maps.LatLng(29.715410610090363, -95.39815013467721), weight: weights.southcollegeslot ? weights.southcollegeslot : 0},
  // 'Tudor Field House'
  {location: new google.maps.LatLng(29.715780019583505, -95.40376549952695), weight: weights.tudorfieldhouse ? weights.tudorfieldhouse : 0},
  // 'West Lot'
  {location: new google.maps.LatLng(29.716573383323144, -95.4067610005843), weight: weights.westlot ? weights.westlot : 0},
  // 'Wiess College'
  {location: new google.maps.LatLng(29.71473244357511, -95.40086348493536), weight: weights.wiesscollege ? weights.wiesscollege : 0},
  // 'Will Rice College'
  {location: new google.maps.LatLng(29.716430931301183, -95.39869632364194), weight: weights.willricecollege ? weights.willricecollege : 0}
];
}

let map;
let heatmap;

function initMap() {
  var riceUniversity = new google.maps.LatLng(29.717154, -95.404182);
  map = new google.maps.Map(document.getElementById('map'), {
    center: riceUniversity,
    zoom: 15,
    mapTypeId: 'satellite'
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    radius: 30,
    opacity: 1,
    data: getHeatmapData(),
    map: map,
  });

}

window.initMap = initMap;
