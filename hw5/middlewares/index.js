const userMiddleware = require('./user');
const houseMiddleware = require('./house');
const checkAccessTokenMiddleware = require('./checkAccessToken.middleware');

module.exports = {
    userMiddleware,
    houseMiddleware,
    checkAccessTokenMiddleware
};