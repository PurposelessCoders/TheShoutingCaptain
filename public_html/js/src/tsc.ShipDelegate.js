(function () {

  /**
   * @class ShipDelegate
   * @constructor
   * @param {Ship} ship
   */
  var ShipDelegate = function (ship) {
    this.ship = ship;
    this.key = null;
  };

  tsc.ShipDelegate = ShipDelegate;

  var _delegate = ShipDelegate.prototype;

  _delegate.setInput = function (key) {
    this.key = key;
  };

  _delegate.action = function () {
    this.actionLinear();
    this.actionAngular();
  };

  _delegate.actionLinear = function () {
    if (key.up && !key.down) {
      this.ship.accelerate();
    } else if (!key.up && key.down) {
      this.ship.decelerate();
    } else {
      this.ship.stopAccelerate();
    }
  };

  _delegate.actionAngular = function () {
        if (key.left && !key.right) {
      this.ship.turnLeft();
    } else if (!key.left && key.right) {
      this.ship.turnRight();
    } else {
      this.ship.stopTurning();
    }
  };

}).call(this);
