const express = require("express")
const recipes = express.Router()


let recipesArr = [{
    id: "1",
    name: "Grilled Cheese",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
},
{
    id: "2",
    name: "PBJ",
    ingredients: [
        "Bread",
        "Jelly",
        "Peanut Butter"
    ],
    directions: "Take bread spread jelly and pb and close bread"
},
{
    id: "3",
    name: "rice and beans",
    ingredients: [
        "Rice",
        "Beans"
    ],
    directions: "mix rice and beans"
}
];


recipes.get("/", (req, res) => {
    // console.log(ing);
    res.json({
        status: 200,
        message: "got all recipes",
        recipes: recipesArr
    });
})

recipes.post("/", (req, res) => {
   
    recipesArr.push(req.body);
    res.json({
        status: 200,
        message: "added a new recipe",
        newRecipe: req.body
    });
})

recipes.patch("/",(req, res)=>{
    for(i = 0; i < recipesArr.length; i++){
        if(recipesArr[i].id === req.body.id){
            if(req.body.params === "ingredients"){
                recipesArr[i].ingredients.push(req.body.newItem);
            }else{
                recipesArr[i][req.body.params] = req.body.newItem;
            }
        }
    }
    console.log(req.body)
    res.json(recipesArr)
})


recipes.delete("/", (req, res)=>{

})


module.exports = recipes