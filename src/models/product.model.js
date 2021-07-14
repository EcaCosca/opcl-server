const { Schema, model } = require('mongoose');

const productSchema = new Schema ({
    codSerie: {type: String},
    codFuncion: {type: String},
    status: {type: String},
    ANYO_CERT: {type: String},
    certificado: {type: String},
    certificado2: {type: String},
    certificado3: {type: String},
    esquemaTippo: {type: String},
    logoCE: {type: String},
    normativa: {type: String},
    obsoleto: {type: String},
    certificadoCE: {type: String},
    cajaDimensiones: {type: String},
    durabilidad: {type: String},
    fuerzaCierreNewton: {type: String},
    material: {type: String},
    resitenciaCierre: {type: String},
    resistenciaFuego: {type: String},
    resistenciaIP: {type: String},
    temperatura: {type: String}
}, {
    timestamps: true
});


module.exports = model('Product', productSchema);