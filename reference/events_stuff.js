const EventEmitter = require('events');

class MyEmmitter extends EventEmitter { }

const myEmitter = new MyEmmitter();

myEmitter.on('event', () => {
    console.log('Event Fired!');
})

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');