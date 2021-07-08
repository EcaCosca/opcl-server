const { Router } = require('express');
const router = Router();

const {getUsers, createUser, getUser, editUser, deleteUser} = require('../controllers/user.controllers');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(editUser)
    .delete(deleteUser);


 module.exports = router;