const express = require('express');

const router = express.Router();



router.post('/add', (req, res) => {
    let ingredients = req.body.ingredients
    let name = req.body.name
    let directions = req.body.directions
    let recipeArr = [];

    let ingredientsArr = [];
    let recipeObj;

    ingredientsArr.push(ingredients);

    for (let i = 0; i < 50; i++) {
        recipeObj = {
            name: name,
            ingredients: [],
            directions: directions
        }
    }

    recipeArr.push(recipeObj)
    console.log(recipeArr);


    res.json(recipeObj)
});

router.get









module.exports = router