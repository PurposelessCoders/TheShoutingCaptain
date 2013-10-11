(function () {

  var physic = tsc.values.physic;

  /**
   * @constructor
   * @param {type} posX
   * @param {type} posY
   * @param {type} angle
   */
  var Ship = function (posX, posY, angle) {
    this.posX = posX;
    this.posY = posY;
    this.angle = angle;
    this.linearSpeed = 0;
    this.angularSpeed = 0;
  };

  tsc.Ship = Ship;

  var _ship = Ship.prototype;

  _ship.turnRight = function () {
    this.angularSpeed = Math.PI / 4;
  };

  _ship.turnLeft = function () {
    this.angularSpeed = -Math.PI / 4;
  };
  
  _ship.stopTurning = function () {
    this.angularSpeed = 0;
  };
  
  _ship.accelerate = function () {
    this.linearSpeed = 4;
  };
  
  _ship.decelerate = function () {
    this.linearSpeed = 0;
  };
  
  _ship.stopAccelerate = function () {
    if (this.linearSpeed > physic.WATER_FRICTION) {
      this.linearSpeed -= physic.WATER_FRICTION;
    } else {
      this.linearSpeed = 0;
    }
  };

  _ship.move = function (time) {
    this.moveAngular(time);
    this.moveLinear(time);
  };
  
  _ship.moveAngular = function (time) {
    this.angle += this.angularSpeed;
  };
  
  _ship.moveLinear = function () {
    this.posY += Math.sin(this.angle) * this.linearSpeed;
    this.posX += Math.cos(this.angle) * this.linearSpeed;
  };

}).call(this);
