const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home page');
});
app.get('/about', (req, res) => {
    res.status(200).send('About page');
});
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});