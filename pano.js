/*
* Author: Germain Perez
* Version: 2.0
* Chattahoochee View is a web application that permits
* 360&deg; viewing of videos from points along
* the Chattahoochee River.
* Distributed under the MIT License.
 */

var panorama, map, panoPos, pPos, marker, locString;
var activeInfoWindow;
var APIkey = "AIzaSyCsrzsLwc80vnSXgkV9SkYX5CDGf_U6XVs"

var river1 = {
    lat: 34.114094,
    lng: -84.101769
};

function initialize() {

    map = new google.maps.Map(
        document.getElementById('map'), {
            center: river1,
            zoom: 12,
            mapTypeId: 'terrain',
            streetViewControl: false,
        }
    );

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP
    });

    var BufordDamMarker = new google.maps.Marker({
        position: {lat: 34.159744, lng: -84.076250},
        map: map,
        icon: './map-icon.png',
        title: 'BufordDam'
    });
    BufordDamMarker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        BufordDamInfo.open(map, BufordDamMarker);
        activeInfoWindow = BufordDamInfo;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video01.html"></iframe>';
        map.setCenter(34.159744|-84.076250);
        map.setZoom(14);
    });
    var BufordDamInfo = new google.maps.InfoWindow({
        content: '<b>Buford Dam Landing</b>'
    });

    var Fishermen1Marker = new google.maps.Marker({
        position: {lat: 34.157220, lng: -84.077278},
        map: map,
        icon: './map-icon.png',
        title: 'Fishermen1'
    });
    Fishermen1Marker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        Fishermen1Info.open(map, Fishermen1Marker);
        activeInfoWindow = Fishermen1Info;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video02.html"></iframe>';
        map.setCenter(34.157220|-84.077278);
        map.setZoom(14);
    });
    var Fishermen1Info = new google.maps.InfoWindow({
        content: '<b>Trout Fishing</b>'

    });

    var BowmansIslandMarker = new google.maps.Marker({
        position: {lat: 34.153664, lng: -84.081465},
        map: map,
        icon: './map-icon.png',
        title: 'BowmansIsland'
    });
    BowmansIslandMarker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        BowmansIslandInfo.open(map, BowmansIslandMarker);
        activeInfoWindow = BowmansIslandInfo;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video03.html"></iframe>';
        map.setCenter(34.153664|-84.081465);
        map.setZoom(14);
    });
    var BowmansIslandInfo = new google.maps.InfoWindow({
        content: '<b>Bowman\'s Island</b><br />'

    });

    var FishWeir1Marker = new google.maps.Marker({
        position: {lat: 34.140983, lng: -84.086641},
        map: map,
        icon: './map-icon.png',
        title: 'FishWeir1'
    });
    FishWeir1Marker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        FishWeir1Info.open(map, FishWeir1Marker);
        activeInfoWindow = FishWeir1Info;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video04.html"></iframe>';
        map.setCenter(34.140983|-84.086641);
        map.setZoom(14);
    });
    var FishWeir1Info = new google.maps.InfoWindow({
        content: '<b>Fish Weir</b>'
    });

    var BufordTroutHatcheryMarker = new google.maps.Marker({
        position: {lat: 34.137667, lng: -84.089486},
        map: map,
        icon: './map-icon.png',
        title: 'BufordTroutHatchery'
    });
    BufordTroutHatcheryMarker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        BufordTroutHatcheryInfo.open(map, BufordTroutHatcheryMarker);
        activeInfoWindow = BufordTroutHatcheryInfo;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video05.html"></iframe>';
        map.setCenter(34.137667|-84.089486);
        map.setZoom(14);
    });
    var BufordTroutHatcheryInfo = new google.maps.InfoWindow({
        content: '<b>Buford Trout Hatchery</b>'
    });

    var RescueRockRapidMarker = new google.maps.Marker({
        position: {lat: 34.130813, lng: -84.094389},
        map: map,
        icon: './map-icon.png',
        title: 'RescueRockRapid'
    });
    RescueRockRapidMarker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        RescueRockRapidInfo.open(map, RescueRockRapidMarker);
        activeInfoWindow = RescueRockRapidInfo;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video06.html"></iframe>';
        map.setCenter(34.130813|-84.094389);
        map.setZoom(14);
    });
    var RescueRockRapidInfo = new google.maps.InfoWindow({
        content: '<b>Rescue Rock Rapid</b>'
    });

    var SettlesBridgeMarker = new google.maps.Marker({
        position: {lat: 34.099545, lng: -84.108410},
        map: map,
        icon: './map-icon.png',
        title: 'SettlesBridge'
    });
    SettlesBridgeMarker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        SettlesBridgeInfo.open(map, SettlesBridgeMarker);
        activeInfoWindow = SettlesBridgeInfo;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video07.html"></iframe>';
        map.setCenter(34.099545|-84.108410);
        map.setZoom(14);
    });
    var SettlesBridgeInfo = new google.maps.InfoWindow({
        content: '<b>Settles Bridge Landing</b>'
    });

    var FishWeir2Marker = new google.maps.Marker({
        position: {lat: 34.091024, lng: -84.110730},
        map: map,
        icon: './map-icon.png',
        title: 'FishWeir2'
    });
    FishWeir2Marker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        FishWeir2Info.open(map, FishWeir2Marker);
        activeInfoWindow = FishWeir2Info;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video08.html"></iframe>';
        map.setCenter(34.091024|-84.110730);
        map.setZoom(14);
    });
    var FishWeir2Info = new google.maps.InfoWindow({
        content: '<b>Fish Weir</b>'
    });

    var TroutSluice1Marker = new google.maps.Marker({
        position: {lat: 34.057000, lng: -084.108792},
        map: map,
        icon: './map-icon.png',
        title: 'TroutSluice1'
    });
    TroutSluice1Marker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        TroutSluice1Info.open(map, TroutSluice1Marker);
        activeInfoWindow = TroutSluice1Info;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video09.html"></iframe>';
        map.setCenter(34.057000|-84.108792);
        map.setZoom(14);
    });
    var TroutSluice1Info = new google.maps.InfoWindow({
        content: '<b>Trout Sluice</b>'
    });

    var LittlesFerryBridgeMarker = new google.maps.Marker({
        position: {lat: 34.050931, lng: -84.097325},
        map: map,
        icon: './map-icon.png',
        title: 'LittlesFerryBridge'

    });
    LittlesFerryBridgeMarker.addListener('click', function() {
        activeInfoWindow&&activeInfoWindow.close();
        LittlesFerryBridgeInfo.open(map, LittlesFerryBridgeMarker);
        activeInfoWindow = LittlesFerryBridgeInfo;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video10.html"></iframe>';
        map.setCenter(34.050931|-84.097325);
        map.setZoom(14);
    });
    var LittlesFerryBridgeInfo = new google.maps.InfoWindow({
        content: '<b>Littles Ferry Bridge Landing</b>'
    });

    window.onload = function () {
        activeInfoWindow&&activeInfoWindow.close();
        SettlesBridgeInfo.open(map, SettlesBridgeMarker);
        activeInfoWindow = SettlesBridgeInfo;
        document.getElementById("pano").innerHTML = '<iframe id="myframe" src="./videos/video07.html"></iframe>';
    };
}

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

intro.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function () {
    modal.style.display = "block";
};
