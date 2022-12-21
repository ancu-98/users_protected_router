const { findUserByEmail } = require('../users/users.controllers');
const { comparePassword } = require('../utils/crypto');

const checkUserCredentials = async(email, password) => {
    console.log(email, password)
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if (verifyPassword){
            return user
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

module.exports = checkUserCredentials