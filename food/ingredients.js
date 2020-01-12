const express = require("express")
const ingredients = express.Router()

let ing = []

ingredients.post("/:id", (req, res) => {
    console.log(ing);
    ing.push(req.params.id);
    res.json({ingredients: ing});
})

module.exports = ingredients
