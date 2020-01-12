const express = require("express")
const cors = require("cors")
const port = 3000;

const app = express()
app.use(cors())


// const recipes = [
//     {
//     name: "Salmon Poke Bowl",
//     ingredients: [
//         "Dry white rice",
//         "Wild Caught Salmon",
//         "Soy Sauce or Tamari",
//         "Toasted Sesame Oil",
//         "Sriracha",
//         "Red Cabbage",
//         "Cucumber",
//         "Carrots",
//         "Avacado",
//         "Green Onions",
//         "Rice Vinegar",
//         "Sesame Seeds",
//         "Organic Coconut Oil"
//     ],
//     directions: "Make the rice or quinoa using our How to Make Quinoa method (see the video below), Instant Pot Quinoa, Instant Pot Brown Rice or Instant Pot White Rice. With the salmon lying flat on a cutting board, run a sharp knife between the skin and the flesh to remove the skin. Cut the salmon into 1 inch squares and add it to a medium bowl. Note that thinner parts of the salmon may shred a bit (this is okay). Add 1/4 cup soy sauce, 1 teaspoon toasted sesame oil, and the sriracha to the salmon and stir gently."}

// ]





app.listen(port, () => {
    console.log("Listening to port ", +port)
})