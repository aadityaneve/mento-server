const mongoose = require('mongoose');

const topicsSchema = new mongoose.Schema(
    {
        card_img: { type: String, required: true },
        heading: { type: String, required: true },
        name: { type: String, required: true },
        desg: { type: String, required: true },
        total_count: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Topics = mongoose.model('all-topics', topicsSchema);

module.exports = Topics;
