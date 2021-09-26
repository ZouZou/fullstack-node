const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./big.txt', { encoding: 'utf8' })
const stream = createReadStream('./samples/big.txt', {
    highWaterMark: 9000000,
    encoding: 'utf-8'
})

stream.on('data', (result) => {
  console.log(result)
  console.log('=====================');
})
stream.on('error', (err) => console.log(err))