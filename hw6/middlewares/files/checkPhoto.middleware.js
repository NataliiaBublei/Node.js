const {FILES_CHECK} = require('../../constant');

module.exports = (req, res, next) => {
    try {
        req.photos = [];

        if (!req.files) {
            next()
        }

        const photos = Object.values(req.files);

        for (let i = 0; i < photos.length; i++) {
            const {mimetype, size} = photos[i];

            if (!FILES_CHECK.PHOTO_MIMETYPES.includes(mimetype)) {
                throw new Error('Photo must have correct mime-type')
            }

            if (FILES_CHECK.MAX_PHOTO_SIZE < size) {
                throw new Error(`Max file size is ${FILES_CHECK.MAX_PHOTO_SIZE / (1024 * 1024)}mb`)
            }

            req.photos.push(photos[i]);
        }

        next()
    } catch (e) {
        res.json(e.message)
    }
};