const users = require("express").Router()

users.post("/", (req, res)=>{
    res.json("Created New User")
})

users.delete("/:id",(req, res)=>{
    res.json("Delete User" + req.params.id)
})

users.patch("/:id", (req, res)=>{
    res.json("Updated User" + req.params.id)
})

users.get("/", (req, res)=>{
    res.json("All users")
})

//users.get(`/${userActivation}`, (req, res)=>{
  //  res.json("Activation Date" + req.params.id)
//})

module.exports = users