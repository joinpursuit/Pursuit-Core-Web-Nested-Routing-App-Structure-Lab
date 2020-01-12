const recipes = require('express').Router()

//let query = req.query
// let recipeObj = [{
//     name: "PPJ",
//     ingredients: ['bread','peanut butter', 'jelly'],
//     directions: 'slap all that together with the peanut butter and jelly between 2 slices of bread'},
//     {name: 'ceral n milk',
//      ingredients: ['any cereal, milk'],
//      directions: 'pour ceral into a bowl FIRST, then pour milk'}
// ]
let recipeObj = [{}]

recipes.get('/', (req,res) => {

    res.json(recipeObj)
})
recipes.post('/',(req,res) => {
    
    res.json('add new recipe')
})
recipes.delete('/:id',(req,res) => {
    res.json("deleted: " + req.params.id)
})
recipes.patch('/:id', (req,res) => {
    res.json("updated: "+ req.parms.id )
})

recipes.get('/:ingredients', (req,res) => {
    res.json('all recipies with:' + req.params.ingredient)
})


module.exports = recipes