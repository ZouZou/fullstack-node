const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProducts);
});
app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send('<h1>Product does not exist</h1>');
    }
    res.json(singleProduct);
});
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    res.send(`${req.params.productId}, ${req.params.reviewId}`);
});
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if (limit ) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length< 1) {
        // res.status(200).send('<h1>No products matched your search</h1>');
        return res.status(200).json({ success: true, data: [] });
    }
    return res.status(200).json(sortedProducts);
    // res.send(`${req.query}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});