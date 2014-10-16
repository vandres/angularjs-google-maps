  app.controller('IconComplexCtrl', function($scope) {
    $scope.image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',        
      size: new google.maps.Size(20, 32), 
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 32)
    };
    $scope.shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
    };
    $scope.beaches = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];
  });


