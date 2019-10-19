const express = require('express');
const router = express.Router();


let users = [
    {
        username: 'John Doe',
        email: 'test@123.com',
        activationDate: `January 1, 1970`
    }
]


router.get('/', (req, res) => {

    let newUser = req.body.username;
    if (!newUser) {
        res.json(users)
    } else {
        users.push(newUser);
        res.json(users);
    }
});

router.post('/', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json(users);

});

router.delete(`/delete/:username`, (req, res) => {
    let removeUser = req.params.username;

    users.map(element => {
        if (element.username === removeUser) {
            let index = users.indexOf(element);
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