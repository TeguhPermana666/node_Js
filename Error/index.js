
try{
    // Kode 
    console.log("Awal block code");
    errorCode;
    console.log("Akhir block code");
}
catch(error){
    console.log('Program error');
}
finally{
    console.log('Tetap di eksekusi');
}


const kode = `{"name":"teguh","city":"badung"}`;
try{
    const user_json=JSON.parse(kode);
    console.log(user_json.name);
}
catch(error){
    console.log(error.name);
    console.log(error.message);
}
const kode2 = `{"name":"teguh","city":"badung"}`;
try{
    let user = JSON.parse(kode2);
    if(!user.name){
        throw new SyntaxError("Data user tidak lengkap");
    }
    console.log(user.name);
    console.log(user.city);
}catch(error){  
    if(error instanceof SyntaxError){
        console.log(`Json Error : ${error.message}$`);
    }
    else if(error instanceof ReferenceError){
        console.log(`Json Error : ${error.message}$`);
    }
    else{
        console.log(`Json Error : ${error.stack}$`);
    }
}
// Custom Error
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";

    }
}
const json = `{age:30}`
try{
    const user = JSON.parse(json);
    if(!user.name){
        throw new ValidationError("name is required");
    }
    if(!user.age){
        throw new ValidationError("age is required");
    }
    console.log(user.name);
    console.log(user.age);
}catch(error){
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } 
    else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } 
    else if (error instanceof ReferenceError) {
        console.log(error.message);
    } 
    else {
        console.log(error.stack);
    }    
}