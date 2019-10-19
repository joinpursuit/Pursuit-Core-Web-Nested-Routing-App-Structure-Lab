const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
    res.send("here's all those recipes you wanted")
})

router.post('/new', (req, res) => {
    res.send('I just posted a recipe!')
});

module.exports = router