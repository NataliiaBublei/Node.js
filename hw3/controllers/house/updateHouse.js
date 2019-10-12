const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {square, city, street, price} = req.body;
        const {house_id} = req.params;
        const query = `UPDATE house SET square = ?, city = ?, street = ?, price = ? WHERE id = ?`;

        await provider.promise().query(query, [square, city, street, price, house_id]);

        res.redirect(`/houses/${house_id}`);
    } catch (e) {
        res.json(e.message);
    }
};