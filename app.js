const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
const port = 3030
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
const recipeRouter = require("./recipes/recipes.js")
const userRouter = require("./users/users.js")

app.use("/recipes", recipeRouter)
app.use("/users", userRouter)




app.listen(port, ()=>
   console.log(`Server is listening at port ${port}`) 
)