  app.controller('OverlaySimpleCtrl', function($scope) {
    $scope.overlay;
    $scope.$on('mapInitialized', function(evt, map) {
      var swBound = new google.maps.LatLng(62.281819, -150.287132);
      var neBound = new google.maps.LatLng(62.400471, -150.005608);
      var bounds = new google.maps.LatLngBounds(swBound, neBound);
      var srcImage = 'https://developers.google.com/maps/documentation/javascript/';
      srcImage += 'examples/full/images/talkeetna.png';
      $scope.overlay = new USGSOverlay(bounds, srcImage, map);
    });
  });
