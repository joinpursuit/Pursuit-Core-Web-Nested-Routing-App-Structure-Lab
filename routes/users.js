const express = require('express');
const router = express.Router();

//this function will help me locate a recipe with a certain id number
const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);

let idCounter = 4;

let usersList = [
    {
        id: 1,
        username: "user1234",
        email: "user1234@gmail.com",
        activationDate: "January 1, 1970"
    },
    {
        id: 2,
        username: "user5678",
        email: "user1234@gmail.com",
        activationDate: "January 3, 1980"
    },
    {
        id: 3,
        username: "user1337",
        email: "user1337@gmail.com",
        activationDate: "January 3, 1937"
    },
    {
        id: 4,
        username: "Nope",
        email: "nope@gmail.com",
        activationDate: "March 1, 1970"
    },
]

const addUser = (req, res, next) => {
    let newUser = {
        id: idCounter += 1,
        username: req.body.username,
        email: req.body.email,
        activationDate: req.body.activationDate
    }
    usersList.push(newUser)
    res.json(usersList);
}

const removeUser = (req, res, next) => {
    let selectedID = req.params.deleteUser;
    for(let i = 0; i < usersList.length; i++){
        if(getKey(usersList[i], Number(selectedID))){
            usersList.splice(i, 1);
            console.log(usersList)
            // return;
        }
    }
    res.json(usersList);
}

const updateUsers = (req, res, next) => {
    let selectedID = req.params.updateUser;
    for(let i = 0; i < usersList.length; i++){
        if(getKey(usersList[i], Number(selectedID))){
            console.log("Yay", usersList[i]);
            let userID = usersList[i].id
            let updatedUsername = req.body.username;
            let updatedEmail = req.body.email;
            let updatedDate = req.body.activationDate;
            let perviousUsername = usersList[i].username
            let perviousEmail = usersList[i].email
            let perviousDate = usersList[i].activationDate
        
            if(req.body.username){
                console.log('Update the name')
                perviousUsername = updatedUsername;
        
                usersList[i] = {
                    id: userID,
                    username: updatedUsername,
                    email: perviousEmail,
                    activationDate: perviousDate
                }
            }
            if(req.body.email){
                console.log('Update the ingredients')
                perviousEmail = updatedEmail;
        
                usersList[i] = {
                    id: userID,
                    username: perviousUsername,
                    email: updatedEmail,
                    activationDate: perviousDate
                }
            }
            if(req.body.activationDate){
                console.log('Update the directions')
                perviousDate = updatedDate;
        
                usersList[i] = {
                    id: userID,
                    username: perviousUsername,
                    email: perviousEmail,
                    activationDate: updatedDate        }
            }
            res.json(usersList[i])  
            return;
        }
    }
}

const printUsers = (rea, res, next) => {
    // console.log('Getting it', getKey(usersList[0],1))
    res.send(usersList);
}

const findRange = (req, res, next) => {
    let searchYear = req.params.yearRange;

    let range = [];

    for(let i = 0; i < usersList.length; i++){
        let splitItem = [];
        splitItem.push(usersList[i].activationDate.split(" "))
        // console.log("splitYear", splitItem[0][2])
        // console.log("userYear", searchYear)

        if(splitItem[0][2] === searchYear) {
            console.log("find", usersList[i]);
            range.push(usersList[i]);
        }
    }
    res.json(range);
}

router.post("/add", addUser);

router.delete("/:deleteUser", removeUser);

router.patch("/:updateUser", updateUsers);

router.get("/", printUsers)

router.get("/:yearRange", findRange)

module.exports = router;

