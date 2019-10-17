const dataBase = require('../../dataBase').getInstance();

module.exports = async userId=> {
    const UserModel = dataBase.getModel('User');

    await UserModel.destroy({
        where: userId
    })
};