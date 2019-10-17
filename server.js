const express= require('express')
const port = 4040;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
   extended: false
}))


//RECIPES
const recipeRouter= require('./expressrouter/recipes.js')

//USERS

const userRouter = require('./expressrouter/users.js')

app.use('/recipes', recipeRouter)
app.use('/users', userRouter)
app.listen(port,()=>{
    console.log(`http://localhost${port}`)
})
