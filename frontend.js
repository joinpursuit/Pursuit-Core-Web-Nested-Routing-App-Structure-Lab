document.addEventListener("DOMContentLoaded" , () => {
   let form = document.querySelector("#form");
   let name = document.querySelector("#name");
   let ingredients = document.querySelector("#ingredients");
   let directions = document.querySelector("#directions");
   let submit = document.querySelector("#submit");
   let select = document.querySelector("#select");
   let ul = document.querySelector("ul")

   const grabInfo = (name, ingredients, directions) => {
    axios.post(`http://localhost:3000/recipes/add`, {
           name: name,
           ingredients: ingredients,
           directions: directions
        })
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        ul.innerHTML=""
        if(select.value === "add"){
            grabInfo(name.value, ingredients.value.split(), directions.value);
        } else if(select.value === "delete"){
            axios.delete(`http://localhost:3000/recipes/delete/${name.value}`)
        } else if(select.value === "/"){
            let list = await axios.get(`http://localhost:3000/recipes/`);
            for(let i = 0; i < list.data.length; i ++){
                let li1 = document.createElement("li");
                let li2 = document.createElement("li");
                let li3 = document.createElement("li");
                li1.innerHTML = `<b> Name: </b> ${list.data[i]["name"]}`;
                li2.innerHTML = `<b> Ingredients: </b> ${list.data[i]["ingredients"]}`;
                li3.innerHTML = `<b> Directions: </b> ${list.data[i]["directions"]}`;
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
            }
        } else if(select.value === "findIngredients") {
            let list = await axios.get(`http://localhost:3000/recipes/findIngredients/${ingredients.value}`);
            for(let i = 0; i < list.data.length; i ++){
                let li1 = document.createElement("li");
                let li2 = document.createElement("li");
                let li3 = document.createElement("li");
                li1.innerHTML = `<b> Name: </b> ${list.data[i]["name"]}`;
                li2.innerHTML = `<b> Ingredients: </b> ${list.data[i]["ingredients"]}`;
                li3.innerHTML = `<b> Directions: </b> ${list.data[i]["directions"]}`;
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
            }
        }
    })
})