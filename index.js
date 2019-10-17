const express = require('express');
const app = express();
const port = 3000;


const recipeRouter = require('./routes/recipe.js')
app.use("/recipe", recipeRouter)




app.listen(port, () => {
    console.log("running")
})