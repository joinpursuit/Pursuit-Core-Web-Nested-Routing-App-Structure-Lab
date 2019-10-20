const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const Restaurant = require("./restaurant.js")


app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

const recipesRouter = require("./routes/recipes.js");
app.use("/recipes", recipesRouter);

const usersRouter = require("./routes/users.js");
app.use("/users", usersRouter)


app.listen(port, () => {
    console.log(`Server is running at port ${3000}`)
})

