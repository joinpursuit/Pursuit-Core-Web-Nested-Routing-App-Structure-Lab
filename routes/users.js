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
    data: [null]
  }
};


/* DATA */
class User {
  constructor (username, email, activeDate, id) {
    this.username = username;
    this.email = email;
    this.activeDate = activeDate;
    if (id) {
      this.id = id;
    }
    User.addInstance(this); // pushes user into json's array upon instantiation
  }
  // //
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
        g.usersJSON.nameToId[el.username] = proposedId;
        g.usersJSON.idToName[proposedId] = el.username;
        el.id = proposedId;
      }
    }
    g.usersJSON.data.push(el);
  }
}


/* HELPERS */


/* MIDDLEWARE */


/* ROUTES */


/* TEMP DATA POPULATION */ // TODO move to separate file
const moreUsers = require('../dbs/usersPersistent.json');
for (let i = 1; i < moreUsers.length; i++) {
  g.usersJSON.data[i] = new User (
    moreUsers[i].username,
    moreUsers[i].email,
    moreUsers[i].activeDate,
    moreUsers[i].id
      ? moreUsers[i].id
      : undefined
  )
}
log(g.usersJSON.data);


module.exports = router;
