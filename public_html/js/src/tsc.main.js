(function () {

  var DrawerCanvas = tsc.drawer.DrawerCanvas;
  var Ship = tsc.Ship;
  var ShipDelegate = tsc.ShipDelegate;
  var display = tsc.values.display;
  var Keyboard = tsc.input.Keyboard;

  window.onload = function () {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var drawer = new DrawerCanvas(ctx);

    var midX = canvas.width / 2;
    var midY = canvas.height / 2;
    var ship = new Ship(midX, midY, 0);
    var shipDelegate = new ShipDelegate(ship);
    var input = new Keyboard(canvas);

    input.registerEventHandler(function (key) {
      shipDelegate.setKey(key);
    });

    drawer.addShip(ship);
    drawer.drawShip();

    var timeFrameMiliSec = 1000 / display.FRAME_RATE;
    var timeFrameSec = 1 / display.FRAME_RATE;
    setInterval(function () {
      shipDelegate.action();
      ship.move(timeFrameSec);
      drawer.drawShip();
    }, timeFrameMiliSec);
  };

}).call(this);
