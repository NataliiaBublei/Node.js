const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const HouseToCreate = req.body;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.create(HouseToCreate);

        res.json(HouseToCreate);
    } catch (e) {
        res.json(e.message);
    }
};


