const {houseService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const allHouses = await houseService.getAllHouses();

        res.json(allHouses);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
