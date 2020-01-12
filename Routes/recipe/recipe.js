const express = require("express")
const recipe = express.Router()
let output = []

// let cookbook  = ({
//      name:"cake",
//      ingredients:["milk", "eggs"],
//      direction:"mix this"

// })

recipe.post("/", (req, res)=>{
   let food =  res.json({
        name: req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    })
    output.push(food)
})

recipe.put("/:id", (req,res)=>{
   let recipe_id = req.params.id 
   let wantedRecipe = []
    output.forEach((recipe)=>{
        if(recipe.name === recipe_id){
            wantedRecipe.push(recipe)
        }
        res.json(wantedRecipe)

   })
   

})




module.exports = recipe