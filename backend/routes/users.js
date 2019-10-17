const express = require('express');
const router = express.Router();

router.get('/all', (req,res) => {
    res.json('users will be displayed here!')
    console.log("test")
})

module.exports = router;