const { Schema, model } = require('mongoose');

const productSchema = new Schema ({
    category: {type: String},
    series: {type: String},
    model: {type: String, unique: true},
    descripcion: { type: String},
    imgProducto: {type: String},
    imgTecnica: {type: String},
    manualInstructivo: {type: String},
    // dimensiones: {
    //     ancho: {type: Number},
    //     largo: {type: Number},
    //     alto: {type: Number},
    // }

    // Changing the entire schema for google sheets JSON file
}, {
    timestamps: true
});


module.exports =model('Product', productSchema);