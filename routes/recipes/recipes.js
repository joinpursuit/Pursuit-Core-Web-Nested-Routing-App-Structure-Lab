const express = require('express')
const recipes = express.Router()
const bodyParser = require('body-parser')


const recipesArr = [{
    name: "Grilled Cheese",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
},
{
    name: "Grilled Vegetables",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
},
{
    name: "Cereal",
    ingredients: [
        "Milk",
        "Cereal"
    ],
    directions: "Make that cereal son, eat that, ENJOY"
}]


recipes.get("/", (req, res) => {
    res.json(recipesArr)
})

recipes.get("/:id", (req, res) => {
    res.json(recipesArr[req.params.id])
})

recipes.post("/", (req, res) => {
    console.log(req)
    recipesArr.push(req.body)
    res.json([recipesArr, req.body])
})


recipes.delete("/:id", (req, res) => {
    recipesArr.splice(req.params.id, 1)
    res.json(recipesArr)
})

recipes.put("/:id", (req, res) => {
    recipesArr[req.params.id] = req.body;
    res.json(recipesArr[req.params.id])
})

recipes.get("/ingredients/:ingredient", (req, res) => {
    console.log("req = "+req.params.ingredient)
    let output = recipesArr.filter(recipe => {
        for (let j = 0; j < recipe.ingredients.length; j++) {
            if (recipe.ingredients[j].toLowerCase() === req.params.ingredient.toLowerCase()) {
                // console.log(output)
                return recipe
            }
        }
    })
    res.json(output)
})

module.exports = recipes;