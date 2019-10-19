const express = require('express');
const router = express.Router();

const allUsers =  [
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

const verifyUser = (req, res, next) =>{

}

const displayUsers = (req, res, next) => {
    res.json(allUsers)
}


const addUser = (req, res, next) => {
    let newUser = res.body;
    for(let i = 0; i < allUsers.length; i++){

    }

}

const removeUser = (req, res, next) =>{
let specificUser =
for(let specificUser of  allUsers){
    if(specificUser){
        allUsers.filter(specificUser);

    }
}

}

const updateUser = (req, res, next) =>{

}

const getActivationDate = (req, res, next) =>{
    
}

router.get('/all', displayUsers)
router.post('/add-user', addUser)
router.delete('/remove-user', removeUser)

module.exports = router;