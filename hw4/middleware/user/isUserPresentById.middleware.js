const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {user_id} = req.params;
        const UserModel = dataBase.getModel('User');

        const isUserPresent = await UserModel.findByPk(user_id);

        if (!isUserPresent) {
            throw new Error(`User with ID ${user_id} is not present`)
        }

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};
