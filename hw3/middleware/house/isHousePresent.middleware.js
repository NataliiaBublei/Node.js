const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;
        const query = `SELECT * FROM house WHERE id = ${house_id}`;
        const [isHousePresent] = await provider.promise().query(query);

        if (!isHousePresent.length) {
            throw new Error(`House with ID ${house_id} is not present`)
        }

        req.house = isHousePresent;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};
