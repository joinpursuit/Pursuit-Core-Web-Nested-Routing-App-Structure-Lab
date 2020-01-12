const recipes = require("express").Router()
const bodyParser = require("body-parser")

recipes.use(bodyParser.urlencoded({extended:false}))
recipes.use(bodyParser.json())

let recipesList = [{
  id : 1,
  name: "Grilled Cheese",
  ingredients: [
      "Bread",
      "Cheese",
      "Butter"
  ],
  directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
},
{
  id : 2,
  name: "French Toast",
  ingredients: [
      "Bread",
      "Eggs",
      "Butter",
      "Cream"
  ],
  directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Mix eggs and cream in a bowl then deep the bread in both side init. Then put it in the hot skillet let golden for 3mn and flip it into other side."
},
{
  id : 3,
  name: "Fruit Salad",
  ingredients: [
      "Banana",
      "Apple",
      "Orange",
      "Kiwi"
  ],
  directions: "Cut up all the fruits and mix."
}
]

recipes.post("/",(req,res)=>{
  let newRecipe = req.body
  recipesList.push(newRecipe)
  res.json({status:"success",recipesList})
})

recipes.patch("/:id", (req,res)=>{
  let recipeId = req.params
  let change = req.body
  let selectedRecipe

  recipesList.forEach(recipe=>{
    if(recipe.id === parseInt(recipeId.id)){
      selectedRecipe = recipe
    }
  })

  for(key in change){
    selectedRecipe[key] = change[key]
  }

  res.json({status: "success",selectedRecipe})
})

recipes.get("/",(req,res)=>{
  res.json({status:"success",recipesList})
})
recipes.delete("/:id", (req, res)=>{
  let id = req.params
  let indexToDelete

  recipesList.forEach(recipe=>{
    if(recipe.id === parseInt(recipe.id)){
      indexToDelete = recipesList.indexOf(recipe)
    }
  })

  recipesList.splice(indexToDelete,1)
  res.json({status:"success",recipesList})
})

recipes.get("/:ingredient", (req,res)=>{
  let ingredient = req.params["ingredient"]
  let validRec = []

  recipesList.forEach(el =>{
    if(el.ingredients.includes(ingredient)){
      validRec.push(el)
    }
  })

  res.json(validRec)
})


module.exports = recipes