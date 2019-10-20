const Recipe = require("./recipes.js");
const User = require("./user.js")

class Restaurant {
    constructor() {
      this.recipes = {},
      this.users = {}
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
        let recipeArr = []
        for(let i in this.recipes) {
            if (this.recipes[i].ingredients.includes(targetIngredient)) {
                recipeArr.push(this.recipes[i]);
            }
        }
        return recipeArr
    }

    addUser(name, email) {
        let newUser = new User(name, email);
        this.users[name] = newUser;
    }

    updateUser(targetUser, name, email) {
        console.log("hi")
        for(let i in this.users) {
            console.log(i, targetUser)
            if(i === targetUser) {
                console.log(i, targetUser)
                if (email) {
                    console.log(email)
                    this.users[targetUser].email = email
                }
                if(name) {
                    this.users[name] = this.users[targetUser]
                    this.users[name].name = name
                    delete this.users[targetUser]
                    return this.users[name]
                }       
            }   
        }
        console.log(this.users[targetUser])
        return this.users[targetUser]
    }

    deleteUser(targetUser) {
        for( let i in this.users) {
            if(i === targetUser) {
                delete this.users[i.toString()]
            }
        }
    }

    getAllUsers() {
        return this.users;
    }

    getUserByTime(targetYear) {
        let userArr = []
        for(let i in this.users) {
            if (this.users[i].activationDate.startsWith(targetYear)) {
                userArr.push(this.users[i]);
            }
        }
        return userArr
    }
}

let myRestaurant = new Restaurant();

module.exports = myRestaurant;