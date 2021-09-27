const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res

// app.get('/', logger, (req, res) => {
//     res.send('Home');
// });
// app.get('/about', logger, (req, res) => {
//     res.send('About');
// });

// 1. use vs route
// 2. options - our own / express / third party
// app.use(express.static(./public));

// morgan npm package is a middleware for request logging
app.use(morgan('tiny'));

// Will work before any call
// app.use([logger, authorize]);
// or
// Will work only before any call that starts with /api
// app.use('/api', logger);

app.get('/', (req, res) => {
    console.log(req.user);
    res.send('Home');
});
app.get('/about', (req, res) => {
    res.send('About');
});
app.get('/api/products', (req, res) => {
    res.send('Products');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});