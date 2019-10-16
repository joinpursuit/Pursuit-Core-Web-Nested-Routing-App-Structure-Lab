const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`where you get all Users`);
});

router.post('/new', (req, res) => {
    res.send(`This adds a new user`);
});

router.delete(`/:user_id`, (req, res)=> {
    res.send(`Where you remove a user`);
});

router.patch('/:user_id', (req, res) => {
    res.send(`where you update a user`);
});

router.get('/:date', (req, res) => {
    res.send(`where you get users who registered during a certain time`);
});

module.exports = router;