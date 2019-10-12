const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const query = `SELECT * FROM house`;

        const [findAllHouses] = await provider.promise().query(query);

        if (!findAllHouses.length) {
            throw new Error('There is no user')
        }

        req.houses = findAllHouses;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};