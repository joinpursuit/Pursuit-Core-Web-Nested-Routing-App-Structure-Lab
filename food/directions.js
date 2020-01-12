const express = require("express")
const directions = express.Router()

directions.post("/:id", (req, res) => {
    console.log(req.params.id)
    res.json(req.params.id)
})
module.exports = directions
