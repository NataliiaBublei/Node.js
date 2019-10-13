const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const UserModel = dataBase.getModel('User');

        const userExist = await UserModel.findOne({
            where: {
                email,
                password
            },
            attributes: ['id', 'name', 'email']
        });

        if (!userExist) {
            throw new Error(`${email} doesn't exist or incorrectly entered data. Please check`)
        }

        req.user = userExist.dataValues;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};