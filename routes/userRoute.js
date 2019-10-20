let express = require('express');
let router = express.Router();

let bunchOfUsers = [];


router.post('/', (req, res) => {
	if(!(req.body)){
		res.status(400).send('Please include a request body');
	}
	let requiredKeys = ['username', 'email', 'activationDate'];
	for(let i = 0; i < requiredKeys.length; i++){
		if(!(requiredKeys[i] in req.body)){
			res.status(400).send('Please include all fields to make a valid user');
		}
	}
	for(let i = 0; i < bunchOfUsers.length; i++){
		if(bunchOfUsers[i].name === req.body.name){
			res.status(400).send('Duplicate users are not allowed');
		}
	}
	let newUser = {'username': req.body.username, 'email': req.body.email,
		'activationDate': req.body.activationDate};
	bunchOfUsers.push(newUser);
	res.status(201).send('New User Created ');
})

router.put('/', (req, res ) => {
	let validKeys = ['email', 'activationDate'];

	for(let i = 0; i< bunchOfUsers.length; i++){
		if(req.body.username === bunchOfUsers[i].username){
			for(let j = 0; j < validKeys.length; j++){
				if(validKeys[j] in req.body){
					bunchOfUsers[i][validKeys[j]] = req.body[validKeys[j]];
				}
			}
		}
	}
	res.status(204).send('User updated');
});

router.get('/', (req, res) => {
	res.json(bunchOfUsers);
});

router.get('/:activationYear', (req, res) => {
	let matchingUsers = bunchOfUsers.filter((elem) => {
		let year = elem.activationDate.slice(-5);
		console.log(year);
		if(parseInt(year) !== parseInt(req.params.activationYear)){
			return false;
		}
		return true;
	});

	res.json(matchingUsers);
})

router.delete('/', (req, res) => {
	if(!(req.body.username)){
		res.status(400).send('Please include a name to delete');
	}
	let found = false;
	bunchOfUsers = bunchOfUsers.filter((elem) => {
		if(elem.username === req.body.username){
			found = true;
			return false;
		}
		return true;
	})
	if(found){
		res.json('Deletion Successful');
	}
	else{
		res.json('No such user exists, try again!!!!');
	}
})


















module.exports = router;