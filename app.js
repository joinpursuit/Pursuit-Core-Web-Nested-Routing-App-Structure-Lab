const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 2000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

const recipeRouter = require('./routes/recipes.js')
const userRouter = require('./routes/users.js')

app.use('/recipes', recipeRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})