var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('click', (args) => {
    const {id, text} = args;
    console.log( id, text);
});

emitter.on('delete', (text) => {
    console.log(text);
});

emitter.emit('click', {id: 2, text: 'Hello World!'});
emitter.emit('delete', 'Data are successfully deleted!');