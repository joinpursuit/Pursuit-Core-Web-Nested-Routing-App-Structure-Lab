const express = require('express');
const router = express.Router();
const Recipe = require('../middleware/recipes');
let recipes = [{
    name: "Grilled Cheese",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Cook"
}]

let Recipes = new Recipe();

router.get('/all', (req, res) => res.json(Recipes.getAllRecipes()));

router.post('/add', (req, res) => res.json(Recipes.addRecipe(req.body.name, req.body.ingredients, req.body.directions)));

// Patch not working for some reason can be easily changed to post
router.patch('/update', (req, res) => res.json(Recipes.updateRecipe(req.body.name, req.body.ingredients, req.body.directions)));

router.delete('/delete', (req, res) => res.json(Recipes.deleteRecipe(req.body.name)));

router.get('/ingredient', (req, res) => res.json(Recipes.getByIngredient(req.body.ingredients)));

module.exports = router;