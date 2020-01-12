
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const recipeRouter = require("./routes/recipe/recipe.js")
const usersRouter = require("./routes/users/users.js")

app.use("/recipe", recipeRouter)
app.use("/users", usersRouter)
app.use(cors());

// let recipeObj = [{
//     name: "Grilled Cheese",
//     ingredients: [
//         "Bread",
//         "Cheese",
//         "Butter"
//     ],
//     directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
// }]


// app.get("/recipe", (req, res) => {
//     res.json("all recipes")
// })

// app.get("/recipe/:id", (req, res) => {
//     res.json("Specific recipe")
// })

// app.delete("/recipe/:id", (req, res) => {
//     res.json("Delete Recipe")
// })

// app.post("/recipe/", (req, res) => {
//     res.json("Created new recipe")
// })

// const hasIngredient = (req, res, next) => {
//     if(recipeObj["ingredients"].includes(req.params)){
//         res.json()
//     }
// }


app.listen(port, () => "listening")