let button = document.querySelector("button")
let input = document.querySelector("input")
let inputData = document.querySelector("#inputData")
let mainData = document.querySelector("#mainData")


// button.addEventListener("click", () => {
//     let p = document.createElement("p")
//     p.innerHTML = ""
//     axios.get(`http://localhost:3000/cookBook/`).then(res => {
//       cookBook.forEach(el => {
//           let p2 = document.createElement("p2");
//       })
//     })
//   })
  
  document.querySelector('#btn1').addEventListener('click', () => {
    axios.get(`http://localhost:3000/recipes/3`).then(res => {
        let ul = document.createElement("ul")
        let ingredients = document.createElement("li");
        ingredients.innerText = res.data.result.ingredients;
        let name = document.createElement("li");
        name.innerText = res.data.result.name;
        let directions = document.createElement("li");
        directions.innerText = res.data.result.directions;

    mainData.appendChild(ul)
       ul.appendChild(name)
       ul.appendChild(ingredients)
       ul.appendChild(directions)

        console.log(res)
            })
        })

    document.querySelector('#btn2').addEventListener('click', () => {
        axios.get('http://localhost:3000/recipes/2').then(res => {
        let ul = document.createElement("ul")
        let ingredients = document.createElement("li");
        ingredients.innerText = res.data.result.ingredients;
        let name = document.createElement("li");
        name.innerText = res.data.result.name;
        let directions = document.createElement("li");
        directions.innerText = res.data.result.directions;

    mainData.appendChild(ul)
       ul.appendChild(name)
       ul.appendChild(ingredients)
       ul.appendChild(directions)

        console.log(res)
            })
    })

    document.querySelector('#btn3').addEventListener('click', () => {
        axios.get('http://localhost:3000/recipes/1').then(res => {
        let ul = document.createElement("ul")
        let ingredients = document.createElement("li");
        ingredients.innerText = res.data.result.ingredients;
        let name = document.createElement("li");
        name.innerText = res.data.result.name;
        let directions = document.createElement("li");
        directions.innerText = res.data.result.directions;

    mainData.appendChild(ul)
       ul.appendChild(name)
       ul.appendChild(ingredients)
       ul.appendChild(directions)

        console.log(res)
            })
    })

        // mainData.innerText = name  + ingredients + directions
        // cookBook.forEach(el => {
        //     let p2 = document.createElement("p2");
        // })
//       })
//   })



