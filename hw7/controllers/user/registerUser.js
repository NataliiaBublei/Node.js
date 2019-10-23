const fs = require('fs-extra');
const {resolve} = require('path');
const uuid = require('uuid').v1();

const {userService, emailService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;
        const [photo] = req.photos;
        const appRoot = global.appRoot;

        const {id} = await userService.createUser(userToCreate);

        const photoDir = `user/${id}/photo`;
        const photoExtension = photo.name.split('.').pop();
        const photoName = `${uuid}.${photoExtension}`;

        await fs.mkdirSync(resolve(appRoot, 'static', photoDir), {recursive: true});

        await photo.mv(resolve(appRoot, 'static', photoDir, photoName));

        await userService.updateUserById({photo_path: `${photoDir}/${photoName}`}, id);

        await emailService.sendEmail(userToCreate);

        res.json(userToCreate);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
