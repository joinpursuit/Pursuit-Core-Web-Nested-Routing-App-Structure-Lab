const express = require("express")
const recipes = express.Router();



const cookBook = [
  {id: 1, 
    name: "Salmon Poke Bowl",
    ingredients: [
      "white rice",
      "salmon",
      "soy sauce",
      "toasted sesame oil",
      "sriracha",
      "red cabbage",
      "cucumber",
      "carrots",
      "avacado",
      "green onions",
      "rice vinegar",
      "sesame seeds",
      "organic coconut oil"],
      directions: "Make the rice or quinoa using our How to Make Quinoa method (see the video below), Instant Pot Quinoa, Instant Pot Brown Rice or Instant Pot White Rice. With the salmon lying flat on a cutting board, run a sharp knife between the skin and the flesh to remove the skin. Cut the salmon into 1 inch squares and add it to a medium bowl. Note that thinner parts of the salmon may shred a bit (this is okay). Add 1/4 cup soy sauce, 1 teaspoon toasted sesame oil, and the sriracha to the salmon and stir gently."},
      
      {id: 2,
        name: "Peanutbutter & Jelly Sandwhich", 
        ingredients: [
          "peanut-butter",
          "jelly",
          "knife/spoon", 
          "bread",
          "cutting board"],
          dicrections: "......."},
          {id: 3,
            name: "BLT", 
            ingredients: [
              "bread",
              "bacon",
              "lettuce", 
              "tomatoes",
              "skillet", 
              "vegetable oil", 
              "butter"],
              directions: "......."},
            ]
            
            
const isIngredientPresent = (req, res, next) => {
  let output = []
  cookBook.forEach(el => {
    if (el.ingredients.includes(req.params.ingredient.toLowerCase())){
    output.push(el)
    } 
  }) 
  if(output.length){
    res.json(output)
  } else{
    next()
  }
  }
            
recipes.get("/", (req, res) => {
  res.json(cookBook)
})
            
recipes.get("/:id", (req, res) => {
  let output;
  cookBook.forEach((el) => {
    if (el.id === Number(req.params.id)){
      output = el
    }
  })
  res.json(output)
})
            
recipes.get("/ingredients/:ingredient", isIngredientPresent, (req, res) => {

  res.json("There are no recipes matching this ingredient")
})

recipes.post("/", (req,res) => {
  cookBook.push(req.body)
  res.json(cookBook)
})
            
module.exports = recipes

