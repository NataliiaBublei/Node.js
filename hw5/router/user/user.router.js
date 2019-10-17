const router = require('express').Router();

const {userMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', user.registerUser);
router.get('/', user.getAllUsers);
router.get('/:user_id', userMiddleware.isUserPresentByIdMiddleware, user.getUserById);
router.patch('/:user_id', userMiddleware.isUserPresentByIdMiddleware, user.updateUserById);

router.get('/:user_id/houses', user.getUserWithHouseById);

module.exports = router;