const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))

const recipeRoute = require('./routes/recipe')
const userRoute = require('./routes/users')


app.use('/recipe', recipeRoute)
app.use('/users', userRoute)


app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});