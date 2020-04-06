angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $http, $cordovaGeolocation, $timeout) {
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
    //current lokasi
    var lat  = position.coords.latitude
    var long = position.coords.longitude
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: lat, lng: long},
      zoom: 13,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      gestureHandling: 'cooperative',
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //map klik
    map.addListener('click', function(e) {
      var tmp = map.setCenter(e.latLng);
      var klikMap = map.getCenter(tmp);
      var dptLat = klikMap.lat();
      var dptLong = klikMap.lng();
      var dptLatLong = dptLat+","+dptLong;
      alert(dptLatLong);
    });
    //cari lokasi
    var input = document.getElementById('cari');
    $scope.disableTap = function() {
      var container = document.getElementsByClassName('pac-container');
      angular.element(container).attr('data-tap-disabled', 'true');
      angular.element(container).on("click", function() {
          document.getElementById('pac-input').blur();
      });
    };
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function (event) {
      var place = autocomplete.getPlace();
      if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
      } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
      }
      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: place.geometry.location
      })
    });
    // var input = document.getElementById('input-lokasi');
    //autocomplete
    // var autocomplete = new google.maps.places.Autocomplete(input);
    // autocomplete.bindTo('bounds', map);
    // autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
    //marker
    // var marker = new google.maps.Marker({
    //   map: map,
    //   anchorPoint: new google.maps.Point(0, -29)
    // });
    //autocomplete
    // autocomplete.addListener('place_changed', function() {
    //   marker.setVisible(false);
    //   var place = autocomplete.getPlace();
    //   if (!place.geometry) {
    //     window.alert("No details available for input: '" + place.name + "'");
    //     return;
    //   }
    //   if (place.geometry.viewport) {
    //     map.fitBounds(place.geometry.viewport);
    //     console.log(place.geometry.viewport);
    //   } else {
    //     console.log(place.geometry.location);
    //     map.setCenter(place.geometry.location);
    //     map.setZoom(17);
    //   }
    //   marker.setPosition(place.geometry.location);
    //   marker.setVisible(true);
    // });
  }, function(err) {
    // error
  });
})
