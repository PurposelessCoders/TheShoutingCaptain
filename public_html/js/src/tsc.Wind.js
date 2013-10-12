(function () {
   
     var physic = tsc.values.physic;
    
  /**
   * @constant
   */
  var WIND_MAX_POWER_CHANGE = 1;

  /**
   * @constant
   */
  var WIND_MAX_ANGLE_CHANGE = 45;
  
  /**
   * @constant
   */
  var WIND_TIMER_MIN = 10;

  /**
   * @constant
   */
  var WIND_TIMER_MAX = 60;
      
      
  /**
   * @constructor
   * @param {type} angle
   * @param {type} power
   */
  
  var Wind = function (angle, power) {
      if (angle !== undefined || power !== undefined)  {
          this._power =  Math.floor(Math.random()*physic.WIND_MAX_POWER);
          this._angle =  Math.floor(Math.random()*360);
      } else {
          this._power = power;
          this._angle = angle;      
      }
    };
    
  tsc.Wind = Wind;
  
  var _wind = Wind.prototype;
    
  _wind.setWind = function (angle, power) {
        this._angle = angle;
        this._power = power;
    };

  _wind.getAngle = function () {
    return this._angle;  
  };
  
  _wind.getPower = function () {
    return this._power;  
  };

  _wind.update = function () {
    this.updateForce();
    this.updateAngle();
    this.defineNextChagement(); 
  };
  
  _wind.updateForce = function () {
      var vl = Math.floor(Math.random()*WIND_MAX_POWER_CHANGE);

      if (Math.random() > 0.5 && this._power - vl > 0)
          this._power -=  vl;
      else if (this._power + vl < physic.WIND_MAX_POWER)
          this._power +=  vl;
  };
  
  _wind.updateAngle = function () {
    var vl = Math.floor(Math.random()*WIND_MAX_ANGLE_CHANGE);
     if (Math.random() > 0.5)
          this._angle -=  vl;
      else
          this._angle +=  vl;
      
      if (this._angle < 0)
          this._angle += 360;
      else if (this._angle > 360)
          this._angle = this._angle % 360;
  };
  
  _wind.defineNextChagement = function (){
   var timer = Math.floor((Math.random()*WIND_TIMER_MAX)+WIND_TIMER_MIN)
          % WIND_TIMER_MAX;
  var _this = this;
   setTimeout(function () { _this.update();}, timer);
 }; 
    
    
}).call(this);