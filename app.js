const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const recipesRouter = require("./routes/recipes/recipes.js")

app.use(cors());
app.use("/recipes", recipesRouter)

app.listen(port);