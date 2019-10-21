// Joseph P. Pasaoa
// Recipes Route | Nested Routing App Structure Lab
//

/* CUSTOM HELPERS */
const log = console.log;

/* ROUTER INIT */
const express = require('express');
  const router = express.Router();
router.use(express.json()); // parses for req.body, espec raw
router.use(express.urlencoded({extended: false}));
const fs = require('fs');
  const jsonPath = '../dbs/recipesDB.json';

/* DATA */
let recipesJSON = require('../dbs/recipesDB.json');
const changeAllowed = {
  name: true,
  picUrl: true,
  description: true,
  ingredients: true,
  directions: true
}
/*  {
  name: "",
  picUrl: "",
  description: "",
  ingredients: {},
  directions: ""
} */

const writeToFile = () => {
  log('star', recipesJSON);

  // stringify JSON Object
  // const strungRecipes = JSON.stringify(recipes);
//   console.log(strungRecipes);
  
//   fs.writeFile("./dbs/recipesDB.json", strungRecipes, 'utf8', function (err) {
//       if (err) {
//           console.log("An error occured while writing JSON Object to File.");
//           return console.log(err);
//       }
//       console.log(Date.now() + " JSON file has been saved.");
//   });
}
// writeToFile();

/* HELPERS */
const cleanEmpties = (arr) => {
  return arr.filter(el => !!el)
}


/* MIDDLEWARE */
const doesExist = (req, res, next) => {
  if (!recipesJSON.index[req.query.target.toLowerCase()]) {
    res.json({
        status: "fail",
        message: "Error: cannot find the target recipe. Check the name and try again."
    });
  } else {
    next();
  }
}

const checkDupe = (req, res, next) => {
  if (recipesJSON.index[req.body.name.toLowerCase()]) {
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

const patchRecipe = (req, res, next) => {
  log(req.body);
  // const target = recipesJSON.data[recipesJSON.index[req.query.target]];
  for (let key in req.body) {
    log('key: ', key)
    log(recipesJSON.data[recipesJSON.index[req.query.target]][key]);
    if (changeAllowed[key]) {
      recipesJSON.data[recipesJSON.index[req.query.target]][key] = req.body[key];
    }
  }
  res.json({
      status: "success",
      message: `The recipe for ${req.query.target} has been updated.`
  });
}

const addRecipe = (req, res, next) => {
  let outputObj = {}
  for (let key in req.body) {
    if (changeAllowed[key]) {
      outputObj[key] = req.body[key];
    }
  }
  outputObj['idx'] = recipesJSON.nextIdxAssign;
  recipesJSON.data.push(outputObj);
  recipesJSON.hits += 1;
  recipesJSON.index[outputObj.name.toLowerCase()] = recipesJSON.nextIdxAssign;
  recipesJSON.nextIdxAssign += 1;
  res.json({
      status: "success",
      message: `Your \'${outputObj.name}\' recipe has been added.`
  });
}

const delRecipe = (req, res, next) => {
    recipesJSON.data.splice(recipesJSON.index[req.query.target.toLowerCase()], 1, null);
    recipesJSON.hits -= 1;
    delete recipesJSON.index[req.query.target.toLowerCase()];
    res.json({
        status: "success",
        message: `\'${req.query.target.toLowerCase()}\' recipe has been removed.`
    });
}

const logger = (req, res, next) => {
  // log(recipesJSON);
  
  res.send("HIT!");
}
const serveAllRecipes = (req, res, next) => {

}

/* RECIPES Routes */
router.post("/", checkDupe, checkInput, addRecipe);

router.patch("/edit", doesExist, checkInput, patchRecipe);

router.delete("/edit", doesExist, delRecipe);

router.get("/all", (req, res) => {
    res.json(cleanEmpties(recipesJSON.data));
});




module.exports = router;
