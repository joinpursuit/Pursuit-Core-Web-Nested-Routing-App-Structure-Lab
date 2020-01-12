const users = require("express").Router()

const allUsers = [{
    name:"John",
    id: 1,
    email:"johnsmith@gmail.com",
    dateActivated: "January 1, 2015"
},{
name:"Jane",
id:2,
email:"janedoe@gmail.com",
dateActivated: "July 15, 2019"
},
{
    name:"Bob",
    id:3,
    email:"bobbrown@gmail.com",
    dateActivated: "March 30, 2011"
    }]
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

users.delete("/:userId",(req, res)=>{
    let element = parseInt(req.params.id)
    let arr 
    for(let i = 0; i< user.data; i++){
        if(element === users.data[i].id){
            arr = users.data[i]
            users.data.splice(i,1)
        }

    }
    res.json(arr)
})

users.patch("/:userChange", (req, res)=>{
    let userChange = req.params.userChange
    let name = req.body.name
    let email = req.body.email
    res.send(userChange.name.email)
    res.json("Updated User" + req.params.id)
})

users.get("/", (req, res)=>{
res.json(allUsers)
})

users.get("/dateActivated", (req, res)=>{
    let date = req.params.date;
    let output = allUsers.filter(user => {
        return user.dateActivated.includes(date)
    })
    res.json(output)
})

module.exports = users