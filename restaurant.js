const Recipe = require("./recipes.js");

class Restaurant {
    constructor() {
      this.recipes = {}
    }


    addRecipe(name, ingredients, directions) {
        let newRecipe = new Recipe(name, ingredients, directions);
        this.recipes[name] = newRecipe;
    }
}

module.exports = Restaurant;