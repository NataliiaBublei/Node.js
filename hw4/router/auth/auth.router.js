const router = require('express').Router();

const {userMiddleware} = require('../../middleware');
const {user} = require('../../controllers');

router.post('/', userMiddleware.checkUserExistMiddleware, user.userAuth);

module.exports = router;