const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const UserToCreate = req.body;
        const UserModel = dataBase.getModel('User');

        await UserModel.create(UserToCreate);

        res.json(UserToCreate);
    } catch (e) {
        res.json(e.message);
    }
};