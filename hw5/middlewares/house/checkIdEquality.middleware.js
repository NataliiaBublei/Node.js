const {checkIdEquality} = require('../../validators');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.user;
        const {user_id} = req.house;

        checkIdEquality(user_id, id);

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};