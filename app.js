const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
const namesRouter = require("./food/names.js")
const ingredientsRouter = require("./food/names.js")
const directionsRouter = require("./food/names.js")

app.use("/names", namesRouter)
app.use("/ingredients", ingredientsRouter)
app.use("/directions", directionsRouter)

app.listen(port, () =>{
    console.log("listening")
})

