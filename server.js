// Joseph P. Pasaoa
// Nested Routing App Structure Lab
//

/* CUSTOM HELPERS */
const log = console.log;

/* MODULE INITS */
const express = require('express');
  const app = express();
  const port = 7110;

/* SERVER INIT */
app.listen(port, () => {
    log(`JoeyServer is active and serving on port ${port}. Seize the day.`);
});


/* MAIN ROUTING */
// Imports
const usersRT = require('./routes/users.js');
const recipesRT = require('./routes/recipes.js');

// Connects
app.use('/users', usersRT);
app.use('/recipes', recipesRT);


/* NO-ROUTE CATCH */
app.use("*", (req, res) => {
    res.status(404).send(`error: no route found. try again later.`);
});
