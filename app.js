const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const usersRouter = require("./routes/users/users.js")
const recipesRouter = require("./routes/recipes/recipes.js")

const port = 5000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use (bodyParser.json())

app.use("/users", usersRouter)
app.use("/recipes", recipesRouter)

app.listen(port, () => {
    `Port is listening on ${port}`
})