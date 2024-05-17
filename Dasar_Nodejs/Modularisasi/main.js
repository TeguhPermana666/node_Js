const {first_name, last_name} = require('./local_modules');
const data  = require('./lib/one_modules');

console.log(data(10));
console.log(`Hello ${first_name} ${last_name}`);