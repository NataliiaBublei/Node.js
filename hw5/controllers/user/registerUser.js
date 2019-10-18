const {userService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        await userService.createUser(userToCreate);

        res.json(userToCreate);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
