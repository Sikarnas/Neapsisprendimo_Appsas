class Person {
 constructor(name = 'Anonymous', age = 0) {
     this.name = name;
     this.age = age;
 }
 getGreeting() {
     return `Hi my name is: ${this.name}`
 }
 getDescription() {
    return `Hi my name is: ${this.name} and I'm ${this.age} years old `
 }
}

// class Student extends Person {
//     constructor(name, age, major){
//         super(name,age)
//         this.major = major
//     }
//     hasMajor() {
//         return !!this.major
//     }
//     getDescription() {
//         let description = super.getDescription();
//         return `${description} I also study ${this.major}`
//     }
// }

class Traveler extends Person {
    constructor(name,age,homeLocation) {
        super(name,age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting();
    if(this.homeLocation) {
        return `${greeting} and I'm form ${this.homeLocation}`
    } else return greeting
    }
}

const me = new Traveler('Aurutis',24, 'Panevezys');
const me1 = new Traveler();

console.log(me.getGreeting())
console.log(me)



