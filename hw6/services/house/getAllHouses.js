const dataBase = require('../../dataBase').getInstance();

module.exports = async () => {
    const HouseModel = dataBase.getModel('House');

    const allHouses =  await HouseModel.findAll();

    return allHouses;
};