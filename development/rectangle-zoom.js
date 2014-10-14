  app.controller("RectangleZoomCtrl", function($scope) {
    $scope.zoomChanged= function(event) {
      $scope.map.shapes.foo.setBounds($scope.map.getBounds());
    }
  });
