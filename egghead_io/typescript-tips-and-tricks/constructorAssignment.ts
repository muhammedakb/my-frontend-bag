// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

class Person {
  constructor(public name: string) {}
}

const johnDoe = new Person('John Doe');

console.log(johnDoe.name);
