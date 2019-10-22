const fs = require('fs-extra');
const {resolve} = require('path');

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

        const asyncUploader = photos.map(async photo => {
            const photoExtension = photo.name.split('.').pop();
            const photoName = `${Date.now()}.${photoExtension}`;

            await photo.mv(resolve(appRoot, 'static', photoDir, photoName));
            await filesService.uploadPhotosForHouse({house_id: newHouse.id, path: `${photoDir}/${photoName}`});
        });

        await Promise.all(asyncUploader);

        res.json(houseToCreate);
    } catch (e) {
        res.json(e.message)
    }
};

