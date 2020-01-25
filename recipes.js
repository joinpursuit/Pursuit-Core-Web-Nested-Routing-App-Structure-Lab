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

recipes.post("/newRecipes", ()=>{
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
    

// recipes.patch("/:recipe", (req, res)=>{
//     res.send("Updated recipe" + req.params.name)
// })

recipes.delete("/:name", (request, response)=>{
    let {name} = request.params
    recipes = recipes.filter(recipe=>recipe.name !== name)
    response.status(200).json({
        message: "recipeDeleted",
        remainingRecipes: recipes
    })

})

recipes.post("/add", (request,response)=>{
    let res = request.body
request.body.ingredients = request.body.ingredients.split("")
 
    if(request.body.ingredients && request.body.name && request.body.directions){
        console.log(res)
        recipes.push(request.body)
        res.status(200),json({
            message:"success",
            data: request.body
        })
    } else{
        res.status(400).json({
            message: "something went wrong"
        })

    }
    

})
recipes.patch("/update/:name", (request,response)=>{
    //request.params.name
    let {name} = request.params
    console.log(name)
    allRecipes.forEach(recipe =>{
        if(name === recipe.name){
            recipe = request.body
        }
    })
    response.status(200).json({
        message:"recipe updated",
        newRecipe: request.body
    })
    console.log(request.body)


})
recipes.get("/:ingredient", (req, res)=>{
    let ingredient = req.params.ingredient;
    let output = allRecipes.filter(recipe => {
        return recipe.ingredients.includes(ingredient)
    })
    res.json(output)
})

module.exports = recipes