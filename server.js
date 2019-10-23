const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const port = 3000;

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false 
}))

app.use(bodyParser.json())

const recipesRouter = require('./routes/recipes')
app.use('/recipes', recipesRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})