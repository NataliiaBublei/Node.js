const {tokenVerification} = require('../helpers');

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            throw new Error('No token');
        }

        tokenVerification(token);

        next();
    } catch (e) {
        res.status(403).json(e.message);
    }
};