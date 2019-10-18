const {checkIdEquality} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const {id} = req.user;
        const {user_id} = req.params;

        checkIdEquality(user_id, id);

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};