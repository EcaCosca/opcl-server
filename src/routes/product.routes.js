const { Router } = require('express');
const router = Router();

const {getProducts, getProduct} = require('../controllers/product.controllers');

// GET - Get all products
router.route('/')
    .get(getProducts)


router.route('./:id')
    .get(getProduct)


module.exports = router;