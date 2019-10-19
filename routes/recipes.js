const express = require('express');
const router = express.Router();

//this function will help me locate a recipe with a certain id number
const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);

let idCounter = 3;

let recipesList = [
    {
        id: 1,
        name: "Grilled Cheese",
        ingredients: [
            "Bread",
            "Cheese",
            "Butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        id: 2,
        name: "Bug Juice",
        ingredients: [
            "Bugs",
            "Cheese",
            "Oil"
        ],
        directions: "Blend all ingredients together and drink in one go"
    },
    {
        id: 3,
        name: "Stir Fry Rice",
        ingredients: [
            "Chicken",
            "Rice",
            "Peppers"
        ],
        directions: "Preheat skillet. Cook rice. Throw all ingredients on skillet."
    }
]
const printRecipes = (rea, res, next) => {
    // console.log('Getting it', getKey(recipesList[0],1))
    res.send(recipesList);
}

const addRecipe = (req, res, next) => {
    let newRecipe = {
        id: idCounter += 1,
        name: req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    }
    recipesList.push(newRecipe)
    res.json(recipesList);
}

const updateRecipes = (req, res, next) => {
    let selectedID = req.params.updateID;
    for(let i = 0; i < recipesList.length; i++){
        if(getKey(recipesList[i], Number(selectedID))){
            console.log("Yay", recipesList[i]);
            let recipeID = recipesList[i].id
            let updatedName = req.body.name;
            let updatedIngredients = req.body.ingredients;
            let updatedDirections = req.body.directions;
            let perviousName = recipesList[i].name
            let perviousIngredients = recipesList[i].ingredients
            let perviousDirections = recipesList[i].directions
        
            if(req.body.name){
                console.log('Update the name')
                perviousName = updatedName;
        
                recipesList[i] = {
                    id: recipeID,
                    name: updatedName,
                    ingredients: perviousIngredients,
                    directions: perviousDirections
                }
            }
            if(req.body.ingredients){
                console.log('Update the ingredients')
                perviousIngredients = updatedIngredients;
        
                recipesList[i] = {
                    id: recipeID,
                    name: perviousName,
                    ingredients: updatedIngredients,
                    directions: perviousDirections
                }
            }
            if(req.body.directions){
                console.log('Update the directions')
                perviousDirections = updatedDirections;
        
                recipesList[i] = {
                    id: recipeID,
                    name: perviousName,
                    ingredients: perviousIngredients,
                    directions: updatedDirections        }
            }
            res.json(recipesList[i])  
            return;
        }
    }
}

const deleteRecipe = (req, res, next) => {
    let selectedID = req.params.deleteID;
    for(let i = 0; i < recipesList.length; i++){
        if(getKey(recipesList[i], Number(selectedID))){
            recipesList.splice(i, 1);
            console.log(recipesList)
            // return;
        }
    }
    res.json(recipesList);
}

const compareIngredients = (req, res, next) => {
    let userIngredient = req.params.match;

    let matchedIngredients = [];

    for(let i = 0; i < recipesList.length; i++){
        // console.log(`Is ${userIngredient} inside?`, getKey(recipesList[i].ingredients, userIngredient));
        if(getKey(recipesList[i].ingredients, userIngredient)) {
            matchedIngredients.push(recipesList[i]);
        }
    }
    console.log('Matching Ingredients', matchedIngredients);
    res.json(matchedIngredients);
}

router.get("/", printRecipes)

router.post("/add", addRecipe);

router.patch("/:updateID", updateRecipes);

router.delete("/:deleteID", deleteRecipe);

router.get("/:match", compareIngredients)

module.exports = router;

