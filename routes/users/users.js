const users = require('express').Router()

let userArr = [
    {username: "user1",
    email: "user1@pursuit.org",
    activationDate: "jan 1, 2017"},

    {username: "user_two",
    email: "user_two@pursuit.org",
    activationDate: "jan 1, 2019"},

    {username: "user3",
    email: "user3@pursuit.org",
    activationDate: "jan 32, 2021"},
    
    {username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970"}
]
users.get('/', (req,res) => {

    res.json(userArr)
})
users.post('/',(req,res) => {
    userArr.push(req.body)
    res.json({
        status:200,
        message: "posted new user",
        newUser: req.body
    })

})
users.delete('/:id',(req,res) => {
    res.json("deleted: " + req.params.id)
})
users.patch('/:id', (req,res) => {
    userArr.push(req.body)
    res.json({
        status:200,
        message: "updated user",
        updateUser: req.body
    })
})

users.get('/:id', (req,res) => {
    let output = [];
    for (let i = 0; i < userArr.length; i++) {
        if(userArr[i]['activationDate'].includes(req.params.id)){
            output.push(userArr[i])             
        }
    }
    if (userArr.length) {
        res.json(output);
    } else {
        res.json({
            status: 404,
            message: 'datesnot found'
        })
    }
})

module.exports = users