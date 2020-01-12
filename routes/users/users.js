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
module.exports = users