import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum);

// With Loadsh 
const myArray2 = [1, 2, 3, 4];
const sum2 = _.sum(myArray);
 
console.log(sum2);