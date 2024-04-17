const express = require('express');
const { body } = require('express-validator');
const UsersController = require('../controllers/users.controller');
const findUserByUsername = require('../utils/findUserByUsername');
const authenticateToken = require('../utils/authenticate');
const router = express.Router();

const validationBodySignup = [
    body('fullName')
        .notEmpty()
        .withMessage('Full name must be provided')
        .bail()
        .isString()
        .withMessage('Full name must be a string')
        .bail(),
    body('username')
        .notEmpty()
        .withMessage('Username must be provided')
        .bail()
        .isString()
        .withMessage('Username must be a string')
        .bail()
        .custom(async username => {
            const isExisting = await findUserByUsername(username);
            if (isExisting) throw new Error('User with such username already exists');
        }),
    body('password')
        .notEmpty()
        .withMessage('Password must be provided')
        .bail()
        .isString()
        .withMessage('Password must be a string')
        .bail(),
    body('confirmPassword')
        .notEmpty()
        .withMessage('Confirmation of password must be provided')
        .bail()
        .isString()
        .withMessage('Confirmation of password must be a string')
        .bail(),
    body('gender')
        .notEmpty()
        .withMessage('Gender must be provided')
        .bail()
        .isIn(['male', 'female', 'other'])
        .withMessage('Gender must be male, female, or other')
        .bail()
];

const validationBodyLogin = [
    body('username')
        .notEmpty()
        .withMessage('Username must be provided')
        .bail()
        .isString()
        .withMessage('Username must be a string')
        .bail()
        .custom(async username => {
            const isExisting = await findUserByUsername(username);
            if (!isExisting) throw new Error('User with such username does not exist');
        }),
    body('password')
        .notEmpty()
        .withMessage('Password must be provided')
        .bail()
        .isString()
        .withMessage('Password must be a string')
        .bail()
];

router.get('/', authenticateToken, UsersController.getUsersExceptLoggedIn);
router.get('/all', UsersController.getUsers);

router.post('/signup', validationBodySignup, UsersController.signup);
router.post('/login', validationBodyLogin, UsersController.login);
router.post('/logout', UsersController.logout);

module.exports = router;