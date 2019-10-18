const express = require('express');
const router = express.Router();

recipe = [{ 
  recipe:   {
        name: "Grilled Cheese",
        ingredients: [
            "Bread",
            "Cheese",
            "Butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    }

}]

router.get('/all', (req, res) => {
    res.json({
          recipe
    })
})

const validateInput = (req, res, next) =>{
    let recipe = req.body
    
    if(!recipe.name || !recipe.ingredients|| !recipe.directions){
        res.send({
            error: "missing information "
        })
    }else{
        next()
    }
    console.log(recipe)
}


const postRecipe = (req, res, next) => {
    let recipePost = req.body;
    let ingredientsArr = []
    let newIngredients = recipePost.ingredients

    let ingredients = newIngredients.split(",")
    ingredientsArr.push(ingredients)

    let newRecipe = {
        name: recipePost.name,
        ingredients: ingredientsArr,
        directions: recipePost.directions
    }

    res.send(newRecipe)
    recipe.push(newRecipe)
  }

router.post('/newRecipe', validateInput, postRecipe)

const deleteRecipe = (req, res, next) => {
    let recipeDelete = req.body;
    let deletePost = recipeDelete.name

let empArr = []
    if(deletePost){
        res.send({
            name: " ",
            ingredients: empArr,
            directions: " "
        })
    }
}

router.delete('/deleteRecipe', deleteRecipe)


module.exports = router;