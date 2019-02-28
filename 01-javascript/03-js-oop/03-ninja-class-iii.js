class Ninja {
    constructor(name,health,speed,strength){
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }
    sayName() {
       console.log(`my Name is ${this.name}`);
   
    }
    showStates() {
    console.log(`Name : ${this.name} , speed :${this.speed}, strength : ${this.strength},health : ${this.health}`)
   
   }
    drinkSake() {
    this.health += 10;
    console.log(`${this.health}`);
  }
};

class  Sensei extends Ninja{
    constructor(name,health,speed,strength,wisdom){
        super(name,health,speed,strength);
        this.speed = 10 ;
        this.strength = 10 ;
        this.health = 200 ;
        this.wisdom = 10;
    }

    speakWisdom(){
       const aaa =   super.drinkSake();
       console.log(aaa);
    }   
};

const superman = new Ninja('Dawit');
console.log(superman.sayName());
console.log(superman.showStates());
console.log(superman.drinkSake());

const superfly = new Sensei ("Dawit");

console.log(superfly.speakWisdom());


