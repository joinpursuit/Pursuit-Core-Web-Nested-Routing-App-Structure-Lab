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

router.post(`/new_recipe`, (req, res) => {
    let newRecipe = req.body
    let name = newRecipe.name
    let ingredients = newRecipe.ingredients;
    let directions = newRecipe.directions

res.send({
    name: name,
    ingredients: ingredients,
    directions: directions
})
})




module.exports = router;