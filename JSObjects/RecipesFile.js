class Recipe {
    constructor (name, ingredients, directions) {
        this.name = name,
        this.ingredients = ingredients,
        this.directions = directions
    }
}

class Recipes {
    constructor () {
        this.recipes = {}
    }

    addRecipe(name, ingredients, directions) {
        if (!name 
            || !ingredients 
            || !Array.isArray(ingredients) 
            || !ingredients.length 
            || !directions) {
                return -1;
        }
        if (this.recipes.name) {
            return -2;
        }
        const newRecipe = new Recipe(name, ingredients, directions);
        let keyName = name.replace(/ /g, '');
        this.recipes[keyName] = newRecipe;
        return this.recipes[keyName];
    }

    updateRecipe(name, key, value) {
        let keyName = name.replace(/ /g, '');
        let keyValue = value;
        if (key !== 'ingredients') {
            keyValue = value.replace(/ /g, '');
        }

        if (this.recipes[keyName]) {
            console.log("\nINITIAL ALL RECIPES", this.recipes)
            if (key === 'name') {
                this.recipes[keyValue] = this.recipes[keyName];
                this.recipes[keyValue][key] = value;
                delete this.recipes[keyName];
                console.log("\nFINAL ALL RECIPES", this.recipes)
                return this.recipes[keyValue];
            } 
            this.recipes[keyName] = this.recipes[keyName];
            this.recipes[keyName][key] = value;
            console.log("\nFINAL ALL RECIPES", this.recipes)
            return this.recipes[keyName];
        }
        return -1;
    }

    deleteRecipe(name) {
        let keyName = name.replace(/ /g, '');
        if (this.recipes[keyName]) {
            let deletedRecipe = this.recipes[keyName]
            delete this.recipes[keyName];
            return deletedRecipe;
        }
        return -1;
    }

    getAllRecipes() {
        let arr = [];
        for (let name in this.recipes) {
            arr.push(this.recipes[name])
        }
        return arr;
    }

    getRecipesByIngredient(ing) {
        let arr = [];
        for (let name in this.recipes) {
            if (this.recipes[name].ingredients.includes(ing)) {
                arr.push(this.recipes[name])
            }
        }
        return arr;
    }
}

// let rc = new Recipes();
// let r1 = rc.addRecipe('mayo salad', [1,2,3], 'bla')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~\n', rc, '\n', r1, '~~~~~~~~~~~~~~~~~~~~~~~\n');
// let r1m = rc.updateRecipe('mayo salad', 'name', 'mayonnaise salad')
// console.log('~~~~~~~~~~~~~~~~~~~~~~~\n', rc, '\n', r1m, '~~~~~~~~~~~~~~~~~~~~~~~\n');

module.exports = Recipes;