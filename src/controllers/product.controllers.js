const productCtrl = {};

productCtrl.getProducts = (req, res) => res.json({message: []});

productCtrl.getProduct = (req, res) => res.json({message: 'GET request'})


module.exports = productCtrl;