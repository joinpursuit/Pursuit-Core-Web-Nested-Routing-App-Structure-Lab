const express = require('express');
const app = express();
const port = 1337;
let bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const recipesRouter = require('./routes/recipes.js');
// const userRouter = require('./routes/user.js')

app.use("/recipes", recipesRouter)
// app.use("/users", userRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

