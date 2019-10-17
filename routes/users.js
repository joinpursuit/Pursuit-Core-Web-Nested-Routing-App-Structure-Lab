const express = require('express');
const router = express.Router();
const User = require('../middleware/users');

// let users = {
//     username: "user1234",
//     email: "user1234@gmail.com",
//     activationDate: "January 1, 1970"
// }

const Users = new User();

router.get('/all', (req, res) => res.json(Users.getAllUsers()));

router.post('/add', (req, res) => res.json(Users.addUser(req.body.username, req.body.email, req.body.activationDate)));

router.put('/update', (req, res) => res.json(Users.updateUser(req.body.username, req.body.email, req.body.activationDate)));

router.delete('/delete', (req, res) => res.json(Users.deleteUser(req.body.username)));

router.get('/range?:year', (req, res) => res.json(Users.getAllActivation(req.params.year)));

module.exports = router;