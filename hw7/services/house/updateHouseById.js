const dataBase = require('../../dataBase').getInstance();

module.exports = async (updateObject, houseId) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(updateObject, {
        where: {
            id: houseId
        }
    })
};