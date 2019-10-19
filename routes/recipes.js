const express = require('express');
const router = express.Router();

let recipes = [
    {
        name: 'Grilled Cheese',
        ingredients: ['Bread', 'Cheese', 'Butter'],
        directions: `Preheat skillet over medium heat. Generously butter one side of a slice of bread 
    Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. 
    Butter a second slice of bread on one side and place butter-side-up on top of sandwich. 
    Grill until lightly browned and flip over; continue grilling until cheese is melted. 
    Repeat with remaining 2 slices of bread, butter and slice of cheese.`
    }
]


router.get('/', (req, res) => {
    let newRecipe = req.body.name;
    if (!newRecipe) {
        res.json(recipes)
    } else {
        recipes.push(newRecipe);
        res.json(recipes);
    }
});

router.post('/', (req, res) => {
    let newRecipe = {
        name: req.body.name,
        ingredients: req.body.ingredients.split(', '),
        directions: req.body.directions
    } 
    
    recipes.push(newRecipe);
    res.json(recipes);
    
    // let newRecipe = req.body
    // recipes.push(newRecipe);
    // res.json(recipes);

});

router.delete('/delete/:recipe_id', (req, res) => {
    let removeRecipe = req.params.name;

    recipes.map(element => {
        if (element.name === removeUser) {
            let index = recipes.indexOf(element);
            recipes.splice(index, 1);
        }
    });
    res.send(recipes)
});

router.patch('/:recipe_id', (req, res) => {
    res.send(`where you update a recipe`)
})

router.get('/:ingredient', (req, res) => {
    res.send(`Where all recipes containing a specific ingredient`)
});

module.exports = router;