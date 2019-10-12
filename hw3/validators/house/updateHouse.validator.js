module.exports = houseObject => {

    const {square, city, street, price} = houseObject;

    if (!+square || !city || !street || !+price) {
        throw new Error('House is not valid')
    }
};