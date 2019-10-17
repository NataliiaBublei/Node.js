const {authService} = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const userExist = await authService.getUserAuth({email, password});

        if (!userExist) {
            throw new Error(`${user.email} doesn't exist or incorrectly entered data. Please check`)
        }

        req.user = userExist;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};