const fs = require('fs-extra');
const {resolve} = require('path');
const uuid = require('uuid').v1();

const {houseService, filesService} = require('../../services');

module.exports = async (req, res) => {
    try {
        const {id} = req.user;
        const houseToCreate = req.body;
        const photos = req.photos;
        const appRoot = global.appRoot;

        Object.assign(houseToCreate, {user_id: id});

        const newHouse = await houseService.createHouse(houseToCreate);

        const photoDir = `house/${newHouse.id}/photo`;

        await fs.mkdirSync(resolve(appRoot, 'static', photoDir), {recursive: true});

        for (let i = 0; i < photos.length; i++) {
            const photoExtension = photos[i].name.split('.').pop();

            const photoName = `${uuid}.${photoExtension}`;

            await photos[i].mv(resolve(appRoot, 'static', photoDir, photoName));

            const path = `${photoDir}/${photoName}`;

            await filesService.uploadPhotosForHouse({house_id: newHouse.id, path: path});
        }

        res.json(houseToCreate);
    } catch (e) {
        res.json(e.message)
    }
};

