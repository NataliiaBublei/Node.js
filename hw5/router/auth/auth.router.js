const router = require('express').Router();

const {userMiddleware} = require('../../middleware');
const {auth} = require('../../controllers');

router.post('/', userMiddleware.checkUserExistMiddleware, auth.userAuth);

module.exports = router;