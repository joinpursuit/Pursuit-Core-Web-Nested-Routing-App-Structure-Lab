const express = require('express');

const router = express.Router();

const recipes = require('./recipes_class.js')


let recipe = new recipes(); 


router.get('/', (req, res) => {
  res.send(recipe.displayRecipes())
})

router.get('/:ingredient', (req, res) => {
  let ingredient = req.params.ingredient 
  res.send(recipe.displaySpecificRecipes(ingredient))
})


router.post('/:recipeName/:ingredients/:directions', (req, res) => {
  let name = req.params.recipeName
  let ingredients = req.params.ingredients
  let directions = req.params.directions 
  res.send(recipe.addRecipe(name, ingredients, directions))
})

router.patch('/:recipeName/:ingredients/:directions', (req, res) => {
  let name = req.params.recipeName
  let ingredients = req.params.ingredients
  let directions = req.params.directions 
  res.send(recipe.updateRecipe(name, ingredients, directions))
})

router.delete('/:recipeName', (req, res) => {
  let name = req.params.recipeName
 res.send(recipe.deleteRecipe(name))
})  

module.exports = router; 
