const fs = require('fs');

const writableStream = fs.createWriteStream('./write_output.txt');
writableStream.write('Hello World');
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');