(function () {
  /**
   * @namespace time
   */
  
  var time = tsc.values.time = {};

  /**
   * @private
   */
  
  var deltaTime = 0;
  var lastInterval = 0;

  time.DeltaTime = function () {
     return deltaTime;
  };
      
  time.Update = function () {
      var now = new Date();
      now = now.getTime();
      deltaTime = (now - lastInterval) / 1000;
      lastInterval = now;
  };

}).call(this);