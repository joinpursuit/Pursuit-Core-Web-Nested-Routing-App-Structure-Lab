const express = require('express')
const cors = require('cors')
const bodyParser = require('bodyParser')
const port = 3000;
const app = express()
const userRouter = require('./routes/users/users.js')
const recipeRouter = require('./routes/recipes/recipes.js')
app.use(cors())

app.use("/users",userRouter)
app.use('/recipes',recipeRouter)


app.listen(port,() => console.log('running on port: ', port))