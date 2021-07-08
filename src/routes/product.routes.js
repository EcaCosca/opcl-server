const { Router } = require('express');
const router = Router();

const {getProducts, createProduct, getProduct, editProduct, deleteProduct} = require('../controllers/product.controllers');

// GET - Get all products
router.route('/')
    .get(getProducts)
    .post(createProduct);


router.route('./:id')
    .get(getProduct)
    .put(editProduct)
    .delete(deleteProduct);


module.exports = router;