const express = require('express');
const UsersController = require('../controllers/users.controller');
const authenticateToken = require('../utils/authenticate');
const router = express.Router();

router.get('/', authenticateToken, UsersController.getUsersExceptLoggedIn);
router.get('/all', UsersController.getUsers);

router.post('/signup', UsersController.signup);
router.post('/login', UsersController.login);
router.post('/logout', UsersController.logout);

module.exports = router;