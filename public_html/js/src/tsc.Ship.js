(function () {

  var physic = tsc.values.physic;

  var ANGULAR_SPEED = 10;
  var WIND_POWER_COEF = 0.5;
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
    this.angularSpeed = ANGULAR_SPEED * Math.max(0.3, 
                                         Math.min(1, this.linearSpeed / physic.MAX_SPEED * this.speedCoef()));
  };

  _ship.turnLeft = function () {
    this.angularSpeed = -ANGULAR_SPEED * Math.max(0.3, 
                                         Math.min(1, this.linearSpeed / physic.MAX_SPEED * this.speedCoef()));
  };

  _ship.stopTurning = function () {
    this.angularSpeed = 0;
  };
  
  _ship.speedCoef = function () {
      var myAngle = (this.angle + 90) % 360;      
      var angleA = Math.min(myAngle, tsc.global.wind.getAngle());
      var angleB = Math.max(myAngle, tsc.global.wind.getAngle());

      diffAngle = Math.min(Math.abs(tsc.global.wind.getAngle() - myAngle),
                           Math.abs(360 - angleB + angleA));

      return ((180 - diffAngle) / 180);
  };
  
  _ship.accelerate = function () {
      var coef = this.speedCoef();

      if (this.linearSpeed < physic.MAX_SPEED * coef) {
          var clc = physic.ACCELERATION * coef * tsc.global.wind.getPower() * WIND_POWER_COEF;
          if (this.linearSpeed + clc >= physic.MAX_SPEED * coef)
              this.linearSpeed = physic.MAX_SPEED * coef;
          else
              this.linearSpeed += physic.ACCELERATION * coef * tsc.global.wind.getPower() * WIND_POWER_COEF;
      }  else if (this.linearSpeed > physic.MAX_SPEED * coef)
            this.stopAccelerate();
  };

  _ship.decelerate = function () {
    if (this.linearSpeed > physic.DECELERATION) {
      this.linearSpeed -= physic.DECELERATION;
    } else {
      this.linearSpeed = 0;
    }
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
    if (this.angle > 360)
        this.angle = this.angle % 360;
    else if (this.angle < 0)
        this.angle = 360 - this.angle;
  };

  _ship.moveLinear = function () {
    this.posY += Math.sin(this.angle * Math.PI / 180) * this.linearSpeed;
    this.posX += Math.cos(this.angle * Math.PI / 180) * this.linearSpeed;
  };

}).call(this);
