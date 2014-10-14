    app.controller('ControlCustomStateCtrl', function($scope) {
      $scope.home = new google.maps.LatLng(41.850033, -87.6500523);
      $scope.goHome = function() {
        $scope.map.setCenter($scope.home);
      }
      $scope.setHome = function() {
        $scope.home = $scope.map.getCenter();
      }
    });
