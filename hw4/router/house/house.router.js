const router = require('express').Router();

const {houseMiddleware} = require('../../middleware');
const {house} = require('../../controllers');

router.post('/', house.addHouse);
router.get('/', house.findAllHouses);
router.get('/:house_id', houseMiddleware.isHousePresentByIdMiddleware, house.getHouseById);
router.patch('/:house_id', houseMiddleware.isHousePresentByIdMiddleware, house.updateHouseById);

module.exports = router;