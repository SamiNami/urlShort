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
                return res.json(stripMongoData(existingUrl));
            }

            const count = await Urls.countDocuments({});
            const newUrl = await new Urls({
                originalUrl: url,
                shortUrl: count
            }).save();

            res.json(stripMongoData(newUrl));
        });
    });
    app.get('/api/shorturl/:id', async (req, res) => {
        const existingUrl = await Urls.findOne({
            shortUrl: parseInt(req.params.id)
        });
        if (existingUrl) {
            return res.redirect(existingUrl.originalUrl);
        }
        res.send('not found');
    });
};

function stripMongoData(mongoObj) {
    return { original_url: mongoObj.originalUrl, short_url: mongoObj.shortUrl };
}
