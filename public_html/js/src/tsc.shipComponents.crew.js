(function () {
    
    var HP_BY_MEMBERS = 10;
    
    var Crew = function (size) {
        this.size = size;
        this.hp = size * HP_BY_MEMBERS;
    };
    
    tsc.shipComponents.Crew = Crew;
    
    var _crew = Crew.prototype;
}).call(this);