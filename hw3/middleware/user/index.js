const  checkUserValidityMiddleware = require('./checkUserValidity.middleware');
const  checkUserExistMiddleware = require('./checkUserExist.middleware');
const  isUserPresentMiddleware = require('./isUserPresent.middleware');
const  findAllUsersMiddleware = require('./findAllUsers.middleware');
const  checkEditUserValidityMiddleware = require('./checkEditUserValidity.middleware');
const isEditUserPresent = require('./isEditUserPresent.middleware');

module.exports = {
    checkUserValidityMiddleware,
    checkUserExistMiddleware,
    isUserPresentMiddleware,
    findAllUsersMiddleware,
    checkEditUserValidityMiddleware,
    isEditUserPresent
};