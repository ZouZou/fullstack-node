const express = require('express');
const app = express();
const { products } = require('../data');

app.get('/', (req, res) => {
    res.json(products);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});