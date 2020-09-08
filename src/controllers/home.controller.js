const { app } = require("../app");
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather-app',
        name: 'Antonin Welvart'
    });
});
