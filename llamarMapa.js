var map;
var icono;
var latitud = 41.67097948393865;
var longitud = -3.6769259916763985;
let markers = new Array();

function inicio() {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
    // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
    center: new google.maps.LatLng(latitud, longitud), //latitud,longitud),//
    // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
    zoom: 17, // zoom del mapa
    draggableCursor: "auto", // forma del cursor
    draggingCursor: "crosshair",
    mapTypeId: google.maps.MapTypeId.SATELLITE, // tipo de mapa
  });
  icono = {
    url: "Marcador_posicion.png", //Imagen del marcador de posición.
    scaledSize: new google.maps.Size(50, 50), //Tamaño escala.
    origin: new google.maps.Point(0, 0), //Origen imgen.
    anchor: new google.maps.Point(25, 50), //Punto de anclaje
  };
}

inicio();

function mostrarPosicionAnMapa(id) {
  borrarMarkers();
  map.setCenter(
    new google.maps.LatLng(parseFloat(id.Latitud), parseFloat(id.Longitud))
  );
  marker(id);
}

function marker(id) {
  let marker = new google.maps.Marker({
    icon: icono,
    position: new google.maps.LatLng(
      parseFloat(id.Latitud),
      parseFloat(id.Longitud)
    ),
    map: map,
  });
  markers.push(marker);
}

function borrarMarkers(){
  for (let index = 0; index < markers.length; index++) {
    //we use This method to specifies the map on which directions will be rendered. Pass null to remove the directions from the map.
    markers[index].setMap(null);
  }
  markers=new Array();
} 

