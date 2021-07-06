const { Schema, model } = require('mongoose');

const productSchema = new Schema ({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String
}, {
    timestamps: true
});