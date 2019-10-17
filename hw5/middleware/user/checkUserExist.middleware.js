const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const user = req.body;

        const userExist = await userService.getUserAuth(user);

        if (!userExist) {
            throw new Error(`${user.email} doesn't exist or incorrectly entered data. Please check`)
        }

        req.user = userExist;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};