const express = require('express');
const routers = express.Router();

const allRecipes = [
    {   name: 'Grilled Cheese',
        ingredients: ['bread','cheese', 'butter'],
        directions:'Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese.'

    },
    {
        name: 'Lasagna',
        ingredients:['Pasta', 'tomato sauce', 'cheese','meat',],
        directions: 'Cook beef in a large skillet over medium heat, stirring until it crumbles and is no longer pink; drain. Stir in pasta sauce. Spread one-third of meat sauce in a lightly greased 11- x 7-inch baking dish; layer with 3 noodles and half each of ricotta cheese and mozzarella cheese. (The ricotta cheese layers will be thin.) Repeat procedure; spread remaining one-third of meat sauce over mozzarella cheese. Slowly pour 1/4 cup hot water around inside edge of dish. Tightly cover baking dish with 2 layers of heavy-duty aluminum foil. Bake at 375° for 45 minutes.'
    },
    {
        name: 'Chicken Nachos',
        ingredients: ['tortilla chips','cheese', 'jalapeños', 'beans', 'tomato', 'lettuce', 'sour cream', 'chicken'],
        directions: 'Cook chicken in a large skillet over medium heat. ',
    }
];

const displayRecipes = (req,res,next) =>{
    res.json(allRecipes)
}

const validateRecipe = (req, res, next) =>{

}

const addRecipe = (req, res, next) =>{
    let newRecipe = res.body;
    console.log(newRecipe)
    allRecipes.push(newRecipe)
    res.json(allRecipes)
}

const updateRecipe = (req, res, next) => {

}

const removeRecipe = (req, res, next) => {

}

const specificRecipe = (req, res, next) =>{
    let ingredient = req.query.ingredients
    console.log(ingredient)
    for(let i = 0; i<allRecipes.length; i++){
        let obj = allRecipes[i].ingredients;
        if(obj.includes(ingredient)){
        res.send(obj)
        }
    }
}






routers.get("/all", displayRecipes)
routers.post('/add-recipe ', addRecipe)
// routers.put('/update-recipe, '')
// routers.delete('/remove-recipe','')
routers.get('/all/:ingredient', specificRecipe)
module.exports = routers;