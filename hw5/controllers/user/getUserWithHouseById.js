const {userService, houseService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.params;

        const houses = await houseService.getAllHousesByUserId(user_id);
        const user = await userService.getUserById(user_id);

        user.houses = houses;

        res.json(user);
    } catch (e) {
        res.json(e.message)
    }
};