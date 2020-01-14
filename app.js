const express = require("express")
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser");
const usersRouter = require("./Routes/Users/users.js")
const recipesRouter = require("./Routes/Recipes/recipes.js")

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);



app.listen(port, () =>{
    console.log("listening")
})

