const express = require("express");
const router = express.Router();
const User = require("../user.js");
const myRestaurant = require("../restaurant.js");


router.patch("/:targetUser", (req, res) => {
    let targetUser = req.params.targetUser
    let name = req.body.name;
    let email = req.body.email;

    let answer = myRestaurant.updateUser(targetUser, name, email)
    res.send(answer);
})

router.delete("/:user", (req, res) => {
    let user = req.params.user
    myRestaurant.deleteUser(user)
    res.json(myRestaurant.users)
})

router.get("/all", (req, res) => {
    let all = myRestaurant.getAllUsers();
    res.json(all);
})

router.get("/year", (req, res) => {
    let year = req.body.year;
    let activationYear = myRestaurant.getUserByTime(year);
    res.json(activationYear);
})

router.post("/add", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    myRestaurant.addUser(name, email)
    res.send(myRestaurant.users)
})





module.exports = router