// Joseph P. Pasaoa
// Recipes Route | Nested Routing App Structure Lab
//


/* CUSTOM HELPERS */
const log = console.log;


/* ROUTER INIT */
const express = require('express');
  const router = express.Router();
  router.use(express.json()); // parses RAW req.body (Postman)
  router.use(express.urlencoded({extended: false}));


/* GLOBAL VAR */
const g = {
  recipesJSON: {
    hits: 0,
    index: {},
    nextIdxAssign: 1,
    data: [null]
  },
  changeAllowed: {
    name: true,
    picUrl: true,
    description: true,
    ingredients: true,
    directions: true
  },
  searchAsSpace: {
    ['[']: true, [']']: true, ['{']: true, ['}']: true, ['/']: true, ['"']: true, 
    ['-']: true, ['_']: true, [':']: true, [',']: true
  }
}


/* DATA */
class Recipe {
  constructor(name, picUrl, description, ingredients, directions, ownerId) {
    this.name = name;
    this.picUrl = picUrl;
    this.description = description;
    this.ingredients = ingredients;
    this.directions = directions;
    this.ownerId = ownerId;
    this.idx = g.recipesJSON.nextIdxAssign;
    Recipe.addInstance(this); // pushes recipes into json's array upon instantiation
  }
  // //
  containsString(str) {
    let strungArray = JSON.stringify(Object.values(this)).toLowerCase().split('');
    strungArray = strungArray.map(char => {
        if (g.searchAsSpace[char]) {
          return " ";
        }
        return char;
    }).join('');
    // TODO build own search function. KMP algo?
    return strungArray.includes(str);
  }
  static addInstance(el) {
    g.recipesJSON.hits += 1;
    g.recipesJSON.index[el.name.toLowerCase()] = g.recipesJSON.nextIdxAssign;
    g.recipesJSON.nextIdxAssign += 1;
    g.recipesJSON.data.push(el);
  }
}


/* HELPERS */
const cleanEmpties = (arr) => {
  return arr.filter(el => !!el)
}


/* MIDDLEWARE */
const doesExist = (req, res, next) => {
  if (!g.recipesJSON.index[req.query.target.toLowerCase()]) {
    res.json({
        status: "fail",
        message: "Error: cannot find the target recipe. Check the name and try again."
    });
  } else {
    next();
  }
}

const checkDupe = (req, res, next) => {
  if (g.recipesJSON.index[req.body.name.toLowerCase()]) {
    res.json({
      status: "fail",
      message: "Error: This drink already exists in the database. Either Edit or Delete the present entry."
    });
  } else {
    next();
  }
}

const checkInput = (req, res, next) => {
  let problems = [];
  for (let key in req.body) {
    const str = req.body[key];
    switch (key) {
      case "name":
        if (!str || str.length > 30) {
          problems.push(key);
        };
        break;
      case "picUrl":
        if (!str || (str.slice(0,7) !== "http://" && str.slice(0,8) !== "https://")) {
          problems.push(key);
        };
        break;
      case "description":
        if (!str) {
          problems.push(key);
        }
        break;
      case "ingredients":
        if (Object.entries(str) === 0) {
          problems.push(key);
        }
        break;
      case "directions":
        if (!str) {
          problems.push(key);
        }
        break;
      default:
        break;
    }
  }
  if (problems[0]) {
    problems = problems.map(el => el.toUpperCase());
    if (problems.length >= 2) {
      problems[problems.length - 1] = "and " + problems[problems.length - 1];
      problems.length > 2
        ? problems = problems.join(', ')
        : problems = problems.join(' ');
    } else {
      problems = problems.join('');
    }
    res.json({
        status: "fail",
        message: `Error: Unsatisfactory inputs in fields ${problems}. Please check your inputs and try again.`
    });
  } else {
    next();
  }
}

const searchRecipes = (req, res, next) => {
  let query = req.query.search.trim();
  const outputArr = g.recipesJSON.data.filter(recipe => {
      if (recipe) {
        return recipe.containsString(query);
      }
  });
  res.json({
      status: "success",
      data: outputArr
  });
}

const addRecipe = (req, res, next) => {
  new Recipe (
    req.body.name,
    req.body.picUrl,
    req.body.description,
    req.body.ingredients,
    req.body.directions,
    req.body.ownerId
  )
  res.json({
      status: "success",
      message: `Your \'${req.body.name}\' recipe has been added.`
  });
}

const patchRecipe = (req, res, next) => {
  for (let key in req.body) {
    if (g.changeAllowed[key]) {
      g.recipesJSON.data[g.recipesJSON.index[req.query.target]][key] = req.body[key];
    }
  }
  res.json({
      status: "success",
      message: `The recipe for \'${req.query.target}\' has been updated.`
  });
}

const delRecipe = (req, res, next) => {
    g.recipesJSON.data.splice(g.recipesJSON.index[req.query.target.toLowerCase()], 1, null);
    g.recipesJSON.hits -= 1;
    delete g.recipesJSON.index[req.query.target.toLowerCase()];
    res.json({
        status: "success",
        message: `\'${req.query.target.toLowerCase()}\' recipe has been removed.`
    });
}


/* ROUTES */
router.post("/", checkDupe, checkInput, addRecipe);
router.patch("/edit", doesExist, checkInput, patchRecipe);
router.delete("/edit", doesExist, delRecipe);
router.get("/filter", searchRecipes);
router.get("/all", (req, res) => res.json(cleanEmpties(g.recipesJSON.data)));

// unpublished route for debugging
router.get("/json", (req, res) => res.json(g.recipesJSON));


/* TEMP DATA POPULATION */ // TODO move to separate file
const moreRecipes = require('../dbs/recipesPersistent.json');
for (let i = 1; i < moreRecipes.length; i++) {
  g.recipesJSON.data[i] = new Recipe (
    moreRecipes[i].name,
    moreRecipes[i].picUrl,
    moreRecipes[i].description,
    moreRecipes[i].ingredients,
    moreRecipes[i].directions,
    moreRecipes[i].ownerId
  )
}


module.exports = router;
