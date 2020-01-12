const express = require("express")
const names = express.Router()

names.post("/:id", (req, res) => {
    console.log(req.params.id)
    res.json(req.params.id)
})

module.exports = names
