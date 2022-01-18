const express = require('express');
const router = express.Router();
const Topics = require('../models/topics.model');

router.get('/', async (req, res) => {
    try {
        const allTopics = await Topics.find().lean().exec();

        return res.status(201).send(allTopics);
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
});

module.exports = router;
