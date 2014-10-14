  app.controller('LayerDataDynamicCtrl', function($scope) {
    $scope.styleFunc = function(feature) {
      var color = 'gray';
      if (feature.getProperty('isColorful')) {
        color = feature.getProperty('color');
      }
      return /** @type {google.maps.Data.StyleOptions} */({
        fillColor: color,
        strokeColor: color,
        strokeWeight: 2
      });
    };

    $scope.onClick= function(event) {
      event.feature.setProperty('isColorful', true);
    };

    $scope.onMouseover = function(event) {
      $scope.map.data.revertStyle();
      $scope.map.data.overrideStyle(event.feature, {strokeWeight: 8});
    };

    $scope.onMouseout = function(event) {
      $scope.map.data.revertStyle();
    };
  });
