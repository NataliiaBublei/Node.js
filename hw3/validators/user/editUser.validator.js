module.exports = userObject => {

    const {id, email, name, password} = userObject;

    if (!id || !email || !name || !password) {
        throw new Error('User is not valid')
    }
};