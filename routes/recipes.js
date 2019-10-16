const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send(`where you get all recipes`);
});

router.post('/:new',(req, res) => {
    let name = req.params.new
    res.send(`where you post a new recipe and the new recipe's name is ${name}. here is the body: ${req.body}`);
});

router.delete('/:recipe_id', (req, res) => {
    res.send(`where you remove a recipe`);
});

router.patch('/:recipe_id', (req, res) =>{
    res.send(`where you update a recipe`)
})

router.get('/:ingredient', (req, res) => {
    res.send(`Where all recipes containing a specific ingredient`)
});

module.exports = router;