const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const HouseModel = dataBase.getModel('House');

        const findAllHouses = await HouseModel.findAll();

        if (!findAllHouses.length) {
            throw new Error('There is no house');
        }

        res.json(findAllHouses);
    } catch (e) {
        res.status(400).json(e.message)
    }
};