let express = require('express');
let usersRouter = express.Router();

let usersClass = require('../JSObjects/UsersFile');
let allUsers = new usersClass()

//MIDDLEWARE:
const log = (request, response, next) => {
    console.log('URL', request.url);
    console.log('\nQuery', request.query);
    if (request.body) {
        console.log('\nBody', request.body);
    }
    next();
}


const checkValidUserRequestBody = (request, response, next) => {
    if (!request.body.username || !request.body.email) {
        response.json({
            status: 'failed',
            message: 'Missing username and/or email'
        })
    } else {
        next();
    }
}


const addAUser = (request, response) => {
    let username = request.body.username;
    let email = request.body.email;
    
    let addedUser = allUsers.addUser(username, email);
    if (addedUser === -1) {
        response.json({
            status: 'failed',
            message: 'Please Double Check Your Inputs, username and email are required'
        })
    } else if (addedUser === -2) {
        response.json({
            status: 'failed',
            message: 'User Exists Already'
        })
    } else if (addedUser === -3) {
        response.json({
            status: 'failed',
            message: 'Invalid username form'
        })
    } else if (addedUser === -4) {
        response.json({
            status: 'failed',
            message: 'Invalid email form'
        })
    } else {
        response.json({
            status: 'success',
            message: addedUser
        })
    }
}


const checkValidPartialUserRequestBody = (request, response, next) => {
    if (!request.body.username && !request.body.email) {
        response.json({
            status: 'failed',
            message: 'Missing username or email to update'
        })
    } else {
        next();
    }
}

const updateTheUser = (request, response) => {
    let userDoNotExist = false;
    let updatedUser;
    let userName = request.params.username;

    let email = request.body.email;
    if (email) {
        updatedUser = allUsers.updateUser(userName, 'email', email);
        if (updatedUser === -1) {
            userDoNotExist = true;
        } else if (updatedUser === -4) {
            response.json({
                status: 'failed',
                message: "Invalid email form"
            })
            return;
        }
    }

    let newUsername = request.body.username;
    if (newUsername) {
        updatedUser = allUsers.updateUser(userName, 'username', newUsername);
        if (updatedUser === -1) {
            userDoNotExist = true;
        } else if (updatedUser === -3) {
            response.json({
                status: 'failed',
                message: "Invalid username form"
            })
            return;
        } else if (updatedUser === -2) {
            response.json({
                status: 'failed',
                message: "Username already taken"
            })
            return;
        }
    }
    if (userDoNotExist) {
        response.json({
            status: 'failed',
            message: "Username Doesn't Exist"
        })
    } else {
        if (updatedUser) {
            response.json({
                status: 'success',
                message: updatedUser
            })
        } else {
            response.json({
                status: 'failed',
                message: "Nothing to change"
            })
        }
    }
}


const deleteUser = (request, response) => {
    let userToDelete = request.params.username;
    let deletedUser = allUsers.deleteUser(userToDelete);

    if (deletedUser === -1) {
        response.json({
            status: 'failed',
            message: "User Doesn't Exist"
        })
    } else {
        response.json({
            status: 'success',
            message: deletedUser
        })
    }
}

const returnAllUsers = (request, response) => {
    let arrayOfUsers;
    let startYear = request.query.startY;
    let startMonth = request.query.startM;
    let startDay = request.query.startD;
    let endYear = request.query.endY;
    let endMonth = request.query.endM;
    let endDay = request.query.endD;
    let start;
    let end;

    if (startYear) {
        start = '' + startYear;
        if (startM) {
            start += '-' + startM;
            if (startD) {
                start += '-' + startD;
            }
        }
    }
    if (endYear) {
        end = '' + endYear;
        if (endM) {
            end += '-' + endM;
            if (endD) {
                end += '-' + endD;
            }
        }
    }

    if (start && end) {
        arrayOfUsers = allUsers.getUsersByIngredient(start, end)
    } else if (start) {
        arrayOfUsers = allUsers.getUsersByIngredient(start)
    } else {
        arrayOfUsers = allUsers.getAllUsers();

    }

    if (arrayOfUsers.length) {
        response.json({
            status: 'success',
            message: arrayOfUsers
        })
    } else if (arrayOfUsers === -1){
        response.json({
            status: 'failed',
            message: 'Please double check your filter'
        })
    } else {
        response.json({
            status: 'no matches',
            message: 'No match for your filter (Or users file is empty)'
        })
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Add a user
usersRouter.post('/', log, checkValidUserRequestBody, addAUser)

// Update a user
usersRouter.patch('/:username', log, checkValidPartialUserRequestBody, updateTheUser)

// Delete a user
usersRouter.delete('/:username', log, deleteUser)

// Get all users AND // Get all users matching a given ingredient
usersRouter.get('/all', log, returnAllUsers)



module.exports = usersRouter;