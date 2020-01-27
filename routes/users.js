const express = require('express')
const userRoutes = express.Router()

let users = [{
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970"
    }
]

users.get("/", (req, res) => {
    res.json(usersArr)
})

users.get("/:id", (req, res) => {
    res.json(usersArr[req.params.id])
})

users.post("/", (req, res) => {
    console.log(req)
    usersArr.push(req.body)
    res.json([usersArr, req.body])
})

users.delete("/:id", (req, res) => {
    usersArr.splice(req.params.id, 1)
    res.json(usersArr)
})

users.put(":/id", (req, res) => {
    usersArr[req.params.id] = req.body
    res.json(usersArr[req.params.id])
})

users.get("/date/:min/:max", (req, res) => {
    console.log(req.params.min)
    let output = usersArr.filter(user => {
        let dateCreated = new Date(user.activationDate)
        if (req.params.min < dateCreated.getFullYear() && dateCreated.getFullYear() < req.params.max) {
            return user
        }
    })
    res.json(output)
})

module.exports = users;