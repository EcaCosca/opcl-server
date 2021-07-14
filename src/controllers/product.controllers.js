const productCtrl = {};

const Product = require('../models/product.model');

productCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

productCtrl.createProduct = async (req, res) => {
    const {
        codSerie,
        codFuncion,
        status,
        ANYO_CERT,
        certificado,
        certificado2,
        certificado3,
        esquemaTippo,
        logoCE,
        normativa,
        obsoleto,
        certificadoCE,
        cajaDimensiones,
        durabilidad,
        fuerzaCierreNewton,
        material,
        resitenciaCierre,
        resistenciaFuego,
        resistenciaIP,
        temperatura
        // category,
        // series,
        // model,
        // descripcion,
        // imgProducto,
        // imgTecnica,
        // manualInstructivo,
        // dimensiones
     } = req.body;
    const newProduct = new Product({
        codSerie,
        codFuncion,
        status,
        ANYO_CERT,
        certificado,
        certificado2,
        certificado3,
        esquemaTippo,
        logoCE,
        normativa,
        obsoleto,
        certificadoCE,
        cajaDimensiones,
        durabilidad,
        fuerzaCierreNewton,
        material,
        resitenciaCierre,
        resistenciaFuego,
        resistenciaIP,
        temperatura

        // category,
        // series,
        // model,
        // descripcion,
        // imgProducto,
        // imgTecnica,
        // manualInstructivo,
        // dimensiones
    })
    await newProduct.save();
    res.json({message: 'Product saved'})
};

productCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product)
};

productCtrl.editProduct = async (req, res) => {
    console.log(req.params.id, req.body)
    const {
        codSerie,
        codFuncion,
        status,
        ANYO_CERT,
        certificado,
        certificado2,
        certificado3,
        esquemaTippo,
        logoCE,
        normativa,
        obsoleto,
        certificadoCE,
        cajaDimensiones,
        durabilidad,
        fuerzaCierreNewton,
        material,
        resitenciaCierre,
        resistenciaFuego,
        resistenciaIP,
        temperatura
    } = req.body;
    Product.findOneAndUpdate({_id: req.params.id}, {
        codSerie,
        codFuncion,
        status,
        ANYO_CERT,
        certificado,
        certificado2,
        certificado3,
        esquemaTippo,
        logoCE,
        normativa,
        obsoleto,
        certificadoCE,
        cajaDimensiones,
        durabilidad,
        fuerzaCierreNewton,
        material,
        resitenciaCierre,
        resistenciaFuego,
        resistenciaIP,
        temperatura
    })
    res.json({message: 'Product edit saved'})
};

productCtrl.deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({message: 'Product deleted'})
};



module.exports = productCtrl;