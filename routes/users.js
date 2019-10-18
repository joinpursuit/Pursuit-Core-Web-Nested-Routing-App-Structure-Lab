const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(cors())
router.use(bodyParser())

let usersArray = [{
  username: 'sergiocs',
  email: 'sergiocs@gmail.com',
  activationDate: 'June 21, 2019'
}]

const checkBody = (req,res,next) => {
  const body = req.body
  if (body.username === undefined || body.email === undefined || body.activationDate === undefined) {
    res.send('error')
  } else {
    next()
  }
}

const checkUser = (req,res,next) => {
  const query = req.query
  let namesArray = []
  usersArray.forEach(a => {
    namesArray.push(a.username)
  })
  if (query.user === undefined || namesArray.includes(query.user) === false){
    res.send('error')
  } else {
    next()
  }
}

const getUsersByDate = (req,res,next) => {
    const query = req.query
    let searchResult = []
    if (query.start > query.end) {
      res.send('error')
    } else {
      usersArray.forEach(a => {
      let date = a.activationDate
      let year = date[date.length - 4]
               + date[date.length - 3]
               + date[date.length - 2]
               + date[date.length - 1]
      if (year >= query.start && year <= query.end) {
        searchResult.push(a)
      }
      })
    }
    res.send(searchResult)
}

const createUser = (req,res,next) => {
  const body = req.body
  let namesArray = []
  usersArray.forEach(a => {
    namesArray.push(a.username)
  })
  if (namesArray.includes(body.username)) {
    res.send('error')
  } else {
    usersArray.push(body)
    res.send(`${body.username} added`)
  }
}

const updateUser = (req,res,next) => {
  const body = req.body
  const query = req.query
  for (i = 0; i < usersArray.length; i++) {
    if (usersArray[i].username === query.user) {
      usersArray.splice(i,1,body)
      res.send(`${query.user} updated`)
    }
  }
}

const delUser = (req,res,next) => {
  const query = req.query
  for (i = 0; i < usersArray.length; i++) {
    if (usersArray[i].username === query.user) {
      usersArray.splice(i)
      res.send(`${query.user} deleted`)
    }
  }
}

const getAll = (req,res,next) => {
  res.send(usersArray)
}


router.post('/',checkBody, createUser)
router.put('/', checkUser, checkBody, updateUser)
router.delete('/', checkUser, delUser)
router.get('/all', getAll)
router.get('/', getUsersByDate)

module.exports = router
