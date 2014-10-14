  app.controller("RectangleEventCtrl", function($scope, $compile) {
    $scope.ne, $scope.sw;
    $scope.boundsChanged = function(event) {
      $scope.ne = this.getBounds().getNorthEast();
      $scope.sw = this.getBounds().getSouthWest();
console.log('$scope', $scope);
      $scope.showInfoWindow(event, 'foo', $scope.ne);
    };
  });
