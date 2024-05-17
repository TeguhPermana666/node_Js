// Import EventEmitter
const eventEmitter = require('events');


const brithdayEventListener= (name) =>{
    console.log(`Happy Birthday ${name}`);
}
// Buat variable dari eventEmitter
const myEventEmitter = new eventEmitter();

// Tentukan birthdayEventListener sebagai aksi event brithday dibangkitkan dengan emitter
myEventEmitter.on('birthday', brithdayEventListener);

// Call Event
myEventEmitter.emit('birthday', 'Teguh Permana');