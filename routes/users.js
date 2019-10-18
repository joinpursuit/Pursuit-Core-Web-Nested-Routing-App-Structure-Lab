const express = require('express');
const router = express.Router();


let users = [
    {
    username: 'John Doe',
    email: 'test@123.com',
    activationDate: `January 1, 1970`
    }
]


router.get('/', (req, res) => {
   
    let newUser = req.body.username;
    if (!newUser){
        res.json(users)
    }else{
    users.push(newUser);
    res.json(users);
    }
});

router.post('/', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json(users);
    
});

router.delete(`/:username`, (req, res)=> {
let removeUser = req.params.username; 
let newUser = [];

//first try
/* if(users.includes(removeUser)){
 console.log(users.indexOf(removeUser))
 res.json(removeUser)
 } */

 //second try 
/* for( let i=0; i<=users.length; i++){
    if(users[i].username !== removeUser){
        newUser.push(users[i]);
     }
     res.json(newUser)
 } */

//third try
/* console.log(users[users.username].indexOf(removeUser))
     let removeUser = req.query.username;
    if(newUser.username === removeUser){
        console.log(newUser.username)
    } */

    //fourth try
    /* let newUsers = users.filter(element => {
        return element.name !== removeUser
       });
     res.status(removeUser).body(newUser)
     console.log(`old ${users} and new ${newUsers}`)
     console.log(removeUser)
     res.send(`${removeUser} was removed and we only have ${newUsers} left`)
*/
});

router.patch('/:user_id', (req, res) => {
    res.send(`where you update a user`);
});

router.get('/:date', (req, res) => {
    res.send(`where you get users who registered during a certain time`);
});

module.exports = router;