const router = require('express').Router();

const {userMiddleware, checkAccessTokenMiddleware} = require('../../middlewares');
const {user} = require('../../controllers');

router.post('/', user.registerUser);
router.get('/', user.getAllUsers);
router.get('/:user_id', userMiddleware.isUserPresentByIdMiddleware, user.getUserById);
router.patch(
    '/:user_id',
    userMiddleware.isUserPresentByIdMiddleware,
    checkAccessTokenMiddleware,
    userMiddleware.checkUserIdFromTokenMiddleware,
    user.updateUserById
);
router.delete(
    '/:user_id',
    userMiddleware.isUserPresentByIdMiddleware,
    checkAccessTokenMiddleware,
    userMiddleware.checkUserIdFromTokenMiddleware,
    user.deleteUser
);

router.get('/:user_id/houses', user.getUserWithHouseById);

module.exports = router;