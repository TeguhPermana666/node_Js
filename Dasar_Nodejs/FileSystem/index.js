// Filesytem yang langsung mengload data secara keseluruhan sangat tidak efektif
/*
Maka dari itu diperlukan method stream, method stream akan di jelaskan selanjutnya
- Readable Stream
- Writable Stream

Stream dapat membaca berkas secara sekaligus namun dengan mengirimkannya secara sebagian-sebagian
*/
const fs = require('fs');
const path = require('path');

const fileReadCallback = (err, data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
}

fs.readFile(path.resolve(__dirname, 'Todo.txt'),"utf-8", fileReadCallback)
