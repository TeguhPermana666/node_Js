const Hapi = require(`@hapi/hapi`);
const init = async () =>{
    const server = Hapi.server({
        port: 3000,
        host: process.env.NODE_ENV !== `production` ? `localhost` : `dicoding.com`,
    });

    await server.start();
    console.log(`Server berjalan di server ${server.info.uri}`);
};

init();

const val = process.memoryUsage();
console.log(val);

const first_name = process.argv[2];
const last_name = process.argv[3];
// node process.js harry potter 
/*
Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya.
Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
Element ketiga : “harry”
Element keempat : “potter”
*/
 
console.log(`Hello ${first_name} ${last_name}`)