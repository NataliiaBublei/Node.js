const userMiddleware = require('./user');
const houseMiddleware = require('./house');
const authMiddleware = require('./auth');

module.exports = {
    userMiddleware,
    houseMiddleware,
    authMiddleware
};