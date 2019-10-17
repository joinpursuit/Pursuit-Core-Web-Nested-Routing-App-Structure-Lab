class User {
    constructor() {
        this.users = [
            {
                    username: "user1234",
                    email: "user1234@gmail.com",
                    activationDate: "January 1, 1970"
            }
        ]
    }

    addUser = (username, email, activationDate) => {
        this.users.push({username, email, activationDate});
        return this.users;
    }

    getAllUsers = () => {
        return this.users;
    }

    updateUser = (username, email, activationDate) => {
        this.users.forEach((ele, i) => {
            if (ele.username === username) {
                let updatedUser = {username, email, activationDate};
                this.users.splice(i, 1, updatedUser);
            }
        })
        return this.users;
    }

    getAllActivation = (date) => {
        let returnArr = [];
        this.users.forEach(ele => {
            if (ele.activationDate.includes(date))  {
                returnArr.push(ele);
            }
        })
        return returnArr;
    }

    deleteUser = username => {
        this.users.forEach((ele, i) => {
            if (ele.username === username)  {
                this.users.splice(i, 1);
                return this.users;
            }
        })
    }
}

module.exports = User;