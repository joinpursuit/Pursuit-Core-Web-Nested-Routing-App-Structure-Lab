let express = require('express');
let recipesRouter = express.Router();

// let bodyParser = require('body-parser');
// recipesRouter.use(bodyParser.urlencoded({
//     extended: false
// }));

const fs = require('fs');
// let previousData = //READ FROM DATA FILE AND TURN IT TO JSON

let recipesClass = require('../JSObjects/RecipesFile');
let allRecipes = new recipesClass()


//MIDDLEWARE:
const log = (request, response, next) => {
    console.log('URL', request.url);
    console.log('\nQuery', request.query);
    if (request.body) {
        console.log('\nBody', request.body);
    }
    next();
}

const checkValidRecipeBody = (request, response, next) => {
    if (!request.body.name || !request.body.ingredients || !request.body.directions) {
        response.json({
            status: 'Failed',
            message: 'Missing Recipe Name, Directions and/or Ingredients'
        })
    } else {
        next();
    }
}


const addARecipe = (request, response) => {
    let name = request.body.name;
    let directions = request.body.directions;
    let ingredients = (request.body.ingredients).replace(/,/g, ' ').split(' ')
    ingredients = ingredients.filter(element => element !== "");
    
    let addedRecipe = allRecipes.addRecipe(name, ingredients, directions);
    if (addedRecipe === -1) {
        response.json({
            status: 'Failed',
            message: 'Please Double Check Your Inputs'
        })
    } else if (addedRecipe === -2) {
        response.json({
            status: 'Failed',
            message: 'Recipe Exists Already'
        })
    } else {
        response.json({
            status: 'success',
            message: addedRecipe
        })
    }
}

const checkValidPartialRecipeBody = (request, response, next) => {
    if (!request.body.name && !request.body.ingredients && !request.body.directions) {
        response.json({
            status: 'Failed',
            message: 'Missing Recipe Name, Directions or Ingredients'
        })
    } else {
        next();
    }
}

const updateTheRecipe = (request, response) => {
    let recipeDoNotExist = false;
    let updatedRecipe;
    let recipeName = request.params.recipeName;
    let name = request.body.name;
    let directions = request.body.directions;
    if (directions) {
        updatedRecipe = allRecipes.updateRecipe(recipeName, 'directions', directions);
        if (updatedRecipe === -1) {
            recipeDoNotExist = true;
        } 
    }
    let ingredients = request.body.ingredients
    if (ingredients) {
        ingredients = ingredients.replace(/,/g, ' ').split(' ')
        ingredients = ingredients.filter(element => element !== "");
        updatedRecipe = allRecipes.updateRecipe(recipeName, 'ingredients', ingredients);
        if (updatedRecipe === -1) {
            recipeDoNotExist = true;
        }
    }
    if (name) {
        updatedRecipe = allRecipes.updateRecipe(recipeName, 'name', name);
        if (updatedRecipe === -1) {
            recipeDoNotExist = true;
        }
    }
    if (recipeDoNotExist) {
        response.json({
            status: 'Failed',
            message: "Recipe Doesn't Exist"
        })
    } else {
        response.json({
            status: 'success',
            message: updatedRecipe
        })
    }
}


const deleteRecipe = (request, response) => {
    let recipeToDelete = request.params.recipeName;

    let deletedRecipe = allRecipes.deleteRecipe(recipeToDelete);

    if (deletedRecipe === -1) {
        response.json({
            status: 'Failed',
            message: "Recipe Doesn't Exist"
        })
    } else {
        response.json({
            status: 'success',
            message: deletedRecipe
        })
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Add a recipe
recipesRouter.post('/', log, checkValidRecipeBody, addARecipe)

// Update a recipe
recipesRouter.patch('/:recipeName', log, checkValidPartialRecipeBody, updateTheRecipe)

// Delete a recipe
recipesRouter.delete('/:recipeName', log, deleteRecipe)


// Get all recipes

// Get all recipes matching a given ingredient




module.exports = recipesRouter;
