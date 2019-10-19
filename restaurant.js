const Recipe = require("./recipes.js");

class Restaurant {
    constructor() {
      this.recipes = {}
    }


    addRecipe(name, ingredients, directions) {
        let newRecipe = new Recipe(name, ingredients, directions);
        this.recipes[name] = newRecipe;
    }

    getRecipe(name) {
        for( let i in this.recipes) {
            if(i === name) {
                return this.recipes[i]
            }
        }
    }

    deleteRecipe(name) {
        for( let i in this.recipes) {
            if(i === name) {
                return this.recipes[i]
            }
        }
    }

    updateRecipe(targetRecipe, name, ingredients, directions) {

    for(let i in this.recipes) {
        if(i === targetRecipe) {
            if (directions) {
                this.recipes[targetRecipe].directions = directions
            }
            if(ingredients) {
                this.recipes[targetRecipe].ingredients = ingredients.split(",") 
            }
            if(name) {
                this.recipes[name] = this.recipes[targetRecipe]
                this.recipes[name].name = name
                delete this.recipes[targetRecipe]
                return this.recipes[name]
            }       
    }

    }
    return this.recipes[targetRecipe]
}
}

module.exports = Restaurant;