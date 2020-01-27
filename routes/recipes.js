const express = require('express')
const recipeRoutes = express.Router()
const bodyParser = require('body-parser')

const recipes = [{
        id: 1,
        name: "Pho",
        ingredients: [
            "thin rice stick noodles",
            "beef strip loin",
            "bean sprouts",
            "Vietnamese basil leaves",
            "cilantro leaves",
            "serrano chiles",
            "hoisin sauce",
            "oyster sauce",
            {"Pho Base": [
                "beef bouillon",
                "Vietnamese fish sauce",
                "white sugar",
                "ginger",
                "yellow onion",
                "salt",
                "whole cloves",
                "star anise",
                "cinnamon stick",
            ]},
        ],
        directions: ["For the Pho Stock: Add the beef base and 1 quart water to a 2-quart (1.9-L) saucepan and bring to a low boil. Add the fish sauce, sugar, ginger, onion and salt to the stock and reduce the heat to a simmer. Wrap the cloves, star anise and cinnamon stick in a piece of cheesecloth and tie it into a satchel. Add the satchel to the broth and simmer for at least 30 minutes, but no more than 45 minutes.",
            "Around the 30 minute mark, taste the broth to see that the spice flavors have been extracted, and adjust seasonings if necessary. Strain the aromatics and satchel from the broth, return to a sauce pot, and reserve for assembly.",
            "For the assembly: Bring the broth back to a simmer. In a separate pot, bring water to a boil. Using a sieve or basket, quickly dip the noodles into the water until they are hot and al dente, 10 to 20 seconds. Drain the excess water from the noodles and distribute the noodles between 4 bowls.",   
            "Top each bowl with some sliced beef, basil, bean sprouts, cilantro, jalapeno, scallions and onion, or as each person wishes. Ladle in enough broth to cover the ingredients in the bowl. Garnish with a lime wedge. I like to serve pho with Sriracha and hoisin sauce."
        ]
    },
    {
        id: 2,
        name: "Grilled_Cheese",
        ingredients: [
            "Bread",
            "Cheese",
            "Butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    }
]

recipeRoutes.get("/", (req, res) => {
    res.json(recipes)
})

recipeRoutes.get("/:id", (req, res) => {
    res.json(recipes[req.params.id])
})

recipeRoutes.post("/", (req, res) => {
    console.log(req)
    recipes.push(req.body)
    res.json({New_Recipe: req.body, Recipe_List: recipes})
})

// recipeRoutes.delete("/:recipeName", (req, res) => {
//     try{
//     recipes.forEach(recipe => {
//         if (req.params.recipeName === recipe["name"]) {
//             recipes.splice(recipe, 1)
//             res.json(recipes)
//         } else {
//             throw "Recipe does not exist!"
//         }
//     } 
//     catch (error){
//         res.send(error)
//     }
//     }
// })

recipeRoutes.put("/:id", (req, res) => {
    recipes[req.params.id] = req.body;
    res.json(recipes[req.params.id])
})

recipeRoutes.get("/ingredients/:ingredient", (req, res) => {
    console.log(req.params.ingredient)
    let output = recipes.filter(recipe => {
        for (let j = 0; j < recipe.ingredients.length; j++) {
            if (recipe.ingredients[j].toLowerCase() === req.params.ingredient.toLowerCase()) {
                // console.log(output)
                return recipe
            }
        }
    })
    res.json(output)
})

module.exports = recipeRoutes;