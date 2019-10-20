let express = require('express');
let router = express.Router();

let bunchOfRecipes = [];

router.post('/', (req, res) => {
	if(!(req.body)){
		res.status(400).send('Please include a request body');
	}
	let requiredKeys = ['name', 'ingredients', 'directions'];
	for(let i = 0; i < requiredKeys.length; i++){
		if(!(requiredKeys[i] in req.body)){
			res.status(400).send('Please include all the keys for a recipe');
		}
	}
	for(let i = 0; i < bunchOfRecipes.length; i++){
		if(bunchOfRecipes[i].name === req.body.name){
			res.status(400).send('No Duplicate Recipes pls');
		}
	}
	let newRecipe = {'name': req.body.name, 'ingredients': req.body.ingredients, 
		'directions': req.body.directions};
	bunchOfRecipes.push(newRecipe);
	res.status(201).send('New Recipe Created ');
})

router.put('/', (req, res ) => {
	let validKeys = ['directions', 'ingredients'];

	for(let i = 0; i< bunchOfRecipes.length; i++){
		if(req.body.name === bunchOfRecipes[i].name){
			for(let j = 0; j < validKeys.length; j++){
				if(validKeys[j] in req.body){
					console.log(validKeys[j]);
					bunchOfRecipes[i][validKeys[j]] = req.body[validKeys[j]];
				}
			}
		}
	}
	res.status(204).send('Recipe Updated');
});

router.get('/', (req, res) => {
	res.json(bunchOfRecipes);
});

router.get('/:ingredient', (req, res) => {
	let matchingRecipes = bunchOfRecipes.filter((elem) => {
		for(let i = 0; i < elem.ingredients.length; i++){
			if(elem.ingredients[i] === req.params.ingredient){
				return true;
			}
		}
		return false;
	});

	res.json(matchingRecipes);
});

router.delete('/', (req, res) => {
	if(!(req.body.name)){
		res.status(400).send('Please include a name to delete');
	}
	let found = false;
	bunchOfRecipes = bunchOfRecipes.filter((elem) => {
		if(elem.name === req.body.name){
			found = true;
			return false;
		}
		return true;
	})
	if(found){
		res.json('Deletion Successful');
	}
	else{
		res.json('No such recipe exists, try again!!!!');
	}
})





















module.exports = router;