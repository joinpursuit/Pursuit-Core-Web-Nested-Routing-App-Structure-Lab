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

    getAllRecipes() {
        return this.recipes;
    }

    deleteRecipe(targetRecipe) {
        for( let i in this.recipes) {
            if(i === targetRecipe) {
                delete this.recipes[i.toString()]
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

    getRecipeByIngredient(targetIngredient) {
        let recipeObj = []
        for(let i in this.recipes) {
            if (this.recipes[i].ingredients.includes(targetIngredient)) {
                recipeObj.push(this.recipes[i]);
            }
        }
        return recipeObj
    }
}

module.exports = Restaurant;