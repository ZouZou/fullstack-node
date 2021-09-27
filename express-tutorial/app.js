const path = require('path');
const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people', people);
app.use('/login', auth);

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(400).send('You seems to be lost');
    // next();
});
// Handler for Error 500
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.sendFile(path.join(__dirname, './methods-public', '500.html'));
    // next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
