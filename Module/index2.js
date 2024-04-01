import {coffeStock, isCoffeMachineReady} from "./state2.js";

const displayStock = (stock) =>{
    for (const type in stock){
        console.log(type);
        console.log(isCoffeMachineReady);
    }
}

// Jika tidak pakek export, tidak isi type:module
displayStock(coffeStock);