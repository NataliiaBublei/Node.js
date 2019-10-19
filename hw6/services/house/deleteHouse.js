const dataBase = require('../../dataBase').getInstance();

module.exports = async houseId=> {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.destroy({
        where: {
            id: houseId
        }
    })
};