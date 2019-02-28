function Ninja(name,health){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
   
   
    this.sayName =function(name){
        console.log(this.name);
        return this;
    }
    this.showStats = function(){
        console.log("Name:" + this.name + ", Health :" + this.health + ",Speed :" + speed + ",Strength:" + strength )
        return this;
    }

    this.drinkSake = function(){
        health += 10;
     console.log(health);
     return health;
    }
 }

 var ninja1 = new Ninja("Dawit")
 ninja1.sayName();
 ninja1.showStats();
 ninja1.drinkSake();
 

 