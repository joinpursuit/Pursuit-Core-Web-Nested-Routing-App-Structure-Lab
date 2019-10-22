const log = console.log;
/*
  users.js : This file will serve as the router for our User features
*/

var express = require('express');
var router = express.Router();

let allRecipes = [
    {
        name: "Grilled Cheese",
        ingredients: [
            "bread",
            "cheese",
            "margarine"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name: "Grilled salmon",
        ingredients: [
            "bread",
            "salmon",
            "butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name: "Grilled onions",
        ingredients: [
            "bread",
            "onions",
            "butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name: "Grilled steak",
        ingredients: [
            "bread",
            "steak",
            "margarine"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name: "Grilled ribs",
        ingredients: [
            "bread",
            "ribs",
            "margarine"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
]

const getRecipes = (req, res, next) => {
    let ingredients = req.query.ingredients ? req.query.ingredients.toLowerCase().split(',') : undefined;
    let filteredRecipes = allRecipes

    if (ingredients) {
        ingredients.forEach(ingredient => {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.ingredients.includes(ingredient))
        });
    
        res.json(filteredRecipes)
    } else {
        res.json(allRecipes)
    }
}

const addRecipe = (req, res, next) => {
    let recipe = {
        name: req.body.name,
        ingredients: req.body.ingredients.split(','),
        directions: req.body.directions,
    }

    recipe.name && recipe.ingredients && recipe.directions ? allRecipes.push(recipe) : null;
    res.json({
        status: recipe.name && recipe.ingredients && recipe.directions ?
            'success name, ingredients, and directions have been defined.' :
            'Sorry but either name, ingredients, or directions havent been defined.',
        recipe,
        error: recipe.name && recipe.ingredients && recipe.directions,
    })
}

const deleteRecipe = (req, res, next) => {
    let name = req.query.name;
    res.json({
        status: allRecipes.map(r => r.name).includes(name) ?
            `${name} has been successfully removed` :
            `${name} cannot be found in list of recipes`,
        recipe: allRecipes.filter(r => name === r.name),
        error: allRecipes.map(r => r.name).includes(name) ?
            `NO ERROR` :
            `${name} - does not exist in: [${allRecipes.map(r => r.name)}]`,
    })
    allRecipes = allRecipes.filter(recipe => name !== recipe.name)
}

const updateRecipe = (req, res, next) => {
    let name = req.query.name;
    let edits = req.body;
    for (recipe of allRecipes) {
        if (recipe.name === name) {
            for (key in recipe) {
                if (edits[key]) {
                    recipe[key] = edits[key]
                }
            }
            res.json({recipe})
        }
    }
}

router.get('/all', getRecipes);

router.post('/add', addRecipe);

router.delete('/delete', deleteRecipe);

router.patch('/update', updateRecipe);

module.exports = router;