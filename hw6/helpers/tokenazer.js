const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../constant');

module.exports = data => {
        const accessToken = jwt.sign(data, JWT_SECRET.JWT_SECRET, {expiresIn: '15m'});
        const refreshToken = jwt.sign({}, JWT_SECRET.JWT_REFRESH, {expiresIn: '24h'});

        return {
            accessToken,
            refreshToken
        }
};