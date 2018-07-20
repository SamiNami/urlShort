const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlsSchema = new Schema({
    originalUrl: String,
    shortUrl: Number
});

mongoose.model('urls', urlsSchema);
