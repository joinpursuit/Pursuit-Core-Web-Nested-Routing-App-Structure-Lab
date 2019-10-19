const express = require("express");
const router = express.Router();

// Recipes System

let recipes = [
    {
        name: "baconeggandcheese",
        ingredients: [
            "baconeggandcheese",
            "onaroll"
        ],
        directions:"Tell the sandwich guy you want a baconeggandcheese onaroll, wait."
    },
]

router.get("/", (request, response) => {
    response.json(recipes)
})

router.post("/", (request, response) => {
    let newRecipe = request.body
    
    recipes.push(newRecipe)

    response.json(newRecipe)
})

router.patch("/:name", (request, response) => {
    let name = request.params.name;
    let newName = request.body
    for(let i of recipes) {
        console.log(i)
        if (name === i.name) {
            i.name = newName.name
            response.json({
                status: "success",
                message: "Name has been changed",
                recipes
            })
        } else {
            response.json({
                status: "failed",
                message: "no recipe found"
            })
        }
    }
})

router.patch("/:name", (request, response) => {
    let name = request.params.name;
    let newName = request.body
    for(let i of recipes) {
        console.log(i)
        if (name === i.name) {
            i.ingredients = newName.ingredients
            response.json({
                status: "success",
                message: "Ingredients has been changed",
                recipes
            })
        } else {
            response.json({
                status: "failed",
                message: "no change made"
            })
        }
    }
})

router.patch("/:name", (request, response) => {
    let name = request.params.name;
    let newName = request.body
    for(let i of recipes) {
        console.log(i)
        if (name === i.name) {
            i.directions = newName.directions
            response.json({
                status: "success",
                message: "Directions has been changed",
                recipes
            })
        } else {
            response.json({
                status: "failed",
                message: "no change made"
            })
        }
    }
})

router.delete("/:name", (request, response) => {
    let name = request.params.name
})

module.exports = router