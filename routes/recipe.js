const express = require('express');

const router = express.Router();


let recipeArr = [];

router.post('/add', (req, res) => {
    let name = req.body.name;
    let ing = req.body.ingredients.split(',')
    let directionsV = req.body.directions;

    // let ingARR = []
    // ingARR.push(ing);

    let recipeObj = {
        name: name,
        ingredients: ing,
        directions: directionsV
    }

    recipeArr.push(recipeObj)
    console.log(recipeArr);
    res.send(recipeObj)
});

router.delete('/delete', (req, res) => {
    let recipeName = req.query.name;
    let filtered = recipeArr.filter(el => {
        return el.name !== recipeName
    })
    res.send({
        status: `Success operation successful`,
        message: `${recipeName} has been successfully deleted`
    })
})

router.get('/all', (req, res) => {
    res.send({
        message: 'Here is all of the recipes, enjoy',
        recipes: recipeArr
    })
})




router.get('/ingredient', (req, res) => {
    let specIng = req.query.ingredient

    let ingStorage = [];
    recipeArr.map(el => {
        // console.log(el);

        if (!el.ingredients.includes(specIng)) {
            ingStorage.push(el)
            res.send({
                message: 'Here is all of the recipes, enjoy',
                recipe: ingStorage
            })
        }
    })
})


module.exports = router