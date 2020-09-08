const { app } = require("../app");
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Antonin Welvart'
    });
});
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Antonin Welvart',
        errorMessage: 'Help content not found'
    });
});
