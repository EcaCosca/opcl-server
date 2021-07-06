const { Router } = require('express');
const router = Router();

const {getProducts} = require('../controllers/product.controllers');

// GET - Get all products
router.route('/')
    .get((req, res) => res.send('Product Routes'))


router.route('./:id')
    .get((req, res) => res.json({message: 'GET request'}))


module.exports = router;