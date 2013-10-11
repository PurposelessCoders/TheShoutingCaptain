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

  _drawer.drawShip = function () {
    var shipX = this.ship.posX;
    var shipY = this.ship.posY;
    var shipAngle = this.ship.angle;

    this.ctx.save();
    this.ctx.translate(shipX, shipY);
    this.ctx.rotate(shipAngle);

    this.ctx.beginPath();
    this.ctx.moveTo(-4, 8);
    this.ctx.lineTo(-4, -4);
    this.ctx.lineTo(0, -8);
    this.ctx.lineTo(4, -4);
    this.ctx.lineTo(4, 8);
    this.ctx.lineTo(-4, 8);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.restore();
  };

  _drawer.clear = function () {
    var width = this.ctx.canvas.width;
    var height = this.ctx.canvas.height;
    this.ctx.clearRect(0, 0, width, height);
  };

}).call(this);
