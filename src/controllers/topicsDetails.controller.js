const express = require('express');
const router = express.Router();
const TopicsDetails = require('../models/topicsDetails.model');

router.get('/', async (req, res) => {
    try {
        const allTopicsDetails = await TopicsDetails.find().lean().exec();

        return res.status(201).send(allTopicsDetails);
    } catch (e) {
        return res.status(500).send({ status: 'FAILED', message: e.message });
    }
});

module.exports = router;
