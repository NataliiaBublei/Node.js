const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    const {square, city, street, price} = req.body;
    const query = `INSERT INTO house(square, city, street, price) VALUES(?, ?, ?, ?)`;

    await provider.promise().query(query, [square, city, street, price]);
    res.render('main')
};


