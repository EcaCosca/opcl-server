const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.json({message: 'GET request'}))
    .post((req, res) => res.json({message: 'POST request'}));

router.route('/')
    .get((req, res) => res.json({message: 'GET user request'}))
    .put((req, res) => res.json({message: 'PUT user request'}))
    .delete((req, res) => res.json({message: 'DELETE user request'}));

    module.exports = router;