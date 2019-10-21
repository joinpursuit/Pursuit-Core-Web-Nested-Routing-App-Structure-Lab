const express = require("express");
const router = express.Router();
const Recipe = require("../recipes.js")
const myRestaurant = require("../restaurant.js");
const server = require("../server.js");


router.get("/getAllRecipes", (req, res) => {
    let all = myRestaurant.getAllRecipes();
    res.json(all);
})

router.post("/add", (req, res) => {
    let name = req.body.name;
    let ingredients = req.body.ingredients;
    let directions = req.body.directions;
    // console.log("myRestaurant", myRestaurant.addRecipe())
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

router.delete("/:recipe", (req, res) => {
    let recipe = req.params.recipe
    myRestaurant.deleteRecipe(recipe)
    res.json(myRestaurant.recipes)
})

router.get("/ingredient", (req, res) => {
    let ingredient = req.body.ingredient;
    let recipeIngr = myRestaurant.getRecipeByIngredient(ingredient);
    res.json(recipeIngr)
})

router.get("/:recipe", (req, res) => {
    let recipe = req.params.recipe;
    res.json(myRestaurant.getRecipe(recipe))
})


module.exports = router;