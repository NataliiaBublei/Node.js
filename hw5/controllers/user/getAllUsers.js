const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();

        res.json(allUsers);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
