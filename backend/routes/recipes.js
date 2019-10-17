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
    }
];

routers.get("/all", (req,res) => {
    res.json(allRecipes)
})

module.exports = routers;
