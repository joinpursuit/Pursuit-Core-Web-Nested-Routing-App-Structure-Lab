const recipes = require("express").Router()

recipes.post("/", (req, res)=>{
    res.json("Add Recipe")
})

recipes.patch("/:id", (req, res)=>{
    res.json("Updated recipe" + req.params.id)
})

recipes.delete("/:id", (req, res)=>{
    res.json("Deleted all recipes"+req.params.id)
})

recipes.get("/", (req, res)=>{
    res.json("All Recipes recieved")
})

// recipes.get(`/:id${ingrediant}`, (req, res)=>{
//     res.json("Recipes with " + ingrediant + req.params.id)
// })

module.exports = recipes