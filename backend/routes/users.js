const express = require('express');
const router = express.Router();

const allUsers = [
    {
        username: "donna112",
        email: "donna112@gmail.com",
        activationDate: "January 1, 1970"
    },
    {
        username: 'sislam12',
        email: 'sislam12@binghamton.edu',
        activationDate: 'July 5, 2012'
    },
    {
        username: 'rosita',
        email: 'rose@yahoo.com',
        activationDate: 'October 31, 1998'
    },
    {
        username: 'django90',
        email: 'django90@gmail.com',
        activationDate: 'December 5, 2015'
    },
    {
        username: 'cupKate',
        email: 'kac1234@gmail.com',
        activationDate: 'May 24, 2005'
    }
]
router.get('/all', (req,res) => {
    res.json(allUsers)
})

module.exports = router;