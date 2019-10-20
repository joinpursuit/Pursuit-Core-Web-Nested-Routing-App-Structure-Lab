const express = require('express');
const app = express();
const port = 3030;
const cors = require('cors');
const recipeRouter = require('./routes/recipeRoute');
const userRouter = require('./routes/userRoute');
const bodyParser = require('body-parser');

let bunchOfRecipes = [];
let bunchOfUsers =[];



app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);






app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});