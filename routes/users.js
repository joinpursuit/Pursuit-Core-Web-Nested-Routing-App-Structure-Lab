const express = require('express');

const router = express.Router();

let usersArray = [];

router.post('/add', (req, res) => {
    let user = req.body

    let userObj = {
        username: user.username,
        email: user.email,
        activationDate: user.activation
    }
    usersArray.push(userObj);

    res.send(userObj)
});

router.delete('/delete', (req, res) => {
    let username = req.query.username;
    let filtered = usersArray.filter(el => {
        return el.name !== username
    })
    res.send({
        status: `Success operation successful`,
        message: `${username} has been successfully deleted`
    })
})


router.patch('/:username/update', (req, res) => {
    let inputUser = req.params.username
    let user = req.body.username;
    let email = req.body.email

    for (el of usersArray) {
        if (el.username === inputUser) {
            if (email) {
                el.email = email
            }
            if (user) {
                el.username = user
            }
        }
        res.send(el)
    }
})

router.get('/:user', (req, res) => {
    let user = req.params.user
    let test = usersArray.filter(el => {
        return el.username === user
    })
    res.send(test)
})

router.get('/all', (req, res) => {
    res.send({
        message: 'Here is all of registered users',
        recipes: usersArray
    })
})


module.exports = router