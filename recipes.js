class Recipe {
    constructor(name, ingredients, directions) {
      this.name = name,
      this.ingredients = ingredients.split(","),
      this.directions = directions
    }
  }
  
  module.exports = Recipe;