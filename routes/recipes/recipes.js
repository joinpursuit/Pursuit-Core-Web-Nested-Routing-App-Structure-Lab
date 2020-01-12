const recipes = require("express").Router()

let recipesArr = [
    {
    name: "Grilled Cheese",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name: "Classic Peanut butter & Jelly Sandwich",
        ingredients: [
            "Bread",
            "Peanut Butter",
            "Strawberry Jelly"
        ],
        directions: "Toast the bread. Spread peanut butter one side of a slice of bread and jelly on the other slice of the bread. Place spreaded peanut butter on top of the spreaded jelly. Bon appetit"
        }
]

recipes.get("/", (req, res) => {
    res.json(recipesArr)
})

recipes.post("/newRecipes", (req, res) => {
    recipesArr.push(req.body)
    res.json(recipesArr)
})

recipes.delete("/:name", (req, res) => {
    let name = req.params.name
    recipesArr.splice(name, 1)
    res.json(recipesArr)
})

recipes.get("/:ingredient", (req, res) => {
    let ingredient = req.params.ingredient;
    let output = recipesArr.filter(recipe => {
        return recipe.ingredients.includes(ingredient)
    })
    res.json(output)
})

module.exports = recipes