const express = require('express');
const router = express.Router();

let recipes = [];


router.get('/', (req, res) => {
    // let newRecipe = req.body.name;
        res.json(recipes);
});

router.post('/', (req, res) => {
    let newRecipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    }
    if(!newRecipe.name || !newRecipe.ingredients || !newRecipe.directions){
           res.send('Adding recipes require the name, ingredients and directions');
    } else{
    newRecipe.ingredients = newRecipe.ingredients.split(', ');
    recipes.push(newRecipe);
    res.json(recipes);
}
});

router.delete('/delete/:name', (req, res) => {
    let removeRecipe = req.params.name;

    recipes.map(element => {
        if (element.name === removeRecipe) {
            let index = recipes.indexOf(element);
            console.log(index)
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