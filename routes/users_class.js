class Users {
    constructor () {
      this.allUsers = [
        {
            username: "user1234",
            email: "user1234@gmail.com",
            activationDate: "January 1, 1970"
        },
        {
            username: "secondUser",
            email: "seconduser@gmail.com",
            activationDate: "February 13, 1970"
        }
      ]
    }

    displayAllUsers () {
       return this.allUsers 
    }

    displaySpecificUsers (min, max) {
       let newArr = []
       this.allUsers.forEach(el => {
           if (el.activationDate > min && el.activationDate < max) {
             newArr.push(el)
           }
       })
       return newArr
    }

    addNewUser (username, email, activationDate) {
        let user = {
            username, 
            email, 
            activationDate
        }
        this.allUsers.push(user)
        return this.allUsers
    }

    updateUser (username, email, activationDate) {
        this.allUsers.forEach( (el, i) => {
          let user = {
              username,
              email,
              activationDate
          }
          if (el.username === username){
              this.allUsers.splice(i, 1, user)
            }
        })
        return this.allUsers 
     }

     deleteUser (username) {
        this.allUsers.forEach((el, i) => {
            if (el.username === username) {
                this.allUsers.splice(i, 1)
            }
        })
        return this.allUsers 
    }

 }

let user = new Users();

 
 module.exports = Users 