const dataBase = require('../../dataBase').getInstance();

module.exports = async objectToSearch => {
    const UserModel = dataBase.getModel('User');

    const user = await UserModel.findOne({
        where: objectToSearch,
        attributes: ['id', 'email']
    });

    return user && user.dataValues;
};