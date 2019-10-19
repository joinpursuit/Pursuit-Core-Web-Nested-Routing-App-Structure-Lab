class User {
    constructor (username, email) {
        let activationStamp = new Date();
        this.username = username,
        this.email = email,
        this.activationDate = `${activationStamp.getFullYear()}-${activationStamp.getMonth()+1}-${activationStamp.getDate()}`
    }
}

class Users {
    constructor () {
        this.users = {}
    }

    addUser(username, email) {
        if (!username 
            || !email) {
                return -1; // missing input
        }
        if (this.users[username]) {
            return -2; // existing user
        }
        if (username.match(/[^A-Za-z0-9_-]/g)){
            return -3; // invalid username form
        }
        if (email.match(/[^A-Za-z0-9@._-]/g) 
            || !email.includes('@')
            || !email.includes('.')) {
                return -4; //invalid email
        }
        const newUser = new User(username, email);
        this.users[username] = newUser;
        return this.users[username];
    }

    updateUser(username, key, value) {
        if (this.users[username]) {
            if (key === 'username') {
                if (value.match(/[^A-Za-z0-9_-]/g)){
                    return -3; // invalid new username form
                }
                if (this.users[value]) {
                    return -2; // username taken
                }
                let temp = this.users[username]
                delete this.users[username];
                this.users[value] = temp;
                this.users[value][key] = value;
                return this.users[value];
            } 
            if (key === 'email') {
                if (value.match(/[^A-Za-z0-9@._-]/g) 
                    || !value.includes('@')
                    || !value.includes('.')) {
                    return -4; // invalid new email form
                }
                this.users[username][key] = value;
                return this.users[username];
            }
        }

        return -1; // Username doesn't exist
    }

    

    deleteUser(username) {
        if (this.users[username]) {
            let deletedUser = this.users[username]
            delete this.users[username];
            return deletedUser;
        }
        return -1;
    }

    getAllUsers() {
        let arr = [];
        for (let user in this.users) {
            arr.push(this.users[user])
        }
        return arr;
    }

    getUsersByActivationDate(start, end) {
    console.log("server", start, end)

        if (!start || !end) {
            return -1; // Missing element of the filter;
        }

        console.log(start.length, end.length)
        if (start.length !== 10 || end.length !== 10) {
            return -2; // wrong filter input
        }
        start = new Date(start).getTime();
        end = new Date(end).getTime();
        if (end < start) {
            let temp = start;
            start = end;
            end = temp;
        }

        let arr = [];
        console.log(start, end)
        
        if (end === start) {
            for (let user in this.users) {
                let actDate = new Date(this.users[user].activationDate).getTime()
                console.log(actDate)
                if (actDate === start) {
                    arr.push(this.users[user])
                }
            }
        } else {
            for (let user in this.users) {
                let actDate = new Date(this.users[user].activationDate).getTime()
                console.log(actDate)
                if (actDate >= start && actDate <= end) {
                    arr.push(this.users[user])
                }
            }
        }
        
        return arr;
    }
}


module.exports = Users;