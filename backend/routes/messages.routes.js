const express = require('express');
const authenticateToken = require('../utils/authenticate');
const MessagesController = require('../controllers/messages.controller');
const router = express.Router();

router.get('/:id', authenticateToken, MessagesController.getMessages);

router.post('/send/:id', authenticateToken, MessagesController.sendMessage);

module.exports = router;