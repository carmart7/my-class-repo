const express = require('express');
const tipsRouter = require('./tipsRouter');
const feedbackRouter = require('./feedbackRouter');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;