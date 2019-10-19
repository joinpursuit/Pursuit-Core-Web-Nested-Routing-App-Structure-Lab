const express = require("express");
const recipesRouter = require("./routes/recipes.js")
const usersRouter = require("./routes/users.js")
const app = express();

const bodyParser = require("body-parser")

const port = 5000;

const handleCors = (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    next()
}

app.use(handleCors)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use("/recipes", recipesRouter);

app.use("/users", usersRouter);



app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})