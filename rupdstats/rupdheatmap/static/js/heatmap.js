/* Data points defined as an array of LatLng objects */
var heatmapData = [
    // {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
    // {location: new google.maps.LatLng(37.785, -122.435), weight: 3},
    // 'Entrance 1'
    {location: new google.maps.LatLng(29.720595860657813, -95.39389445408264), weight: 1},
    // 'Entrance 2'
    {location: new google.maps.LatLng(29.71862984400406, -95.39552578841001), weight: 1},
    // 'Entrance 3'
    {location: new google.maps.LatLng(29.716058893620623, -95.39743392213153), weight: 1},
    // 'Entrance 4'
    {location: new google.maps.LatLng(29.71443265606742, -95.39882489811542), weight: 1},
    // 'Entrance 5'
    {location: new google.maps.LatLng(29.712790903816188, -95.40014454199758), weight: 1},
    // 'Entrance 8'
    {location: new google.maps.LatLng(29.71347598818237, -95.4065878411558), weight: 1},
    // 'Entrance 16'
    {location: new google.maps.LatLng(29.717904975140854, -95.41049929201775), weight: 1},
    // 'Entrance 17'
    {location: new google.maps.LatLng(29.718425482416805, -95.40906929928423), weight: 1},
    // 'Entrance 18'
    {location: new google.maps.LatLng(29.71917427763413, -95.40723974965725), weight: 1},
    // 'Entrance 20'
    {location: new google.maps.LatLng(29.720388775068166, -95.40412741236945), weight: 1},
    // 'Entrance 21'
    {location: new google.maps.LatLng(29.721265395668, -95.40177213010296), weight: 1},
    // 'Entrance 22'
    {location: new google.maps.LatLng(29.721466286806955, -95.40116228026072), weight: 1},
    // 'Entrance 23'
    {location: new google.maps.LatLng(29.722215059327716, -95.39935376003892), weight: 1},
    // 'Entrance 25'
    {location: new google.maps.LatLng(29.721922856080997, -95.39614679091575), weight: 1},
    // 'Entrance 27'
    {location: new google.maps.LatLng(29.72134757845444, -95.3950112084509), weight: 1},
    // 'Academic Quad'
    {location: new google.maps.LatLng(29.718790, -95.398483), weight: 1},
    // 'Allen Center'
    {location: new google.maps.LatLng(29.717522, -95.398125), weight: 1},
    // 'Alumni Drive'
    {location: new google.maps.LatLng(29.717167, -95.402527), weight: 1},
    // 'BRC'
    {location: new google.maps.LatLng(29.711205, -95.401981), weight: 1},
    // 'Baker College'
    {location: new google.maps.LatLng(29.717121134876557, -95.3992434809301), weight: 1},
    // 'Brown College'
    {location: new google.maps.LatLng(29.721467723169113, -95.39632537316551), weight: 1},
    // 'Cambridge Building'
    {location: new google.maps.LatLng(29.71692856611316, -95.39767427016585), weight: 1},
    // 'College Way'
    {location: new google.maps.LatLng(29.716353010920027, -95.40204065289173), weight: 1},
    // 'Duncan College'
    {location: new google.maps.LatLng(29.72171540729127, -95.39843757114714), weight: 1},
    // 'Facilities & Engineering'
    {location: new google.maps.LatLng(29.722657239455113, -95.39990800693391), weight: 1},
    // 'Fondren Library'
    {location: new google.maps.LatLng(29.718294978334633, -95.40018131336284), weight: 1},
    // 'Greenbriar Lot'
    {location: new google.maps.LatLng(29.715981935590918, -95.41218831719355), weight: 1},
    // 'Hanszen College'
    {location: new google.maps.LatLng(29.71591247679036, -95.40023290347972), weight: 1},
    // 'Jones College'
    {location: new google.maps.LatLng(29.721606482816366, -95.39678197175353), weight: 1},
    // 'Lovett College'
    {location: new google.maps.LatLng(29.71673354090306, -95.39806260484436), weight: 1},
    // 'Martel College'
    {location: new google.maps.LatLng(29.721793078529906, -95.39769370933875), weight: 1},
    // 'McMurtry College'
    {location: new google.maps.LatLng(29.720450238743076, -95.39773539109628), weight: 1},
    // 'Rec Center'
    {location: new google.maps.LatLng(29.71835049688027, -95.40354656883738), weight: 1},
    // 'Rice Graduate Apartments'
    {location: new google.maps.LatLng(29.726292218963764, -95.39863645296526), weight: 1},
    // 'Rice Memorial Center'
    {location: new google.maps.LatLng(29.71930860420297, -95.40183484503329), weight: 1},
    // 'Rice Stadium'
    {location: new google.maps.LatLng(29.716408929076717, -95.40933901620431), weight: 1},
    // 'Sid Richardson College'
    {location: new google.maps.LatLng(29.7151337695249, -95.39904448748513), weight: 1},
    // 'South Colleges Lot'
    {location: new google.maps.LatLng(29.715410610090363, -95.39815013467721), weight: 1},
    // 'Tudor Field House'
    {location: new google.maps.LatLng(29.715780019583505, -95.40376549952695), weight: 1},
    // 'West Lot'
    {location: new google.maps.LatLng(29.716573383323144, -95.4067610005843), weight: 1},
    // 'Wiess College'
    {location: new google.maps.LatLng(29.71473244357511, -95.40086348493536), weight: 1},
    // 'Will Rice College'
    {location: new google.maps.LatLng(29.716430931301183, -95.39869632364194), weight: 1}
  ];
  
  var riceUniversity = new google.maps.LatLng(29.717154, -95.404182);
  
  let map = new google.maps.Map(document.getElementById('map'), {
    center: riceUniversity,
    zoom: 13,
    mapTypeId: 'satellite'
  });
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.setMap(map);
  