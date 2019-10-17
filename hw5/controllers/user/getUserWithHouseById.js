const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {user_id} = req.params;
        const UserModel = dataBase.getModel('User');
        const HouseModel = dataBase.getModel('House');

        const user = await HouseModel.findAll({
            where: {
                user_id
            },
            include: [UserModel]
        });

        res.json(user);
    } catch (e) {
        res.json(e.message);
    }
};