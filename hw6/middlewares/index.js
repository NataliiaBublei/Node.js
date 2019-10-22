const userMiddleware = require('./user');
const houseMiddleware = require('./house');
const authMiddleware = require('./auth');
const filesMiddleware = require('./files');

module.exports = {
    userMiddleware,
    houseMiddleware,
    authMiddleware,
    filesMiddleware
};