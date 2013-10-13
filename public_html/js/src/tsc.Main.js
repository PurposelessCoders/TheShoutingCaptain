(function () {

  var DrawerCanvas = tsc.drawer.DrawerCanvas;
  var Ship = tsc.Ship;
  var ShipDelegate = tsc.ShipDelegate;
  var display = tsc.values.display;
  var Keyboard = tsc.input.Keyboard;
  var time = tsc.values.time;

  var Main = function () {
    this.ship = null;
    this.shipDelegate = null;
    this.drawer = null;
    this.objs = [];
    this.init();
  };

  var _main = Main.prototype;

  _main.init = function () {
    var that = this;
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    this.drawer = new DrawerCanvas(ctx);

    var midX = canvas.width / 2;
    var midY = canvas.height / 2;
    this.ship = new Ship(midX, midY, 0);
    this.wind = new tsc.Wind();
    this.wind.defineNextChagement();
    
    this.drawer.addShip(this.ship);
    this.drawer.addWind(this.wind);

    this.shipDelegate = new ShipDelegate(this.ship);
    var input = new Keyboard(document);

    input.registerEventHandler(function (key) {
      that.shipDelegate.setInput(key);
    });
  };
  
  _main.run = function () {
    this.startLoop();
  };

  _main.startLoop = function () {
    var that = this;
    var timeFrameMiliSec = 1000 / display.FRAME_RATE;

    setInterval(function () {
      that.loopAction();
    }, timeFrameMiliSec);
  };

  _main.loopAction = function () {
    time.Update();

    this.display();
    this.update();
  };

  _main.update = function () {
    this.shipDelegate.action();
    this.ship.move(time.DeltaTime());

    for (var i = 0; i < this.objs; i++) {
      var obj = this.objs[i];

      obj.update();
    }
  };

  _main.display = function () {
    this.drawer.clear();
    this.drawer.drawShip();
    this.drawer.drawWind();

    for (var i = 0; i < this.objs.length; i++) {
      var obj = this.objs[i];

      obj.display();
    }
  };

  window.onload = function () {
    new Main().run();
  };

}).call(this);
