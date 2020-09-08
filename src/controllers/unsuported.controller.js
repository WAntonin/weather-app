const { app } = require("../app");
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Antonin Welvart',
        errorMessage: 'Page not found'
    });
});
