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
        let keyName = (name.replace(/ /g, '')).toLowerCase();
        this.recipes[keyName] = newRecipe;
        return this.recipes[keyName];
    }

    updateRecipe(name, key, value) {
        let keyName = (name.replace(/ /g, '')).toLowerCase();
        let keyValue = value;

        if (this.recipes[keyName]) {
            if (key === 'name') {
                keyValue = value.replace(/ /g, '').toLowerCase();
                let temp = this.recipes[keyName]
                delete this.recipes[keyName];
                this.recipes[keyValue] = temp;
                this.recipes[keyValue][key] = value;
                return this.recipes[keyValue];
            } 
            this.recipes[keyName][key] = value;
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

    getRecipesByIngredient(ingArr) {
        if (!ingArr) {
            return -1;
        }
        let arr = [];
        let tracker = {}
        for (let name in this.recipes) {
            if (!tracker[name]) {
                for (let ing of ingArr) {
                    if (this.recipes[name].ingredients.includes(ing) 
                        && !tracker[name]) {
                            tracker[name] = true;
                            arr.push(this.recipes[name])
                    }
                }
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