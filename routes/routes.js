const urlExists = require('url-exists');

module.exports = app => {
    app.post('/api/shorturl/new', (req, res) => {
        const { url } = req.body;
        // check for valid url
        urlExists(url, (err, exists) => {
            if (exists) {
                return handleExistingUrl(url);
            }
            res.json({ error: 'invalid URL' });
        });
    });
};

// function handleExistingUrl(url) {
//     // save to db
//     // create redirect?
// }
