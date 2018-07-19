const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlsSchema = new Schema({
    short: String,
    full: String
});

mongoose.model('urls', urlsSchema);
