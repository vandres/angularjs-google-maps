  app.controller('OverlaySymbolAnimateCtrl', function($scope, $interval) {
    $scope.$on('mapInitialized', function(evt, map) {
      var count = 0;
      var line = map.shapes.foo;
      console.log('line', line, map.shapes);
      $interval(function() {
        count = (count + 1) % 20;
        var icons = line.get('icons');
        icons[0].offset = (count / 2 * 10)+ '%';
        line.set('icons', icons);
      }, 200);
    });
  });
