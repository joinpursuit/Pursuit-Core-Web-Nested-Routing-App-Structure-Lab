const express = require('express')
const router = express.Router()

const users = [
    {
        username: "user1234",
        email: "user1234@gmail.com",
        activationDate: "January 1, 1970"
    },
    {
        username: "ojones311",
        email: "ojones@pursuit.org",
        activationDate: "December 7, 1993"
    },
    {
        username: "billiejean84",
        email: "bjean@gmail.com",
        activationDate: "May 23, 1985"
    }
]

const addNewUser = (req, res) => {
    const newUser = req.body
    const username = newUser.username
    const email = newUser.email
    const activationDate = newUser.activationDate

    console.log(newUser)
    users.push(newUser)
    res.json(newUser)
}
router.post('/add/', addNewUser)

const deleteUser = (req, res) => {
    const username = req.params.username
    console.log(username)
    for (i = 0; i < users.length; i++){
        if (users[i].username === username){
            users.splice(i,1);
        }
    }
    res.send(`User ${username} deleted`)
}
router.delete('/delete/:username', deleteUser)

const updateUser = (req, res) => {
    const clearUser = deleteUser()
    const createUser = addNewUser()
    console.log(createUser)
}
router.put('/update',updateUser)

// const filterbyDate = (req, res, next) => {
//     const activationDate = req.query.activationDate

//     if (activationDate)
// }
// router.get('/filter/')

const getAllUsers = (req, res) => {
    res.json(users)
}
router.get('/all', getAllUsers)

module.exports = router;