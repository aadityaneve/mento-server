const { start, app } = require('./server');
const express = require('express');
app.use(express.json());

const topicsController = require('./controllers/topics.controller');
const topicsDetailsController = require('./controllers/topicsDetails.controller');

app.use('/', topicsController);
app.use('/', topicsDetailsController);

start();
