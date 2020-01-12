const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const recipiesRouter = require("./Recipes/recipes.js")

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/recipes", recipiesRouter);





app.listen(port, () =>{console.log("Listening to port")})