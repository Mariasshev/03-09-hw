const EventEmitter = require('events');

class FileStream extends EventEmitter{
    
    fileRead = (msg) => {
        console.log(msg);
        this.emit('read', '---- файл прочитан ----');
    }

    fileWrite = (msg) => {
        console.log(msg);
        this.emit('write', '---- файл записан ----');
    }
}

module.exports = FileStream;