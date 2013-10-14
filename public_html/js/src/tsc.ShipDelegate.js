(function () {

  /**
   * @class ShipDelegate
   * @constructor
   * @param {Ship} ship
   */
  var ShipDelegate = function (ship) {
    this.ship = ship;
    this.key = {
      up: false,
      down: false,
      left: false,
      right: false
    };
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
    if (this.key.up && !this.key.down) {
      this.ship.sailUp();
    } else if (!this.key.up && this.key.down) {
      this.ship.sailDown();
    } else {
      this.ship.stopAccelerate();
    }
  };

  _delegate.actionAngular = function () {
    if (this.key.left && !this.key.right) {
      this.ship.turnLeft();
    } else if (!this.key.left && this.key.right) {
      this.ship.turnRight();
    } else {
      this.ship.stopTurning();
    }
  };

}).call(this);
