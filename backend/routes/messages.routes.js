const express = require('express');
const { body, param, cookie } = require('express-validator');
const authenticateToken = require('../utils/authenticate');
const MessagesController = require('../controllers/messages.controller');
const findUserById = require('../utils/findUserById');
const router = express.Router();

const validationExistingId = [
    param('id')
        .notEmpty()
        .withMessage('Id must be provided')
        .bail()
        .isMongoId()
        .withMessage('Id must be given by MongoDB')
        .bail()
        .custom(async id => {
            const isExisting = await findUserById(id);
            if (!isExisting) throw new Error('User with such id does not exist');
        }),
    cookie('jwt')
        .notEmpty()
        .withMessage('Token must be provided')
        .bail()
        .isJWT()
        .withMessage('Token must be in JWT format')
        .bail()
];

const validationBody = [
    body('message')
        .notEmpty()
        .withMessage('Body for message must be provided')
        .bail()
];

router.get('/:id?', authenticateToken, validationExistingId, MessagesController.getMessages);
router.post('/send/:id?', authenticateToken, validationExistingId, validationBody, MessagesController.sendMessage);

module.exports = router;