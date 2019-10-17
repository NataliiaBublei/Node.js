const {tokenazer} = require('../../helpers');

module.exports = (req, res) => {
    try {
        const user = req.user;
        const tokens = tokenazer(user);

        res.json(tokens)
    } catch (e) {
        res.json(e.message)
    }
};