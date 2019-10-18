const {houseService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const {house_id} = req.params;

        await houseService.deleteHouse(house_id);

        res.json(`Ok. House by id ${house_id} deleted.`);
    } catch (e) {
        res.status(400).json(e.message)
    }
};