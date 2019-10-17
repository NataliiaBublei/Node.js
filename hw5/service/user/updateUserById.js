const dataBase = require('../../dataBase').getInstance();

module.exports = async (updateData, userId) => {
    const UserModel = dataBase.getModel('User');

    await UserModel.update(updateData, {
        where: userId
    })
};