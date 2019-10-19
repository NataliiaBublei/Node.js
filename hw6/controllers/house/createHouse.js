const {houseService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const {id} = req.user;

        Object.assign(houseToCreate, {user_id: id});
        await houseService.createHouse(houseToCreate);

        res.json(houseToCreate);
    } catch (e) {
        res.json(e.message)
    }
};

