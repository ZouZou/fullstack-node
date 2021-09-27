const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
});
router.get('/error', (req, res) =>{
    throw new Error('I threw the error');
});

module.exports = router;