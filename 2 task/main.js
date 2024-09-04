var FileStream = require('./mod');
var file = new FileStream();

file.on('write', (text) => {
    console.log(text);
});

file.on('read', (text) => {
    console.log(text);
});

file.fileRead('Чтение работает!');
file.fileWrite('Запись работает!');