const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.send({
      
            name: "Grilled Cheese",
            ingredients: [
                "Bread",
                "Cheese",
                "Butter"
            ],
            directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
        
    })
})

const validateInput = (req, res, next) =>{
    let newRecipe = req.body
    
    if(!newRecipe.name || !newRecipe.ingredients|| !newRecipe.directions){
        res.send({
            error: "missing information "

        })
    }else{
        next()
    }
    console.log(newRecipe)
}


const postRecipe = (req, res, next) => {
    let newRecipe = req.body;
    let ingredientsArr = []
    let newIngredients = newRecipe.ingredients

    let ingredients = newIngredients.split(" ")
    ingredientsArr.push(ingredients)

    res.send({
        name: newRecipe.name,
        ingredients: ingredientsArr,
        directions: newRecipe.directions
    })
  }

router.post('/newRecipe', validateInput, postRecipe)
module.exports = router;