const productCtrl = {};

const Product = require('../models/product.model');

productCtrl.getProducts = (req, res) => res.json({message: []});

productCtrl.getProduct = (req, res) => res.json({message: 'GET request'})


module.exports = productCtrl;