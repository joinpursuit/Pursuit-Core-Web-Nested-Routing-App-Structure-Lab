const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 2020

const recipesRouter = require('./routes/recipes')
const usersRouter = require('./routes/users')

app.use('/recipes', recipesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`listening ${port}`)
})
