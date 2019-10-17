const express = require('express')
const router = express.Router();
const users=
[{
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970"
}]


router.post("/", (request, response) => {
    let newUser = request.body
    
    users.push(newUser)
    response.json(newUser)
})

    
    router.get('/:addUser', (request, response)=>{
        response.send('add user'+request.originalUrl)
    })
    
    router.patch('/:updateUser', (request, response)=>{
        response.send('update recipes'+request.originalUrl)
    })
    router.delete('/:deleteUser', (request, response)=>{
        response.send('delete recipes'+request.originalUrl)
    })
    router.get('/:newUser', (request,response,next)=>{
        let currDate = new Date()
        console.log(request.method, request.url,request.body, currDate.toLocaleString())
        next();
        })
    
//     let currDate = new Date()
// console.log(request.method, request.url,request.body, currDate.toLocaleString())
// next();
// })
    module.exports = router;