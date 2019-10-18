class Recipe {
    constructor() {
        this.recipes = [];
    }

    addRecipe = (name, ingredients, directions) => {
        let message = `This recipe already exists. Therefore it was not added.`;
        this.recipes.forEach(ele => {
            if (ele.name.toLowerCase() === name.toLowerCase()) {
                return {message}
            }
        })
        this.recipes.push({name, ingredients, directions});
        message = `${name} was succesfully added.`
        return {message, recipes: this.recipes};
    }

    deleteRecipe = (name) => {
        this.recipes.forEach((ele, i) => {
            if (ele.name === name) {
                this.recipes.splice(i, 1);
                return this.recipes;
            }
        })
        const message = `The recipe ${name} does not exist. Therefore nothing was deleted.`;
        return {message};
    }

    getAllRecipes = () => {
        return {recipes: this.recipes};
    }

    updateRecipe = (name, ingredients, directions) => {
        const updatedRecipe = {name, ingredients, directions};
        this.recipes.forEach((ele, i) => {
            if (ele.name === name) {
                this.recipes.splice(i, 1, updatedRecipe);
                return this.recipes;
            }
        })
        const message = `The recipe ${name} does not exist.`;
        return {message};
    }

    getByIngredient = (ing) => {
        let returnArr = [];
        let message = `All the recipes that has the ingredient: ${ing}.`;
        this.recipes.forEach((ele) => {
            if (ele.ingredients.includes(ing)) {
                returnArr.push(ele);
                return {message, returnArr};
            }
        })
        message = `No recipes with ingredient '${ing}' was found.`;
        return {message, recipes: returnArr};
    }
}

module.exports = Recipe;