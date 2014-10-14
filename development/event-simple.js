  app.controller('EventSimpleCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    var marker, map;
    $scope.$on('mapInitialized', function(evt, evtMap) {
      map = evtMap;
      marker = map.markers[0];
    });
    $scope.centerChanged = function(event) {
      $timeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    }
    $scope.click = function(event) {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    }
  }]);
