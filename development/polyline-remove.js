  app.controller('PolylineRemoveCtrl', function($scope) {
    $scope.addLine = function() {
      $scope.map.shapes.foo.setMap($scope.map);
    }
    $scope.removeLine = function() {
      $scope.map.shapes.foo.setMap(null);
    };
  });
