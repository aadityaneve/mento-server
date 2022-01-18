const { start, app } = require('./server');
const express = require('express');
app.use(express.json());

const topicsController = require('./controllers/topics.controller');
const topicsDetailsController = require('./controllers/topicsDetails.controller');

app.get('/', (req, res) => {
    try {
        const home = 'Welcome';

        return res.status(201).send(home);
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
});
app.use('/', topicsController);
app.use('/', topicsDetailsController);

start();
