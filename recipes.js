const recipes = require("express").Router()
const allRecipies = [{
    name:"Grilled Cheese",
    ingredients:["bread", "butter", "cheese"],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
},
{
    name:"Peanut Butter and Jelly",
    ingredients:["bread", "Peanut Butter", "Jelly"],
    directions: "Spread the peanut butter on one piece of bread.Spread the jelly on the other side. Put the two pieces of bread together to form a sandwich. Toddler adaptation: cut off crusts before serving"
},
{
    name:"Buttered Toast",
    ingredients:["bread", "butter"],
    directions: "Generously butter one side of a slice of bread."
},]
recipes.post("/", (req, res)=>{
    let newRecipe ={
        name:req.params.name,
        ingredients:req.params.ingredients,
        directions:req.param.directions

    }
    if(!newRecipe.name || !newRecipe.ingredients || !newRecipe.directions){
        res.send("add new name, ingredient and directions")
    }else{
        newRecipe.ingredients = newRecipe.ingredients.split(', ');
        recipes.push(newRecipe);
        res.json(recipes);
    }
    })
    

recipes.patch("/:id", (req, res)=>{
    res.json("Updated recipe" + req.params.id)
})

recipes.delete("/:id", (req, res)=>{
    res.json("Deleted all recipes"+req.params.id)
})

recipes.get("/", (req, res)=>{
    res.json("All Recipes recieved")
})

// recipes.get(`/:id${ingrediant}`, (req, res)=>{
//     res.json("Recipes with " + ingrediant + req.params.id)
// })

module.exports = recipes