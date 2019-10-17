const express = require('express');
const routers = express.Router();

const allRecipes = [
    {   name: 'Grilled Cheese',
        ingredients: ['bread','cheese', 'butter'],
        directions:'Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese.'

    },
    {
        name: ''
    }
];

routers.get("/all", (req,res) => {
    res.json(allRecipes)
})

module.exports = routers;
