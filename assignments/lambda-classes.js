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

constructor(args){
    this.name = args.name;
    this.age = args.age;
    this.location = args.location;
}
speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}
} 

const jonSnow = new Person ({
    name:"Jon Snow",
    age: 25,
    location:"Castle Black", 
});


class Instructor extends Person {
    constructor (args){
        super (args);
        this.specialty = args.specialty;
        this.favLanguage = args.favLanguage;
        this.catchPhrase = args.catchPhrase;
    }
    // demo(subject){
    //     return `Today we are learning about ${this.subject}`
    // }
    // grade(student, subject){
    //     '${student.name} receives a perfect score on ${subject}'

    // }
}


const aryaStark = new Instructor({
    name: "Arya Stark",
    age: 16,
    location: "Winterfell",
    specialty: "killing",
    favLanguage: "javascript", 
    catchPhrase:"A girl has no name",
});

// console.log(Person);
console.log(jonSnow);
console.log(jonSnow.speak());
console.log(aryaStark);

// console.log(aryaStark.demo("stick-fighting whilst blindfolded");)
