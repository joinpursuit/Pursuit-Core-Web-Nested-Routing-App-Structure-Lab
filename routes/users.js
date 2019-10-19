const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser")



router.post('/new', (req, res) => {
    res.send('adding a new user!')
});

router.use(bodyParser.urlencoded({
    extended: false
}))

module.exports = router