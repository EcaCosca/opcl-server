const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.json({message: 'GET request'}))
    .post((req, res) => res.json({message: 'POST request'}));

module.exports = router;