const fs = require('fs');

const readStream = fs.createReadStream('./article.txt',{
    highWaterMark:10
});

readStream.on('readable', () =>{
    try{
        process.stdout.write(`[${readStream.read()}]`);
    }
    catch(error){   
        // Catch the error with chunk the cant read
        console.log(error);
    }
})

readStream.on('end',()=>{
    console.log('Done');
})