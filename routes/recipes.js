const express = require('express')
const router = express.Router()

let recipes = { data: [] }
let counter = 0
router.post('/', (req, res) => {
  if (!req.body.name, !req.body.ingredients, !req.body.directions) {
    res.json("err: incomplete body")
  }
  else if (!Array.isArray(req.body.ingredients)) {
    res.json("ingredients must be in an array")
  }
  else {
    let obj = {
      id: counter,
      name: req.body.name,
      ingredients: req.body.ingredients,
      directions: req.body.directions
    }
    counter++
    recipes.data.push(obj)
    res.json(obj)
  }
})

router.put('/:id', (req, res) => {
  if (!req.body.name, !req.body.ingredients, !req.body.directions) {
    res.json("err: incomplete body")
  }
  else if (!Array.isArray(req.body.ingredients)) {
    res.json("ingredients must be in an array")
  }
  else {
    let num = parseInt(req.params.id)
    let recipe
    for (let i = 0; i < recipes.data.length; i++) {
      if (num === recipes.data[i].id) {
        recipe = recipes.data[i]
      }
    }
    recipe.name = req.body.name
    recipe.ingredients = req.body.ingredients
    recipe.directions = req.body.directions
    res.json(recipe)
  }
})

router.delete('/:id', (req, res) => {
  let num = parseInt(req.params.id)
  let obj
  for (let i = 0; i < recipes.data.length; i++) {
    if (num === recipes.data[i].id) {
      obj = recipes.data[i]
      recipes.data.splice(i, 1)
    }
  }

  res.json(obj)

})

router.get('/', (req, res) => {
  res.json(recipes.data)
})

router.get('/search', (req, res) => {
  let search = req.query.ingred
  let arrSearch = []
  for (let i = 0; i < recipes.data.length; i++) {
    for (let j = 0; j < recipes.data[i].ingredients.length; j++) {
      if (search === recipes.data[i].ingredients[j]) {
        arrSearch.push(recipes.data[i])
      }
    }
  }
  res.json(arrSearch)
})

module.exports = router