const userCtrl = {};

const User = require('../models/user.model');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({
        email,
        password
    })
    await newUser.save();
    res.json({message: 'User saved'})
};

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
};

userCtrl.editUser = async (req, res) => {
    console.log(req.params.id, req.body)
    const {email, password} = req.body;
    User.findOneAndUpdate({_id: req.params.id}, {
        email,
        password
    })
    res.json({message: 'User edit saved'})
};

userCtrl.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({message: 'User deleted'})
};


module.exports = userCtrl;