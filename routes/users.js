const express = require('express')
const userRoutes = express.Router()

let users = [{
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970"
    },
    {
    username: "user666",
    email: "user666@gmail.com",
    activationDate: "June 6, 1966"
    }
]

userRoutes.get("/", (req, res) => {
    res.json(users)
})

userRoutes.get("/:id", (req, res) => {
    res.json(users[req.params.id])
})

userRoutes.post("/", (req, res) => {
    console.log(req)
    users.push(req.body)
    res.json({New_User: req.body, Updated_User_List: users})
})

userRoutes.delete("/:id", (req, res) => {
    users.splice((req.params.id + 1), 1)
    res.json({Updated_User_List: users})
})

userRoutes.put(":/id", (req, res) => {
    users[req.params.id + 1] = req.body
    res.json(users[req.params.id + 1])
})

userRoutes.get("/date/:min/:max", (req, res) => {
    let userFilter = users.filter(user => {
        let date = new Date(user["activationDate"])
        console.log(date.getFullYear())
        if (req.params.min < date.getFullYear() && date.getFullYear() < req.params.max) {
            return user
        }
    })
    res.json(userFilter)
})

module.exports = userRoutes;