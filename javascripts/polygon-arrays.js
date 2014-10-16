app.controller('PolygonArraysCtrl', function($scope) {
  var infoWindow = new google.maps.InfoWindow();
  $scope.showArrays = function(event) {

    // Since this polygon has only one path, we can call getPath()
    // to return the MVCArray of LatLngs.
    var vertices = this.getPath();

    var contentString = '<b>Bermuda Triangle polygon</b><br>' +
        'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
        '<br>';

    // Iterate over the vertices.
    for (var i =0; i < vertices.getLength(); i++) {
      var xy = vertices.getAt(i);
      contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
          xy.lng();
    }

    // Replace the info window's content and position.
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);

    infoWindow.open($scope.map);
  }
});
