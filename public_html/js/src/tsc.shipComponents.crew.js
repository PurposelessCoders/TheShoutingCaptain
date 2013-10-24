(function () {
    
    var HP_BY_MEMBERS = 10;
    var REALOAD_TIME = 5000; //5s
    
    var Crew = function (size) {
        this.size = size;
        this.hp = size * HP_BY_MEMBERS;
        this.bonus = 50;
        this.bonuTimer = 0;
    };
    
    tsc.shipComponents.Crew = Crew;
    
    var _crew = Crew.prototype;
    
    _crew.hpDamages = function (dm) {
        this.hp -= dm;
        
        var crewSize = this.hp / HP_BY_MEMBERS;
        if (crewSize < this.size) {
            this.moralMalus(5 * (this.size - crewSize));
            this.size = crewSize;
        }
           
        if (this.hp <= 0)
            //LOSER
    };

    _crew.timeToRealoadCanon = function (nbCanon) {
        var manByCanon = nbCanon / this.size;
        var bonusMoral = 100 / (50 + this.bonus);
    
        return REALOAD_TIME / (manByCanon * bonusMoral);
    };
    
    _crew.moralBonus = function (bonus) {
        this.bonus = Math.max(0, Math.min(100, this.bonus + bonus));
        this.bonusTimer = new Date().getTime();
    };
    
    _crew.moralMalus = function (malus) {
        this.moralBonus(-malus);
    };
    
    _crew.moralInTime = function () {
        this.bonusTimer -= tsc.values.time.DeltaTime();
        if (this.bonusTimer <= 0) {
            this.moralMalus(25);
        }
    };
}).call(this);