const users = require("express").Router();

let usersList = [
    {
        username: "user1234",
        email: "user1234@gmail.com",
        activationDate: "January 1, 1970"
    },
    {
        username: "kwong",
        email: "kevinwong@pursuit.org",
        activationDate: "September 24, 2019"
    },
    {
        username: "coreyl",
        email: "coreyl@gmail.com",
        activationDate: "October 4, 2070"
    },
];

users.get("/", (req, res) => {
    res.json(usersList);
})

users.post("/", (req, res) => {
    let newUser = {
        username: req.body.username,
        email: req.body.email,
        activationDate: req.body.activationDate,
    }
    usersList.push(newUser);
    res.json(usersList);
})

users.delete("/", (req, res) => {
    usersList = usersList.filter(el => el.username !== req.body.username)
    res.json(usersList)
})

module.exports = users;