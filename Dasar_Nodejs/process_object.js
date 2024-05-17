const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2]
const environment = process.env.NODE_ENV;

// Process loop akan memmbuat Penggunaan memory naik
for (i=0;i<=10000;i++){
    // Naikan memoryusage
    console.log(`loop ${i} ${process.memoryUsage()}`);
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);