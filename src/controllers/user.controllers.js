const userCtrl = {};

const User = require('../models/user.model');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = (req, res) => res.json({message: []});

userCtrl.getUser = (req, res) => res.json({message: 'GET request'})

userCtrl.editUser = (req, res) => res.json({message: 'GET request'})

userCtrl.deleteUser = (req, res) => res.json({message: 'GET request'})


module.exports = userCtrl;