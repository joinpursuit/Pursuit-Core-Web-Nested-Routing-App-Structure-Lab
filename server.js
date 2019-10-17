const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

const recipesRouter = require("./routes/recipes.js");
app.use("/recipes", recipesRouter);


app.listen(port, () => {
    console.log(`Server is running at port ${3000}`)
})