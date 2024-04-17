const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const UsersService = require('../services/users.service');
const generateTokenSetCookies = require('../utils/generateTokenSetCookies');

function selectProfilePicture(gender, username) {
    const maleProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const otherProfilePicture = `https://avatar.iran.liara.run/public`; // TODO: think about it

    switch(gender) {
        case 'male': 
            return maleProfilePicture;
        case 'female':
            return femaleProfilePicture;
        case 'other':
            return otherProfilePicture;
    };
}

class UsersController {
    async getUsers(req, res) {
        try {
            const users = await UsersService.getUsers();
            res.status(200).json(users);
        } catch(error) {
            console.log('Error in getting users', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    async getUsersExceptLoggedIn(req, res) {
        try {
            const loggedInUserId = req.userId;
            const users = await UsersService.loggedInUsersIds(loggedInUserId);
            res.status(200).json(users);
        } catch(error) {
            console.log('Error in getting users for sidebar', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    async signup(req, res) {
        try {
            const result = validationResult(req);

            if (result.isEmpty()) {
                const { fullName, username, gender, password, confirmPassword } = req.body;
            
                if (password !== confirmPassword) {
                    res.status(400).json({
                        error: "Passwords do not match"
                    });
                }

                const saltRounds = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                const newUser = await UsersService.createUser({
                    fullName,
                    username,
                    password: hashedPassword,
                    gender,
                    profilePicture: selectProfilePicture(gender, username)
                });

                generateTokenSetCookies(newUser._id, res);
                res.status(201).json(newUser);
            } else {
                res.status(400).send({
                    error: result.array()
                });
            }
        } catch(error) {
            console.log('Error in signup', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    async login(req, res) {
        try {
            const result = validationResult(req);

            if (result.isEmpty()) {
                const { username, password } = req.body;
                const user = await UsersService.findUserByUsername(username);
    
                const validate = await bcrypt.compare(password, user.password);
                
                if (!validate) {
                    res.status(403).send('Wrong password');
                } else {
                    generateTokenSetCookies(user._id, res);
    
                    res.status(200).json(user);
                }
            } else {
                res.status(400).send({
                    error: result.array()
                });
            }
        } catch(error) {
            console.log('Error in login', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    }

    async logout(req, res) {
        try {
            res.cookie('jwt', '', { maxAge: 0 });

            res.status(200).json({ message: 'Logged out successfully' });
        } catch (error) {
            console.log('Error in logout', error.message);
            res.status(500).json({ 
                error: 'Internal server error'
            });
        }
    }
}

module.exports = new UsersController();