  app.controller('LayerDataQuakesSimpleCtrl', function($scope) {
    $scope.styleFunc = function(feature) {
      var mag = Math.exp(parseFloat(feature.getProperty('mag'))) * 0.1;
      return /** @type {google.maps.Data.StyleOptions} */({
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: mag,
          fillColor: '#f00',
          fillOpacity: 0.35,
          strokeWeight: 0
        }
      });
    };
  });

