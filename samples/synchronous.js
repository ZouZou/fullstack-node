// Synchronous
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('/app.js', 'utf-8');
writeFileSync(
    './file.txt', 
    `This is the content ${first}`
);