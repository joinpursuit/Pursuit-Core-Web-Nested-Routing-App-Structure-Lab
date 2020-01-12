const users = require("express").Router();


users.get("/", (req, res) => {
    res.json("returns all users");
})

users.get("/:id", (req, res) => {
    res.json("user: " + req.params.id);
})

users.delete("/:id", (req, res) => {
    res.json("delete user: " + req.params.id);
})

users.post("/users", (req, res) => {
    res.json("created a user");
})

module.exports = users;