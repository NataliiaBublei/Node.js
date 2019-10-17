const dataBase = require('../../dataBase').getInstance();

module.exports = async (updateObject, whereObject) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(updateObject, {
        where: whereObject
    })
};