const dataBase = require('../../dataBase').getInstance();

module.exports = async (photo_path) => {
    const HousePhotoModel = dataBase.getModel('HousePhoto');

    await HousePhotoModel.create(photo_path);
};