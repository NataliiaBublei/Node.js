const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const HouseModel = dataBase.getModel('House');

        const findAllHouses = await HouseModel.findAll();

        res.json(findAllHouses);
    } catch (e) {
        res.status(400).json(e.message)
    }
};