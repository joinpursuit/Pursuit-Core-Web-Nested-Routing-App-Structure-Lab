const express = require('express')
const router = express.Router()


class Users {
  constructor() {
    this.users = { data: [] }
  }

  add(name, mail, activDate) {
    for (let user of this.users.data) {
      if (name === user.username) {
        return "username already taken"
      }
    }
    if (!name || !mail || !activDate) {
      return "err: incomplete body"
    }
    let obj = {
      username: name,
      email: mail,
      activationDate: activDate
    }
    this.users.data.push(obj)
    return obj
  }

  update(id, name, mail, activDate) {
    for (let user of this.users.data) {
      if (name === user.username) {
        return "username already taken"
      }
    }
    if (!name || !mail || !activDate) {
      return "err: incomplete body"
    }
    let users = this.users.data
    let user
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].username) {
        user = users[i]
      }
    }
    user.username = name
    user.email = mail
    user.activationDate = activDate
    return user
  }

  remove(id) {
    let users = this.users.data
    let obj
    for (let i = 0; i < users.length; i++) {
      if (id === users[i].username) {
        obj = users[i]
        users.splice(i, 1)
      }
    }
    return obj
  }

  getAll() {
    return this.users.data
  }

  getRange(start, end) {
    let users = this.users.data
    let response = []
    let string = ""
    for (let i = 0; i < users.length; i++) {

      for (let j = users[i].activationDate.length - 4; j < users[i].activationDate.length; j++) {
        string += users[i].activationDate[j]
      }

      let date = parseInt(string)
      if (date >= start && date <= end) {
        response.push(users[i])
        string = ""
      }
      else {
        string = ""
      }

    }
    return response
  }

}


const userApi = new Users()

router.post('/', (req, res) => {
  res.json(userApi.add(req.body.username, req.body.email, req.body.activationDate))
})

router.put('/:username', (req, res) => {
  res.json(userApi.update(req.params.username, req.body.username, req.body.email, req.body.activationDate))
})

router.delete('/:username', (req, res) => {
  res.json(userApi.remove(req.params.username))
})

router.get('/', (req, res) => {
  res.json(userApi.getAll())
})

router.get('/range', (req, res) => {
  res.json(userApi.getRange(req.query.start, req.query.end))
})


module.exports = router