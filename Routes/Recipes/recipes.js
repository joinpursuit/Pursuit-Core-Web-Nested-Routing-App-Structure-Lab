const express = require("express")
const recipes = express.Router();

module.exports = recipes


const recipes = [
    {id: 1, 
    name: "Salmon Poke Bowl",
    ingredients: [
        "Dry white rice",
        "Wild Caught Salmon",
        "Soy Sauce or Tamari",
        "Toasted Sesame Oil",
        "Sriracha",
        "Red Cabbage",
        "Cucumber",
        "Carrots",
        "Avacado",
        "Green Onions",
        "Rice Vinegar",
        "Sesame Seeds",
        "Organic Coconut Oil"],
        directions: "Make the rice or quinoa using our How to Make Quinoa method (see the video below), Instant Pot Quinoa, Instant Pot Brown Rice or Instant Pot White Rice. With the salmon lying flat on a cutting board, run a sharp knife between the skin and the flesh to remove the skin. Cut the salmon into 1 inch squares and add it to a medium bowl. Note that thinner parts of the salmon may shred a bit (this is okay). Add 1/4 cup soy sauce, 1 teaspoon toasted sesame oil, and the sriracha to the salmon and stir gently."},

    {id: 2,
    name: "Peanutbutter & Jelly Sandwhich", 
    ingredients: [
            "Peanut-butter",
            "Jelly",
            "Knife/Spoon", 
            "2 slices of bread",
            "Cutting board"],
        dicrections: "......."},
    {id: 3,
        name: "BLT", 
        ingredients: [
            "Bread",
            "Bacon",
            "Lettuce", 
            "Tomatoes",
            "Skillet", 
            "Vegetable Oil", 
            "Butter (Optional)"],
            dicrections: "......."},
        ]


const isIngredientPresent = (req, res, next) => {
    let passed
    recipes.ingredients.forEach(el => {
      if (req.params.ingredients === el.ingredients) {
        passed = el.ingredients
        res.json({ status: "sucess", message: true })
      }
    })
    if (!passed) {
      throw new Error("No recipes to that include that ingredient")
    }
    next()
  }

recipes.get("/", (req, res) => {
    res.json("Returns all recipies")
})

recipes.get("/:id", (req, res) => {
    res.json("Returns specific recipies")
})

recipes.get("/", (req, res) => {
    res.json({recipes: "Returns recipes based on ingredient"} )
})
