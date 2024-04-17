const User = require('../models/user.model');

async function findUserByUsername(username) {
    return await User.findOne({ username: username });
}

module.exports = findUserByUsername;