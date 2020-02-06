// setTimeout(() => {
//     console.log("Some test on timeout");

// }, 3000);


// let time = 0;
// let timer = setInterval(() => {
//     time += 2;
//     console.log(`${time} seconds have elapsed.....`);
//     if (time >= 10) {
//         clearInterval(timer);
//     }

// }, 2000)

// console.log(__dirname);
// console.log(__filename);

// function functionName(){
//     console.log("Somoething");

// }


// let functionName = () => console.log("Test someting");
// functionName();


const modulePrivate = require('./modules');
const util = require('util');
const events = require('events');
// console.log(modulePrivate.counter(['Stanslaus', 'Brian', 'Mary', 'Samson', 'Sean']));
// console.log(modulePrivate.adder(56, 45));
// console.log(modulePrivate.mini_pi);

// let myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', (msg) => {
//     console.log(msg);
// })

// myEmitter.emit('someEvent', 'The Event was emitted');

var Person = function(name)  {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('James');
let mary = new Person('Mary');
let ryan = new Person('Ryan');
let people = [james, mary, ryan];

people.forEach(person => {
    person.on('speak', (msg) => {
        console.log(`${person.name} said ${msg}`);

    });
});

mary.emit('speak',"Some test here");
