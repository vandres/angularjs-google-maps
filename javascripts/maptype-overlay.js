  /** @constructor */
  function CoordMapType2() {
    this.tileSize = new google.maps.Size(256, 256);
  }

  CoordMapType2.prototype.getTile = function(coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement('div');
    div.innerHTML = coord;
    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.fontSize = '10';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px';
    div.style.borderColor = '#AAAAAA';
    return div;
  };

