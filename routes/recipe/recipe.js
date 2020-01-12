const recipe = require("express").Router();

recipe.get("/", (req, res) => {
    res.json("All recipes")
})

recipe.post("/", (req, res) => {
    res.json("Created new recipe")
})

recipe.delete("/", (req, res) => {
    res.json("Delete Recipe")
})

recipe.get("/:id", (req, res) => {
    res.json("Specific Recipe")
})

module.export = recipe ;

