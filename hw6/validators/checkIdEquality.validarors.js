module.exports = (userId, userIdFromToken) => {
    if (+userId !== userIdFromToken) {
        throw new Error('This is not your!');
    }
};