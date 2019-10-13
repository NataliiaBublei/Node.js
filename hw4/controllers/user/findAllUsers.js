const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');

        const findAllUsers = await UserModel.findAll();

        if (!findAllUsers.length) {
            throw new Error('There is no user');
        }

        res.json(findAllUsers);
    } catch (e) {
        res.status(400).json(e.message)
    }
};