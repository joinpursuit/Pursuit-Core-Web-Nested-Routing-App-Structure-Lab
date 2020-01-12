const express = require("express")
const cors = require("cors")
const app = express();
const port = 3007;
app.use(cors());
const namesRouter = require("./food/names.js")
const ingredientsRouter = require("./food/ingredients.js")
const directionsRouter = require("./food/directions.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use("/names", namesRouter);
app.use("/ingredients", ingredientsRouter);
app.use("/directions", directionsRouter);



app.listen(port, () =>{
    console.log("listening")
})

