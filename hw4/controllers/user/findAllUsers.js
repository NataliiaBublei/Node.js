const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');

        const findAllUsers = await UserModel.findAll();

        res.json(findAllUsers);
    } catch (e) {
        res.status(400).json(e.message)
    }
};