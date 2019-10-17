const registerUser = require('./registerUser');
const getUserById = require('./getUserById');
const getAllUsers = require('./getAllUsers');
const updateUserById = require('./updateUserById');
const getUserWithHouseById = require('./getUserWithHouseById');
const deleteUser = require('./deleteUser');

module.exports = {
    registerUser,
    getUserById,
    getAllUsers,
    updateUserById,
    getUserWithHouseById,
    deleteUser
};