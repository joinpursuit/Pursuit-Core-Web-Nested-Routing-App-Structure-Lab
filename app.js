const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const recipesRouter = require("/routes/recipes/recp.js")
const ingredientsRouter = require("/routes/recipes/ingredients/ingr.js")

app.use(cors());
app.use("/recipes", recipesRouter)
app.use("/recipes/ingredients", ingredientsRouter)

app.listen(port);