const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

const recipesRouter = require('./routes/recipes.js');
app.use('/recipes', recipesRouter);

const usersRouter = require('./routes/users.js');
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});