/**
 * @constructor
 * @implements {google.maps.MapType}
 */
function CoordMapType() {
}

CoordMapType.prototype.tileSize = new google.maps.Size(256,256);
CoordMapType.prototype.maxZoom = 19;

CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
  var div = ownerDocument.createElement('div');
  div.innerHTML = coord;
  div.style.width = this.tileSize.width + 'px';
  div.style.height = this.tileSize.height + 'px';
  div.style.fontSize = '10';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px';
  div.style.borderColor = '#AAAAAA';
  div.style.backgroundColor = '#E5E3DF';
  return div;
};

CoordMapType.prototype.name = 'Tile #s';
CoordMapType.prototype.alt = 'Tile Coordinate Map Type';


app.controller('MapTypeBaseCtrl', function($scope) {
  $scope.mapTypeChanged = function() {
    var showStreetViewControl = this.getMapTypeId() != 'coordinate';
    this.setOptions({'streetViewControl': showStreetViewControl});
  };
});
