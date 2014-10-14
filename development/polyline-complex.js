  var app = app || angular.module('myApp', ['ngMap']);
  app.controller("PolylineComplexCtrl", function($scope) {
    var poly = poly = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    $scope.$on('mapInitialized', function(evt, map) {
      poly.setMap(map);
    });
    $scope.addMarkerAndPath = function(event) {
      var path = poly.getPath();
      var marker = new google.maps.Marker({
        position: event.latLng, 
        title: "#"+ path.getLength(), 
        map: $scope.map
      });
      path.push(event.latLng);
    }
  });
