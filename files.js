const fs = require('fs');

//reading files
fs.readFile('blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data.toString());
});


//writting files

fs.writeFile('blog1.txt', 'Hello world!', () => {
    console.log('File was written!');
});

fs.writeFile('blog2.txt', 'Blog 2 has been created!', () => {
    console.log('File was written!');
})

//directiories
jj
fs.mkdir('assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Folder Created');
});

//removing

fs.rmdir('assets', () => {
    console.log('Folder deleted');
});