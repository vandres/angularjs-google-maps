  app.controller('OverlayRemoveCtrl', function($scope) {
    $scope.add = function() {
      $scope.map.shapes.foo.setMap($scope.map);
    }
    $scope.remove = function() {
      $scope.map.shapes.foo.setMap(null);
    };
  });
