// Joseph P. Pasaoa
// Nested Routing App Structure Lab
//

/* CUSTOM HELPERS */
const log = console.log;

/* MODULE INITS */
const express = require('express');
  const app = express();
  const port = 7110;


app.listen(port, () => {
    log(`JoeyServer is active and serving on port ${port}. Seize the day.`);
});


app.use("*", () => {
    res.status(404).send(`error: no route found. try again later.`);
});
