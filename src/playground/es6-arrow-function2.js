// arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//   // console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1, 1001));

// // this keyword - no longer bound

// const user = {
//   name: 'Andrew',
//   cities: ['Philadelphia', 'New York', 'Dublin'],
//   printPlacesLived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city);
//   }
// };
// console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1,2,3,4,5,6,7,8,9],
  multiplyBy: 5,
  printResult() {
    return this.numbers.map((number) => number*this.multiplyBy);
  }
}

console.log(multiplier.printResult())

