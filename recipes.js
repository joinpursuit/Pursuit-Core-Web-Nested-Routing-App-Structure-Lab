const recipes = require("express").Router()
let allRecipes = [{
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
}]
recipes.get("/", (req, res)=>{

    res.json(allRecipes)
})

recipes.post("/newRecipes", (req, res)=>{
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
    console.log(newRecipe)
    })
    

recipes.patch("/:recipe", (req, res)=>{
    res.send("Updated recipe" + req.params.id)
})

recipes.delete("/delete/:name", (req, res)=>{
    
    let element = parseInt(req.params.id)
    let arr 
    for(let i = 0; i< allRecipes.data; i++){
        if(element === allRecipes.data[i].id){
            arr = recipes.data[i]
            recipes.data.splice(i,1)
        }

    }
    res.json(arr)
})


recipes.get("/:ingredient", (req, res)=>{
    let ingredient = req.params.ingredient;
    let output = allRecipes.filter(recipe => {
        return recipe.ingredients.includes(ingredient)
    })
    res.json(output)
})

module.exports = recipes