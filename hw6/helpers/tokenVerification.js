const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../constant');

module.exports = token => {
    let user;

    jwt.verify(token, JWT_SECRET.JWT_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Token is not valid')
        }
        user = decoded;
    });

    return user;
};