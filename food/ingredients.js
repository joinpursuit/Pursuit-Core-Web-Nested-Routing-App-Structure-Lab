const express = require("express")
const ingredients = express.Router()

ingredients.post("/:id", (req, res) => {
    console.log(req.params.id)
    res.json(req.params.id)
})
module.exports = ingredients
