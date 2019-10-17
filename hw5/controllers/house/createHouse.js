const {houseService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;

        await houseService.createHouse(houseToCreate);

        res.json(houseToCreate);
    } catch (e) {
        res.json(e.message);
    }
};

