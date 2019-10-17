const {userService} = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const {user_id} = req.params;

        const userById = await userService.getUserById(user_id);

        if (!userById) {
            throw new Error(`User with ID ${user_id} is not present`)
        }

        req.user = userById;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};
