const createHouse = require('./createHouse');
const getAllHouses = require('./getAllHouses');
const getHouseById = require('./getHouseById');
const updateHouseById = require('./updateHouseById');
const getAllHousesByUserId = require('./getAllHousesByUserId');
const deleteHouse = require('./deleteHouse');

module.exports = {
    createHouse,
    getAllHouses,
    getHouseById,
    updateHouseById,
    getAllHousesByUserId,
    deleteHouse
};