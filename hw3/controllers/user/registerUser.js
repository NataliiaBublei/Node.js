const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const query = `INSERT INTO user(name, email, password) VALUES(?, ?, ?)`;

        await provider.promise().query(query, [name, email, password]);

        res.render('main')
    } catch (e) {
        res.json(e.message);
    }
};