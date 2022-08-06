const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //lodash
    num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello');
    });

    greet();
    //set header content type
    res.setHeader('Conetent-type', 'text/plain');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })
    
});


server.listen(3000, 'localhost', () => {
    console.log('Listening on 3000');
});


