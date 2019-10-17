const recipesRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/recipes', recipesRouter); 

app.use('/users', usersRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Live at http://localhost:${port}`);
})