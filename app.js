const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const recipiesRouter = require("./Recipes/recipes.js")
app.use("/recipes", recipiesRouter);





app.listen(port, () =>{console.log("Listening to port")})