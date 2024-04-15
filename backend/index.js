const express = require('express');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

module.exports = app;