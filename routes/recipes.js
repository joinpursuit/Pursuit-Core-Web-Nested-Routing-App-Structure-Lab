const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(cors())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

let recipesArray = [{
  name: 'pastel de papa',
  ingredients: ['papa', 'carne'],
  directions: 'cocinar'
}]

const checkBody = (req,res,next) => {
  const body = req.body
  if (body.ingredients === undefined || body.name === undefined || body.directions === undefined) {
    res.send('error')
  } else {
    next()
  }
}

const checkName = (req,res,next) => {
  const query = req.query
  let namesArray = []
  recipesArray.forEach(a => {
    namesArray.push(a.name)
  })
  if (query.name === undefined || namesArray.includes(query.name) === false){
    res.send('error')
  } else {
    next()
  }
}

const checkIngredient = (req,res,next) => {
  const query = req.query
  let ingredientsArray = []
  let recipeIngredients = []
  recipesArray.forEach(a => {
    for (b of a.ingredients) {
    recipeIngredients.push(b)
    }
    recipeIngredients.forEach(c => {
      if (ingredientsArray.includes(c) === false) {
        ingredientsArray.push(c)
      }
    })
  })
  if (query.search === undefined || ingredientsArray.includes(query.search) === false){
    res.send('error')
  } else {
    next()
  }
}

const createRecipe = (req,res,next) => {
  const body = req.body
  let namesArray = []
  recipesArray.forEach(a => {
    namesArray.push(a.name)
  })
  if (namesArray.includes(body.name)) {
    res.send('error')
  } else {
    recipesArray.push(body)
    res.send(`${body.name} added`)
  }
}

const updateRecipe = (req,res,next) => {
  const body = req.body
  const query = req.query
  for (i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].name === query.name) {
      recipesArray[i] = body
      res.send(`${query.name} updated`)
    }
  }
}

const delRecipe = (req,res,next) => {
  const query = req.query
  for (i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].name === query.name) {
      recipesArray.splice(i)
      res.send(`${query.name} deleted`)
    }
  }
}

const getAll = (req,res,next) => {
  res.send(recipesArray)
}

const getRecipes = (req,res,next) => {
  const query = req.query
  let searchResult = []
  recipesArray.forEach(a => {
    if (a.ingredients.includes(query.search)) {
      searchResult.push(a)
    }
  })
  res.send(searchResult)
}

router.post('/',checkBody, createRecipe)
router.put('/', checkName, checkBody, updateRecipe)
router.delete('/', checkName, delRecipe)
router.get('/all', getAll)
router.get('/', checkIngredient, getRecipes)

module.exports = router
