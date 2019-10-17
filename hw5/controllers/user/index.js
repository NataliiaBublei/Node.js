const registerUser = require('./registerUser');
const getUserById = require('./getUserById');
const getAllUsers = require('./getAllUsers');
const updateUserById = require('./updateUserById');
const getUserWithHouseById = require('./getUserWithHouseById');
const deleteUserById = require('./deleteUserById');

module.exports = {
    registerUser,
    getUserById,
    getAllUsers,
    updateUserById,
    getUserWithHouseById,
    deleteUserById
};