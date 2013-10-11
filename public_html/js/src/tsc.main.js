(function () {

  var Obj = [];
  var ship;
  var shipDelegate;
  var drawer;

  var Update = function () {
    for (var i = 0; i < Obj.length; i++)
    {
      Obj[i].Update();
    }
  };

  var Display = function ()
  {
    for (var i = 0; i < Obj.length; i++)
    {
      Obj[i].Update();
    }
  };

  var Main = function () {
    tsc.values.time.Update();
    Display();
    Update();

    shipDelegate.action();
    ship.move(tsc.values.time.DeltaTime());
    drawer.clear();
    drawer.drawShip();
  };

  var DrawerCanvas = tsc.drawer.DrawerCanvas;
  var Ship = tsc.Ship;
  var ShipDelegate = tsc.ShipDelegate;
  var display = tsc.values.display;
  var Keyboard = tsc.input.Keyboard;

  window.onload = function () {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    drawer = new DrawerCanvas(ctx);

    var midX = canvas.width / 2;
    var midY = canvas.height / 2;
    ship = new Ship(midX, midY, 0);
    shipDelegate = new ShipDelegate(ship);
    var input = new Keyboard(document);

    input.registerEventHandler(function (key) {
      shipDelegate.setInput(key);
    });


    input.registerEventHandler(function (key) {
      shipDelegate.setInput(key);
    });


// Creat a Ship 
// DEBUG
    drawer.addShip(ship);

    var timeFrameMiliSec = 1000 / display.FRAME_RATE;
    setInterval(Main, timeFrameMiliSec);
  };

}).call(this);
