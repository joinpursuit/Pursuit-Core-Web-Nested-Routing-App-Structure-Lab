const express = require('express');

const router = express.Router();


let recipeArr = [];

router.post('/add', (req, res) => {
    let nameV = req.body.name;
    let ing = req.body.ing
    let directionsV = req.body.directions;

    let ingARR = []
    ingARR.push(ing);

    let recipeObj = {
        name: nameV,
        ingredients: ingARR,
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

router.get('/all')







module.exports = router