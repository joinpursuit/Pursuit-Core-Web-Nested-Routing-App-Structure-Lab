const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());


const recipesRouter = require('./routes/recipes.js')
app.use('/recipes',recipesRouter)

const usersRouter = require('./routes/user.js')
app.use('/users',usersRouter)

app.listen(port,() =>{
    console.log(`Listening on port ${port}`)
})