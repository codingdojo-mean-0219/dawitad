function Ninja(name,health){
    let speed = 3;
    let strength = 3;
    this.name = name;
    this.health = 100;
    
   
    this.sayName =function(name){
        console.log(this.name);
        return this
    }
    this.showStats = function(){
        console.log("Name:" + this.name + ", Health :" + this.health + ",Speed :" + speed + ",Strength:" + strength )
        return this;
    }

    this.drinkSake = function(){
        this.health += 10;
     console.log(health);
     return this;
    }
   this.punch = function(){
     health -= 95;
     console.log(this.name + " was punched by " + blueNinja.name + " and lost " + health + " Health !")
 }
   this.kick = function(){     
     health -=85;
    console.log(this.name + " was Kicked by " + redNinja.name + " and lost" + health + " Health !")
   }
 }

 
 var ninja1 = new Ninja("Dawit")
 ninja1.sayName();
 ninja1.showStats();
 ninja1.drinkSake();

var blueNinja = new Ninja("Goemon");
var redNinja  = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
 

 