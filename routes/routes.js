module.exports = app => {
    app.post('/api/shorturl/new', (req, res) => {
        console.log('----', req.body);
        // check if valid
        // create db entry
        // res.json()
    });
};
