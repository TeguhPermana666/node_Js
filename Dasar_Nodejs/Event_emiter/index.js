const {EventEmitter} = require('events');//Load Class EventEmitter dari core modules events 

myEventEmitter = new EventEmitter();

const makeCoffe = (name) =>{
    console.log(`Making Coffee ${name}`);
}
const makeBill = (price) => {
    console.log(`Making Bill ${price}`);
}
// Create Event
// myEventEmitter.on('Coffe-Order', makeCoffe);
// myEventEmitter.on('Coffe-Order', makeBill);

const onCoffeOrderListener = ({name, price}) => {
    makeCoffe(name);
    makeBill(price);

}
myEventEmitter.on('Coffe-Order', onCoffeOrderListener);

// Call Event
myEventEmitter.emit('Coffe-Order',{name: 'Cappuccino', price: 2000});
myEventEmitter.emit('Coffe-Order',{name: 'Latte', price: 1500});