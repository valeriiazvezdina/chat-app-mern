const express = require('express');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { app } = require('./socket/socket');

app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

module.exports = app;