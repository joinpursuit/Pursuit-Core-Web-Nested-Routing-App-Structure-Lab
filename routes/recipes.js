const express = require("express");
const router = express.Router();
const Recipe = require("../recipes.js")
const Restaurant = require("../restaurant.js");

let myRestaurant = new Restaurant();

router.post("/add", (req, res) => {
    let name = req.query.name;
    let ingredients = req.query.ingredients;
    let directions = req.query.directions;

    myRestaurant.addRecipe(name, ingredients, directions);
    res.json(myRestaurant.recipes)
})

// router.patch("/update", (req, res) => {
//     let name = req.query.name;
//     let ingredients = req.query.ingredients.split(",");
//     let directions = req.query.directions;




// })

module.exports = router;