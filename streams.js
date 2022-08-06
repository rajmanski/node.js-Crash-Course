const fs = require('fs');

const readStream = fs.createReadStream('blog1.txt');
const writeStream = fs.createWriteStream('blog3.txt');

readStream.on('data', (chunk) => {
    console.log('NEW CHUNK!');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})