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

    ctx.beginPath();
    ctx.moveTo(-4, 8);
    ctx.lineTo(-4, -4);
    ctx.lineTo(0, -8);
    ctx.lineTo(4, -4);
    ctx.lineTo(4, 8);
    ctx.lineTo(-4, 8);
    ctx.closePath();
    ctx.fill();

    this.ctx.restore();
  };

}).call(this);
