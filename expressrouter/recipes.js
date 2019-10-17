const express = require('express')
const router = express.Router();

let recipes = [{
    name: "Grilled Cheese",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}]



router.post("/", (request, response) => {
    let newRecipe = request.body
    
    recipes.push(newRecipe)
    response.json(newRecipe)
})
router.delete('/:deleteRecipes', (request, response)=>{
    response.send('delete recipes'+request.originalUrl)
})
router.patch('/:allRecipes', (request, response)=>{
    response.send('all recipes'+request.originalUrl)
})
router.get('/:matchRecipes', (request, response)=>{
    response.send('match recipes'+request.originalUrl)
})





module.exports = router;
