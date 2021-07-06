const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    userAgreement: {type: Boolean, default: false}
}, {
    timestamps: true
});

module.exports = model('User', userSchema);