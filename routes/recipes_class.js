class Recipes {
   constructor() {
       this.allRecipes = [
        {
            name: "Grilled Cheese",
            ingredients: [
                "Bread",
                "Cheese",
                "Butter"
            ],
            directions: "Preheat" 
          },
          {
            name: "Mashed Potatoes",
            ingredients: [
                "Potatoes",
                "Salt",
                "Butter"
            ],
            directions: "Preheat"
          },
          {
            name: "Mac and Cheese",
            ingredients: [
                "Elbow Pasta",
                "Cheese",
                "Milk"
            ],
            directions: "Preheat"
          }

       ];
   }

   displayRecipes () {
     return this.allRecipes
   }

   addRecipe (name, ingredients, directions) {
     let recipe = {
         name,
         ingredients,
         directions
     }
     this.allRecipes.push(recipe)
     return this.allRecipes 
   }

   displaySpecificRecipes (ingredient) {
    let newArr = []
       this.allRecipes.forEach((el, i) => {
           let ingredients = el.ingredients  
           console.log(ingredient)
           if(ingredients.includes(ingredient)){
               newArr.push(el)
           }
       })
       console.log(newArr)
       return newArr
   }

   updateRecipe (name, ingredients, directions) {
      this.allRecipes.forEach( (el, i) => {
        let recipe = {
            name,
            ingredients,
            directions
        }
        if (el.name === name){
            this.allRecipes.splice(i, 1, recipe)
          }
      })
      return this.allRecipes 
   }

   deleteRecipe (name) {
       this.allRecipes.forEach((el, i) => {
           if (el.name === name) {
               this.allRecipes.splice(i, 1)
           }
       })
       return this.allRecipes 
   }
}


module.exports = Recipes 