const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const recipesRoutes = require("./Routes/recipesRouter.js")
const port = 3000;


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/recipes", recipesRouter())

app.get("/", (req, res) => {
    res.json("Welcome to the Food Network")
})

app.use("/recipes", recipesRoutes)


app.listen(port, () => {
    console.log(`Server is on ${port}`)
})