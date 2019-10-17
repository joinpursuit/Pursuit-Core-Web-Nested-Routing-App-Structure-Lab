const express = require('express');

const router = express.Router();

let usersArray = [];

router.post('/add', (req, res) => {
    let user = req.body

    let userObj = {
        username: user.username,
        email: user.email,
        activationDate: user.activationDate
    }
    usersArray.push(userObj);

    res.json(userObj)
});

router.delete('/delete', (req, res) => {
    let username = req.body.username;

})


module.exports = router