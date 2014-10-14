  app.controller('MarkerAnimationsCtrl', function($scope) {
    $scope.toggleBounce = function() {
      if (this.getAnimation() != null) {
        this.setAnimation(null);
      } else {
        this.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  });

