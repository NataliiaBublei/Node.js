module.exports = (req, res) => {
    const users = req.users;

    res.json(users);
};
