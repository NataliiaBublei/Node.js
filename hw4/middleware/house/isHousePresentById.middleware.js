const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;
        const HouseModel = dataBase.getModel('House');

        const isHousePresent = await HouseModel.findByPk(house_id);

        if (!isHousePresent) {
            throw new Error(`House with ID ${house_id} is not present`)
        }

        req.house = isHousePresent;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};
