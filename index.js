const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// connect to mlab hosted db
mongoose.connect(keys.mongoURI);
const app = express();

app.get('/', (req, res) => {
    res.json({ hello: 'world' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
