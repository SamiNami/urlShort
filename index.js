// todo, add keys to heroku
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/urls');
// connect to mlab hosted db
mongoose.connect(keys.mongoURI);
const app = express();

app.use(express.json());

require('./routes/routes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
