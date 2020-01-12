const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3003;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const usersRouter = require("./routes/users/users.js");
const recipesRouter = require("./routes/recipes/recipes.js");
app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);

app.get("/", (req, res) => {
    res.json("Get response on url /");
})


app.listen(port, () => "Listening on port: ", port);