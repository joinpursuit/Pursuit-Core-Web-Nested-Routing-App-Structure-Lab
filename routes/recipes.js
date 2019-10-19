const express = require("express");
const router = express.Router();
let recipes = []

router.post("/add", (req, res, next) => {
    console.log("req.body", req.body)
    let data = {
        name: req.body.name,
        ingredients: [req.body.ingredients],
        directions: req.body.directions
    }
    recipes.push(data)
res.send(data)

})
//get all
router.get("/", (req, res) => {
    res.send(req.body)
})

router.get("/:ingredient", (req, res) => {
    res.send(req.body)
})

router.delete("/:name", (req, res) => {
    console.log("recipe has been deleted!!!")
    // res.send(req.body)
})




module.exports = router;
