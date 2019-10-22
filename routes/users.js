const log = console.log;
/*
  users.js : This file will serve as the router for our User features
*/

var express = require('express');
var router = express.Router();

let allUsers = [
    {
        username: "user1234",
        email: "user1234@gmail.com",
        activationDate: "January 1, 1970"
    },
    {
        username: "000000",
        email: "use00000@gmail.com",
        activationDate: "January 1, 1950"
    },
    {
        username: "dfasdfsa",
        email: "use0asdfasdf@gmail.com",
        activationDate: "January 1, 2000"
    },
    {
        username: "0000asfasf00",
        email: "use00000@gasdfasfmail.com",
        activationDate: "Janasdfasdfary 1, 1970"
    },
]

const addUser = (req, res, next) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        activationDate: Date(Date.now()).toString(),
    }

    res.json({
        status: user.username && user.email && user.activationDate ?
        `success username and email have been defined. activation date: ${user.activationDate}` :
        `Sorry but either username or email havent been defined.`,
        user,
        error: user.username && user.email && user.activationDate ? 
            'NO Error' :
            `username ${!user.username} || email ${!user.email} || activationDate ${!user.activationDate}`,
    })
    user.username && user.email && user.activationDate ? allUsers.push(user) : null;
}

const deleteUser = (req, res, next) => {
    let user = req.query.username;
    res.json({
        status: allUsers.map(u => u.username).includes(user) ?
            `${user} has been successfully removed` :
            `${user} cannot be found in list of users`,
        user: allUsers.filter(u => user === u.username),
        error: allUsers.map(u => u.username).includes(user) ?
            `NO ERROR` :
            `${user} - does not exist in: [${allUsers.map(u => u.username)}]`,
    })
    allUsers = allUsers.filter(u => user !== u.username)
}

const updateUser = (req, res, next) => {
    let username = req.query.username;
    let edits = req.body;
    if (!allUsers.map(u => u.username).includes(username)) {
        res.json({
            error: `username ${username} not found in ${allUsers.map(u => u.username)}`
        })
        return;
    }
    for (user of allUsers) {
        if (user.username === username) {
            for (key in user) {
                if (edits[key]) {
                    user[key] = edits[key]
                }
            }
            res.json({user})
        }
    }
}

const getUsers = (req, res, next) => {
    let activationDate = req.query.activationDate ? req.query.activationDate : undefined;
    let filteredUsers = allUsers

    if (activationDate) {
        filteredUsers = filteredUsers.filter(user => user.activationDate.includes(activationDate))
    }

    res.json(filteredUsers)
}

router.post('/add', addUser);

router.delete('/delete', deleteUser);

router.patch('/update', updateUser);

router.get('/all', getUsers);

module.exports = router;