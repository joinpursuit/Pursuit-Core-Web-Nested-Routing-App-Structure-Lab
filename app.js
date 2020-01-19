const express = require("express")
const cors = require("cors")
const port = 4000
const usersRouter = require("./Routes/recipe/recipe.js")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/recipe", usersRouter)
app.use("/users", usersRouter)





app.listen(port, ()=>{
    console.log("listening to port", port)
})