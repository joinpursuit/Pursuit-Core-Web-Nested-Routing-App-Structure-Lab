class User {
    constructor (username, email, activationStamp) {
        this.username = username,
        this.email = email,
        this.activationDate = `${new Date(activationStamp).getFullYear()}-${new Date(activationStamp).getMonth()}-${new Date(activationStamp).getDate()}`
    }
}

class Users {
    constructor () {
        this.users = {}
    }

    addUser(username, email) {
        let now = Date.now();
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
        const newUser = new User(username, email, now);
        this.users[username] = newUser;
        let userObject = this.users[username];
        return userObject;
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
        if (!start) {
            return -1
        }
        start = start.toString();
        start = new Date(start);
        end = end.toString();
        end = new Date(end);
        console.log("\nStart and end", start, end, '\n')
        

        let arr = [];
        let tracker = {}

        
        return arr;
    }
}


module.exports = Users;