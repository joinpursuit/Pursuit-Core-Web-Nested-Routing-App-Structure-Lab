const express = require("express");
const recipes=express.Router();

let data=[
    {
        name: "Grilled Cheese",
        ingredients: [
            "Bread",
            "Cheese",
            "Butter"
        ],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    },
    {
        name:"PJ",
        ingredients:[
            "Bread",
            "Peanut Butter",
            "Grape Jelly"
        ],
        directions:"DIY"
    },
]

recipes.patch("/",(req,res)=>{
    for(let i=0;i<data.length;i++){
   if(data[i].name===req.body.name){
       if(req.body.parameter === 'ingredients'){
           data[i].ingredients.push(req.body.newElement)
       }else{
           data[i][req.body.parameter] = req.body.newElement
       }
   }
   }
   res.json(data)
})


recipes.delete("/",(req,res)=>{
    console.log(req.body.name)
    for(let i=0;i<data.length;i++){
        if(data[i].name===req.body.name){
            data.splice(i,i)
        }
    }
    // for(let key in data){
    //     if(data[key].name===req.body.name){
    //         data.splice(Number(key),Number(key))
    //     }
    // }
    res.json(data)

})


// {
//     name:"grilld chicken",
// ingredients:["chcken","grilld"],
// directions:"grild raw chicken"
// }

recipes.post("/",(req,res)=>{
    let newRecipe={
        name:req.body.name,
        ingredients:req.body.ingredients.split(","),
        directions:req.body.directions
    }
    data.push(newRecipe)
    res.json(data)
    // console.log(req.body.name)
})


recipes.get("/",(req,res)=>{
    res.json(data)
})

recipes.get("/:ingredients",(req,res)=>{
    res.json(
        data.filter(el=> el.ingredients.includes(req.params.ingredients ))
    )
    // let recipes=[]
    // data.forEach(el=>{
    //     if(el.ingredients.includes(req.params.ingredients)){
    //         recipes.push(el)}
    // })
    // res.json(recipes)
}
)





module.exports=recipes