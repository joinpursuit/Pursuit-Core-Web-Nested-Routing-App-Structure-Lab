const express = require('express')
const router = express.Router()

const recipes = [
    {
        name: "Grilled_Cheese",
        ingredients: [
            "Bread",
            "Cheese",
            "Butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name: "Peanut_Butter_and_Jelly",
        ingredients: [
            "Bread",
            "Peanut Butter",
            "Jelly"
        ],
        directions: " Take a slice of bread. Put peanut butter on the slice.Take a second slice of bread. Put jelly on that slice"
    }
]
//POST

const createRecipe = (req, res, next) => {
    const newRecipe = req.body
    const name = newRecipe.name
    let ingredients =  newRecipe.ingredients
    const directions = newRecipe.directions

    res.json(newRecipe)
    recipes.push(newRecipe)
    console.log(newRecipe)
}

router.post('/add', createRecipe)

//UPDATE
const updateDeleteRecipe = (req, res, next) => {
    const deleteInput = req.params.name
    console.log(deleteInput)
    for (i = 0; i < recipes.length; i++){
        if (recipes[i].name === deleteInput){
            recipes.splice(i,1);
        }
    }
    next()
}

const updateAddRecipe = (req, res) => {
    const newRecipe = req.body
    const name = newRecipe.name
    let ingredients =  newRecipe.ingredients
    const directions = newRecipe.directions

    res.json(newRecipe)
    recipes.push(newRecipe)
    console.log(newRecipe)
}

router.put('/update/:name', updateDeleteRecipe, updateAddRecipe)

//DELETE

const deleteRecipe = (req, res) => {
    //if the parametes are the same as recipes.name 
    const deleteInput = req.params.name
    console.log(deleteInput)
    for (i = 0; i < recipes.length; i++){
        if (recipes[i].name === deleteInput){
            recipes.splice(i,1);
        }
    }
    res.send(`Recipe ${deleteInput} deleted`)
}

router.delete('/delete/:name', deleteRecipe)

//GET (ALL)
router.get('/all', (req, res) => {
    res.json(recipes)
})
//GET (FIND)
const findRecipe = (req, res) => {
    findRecipeArray = []
    const search = req.query.search
    for (i = 0; i < recipes.length; i++){
        if(recipes[i].ingredients.includes(search)){
            findRecipeArray.push(recipes[i])
        }
    }
    console.log(findRecipeArray)
    res.json(findRecipeArray)   
}
router.get('/find/', findRecipe)
       


module.exports = router;