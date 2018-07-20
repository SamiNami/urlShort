const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/urls');
// connect to mlab hosted db
mongoose.connect(keys.mongoURI);
const app = express();

app.use(express.json());

var path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

require('./routes/routes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
