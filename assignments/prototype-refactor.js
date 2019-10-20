
 
  
//   /*
//     TASK 2
//       - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
//       - All instances built with Car:
//           + should initialize with an `tank` at 0
//           + should initialize with an `odometer` at 0
//       - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
//       - Give cars ability to `.drive(distance)`. The distance driven:
//           + Should cause the `odometer` to go up.
//           + Should cause the the `tank` to go down taking `milesPerGallon` into account.
//       - A car which runs out of `fuel` while driving can't drive any more distance:
//           + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
//   */
  
//   function Car(model, milesPerGallon) {
//     this.model = model;
//     this.milesPerGallon = milesPerGallon;
//     this.tank = 0;
//     this.odometer = 0;
//   }

//   Car.prototype.fill = function(gallons) {
//     this.tank = this.tank + gallons;
//   };

  
//   Car.prototype.drive = function(distance) {
//     this.odometer += distance;
  
//     if (this.tank >= distance / this.milesPerGallon) {
//       this.odometer = this.odometer + distance;
//       this.tank = this.tank - distance / this.milesPerGallon;
//     } else {
//       this.odometer = this.odometer + this.tank * this.milesPerGallon;
//       this.tank = 0;
//       return `I ran out of fuel at ${this.odometer} miles`;
//     }
//   };

class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }
    fill(gallons) {
        this.tank = this.tank + gallons;
    }
    drive(distance) {
                this.odometer += distance;
    
        if (this.tank >= distance / this.milesPerGallon) {
        this.odometer = this.odometer + distance;
        this.tank = this.tank - distance / this.milesPerGallon;
        } else {
        this.odometer = this.odometer + this.tank * this.milesPerGallon;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometer} miles`;
        }
    }
}

  const mysteryMachine = new Car("The Mystery Machine", 60);
  console.log(` odometer = ${mysteryMachine.odometer}`);
  console.log(`tank contains: ${mysteryMachine.tank}`);
  mysteryMachine.fill(2);
  mysteryMachine.fill(1);
  console.log(`After filling up my tank contains: ${mysteryMachine.tank}`);
  mysteryMachine.drive(30);
  console.log(`After driving my odometer = ${mysteryMachine.odometer}`);
  console.log(`after driving my tank contains: ${mysteryMachine.tank}`);
  console.log(`now tank contains: ${mysteryMachine.tank}`);

 // /*   TASK 1
 //     - Write a Person Constructor that initializes `name` and `age` from arguments.
 //     - All instances of Person should initialize with an empty `stomach` array.
 //     - Give instances of Person the ability to `.eat("someFood")`:
 //         + When eating an edible, it should be pushed into the `stomach`.
 //         + The `eat` method should have no effect if there are 10 items in the `stomach`.
 //     - Give instances of Person the ability to `.poop()`:
 //         + When an instance poops, its `stomach` should empty.
 //     - Give instances of Person a method `.toString()`:
 //         + It should return a string with `name` and `age`. Example: "Mary, 50"
 // */
//  constructor and prototype
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  Person.prototype.toString = function(name, age){
    return `${this.name}, ${this.age}`;
  }
  
  Person.prototype.eat = function(food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  }
  Person.prototype.poop = function() {
    if (this.stomach.length > 0) {
      this.stomach = [];
    }
  }
// ES6 refactored Class

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.stomach = [];
//     }

//     toString() {
//         return `${this.name}, ${this.age}`;
//     }

//     eat(food) {
//         if (this.stomach.length < 10) {
//             this.stomach.push(food);
//           }
//     }
//     poop() {
//         if (this.stomach.length > 0) {
//             this.stomach = [];
//           }
//     }

//   }

  const oldMan = new Person("Old Man", 100);

  console.log(`Before eating stomach contains: ${oldMan.stomach}`);
  oldMan.toString();
  oldMan.eat("sausage");
  oldMan.eat("Jelly");
  oldMan.eat("bread");
  oldMan.eat("cake");
  oldMan.eat("biscuit");
  oldMan.eat("sandwich");
  oldMan.eat("panini");
  oldMan.eat("sweets");
  oldMan.eat("salad");
  oldMan.eat("wafer thin mints");
  oldMan.eat("cake");
  oldMan.eat("cake");

  console.log(`after eating stomach contains: ${oldMan.stomach}`);
  oldMan.poop();
  console.log(`after pooping stomach contains: ${oldMan.stomach}`); 
//     // TASK 3
//     //   - Write a Baby constructor subclassing Person.
//     //   - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
//     //   - Besides the methods on Person.prototype, babies have the ability to `.play()`:
//     //       + Should return a string "Playing with x", x being the favorite toy.
//   // */

// function Baby(name, age, favoriteToy) {
//     Person.call(this, name, age, favoriteToy);
//     this.name = name;
//     this.age = age;
//     this.favoriteToy = favoriteToy;
//   }
//   Baby.prototype = Object.create(Person.prototype);
//   Baby.prototype.play = function() {
//     `playing with his ${this.favoriteToy}`;
//   };


class Baby extends Person {
    constructor(name,age, favoriteToy){
        super(name, age);
        this.favoriteToy = favoriteToy;
    }
    play() {
        `playing with his ${this.favoriteToy}`
    }

}


// const dad = new Person("Dad", 40);
const baby = new Baby("Angus", 1, "rubberduck");

//   console.log(person.name);
console.log(baby.favoriteToy);
  console.log(baby);
  console.log(baby.play);
  
