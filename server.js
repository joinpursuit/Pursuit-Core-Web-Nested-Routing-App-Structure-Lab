const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
// 1 - First we need to import our routers!
const recipesRouter = require('./routes/recipes.js');
const usersRouter = require('./routes/users.js');

// 2 - Attach the Router as middleware
app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});