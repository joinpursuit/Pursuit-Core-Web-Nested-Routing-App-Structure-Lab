const users = require("express").Router()

const allUsers = 
users.post("/", (req, res)=>{
    let newUser ={
        name:req.params.name,
        email:req.params.email,
        dateActivated:req.param.dateActivated

    }
    if(!newUser.name || !newUser.email || !newUser.dateActivated){
        res.send("add new name, email and date activated")
    }else{
        newUser.email = newUser.email.split(', ');
        allUsers.push(newUser);
        res.json(allUsers);
    }
})

users.delete("/:id",(req, res)=>{
    res.json("Delete User" + req.params.id)
})

users.patch("/:id", (req, res)=>{
    res.json("Updated User" + req.params.id)
})

users.get("/", (req, res)=>{
    res.json([{
        name:"John",
        email:"johnsmith@gmail.com",
        dateActivated: "January 1, 2015"
    },{
    name:"Jane",
    email:"janedoe@gmail.com",
    dateActivated: "July 15, 2019"
    },
    {
        name:"Bob",
        email:"bobbrown@gmail.com",
        dateActivated: "March 30, 2011"
        }])
})

users.get("/dateActivated", (req, res)=>{
   res.json("Activation Date" + req.params.id)
})

module.exports = users