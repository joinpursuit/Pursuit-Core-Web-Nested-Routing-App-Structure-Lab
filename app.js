const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const usersRouter = require('./routes/users/users.js')
const recipesRouter = require('./routes/recipes/recipes.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/users", usersRouter)
app.use("/recipes", recipesRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})