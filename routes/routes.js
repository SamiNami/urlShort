const urlExists = require('url-exists');
const mongoose = require('mongoose');
const Urls = mongoose.model('urls');

module.exports = app => {
    app.post('/api/shorturl/new', (req, res) => {
        const { url } = req.body;
        // check for valid url
        const exists = urlExists(url, async (err, exists) => {
            if (!exists) {
                return res.json({ error: 'invalid URL' });
            }

            const existingUrl = await Urls.findOne({ originalUrl: url });
            if (existingUrl) {
                console.log('it was there');
                return res.json(stripMongoData(existingUrl));
            }
            console.log('and NEEEW');
            const count = await Urls.countDocuments({});
            const newUrl = await new Urls({
                originalUrl: url,
                shortUrl: count
            }).save();

            res.json(stripMongoData(newUrl));
        });
    });
};

function stripMongoData(mongoObj) {
    return { original_url: mongoObj.originalUrl, short_url: mongoObj.shortUrl };
}
