const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;

        const houseById = await houseService.getHouseById(house_id);

        if (!houseById) {
            throw new Error(`House with ID ${house_id} is not present`)
        }

        req.house = houseById;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};
