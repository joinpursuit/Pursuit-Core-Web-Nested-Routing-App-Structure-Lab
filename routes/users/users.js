const users = require("express").Router()
let usersList =[{
  username: "user1234",
  email: "user1234@gmail.com",
  activationDate: "January 1, 1970"
},
{
  username: "user1235",
  email: "user1235@gmail.com",
  activationDate: "January 1, 1971"
},
{
  username: "user1236",
  email: "user1236@gmail.com",
  activationDate: "January 1, 1973"
},
{
  username: "user1237",
  email: "user1237@gmail.com",
  activationDate: "January 1, 1975"
}
]

users.post("/",(req,res)=>{
  let newUser = req.body
  usersList.push(newUser)
  res.json({status: "success", usersList})

})

users.patch("./:username", (req,res)=>{
  let userName = req.params
  let changes = req.body
  let selectedUser

  usersList.forEach(user =>{
    if(user["username"]===userName["username"]){
      selectedUser = user
    }
  })

  for(key in changes){
    selectedUser[key] = changes[key]
  }
  res.json({status: "success", selectedUser})
})

users.delete("/:username", (req,res)=>{
  let userDelete = req.params
  let indextoDelete

  usersList.forEach(user =>{
    if(user["username"] === userDelete["username"]){
      indextoDelete = usersList.indexOf(user)
    }
  })

  usersList.splice(indextoDelete,1)

  res.json({status:"success",usersList})
})

users.get("/", (req,res)=>{
  res.json({status:"success",usersList})
})

users.get("/:activationDate", (req,res)=>{
  let reqActivationDate = parseInt(req.params["activationDate"])
  let reqUserList = []

  usersList.forEach(user =>{
    if(user["activationDate"].getFullYear() === reqActivationDate){
      reqUserList.push(user)
    }
  })

  res.json({status:"success",reqUserList})

})


module.exports = users