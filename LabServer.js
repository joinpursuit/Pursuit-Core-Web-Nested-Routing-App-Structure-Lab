const express = require('express');
const app = express();
const port = 3100;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

const cors = (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
}
app.use(cors);

let recipesRouter = require('./Routes/RecipesRoute');
app.use('/recipes', recipesRouter);

let usersRouter = require('./Routes/UsersRoute');
app.use('/users', usersRouter);

app.get('*', (request, response) => {
    response.json({
        status: 'Failed',
        message: 'Unexpected request path'
    })
})

app.listen(port, ()=> {
    console.log('Server Using Port:', port)
})