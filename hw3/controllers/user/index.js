const registerUser = require('./registerUser');
const userAuth = require('./userAuth');
const getUserById = require('./getUserById');
const findAllUsers = require('./findAllUsers');
const updateUserById = require('./updateUserById');

module.exports = {
    registerUser,
    userAuth,
    getUserById,
    findAllUsers,
    updateUserById
};