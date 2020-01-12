const express = require("express")
const names = express.Router()

names.post("/:id", (req, res) => {
    console.log(req.params.id)
    res.json({names: req.params.id})
});

names.get("/:id", (req, res)=>{
    res.json()
})

// names.get()
module.exports = names
