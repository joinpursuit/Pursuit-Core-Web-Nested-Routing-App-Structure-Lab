class Recipe {
    constructor() {
        this.recipes = [];
    }

    addRecipe = (name, ingredients, directions) => {
        this.recipes.push({name, ingredients, directions});
        return this.recipes;
    }

    deleteRecipe = (name) => {
        this.recipes.forEach((ele, i) => {
            if (ele.name === name) {
                this.recipes.splice(i, 1);
                console.log(ele, i)
            }
        })
        return this.recipes;
    }

    getAllRecipes = () => {
        return this.recipes;
    }

    updateRecipe = (name, ingredients, directions) => {
        const updatedRecipe = {name, ingredients, directions};
        this.recipes.forEach((ele, i) => {
            if (ele.name === name) {
                this.recipes.splice(i, 1, updatedRecipe);
                console.log(ele, i)
            }
        })
        return this.recipes;
    }

    getByIngredient = (ing) => {
        let returnArr = [];
        this.recipes.forEach((ele) => {
            if (ele.ingredients.includes(ing)) {
                returnArr.push(ele);
            }
        })
        return returnArr;
    }
}

module.exports = Recipe;