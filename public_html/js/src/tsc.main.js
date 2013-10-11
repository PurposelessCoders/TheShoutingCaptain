(function () {

  var DrawerCanvas = tsc.drawer.DrawerCanvas;
  var Ship = tsc.Ship;
  var display = tsc.values.display;

  window.onload = function () {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var drawer = new DrawerCanvas(ctx);

    var midX = canvas.width / 2;
    var midY = canvas.height / 2;
    var ship = new Ship(midX, midY, 0);

    drawer.addShip(ship);
    drawer.drawShip();

    var timeFrameMiliSec = 1000 / display.FRAME_RATE;
    var timeFrameSec = 1 / display.FRAME_RATE;
    setInterval(function () {
      ship.move(timeFrameSec);
      drawer.drawShip();
    }, timeFrameMiliSec);
  };

}).call(this);
