(function () {

  /**
   * @class DrawerCanvas
   * @constructor
   * @param {type} ctx
   */
  var DrawerCanvas = function (ctx) {
    this.ctx = ctx;
    this.ship = null;
  };

  tsc.drawer.DrawerCanvas = DrawerCanvas;

  var _drawer = DrawerCanvas.prototype;

  _drawer.addShip = function (ship) {
    this.ship = ship;
  };

  _drawer.addWind = function (wind) {
    this.wind = wind;
  };
  
  _drawer.drawShip = function () {
    this.computeShipModuloPosition();
    var shipX = this.ship.posX;
    var shipY = this.ship.posY;
    var shipAngle = this.ship.angle;

    this.ctx.save();
    this.ctx.translate(shipX, shipY);
    this.ctx.rotate((shipAngle + 90) * Math.PI / 180);

    this.ctx.beginPath();
    this.ctx.moveTo(-4, 8);
    this.ctx.lineTo(-4, -4);
    this.ctx.lineTo(0, -8);
    this.ctx.lineTo(4, -4);
    this.ctx.lineTo(4, 8);
    this.ctx.lineTo(-4, 8);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.fillText("sail  coef: " + this.ship.sail, 10, 10);
    this.ctx.fillText("speed coef: " + (Math.floor((this.ship.speedCoef() * 10)) / 10), 10, 20);
    this.ctx.restore();
  };
  
  _drawer.drawWind = function () {
      
    var pow = this.wind.getPower();
    var ang = this.wind.getAngle();

    //display power and orientation of wind
    this.ctx.save();
    this.ctx.fillStyle = '#FF6600';
    this.ctx.translate(50, 50);

    this.ctx.rotate(ang * Math.PI / 180);
    this.ctx.beginPath();
    this.ctx.moveTo(0,-5);
    this.ctx.lineTo(-2.5 * pow /1.5 ,5* pow);
    this.ctx.lineTo(2.5*pow/1.5,5*pow);
    this.ctx.fill();
    
    this.ctx.restore();

    //display a reference of wind
    this.ctx.save();
    this.ctx.fillStyle = '#FF0000';
    this.ctx.translate(50, 50);

    this.ctx.rotate(ang * Math.PI / 180);
    this.ctx.beginPath();
    this.ctx.moveTo(0,-5);
    this.ctx.lineTo(-2.5,5);
    this.ctx.lineTo(2.5,5);
    this.ctx.fill();
    
    this.ctx.restore();

  };
  
  _drawer.computeShipModuloPosition = function () {
    var shipX = this.ship.posX;
    var width = this.ctx.canvas.width;
    this.ship.posX = positiveModulo(shipX, width);

    var shipY = this.ship.posY;
    var height = this.ctx.canvas.height;
    this.ship.posY = positiveModulo(shipY, height);
  };

  var positiveModulo = function (num, mod) {
    num %= mod;
    if (num < 0) {
      num += mod;
    }
    return num;
  };

  _drawer.clear = function () {
    var width = this.ctx.canvas.width;
    var height = this.ctx.canvas.height;
    this.ctx.clearRect(0, 0, width, height);
  };

}).call(this);
