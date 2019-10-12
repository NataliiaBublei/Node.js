const checkHouseValidityMiddleware = require('./checkHouseValidity.middleware');
const  isHousePresentByIdMiddleware = require('./isHousePresentById.middleware');
const  findAllHousesMiddleware = require('./findAllHouses.middleware');
const  checkUpdateHouseValidityMiddleware = require('./checkUpdateHouseValidity.middleware');

module.exports = {
    checkHouseValidityMiddleware,
    isHousePresentByIdMiddleware,
    findAllHousesMiddleware,
    checkUpdateHouseValidityMiddleware,
};