const router = require('express').Router();

const {userMiddleware} = require('../../middlewares');
const {auth} = require('../../controllers');

router.post('/', userMiddleware.checkUserExistMiddleware, auth.userAuth);

module.exports = router;