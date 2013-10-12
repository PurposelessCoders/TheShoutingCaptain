(function () {

  /**
   * @constant
   * @type Number
   */
  var CODE_LEFT = 37;
  /**
   * @constant
   * @type Number
   */
  var CODE_UP = 38;
  /**
   * @constant
   * @type Number
   */
  var CODE_RIGHT = 39;
  /**
   * @constant
   * @type Number
   */
  var CODE_DOWN = 40;

  /**
   * @class Keyboard
   * @constructor
   * @param {type} node
   */
  var Keyboard = function (node) {
    this.node = node;
    this.eventHandler = null;

    this.key = {
      left: false,
      right: false,
      up: false,
      down: false
    };

    this.registerToNode();
  };

  tsc.input.Keyboard = Keyboard;

  var _keyboard = Keyboard.prototype;

  _keyboard.registerToNode = function () {
    var that = this;
    this.node.addEventListener("keydown", function (event) {
      that.handleKeyDown(event.keyCode);
    });

    this.node.addEventListener("keyup", function (event) {
      that.handleKeyUp(event.keyCode);
    });
  };

  _keyboard.handleKeyDown = function (keyCode) {
    if (keyCode === CODE_DOWN) {
      this.key.down = true;
    } else if (keyCode === CODE_UP) {
      this.key.up = true;
    } else if (keyCode === CODE_LEFT) {
      this.key.left = true;
    } else if (keyCode === CODE_RIGHT) {
      this.key.right = true;
    }

    this.callHandler();
  };

  _keyboard.handleKeyUp = function (keyCode) {
    if (keyCode === CODE_DOWN) {
      this.key.down = false;
    } else if (keyCode === CODE_UP) {
      this.key.up = false;
    } else if (keyCode === CODE_LEFT) {
      this.key.left = false;
    } else if (keyCode === CODE_RIGHT) {
      this.key.right = false;
    }

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
