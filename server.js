const express = require('express')
const bodyParser = require('body-parser')
const port = 8080
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const usersRouter = require('./routes/users')
const recipesRouter = require('./routes/recipes')
app.use('/users', usersRouter)
app.use('/recipes', recipesRouter)


app.get('/users')

app.get('/recipes')

app.listen(port, () => { })