const productCtrl = {};

const Product = require('../models/product.model');

productCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

productCtrl.getProduct = (req, res) => {
    res.json({message: 'GET request'})
};


module.exports = productCtrl;