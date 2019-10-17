const registerUser = require('./registerUser');
const userAuth = require('./userAuth');
const getUserById = require('./getUserById');
const getAllUsers = require('./getAllUsers');
const updateUserById = require('./updateUserById');
const getUserWithHouseById = require('./getUserWithHouseById');

module.exports = {
    registerUser,
    userAuth,
    getUserById,
    getAllUsers,
    updateUserById,
    getUserWithHouseById
};