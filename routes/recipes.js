const express = require("express");
const router = express.Router();
const Recipe = require("../recipes.js")
const Restaurant = require("../restaurant.js");

let myRestaurant = new Restaurant();

router.get("/:recipe", (req, res) => {
    let recipe = req.params.recipe;
    res.json(myRestaurant.getRecipe(recipe))
})

router.post("/add", (req, res) => {
    let name = req.body.name;
    let ingredients = req.body.ingredients;
    let directions = req.body.directions;

    myRestaurant.addRecipe(name, ingredients, directions);
    res.send(myRestaurant.recipes)
    // res.json(myRestaurant.recipes)
})

router.patch("/:recipe", (req, res) => {
    let targetRecipe = req.params.recipe
    let name = req.body.name;
    let ingredients = req.body.ingredients;
    let directions = req.body.directions;

    let answer = myRestaurant.updateRecipe(targetRecipe, name, ingredients, directions);
    res.json(answer);

    
})



module.exports = router;