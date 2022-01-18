const mongoose = require('mongoose');

const topicsDetailsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        url: { type: String, required: true },
        pre_heading: { type: String, required: true },
        heading: { type: String, required: true },
        price_initial: { type: String, required: true },
        price_after: { type: String, required: true },
        puch_line1: { type: String, required: true },
        punch_line2: { type: String, required: true },
        video_count: { type: String, required: true },
        videos: [{ type: Array, default: [] }],
        about: [{ type: Array, default: [] }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const TopicsDetails = mongoose.model('all-topics-details', topicsDetailsSchema);

module.exports = TopicsDetails;
