const recipes = require('express').Router();

let recipeList = [
    {
        name: "Grilled Cheese",
        ingredients: [
            "bread",
            "cheese",
            "butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name: "PB&J",
        ingredients: [
            "bread", 
            "peanut butter", 
            "jelly"
        ],
        directions: "Toast bread, spread peanut butter on half and jelly on the other. Press together and cut PB&J sandwich in half."
    },
];

recipes.get("/", (req, res) => {
    res.json(recipeList);
})

recipes.get("/:ingredient", (req, res) => {
    res.json(recipeList.filter(el => el.ingredients.includes(req.params.ingredient.toLowerCase())))
})

recipes.post("/", (req, res) => {
    let newRecipe = {
        name: req.body.name,
        ingredients: req.body.ingredients.split(" "),
        directions: req.body.directions,
    }
    recipeList.push(newRecipe);
    res.json(recipeList);
})

recipes.delete("/", (req, res) => {
    for(let i = 0; i < recipeList.length; i++){
        if(recipeList[i].name === req.body.name){
            recipeList.splice(i,1)
        }
    }
    res.json(recipeList)
})

recipes.patch("/", (req, res) => {
    for(let i = 0; i < recipeList.length; i++) {
        if(recipeList[i].name === req.body.name){
            if(req.body.parameter === "ingredients"){
                recipeList[i][req.body.parameter] = req.body.newElement;
            }
        }
    }
})


module.exports = recipes;