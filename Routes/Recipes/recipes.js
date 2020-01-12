const express = require("express")
const recipes = express.Router()

directions.post("/:id", (req, res) => {
    console.log(req.params.id)
    res.json({directions: + req.params.id})
})

let ing = []

ingredients.post("/:id", (req, res) => {
    console.log(ing);
    ing.push(req.params.id);
    res.json({ingredients: ing});
})

names.post("/:id", (req, res) => {
    console.log(req.params.id)
    res.json({names: req.params.id})
});

module.exports = recipes