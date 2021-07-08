const userCtrl = {};

const User = require('../models/user.model');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = (req, res) => {
    const { test } = req.body;
    res.json({message: 'User saved'})
};

userCtrl.getUser = (req, res) => {

};

userCtrl.editUser = (req, res) => {

};

userCtrl.deleteUser = (req, res) => {

};


module.exports = userCtrl;