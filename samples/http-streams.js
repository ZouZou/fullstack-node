const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./samples/big.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (error) => {
        res.end(error);
    });
}).listen(5000);