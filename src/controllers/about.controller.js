const { app } = require("../app");
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Antonin Welvart'
    });
});
