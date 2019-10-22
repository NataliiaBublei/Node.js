module.exports = (req, res, next) => {
    try {
        const photos = req.photos;

        if (photos.length > 1) {
            throw new Error('You can upload just one photo')
        }

        next()
    } catch (e) {
        res.json(e.message)
    }
};