const router = require('express').Router();

const {userMiddleware, authMiddleware, filesMiddleware} = require('../../middlewares');
const {user} = require('../../controllers');

router.post(
    '/',
    filesMiddleware.checkPhotoMiddleware,
    filesMiddleware.checkCountPhotoMiddleware,
    user.registerUser
);
router.get('/', user.getAllUsers);
router.get('/:user_id', userMiddleware.isUserPresentByIdMiddleware, user.getUserById);
router.get('/:user_id/houses', userMiddleware.isUserPresentByIdMiddleware, user.getUserWithHouseById);

router.use(
    "/:user_id",
    authMiddleware.checkAccessTokenMiddleware,
    userMiddleware.checkUserIdFromTokenMiddleware,
    userMiddleware.isUserPresentByIdMiddleware
);
router.patch('/:user_id', user.updateUserById);
router.delete('/:user_id', user.deleteUserById);

module.exports = router;