const User = require('../models/user.model');

async function findUserById(id) {
    return await User.findById(id);
}

module.exports = findUserById;