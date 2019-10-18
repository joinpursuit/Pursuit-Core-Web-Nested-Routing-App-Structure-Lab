const express = require('express');
const router = express.Router();
const User = require('../middleware/users');

const Users = new User();

// POST, PUT & DELETE methods not returning the right return statement for some odd reason
router.get('/all', (req, res) => res.json(Users.getAllUsers()));

router.post('/add', (req, res) => res.json(Users.addUser(req.body.username, req.body.email, req.body.activationDate)));

router.put('/update', (req, res) => res.json(Users.updateUser(req.body.username, req.body.email, req.body.activationDate)));

router.delete('/delete', (req, res) => res.json(Users.deleteUser(req.body.username)));

// Year range below not complete
// router.get('/range?:year', (req, res) => res.json(Users.getAllActivation(req.params.year))); 

module.exports = router;