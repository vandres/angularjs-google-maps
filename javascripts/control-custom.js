app.controller('ControlCustomCtrl', function($scope) {
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  $scope.click = function() {
    $scope.map.setCenter(chicago);
  }
});
