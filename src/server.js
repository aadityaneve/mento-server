const express = require('express');
const connect = require('./configs/db');
const app = express();

const cors = require('cors');
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (res.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, DELETE, PUT, PATCH'
        );
        return res.status(200).json({});
    }
    next();
});

const start = async () => {
    await connect();
    app.listen(PORT, () => {
        console.log(`LISTENING ON PORT ${PORT}`);
    });
};

module.exports = { start, app };
