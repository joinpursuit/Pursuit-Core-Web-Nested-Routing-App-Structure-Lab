const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;

const recipeRouter = require('./routes/recipes.js')
const userRouter = require('./routes/users.js')

app.use(cors());

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/recipes', recipeRouter)

app.use("/users", userRouter)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})