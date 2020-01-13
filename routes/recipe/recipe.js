const recipe = require("express").Router()

let recipeObj = [
  {
    name: "Grilled Cheese",
    ingredients: ["Bread", "Cheese", "Butter"],
    directions:
      "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
  },
  {
    name: "Ham and Cheese",
    ingredients: ["Bread", "Cheese", "Ham"],
    directions: "Preheat skillet over medium heat"
  }
]

recipe.get("/", (req, res) => {
  res.json(recipeObj)
})

recipe.get("/:ingredients/", (req, res) => {
  let ingredient = req.params.ingredients
  let recipes = []
  recipeObj.forEach(el => {
    if(el.ingredients.includes(ingredient)){
       recipes.push(el)
    }

  })
  res.send(recipes)
})

recipe.post("/", (req, res) => {
  res.json("Created new recipe")
})

recipe.delete("/:name", (req, res) => {
    let recipe = req.params.name
    for(let i = 0; i < recipeObj.length; i++) {
        if (recipeObj[i].name === recipe) {
    let idx = recipeObj.indexOf(recipeObj[i])
    recipeObj.splice(idx, 1)
    }
    console.log(recipeObj)
    res.send(recipeObj)
}
})

recipe.get("/:name", (req, res) => {
  res.json("Specific Recipe")
})

module.exports = recipe
