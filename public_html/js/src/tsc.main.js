(function () {

  var DrawerCanvas = tsc.drawer.DrawerCanvas;
  var Ship = tsc.Ship;

  window.onload = function () {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var drawer = new DrawerCanvas(ctx);

    var midX = canvas.width / 2;
    var midY = canvas.height / 2;
    var ship = new Ship(midX, midY, 0);

    drawer.addShip(ship);
    drawer.drawShip();
  };

}).call(this);
