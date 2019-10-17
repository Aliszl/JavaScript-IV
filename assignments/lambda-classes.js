// CODE here for your Lambda Classes

//   * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
//   * 
//   * const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
//   });

class Person{

constructor(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
}
speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}
} 

const jonSnow = new Person ("Jon Snow", 25,"Castle Black") 
;


// console.log(Person);
console.log(jonSnow);
console.log(jonSnow.speak());
