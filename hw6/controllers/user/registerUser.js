const {userService, emailService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        await userService.createUser(userToCreate);

        await emailService.sendEmail(userToCreate);

        res.json(userToCreate);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
