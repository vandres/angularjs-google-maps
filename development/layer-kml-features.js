  app.controller('LayerKmlFeaturesCtrl', function($scope) {
    $scope.showInContextWindow = function(event) {
      $scope.description = event.featureData.description;
    };
  });
