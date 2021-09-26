// Asynchronous
const { readFile, writeFile } = require('fs');

readFile('./app.js', 'utf8', (err, content) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = content;
    readFile('./app.js', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './file.txt', 
            `This is the content ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    });
    // console.log(content);
})