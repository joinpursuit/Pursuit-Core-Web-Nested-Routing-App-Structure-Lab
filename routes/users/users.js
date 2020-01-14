const users = require("express").Router()

let usersArr = [
    {
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 2010"
    },
    {
    username: "user4321",
    email: "user4321@yahoo.com",
    activationDate: "December 21, 2019"
    }
]

users.get("/", (req, res) => {
    res.json(usersArr)
})

const addUser = (req, res, next) => {
    usersArr.push(req.body)
    res.json(usersArr)
    next()
}

users.post("/newUsers", addUser, (req, res) => {
    res.json(req.body)
})

users.delete("/:username", (req, res) => {
    let username = req.params.username
    usersArr.splice(username, 1)
    res.json(usersArr)
})

users.put("/:id", (req, res) => {
    usersArr[req.params.id] = req.body;
    res.json(usersArr[req.params.id])
})


module.exports = users