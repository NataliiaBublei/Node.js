const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    const {id, square, city, street, price} = req.body;
    const query = `UPDATE house SET square = ?, city = ?, street = ?, price = ? WHERE id = ${id}`;

    await provider.promise().query(query, [square, city, street, price]);

    res.redirect('/')
};