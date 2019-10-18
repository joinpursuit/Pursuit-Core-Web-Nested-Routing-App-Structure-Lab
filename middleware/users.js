class User {
    constructor() {
        this.users = [
        // {
        //     username: "user1234",
        //     email: "user1234@gmail.com",
        //     activationDate: "January 1, 1970"
        // }
        ];
    }

    addUser = (username, email, activationDate) => {
        let message = `The username '${username}' already exists. Therefore it was not added.`;
        this.users.forEach(ele => {
            console.log('User: ', ele.username, 'Adding: ', username);
            console.log(ele.username === username)
            if (ele.username == username) {
                console.log('Duplicate found!')
                return {message};
            }
        })
        this.users.push({username, email, activationDate});
        message = `The username '${username}' was successfully added.`;
        return {message, users: this.users};
    }

    getAllUsers = () => {
        return {users: this.users};
    }

    updateUser = (username, email, activationDate) => {
        let message = `Successfully added ${username}`;
        this.users.forEach((ele, i) => {
            if (ele.username == username) {
                console.log('Found');
                const updatedUser = {username, email, activationDate};
                this.users.splice(i, 1, updatedUser);
                return {message, users: this.users};
            }
        })
        message = `The username '${username}' does not exist. Therefore it was not updated.`
        return {message};
    }

    getAllActivation = (date) => {
        let returnArr = [];
        this.users.forEach(ele => {
            if (ele.activationDate.includes(date)) {
                returnArr.push(ele);
            }
        })
        return returnArr;
    }

    deleteUser = username => {
        this.users.forEach((ele, i) => {
            if (ele.username === username) {
                this.users.splice(i, 1);
                return this.users;
            }
        })
        const message = `The username ${username} does not exist. Therefore nothing was deleted.`;
        return {message};
    }
}

module.exports = User;