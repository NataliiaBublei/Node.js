const router = require('express').Router();

const {authMiddleware} = require('../../middleware');
const {auth} = require('../../controllers');

router.post('/', authMiddleware.checkUserExistMiddleware, auth.userAuth);

module.exports = router;