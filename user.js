class User {
    constructor(username, email) {
        this.username = username,
        this.email = email,
        this.activationDate = new Date();
    }
}

module.exports = User;