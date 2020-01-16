const express = require("express")
const cors = require("cors")
const app =express();
const bodyParser=require("body-parser")
const port =3000;
const recipesRouter=require("./recipes/recipes.js")
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/recipes",recipesRouter)



app.get("/",(req,res)=>{
    res.json("making request on / url")
})






app.listen(port, ()=>{
    console.log("running on port "+port)
})

