const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}))


const recipeRouter = require('./routes/recipe.js')
app.use("/recipe", recipeRouter)




app.listen(port, () => {
    console.log("running")
})