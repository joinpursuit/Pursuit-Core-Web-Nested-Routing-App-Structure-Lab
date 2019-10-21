const express = require('express');
const router = express.Router();


let users = [];


router.get('/', (req, res) => {
    // let newUser = req.body;
    res.json(users);
});

router.post('/', (req, res) => {
    let newUser = {
        username: req.body.username,
        email: req.body.email,
        activationDate: req.body.activationDate
    }
    if (!newUser.username || !newUser.email || !newUser.activationDate) {
        res.send(`Adding users require a username, email, and activationDate`);
    } else {
        users.push(newUser);
        res.json(users);
    }
});

router.delete(`/delete/:username`, (req, res) => {
    let removeUser = req.params.username;

    users.map(element => {
        if (element.username === removeUser) {
            let index = users.indexOf(element);
            console.log(index)
            users.splice(index, 1);
        }
    });
    res.send(users)
});



router.patch('/:user_id', (req, res) => {
    res.send(`where you update a user`);
});

router.get('/:date', (req, res) => {
    res.send(`where you get users who registered during a certain time`);
});

module.exports = router;