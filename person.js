
// console.log(__dirname,__filename);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old!`);
    }

}

const person = new Person('Stanslaus Odhiambo', 32);
console.log(person.greeting());

// export default person;
module.exports = Person;