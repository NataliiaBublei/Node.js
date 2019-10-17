const router = require('express').Router();

const {houseMiddleware} = require('../../middleware');
const {house} = require('../../controllers');

router.post('/', house.createHouse);
router.get('/', house.getAllHouses);
router.get('/:house_id', houseMiddleware.isHousePresentByIdMiddleware, house.getHouseById);
router.patch('/:house_id', houseMiddleware.isHousePresentByIdMiddleware, house.updateHouseById);

module.exports = router;