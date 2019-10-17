const express = require("express");
const router = express.Router();

router.post('/new', (req, res) => {
    res.send('adding a new user!')
});

module.exports = router