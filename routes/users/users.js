const users = require('express').Router()

users.get('/', (req,res) => {
res.json('get all users')
})
users.post('/',(req,res) => {
    res.json('add new user')
})
users.delete('/:id',(req,res) => {
    res.json("deleted: " + req.params.id)
})
users.patch('/:id', (req,res) => {
    res.json("updated: "+ req.parms.id )
})

users.get('/:date', (req,res) => {
    res.json('all users with activation date:' + req.params.date)
})

module.exports = users