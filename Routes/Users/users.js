const express = require("express")
const users = express.Router();

let usersArr = [{
    id: "1",
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970"
}];

users.get("/", (req, res)=>{
    res.json({
        status: 200,
        message: "got all the users",
        newUser: usersArr
    })
});

users.post("/", (req, res)=>{
    usersArr.push(req.body);
    res.json({
        status: 200,
        message: "added a new users",
        newUser: req.body
    })
});

users.delete("/", (req, res)=>{
    usersArr = usersArr.filter(el => el.username !== req.body.username);
    res.json(usersArr)
})

users.patch("/",(req, res)=>{

    for(let i = 0; usersArr.length; i++){
        if(usersArr[i].id === req.body.id){
        usersArr[i] = req.body;
        }
    }
    console.log(req.body)
    res.json(usersArr)
})

module.exports = users