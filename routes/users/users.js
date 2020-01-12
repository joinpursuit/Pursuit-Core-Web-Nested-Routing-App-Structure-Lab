const users = require("express").Router();

let peopleArr = [{
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970"
}]

users.get("/", (req, res) => {
    res.json(peopleArr)
})

users.get("/:id", (req, res) => {
    res.json(res.json(peopleArr[req.params.id]))
})

users.delete("/:id", (req, res) => {
    peopleArr.splice(req.params.id, 1)
    res.json(peopleArr)
})

users.post("/:username", (req, res) => {
    peopleArr.push(req.body)
    res.json(req.body)
})

users.put("/:")


module.exports = users ; 