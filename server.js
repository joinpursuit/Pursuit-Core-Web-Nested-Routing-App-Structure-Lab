const express = require("express");
const app = express();
const port = 3000

const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({
    extended: false
}));


const recipesRouter = require("./routes/recipes.js");

const usersRouter = require("./routes/users.js");

app.use("/recipes", recipesRouter);

app.use("/users", usersRouter);

const listening = () => {
    console.log(`Listening on port ${port}`)
}

app.listen(port, listening)