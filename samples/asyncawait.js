// Async , Await
const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./app.js', 'utf8')
        const second = await readFile('./app.js', 'utf8')
        await writeFile(
            './result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' }
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
console.log('1');
start();
console.log(2);