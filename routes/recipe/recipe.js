const recipe = require("express").Router();


let recipeObj = {
    name: "Grilled Cheese",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}




recipe.get("/:ingredients/", (req, res) => {
    let ingredient = req.params.ingredients
        recipeObj.ingredients.forEach(el => {
            if(el === ingredient){
                console.log(el.name)
            } else {
                res.json("This ingredient is not available")
            }
        })
})

recipe.post("/", (req, res) => {
    res.json("Created new recipe")
})

recipe.delete("/", (req, res) => {
    res.json("Delete Recipe")
})

recipe.get("/:name", (req, res) => {
    res.json("Specific Recipe")
})

module.exports = recipe ;

