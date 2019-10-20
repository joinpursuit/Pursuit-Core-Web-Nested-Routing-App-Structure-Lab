const express = require("express");
const router = express.Router();
const User = require("../user.js");
const myRestaurant = require("../restaurant.js");

router.post("/add", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    myRestaurant.addUser(name, email)
    res.send(myRestaurant.users)
})

module.exports = router