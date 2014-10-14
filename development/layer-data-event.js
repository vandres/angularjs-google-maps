  app.controller('LayerDataEventCtrl', function($scope) {
    $scope.styleFunc = function(feature) {
      return /** @type {google.maps.Data.StyleOptions} */({
        fillColor: feature.getProperty('color'),
        strokeWeight: 1
      })
    };
    $scope.onMouseover = function(event) {
      $scope.letter = event.feature.getProperty('letter');
      console.log('xxxxxx', $scope.letter);
    };
  });
