(function () {

  /**
   * @class ShipDelegate
   * @constructor
   * @param {Ship} ship
   */
  var ShipDelegate = function (ship) {
    this.ship = ship;
    this.key = tsc.values.orders.NO_COMMAND;
    this.prev_key = tsc.values.orders.NO_COMMAND;
  };

  tsc.ShipDelegate = ShipDelegate;

  var _delegate = ShipDelegate.prototype;

  _delegate.setInput = function (key) {
    this.key = key;
  };

  _delegate.action = function () {
    if (this.key === tsc.values.orders.GO_DOWN)
      this.ship.sailDown();
    else if (this.key === tsc.values.orders.GO_UP)
      this.ship.sailUp();
    else if (this.key === tsc.values.orders.GO_LEFT)
      this.ship.turnLeft();
    else if (this.key === tsc.values.orders.GO_RIGHT)
      this.ship.turnRight();
    else if (this.prev_key === tsc.values.orders.GO_DOWN || this.prev_key === tsc.values.orders.GO_UP)
      this.ship.stopAccelerate();
    else if (this.prev_key === tsc.values.orders.GO_LEFT || this.prev_key === tsc.values.orders.GO_RIGHT)
      this.ship.stopTurning();
    else
      return;
    this.prev_key = this.key;
    this.key = tsc.values.orders.NO_COMMAND;
  };
}).call(this);
