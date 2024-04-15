const express = require('express');
const router = express.Router();

const usersRoutes = require('./users.routes');
const messagesRoutes = require('./messages.routes');

router.use('/users', usersRoutes);
router.use('/messages', messagesRoutes);

module.exports = router;