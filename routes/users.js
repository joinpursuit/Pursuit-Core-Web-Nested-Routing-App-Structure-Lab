const express = require("express");
const router = express.Router();

// Users System

let users = [
    {
        name: "Hupaul",
        email: "hupaul@gmail.com",
        activationDate: "May 23rd, 2007"
    },
    {
        name: "Jonathan",
        email: "jonathan@gmail.com",
        activationDate: "July 15th, 1999"
    }
]

// Get All Users
router.get("/", (request, response) => {
    response.json(users)
})
// --------------------------------------------
// Create New User
router.post("/", (request, response) => {
    let newUser = request.body
    
    users.push(newUser)

    response.json({
        status: "sucess",
        message: "user has been sucessfully added to database",
        users
    })
})

// --------------------------------------------

// Update User Info
router.patch("/:name", (request, response) => {
    let name = request.params.name;
    let newName = request.body
    for(let i of users) {
        console.log(i)
        if (name === i.name) {
            i.name = newName.name
            response.json({
                status: "success",
                message: "Name has been changed",
                users
            })
        } else {
            response.json({
                status: "failed",
                message: "no user found"
            })
        }
    }
})

router.patch("/:name", (request, response) => {
    let name = request.params.name;
    let newName = request.body
    for(let i of users) {
        console.log(i)
        if (name === i.name) {
            i.email = newName.email
            response.json({
                status: "success",
                message: "Email has been changed",
                users
            })
        } else {
            response.json({
                status: "failed",
                message: "no change made"
            })
        }
    }
})

router.patch("/:name", (request, response) => {
    response.json({
        status:  "failed",
        message: "Cannot update activation date"
    })
})

router.delete("/:name", (request, response) => {
    let name = request.params.name

    for(let i = 0; i < users.length; i++) {
        if (name === users[i].name) {
            users.splice(i, 1)
            response.json({
                status: "success",
                message: "User has been deleted",
                users
            })
        } else {
            response.json({
                status: "failed",
                message: "User not found, unable to delete",
                users
            })
        }
    }
})

module.exports = router