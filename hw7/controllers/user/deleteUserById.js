const {userService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.params;

        await userService.deleteUser(user_id);

        res.json(`Ok. User by id ${user_id} deleted.`);
    } catch (e) {
        res.json(e.message)
    }
};