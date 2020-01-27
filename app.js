const express = require('express')
const cors = require('cors')

const app = express()
const bodyParser = require('body-parser')
const port = 3000

const userRoutes = require("./routes/users.js")
const recipeRoutes = require("./routes/recipes.js")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/users", userRoutes)
app.use("/recipes", recipeRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
}) 