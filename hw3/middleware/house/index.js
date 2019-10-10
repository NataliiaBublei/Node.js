const checkHouseValidityMiddleware = require('./checkHouseValidity.middleware');
const  isHousePresentMiddleware = require('./isHousePresent.middleware');
const  findAllHousesMiddleware = require('./findAllHouses.middleware');
const  checkEditHouseValidityMiddleware = require('./checkEditHouseValidity.middleware');
const  isEditHousePresent= require('./isEditHousePresent.middleware');

module.exports = {
    checkHouseValidityMiddleware,
    isHousePresentMiddleware,
    findAllHousesMiddleware,
    checkEditHouseValidityMiddleware,
    isEditHousePresent
};