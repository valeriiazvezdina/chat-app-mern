const User = require('../models/user.model');

class UsersService {
    async findUserByUsername(username) {
        return await User.findOne({ username });
    }

    async getUsers() {
        return await User.find();
    }

    async loggedInUserId(loggedInUserId) {
        return await User.find({
            _id: { $ne: loggedInUserId }
        });
    }

    async createUser(user) {
        return await User.create(user);
    }
}

module.exports = new UsersService();