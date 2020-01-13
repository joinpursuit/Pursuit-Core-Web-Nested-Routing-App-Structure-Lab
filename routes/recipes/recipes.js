const recipes = require('express').Router()

//let query = req.query
let recipeArr = [
    {name: "PBJ",
    ingredients: ['bread','peanut butter', 'jelly'
],
    directions: 'slap all that together with the peanut butter and jelly between 2 slices of bread'},

    {name: 'cereal n milk',
     ingredients: ['cereal', 'milk'],
     directions: 'pour ceral into a bowl FIRST, then pour milk'},
    ]
    // if(recipeArr[i]['ingredients'].includes(req.params.id)){

    // }
// let recipeObj = [{
//     name: "",
//     ingredients: [],
//     directions: ""
// }]

recipes.get('/', (req,res) => {

    res.json(recipeArr)
})
recipes.post('/',(req,res) => {
    recipeArr.push(req.body)
    res.json({
        status:200,
        message: "posted new recipe",
        newRecipe: req.body
    })

})
recipes.delete('/:id',(req,res) => {
    res.json("deleted: " + req.params.id)
})
recipes.patch('/:id', (req,res) => {
    recipeArr.push(req.body)
    res.json({
        status:200,
        message: "updated recipe",
        updateRecipe: req.body
    })
})

recipes.get('/:id', (req,res) => {
    let output = [];
    for (let i = 0; i < recipeArr.length; i++) {
        if(recipeArr[i]['ingredients'].includes(req.params.id)){
            output.push(recipeArr[i])             
        } 
    }
    if (recipeArr.length) {
        res.json(output);
    } else {
        res.json({
            status: 404,
            message: 'ingredient not found'
        })
    }
})
    // recipeArr['ingredients'].forEach(el => {
    //     if(el.includes(req.params.id)){
    //         res.json({
    //             status: 200,
    //             message: 'found recipes with same ingredients',
    //             foundRecipes: recipeArr["ingredients"]
    //         })
    //       }else{
    //           res.json({
    //               status: 404,
    //               message: 'ingredient not found'
    //           })
    //       }
    // }
//     )
// })


module.exports = recipes