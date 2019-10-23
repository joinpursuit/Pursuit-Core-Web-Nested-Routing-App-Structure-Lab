// Joseph P. Pasaoa
// Users Route | Nested Routing App Structure Lab
//

/* CUSTOM HELPERS */
const log = console.log;


/* ROUTER INIT */
const express = require('express');
  const router = express.Router();
  router.use(express.json());
  router.use(express.urlencoded({extended: false}));


/* GLOBAL VAR */
const g = {
  usersJSON: {
    numOfUsers: 0,
    nameToId: {},
    idToName: {},
    nameToUsersIdx: {},
    nextUsersIdxAssign: 1,
    data: [null]
  },
  changeAllowed: {
    username: true,
    email: true
  },
  months: [
    "January", "February", "March"," April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ]
};


/* DATA */
class User {
  constructor (username, email, activeDate, id) {
    this.username = username;
    this.email = email;
    this.activeDate = activeDate || new Date();
    this.index = g.usersJSON.nextUsersIdxAssign;
    if (id) {
      this.id = id;
    }
    User.addInstance(this); // pushes user into json's array upon instantiation
  }
  // //
  containsString(str) {
    let strungArray = JSON.stringify(this.username + this.email).toLowerCase();
    // TODO build own search function. KMP algo?
    return strungArray.includes(str);
  }
  getRecipesOwned() {
    // TODO Connect to recipes when ready
  }
  static addInstance(el) {
    g.usersJSON.numOfUsers += 1;
    let proposedId = Math.ceil(Math.random() * 1000);
    while (!el.id) {
      if (g.usersJSON.idToName[proposedId]) {
        proposedId += 1;
      } else {
        el.id = proposedId;
      }
    }
    g.usersJSON.nameToId[el.username.toLowerCase()] = el.id;
    g.usersJSON.idToName[el.id] = el.username.toLowerCase();
    g.usersJSON.nameToUsersIdx[el.username.toLowerCase()] = g.usersJSON.nextUsersIdxAssign;
    g.usersJSON.nextUsersIdxAssign += 1;
    g.usersJSON.data.push(el);
  }
}


/* HELPERS */
const ignoreEmpties = (arr) => arr.filter(el => !!el);

const formatDate = (str) => {
  const d = new Date(str);
  return `${g.months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}


/* MIDDLEWARE */
const checkExists = (req, res, next) => {
  let target = null;
  if (req.query.target) {
    target = req.query.target.toLowerCase();
  } else {
    log('HIT');
    target = req.params.username.toLowerCase();
  }
  if (!g.usersJSON.nameToId[target]) {
    res.json({
        status: "fail",
        message: "Error: cannot find the target account. Check the username and try again."
    });
  } else {
    next();
  }
}

const checkDupeName = (req, res, next) => {
  if (g.usersJSON.nameToId[req.body.username.toLowerCase()]) {
      res.json({
          status: "fail",
          message: "Error: username already taken. Please try another."
      });
  } else {
    next();
  }
}

const checkInputs = (req, res, next) => {
  let problems = [];
  for (let key in req.body) {
    const str = req.body[key];
    switch (key) {
      case "username":
        if (!str) {
          problems.push('username missing');
        } else if (str.length > 15) {
          problems.push('username can\'t be longer than 15 characters');
        }
        break;
      case "email":
        if (!str) {
          problems.push('email missing');
        } else if (!str.includes('@') || !str.slice(-5).includes('.')) {
          problems.push('please enter a valid email address');
        }
        break;
      default:
        break;
    }
  }
  if (problems[0]) {
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
        message: `Error: ${problems}. Please fix your inputs and try again.`
    });
  } else {
    next();
  }
}

const searchUsers = (req, res, next) => {
  let queryStr = '';
  let rangeBeginDate = new Date("January 1, 1970");
  let rangeEndDate = new Date();
  if (req.body.search) {
    queryStr = req.body.search.trim();
  }
  if (req.body.begin) {
    rangeBeginDate = new Date(req.body.begin);
  }
  if (req.body.end) {
    rangeEndDate = new Date(req.body.end);
  }
  const outputArr = g.usersJSON.data.filter(userObj => {
      if (userObj) {
        const d = new Date(userObj.activeDate);
        return userObj.containsString(queryStr) && d > rangeBeginDate && d < rangeEndDate;
      }
  });
  res.json({
      status: "success",
      data: outputArr[0] ? outputArr : "No search results found."
  });
}

const patchUser = (req, res, next) => {
  for (let key in req.body) {
    if (g.changeAllowed[key]) {
      g.usersJSON.data[g.usersJSON.nameToUsersIdx[req.query.target.toLowerCase()]][key] = req.body[key];
    }
  }
  res.json({
    status: "success",
    message: `Account \'${req.query.target}\' has been updated.`
});
}

const profileUser = (req, res, next) => {
  const outputObj = g.usersJSON.data[g.usersJSON.nameToUsersIdx];
  let recipeNamesArr = [];
  log(g.recipesJSON.data);
  res.json({
      status: "success",
      data: outputObj
  });
}

const addUser = (req, res, next) => {
  new User (
    req.body.username,
    req.body.email
  );
  res.json({
      status: "success",
      message: `New account \'${req.body.username}\' has been created.`
  });
}

const delUser = (req, res, next) => {
  const target = req.query.target.toLowerCase();
  const deletedName = g.usersJSON.data[g.usersJSON.nameToUsersIdx[target]].username;
  g.usersJSON.data.splice(g.usersJSON.nameToUsersIdx[target], 1, null);
  g.usersJSON.numOfUsers -= 1;
  delete g.usersJSON.nameToUsersIdx[target];
  delete g.usersJSON.idToName[g.usersJSON.nameToId[target]];
  delete g.usersJSON.nameToId[target];
  res.json({
      status: "success",
      message: `\'${deletedName}\' user has been removed.`
  });
}


/* ROUTES */
router.post("/", checkDupeName, checkInputs, addUser);
router.patch("/edit", checkExists, checkInputs, patchUser);
router.delete("/edit", checkExists, delUser);
router.get("/filter", searchUsers);
// router.get("/profile/:username", checkExists, profileUser); // TODO after vars shared between routes
router.get("/all", (req, res) => {
    let output = [];
    for (let userObj of g.usersJSON.data) {
      if (userObj) {
        userObj.activeDate = formatDate(userObj.activeDate)
        output.push(userObj);
      }
    }
    res.json({
        status: "success",
        data: output
    });
});

// unpublished route for debugging
router.get("/json", (req, res) => res.json(g.usersJSON));


/* TEMP DATA POPULATION */ // TODO move to separate file
const moreUsers = require('../dbs/usersPersistent.json');
for (let i = 1; i < moreUsers.length; i++) {
  g.usersJSON.data[i] = new User (
    moreUsers[i].username,
    moreUsers[i].email,
    moreUsers[i].activeDate,
    moreUsers[i].id || undefined
  )
}


module.exports = router;
