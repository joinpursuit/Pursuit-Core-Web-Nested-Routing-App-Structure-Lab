document.addEventListener("DOMContentLoaded" , () => {
   let form = document.querySelector("#form");
   let name = document.querySelector("#name");
   let ingredients = document.querySelector("#ingredients");
   let directions = document.querySelector("#directions");
   let submit = document.querySelector("#submit");

   const grabInfo = (name, ingredients, directions) => {
    axios.post(`http://localhost:3000/recipes/add`, {
           name: name,
           ingredients: ingredients,
           directions: directions
        })
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        grabInfo(name.value, ingredients.value.split(), directions.value);
    })
})