(function () {

  /**
   * @class Keyboard
   * @constructor
   * @param {type} node
   */
  var Keyboard = function (node) {
    this.node = node;
    this.eventHandler = null;

    this.key = tsc.values.orders.NO_COMMAND;

    this.registerToNode();
  };

  tsc.input.Keyboard = Keyboard;

  var _keyboard = Keyboard.prototype;

  _keyboard.registerToNode = function () {
    var that = this;
    this.node.addEventListener("keydown", function (event) {
      that.handleKeyDown(event.keyCode);
    });
  };

  _keyboard.handleKeyDown = function (keyCode) {
    this.key = keyCode;
    this.callHandler();
  };

  _keyboard.callHandler = function () {
    if (this.eventHandler !== null) {
      this.eventHandler(this.key);
    }
  };

  _keyboard.registerEventHandler = function (eventHandler) {
    this.eventHandler = eventHandler;
  };

}).call(this);
