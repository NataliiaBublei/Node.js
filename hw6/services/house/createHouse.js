const dataBase = require('../../dataBase').getInstance();

module.exports = async houseToCreate => {
    const HouseModel = dataBase.getModel('House');

    const house = await HouseModel.create(houseToCreate);

    return house && house.dataValues;
};