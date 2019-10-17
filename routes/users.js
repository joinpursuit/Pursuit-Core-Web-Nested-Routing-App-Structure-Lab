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

    res.send({
        status: `Success operation successful`,
        message: `${username} has been successfully deleted`
    })
})

router.patch('/update', (req, res) => {
    let user = req.body;
    for (let i = 0; i < 10; i++) {
        let userObj = {
            username: user.username,
            email: user.email,
            activationDate: user.activationDate
        }
    }
    res.json(userObj)
})

// const arr = usersArray
// router.get('/all', (res, req) => {

//     // usersArray.forEach(el => res.json(el))
//     res.send(arr)
// })


module.exports = router