const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000;
const app = express()
const userRouter = require('./routes/users/users.js')
const recipeRouter = require('./routes/recipes/recipes.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use("/users",userRouter)
app.use('/recipes',recipeRouter)


app.listen(port,() => console.log('running on port: ', port))