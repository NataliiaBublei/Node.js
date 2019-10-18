const router = require('express').Router();

const {houseMiddleware, checkAccessTokenMiddleware} = require('../../middlewares');
const {house} = require('../../controllers');

router.post('/', checkAccessTokenMiddleware, house.createHouse);
router.get('/', house.getAllHouses);
router.get('/:house_id', houseMiddleware.isHousePresentByIdMiddleware, house.getHouseById);

router.use(
    '/:house_id',
    checkAccessTokenMiddleware,
    houseMiddleware.isHousePresentByIdMiddleware,
    houseMiddleware.checkIdEqualityMiddleware
);
router.patch('/:house_id', house.updateHouseById);
router.delete('/:house_id', house.deleteHouseById);

module.exports = router;