const { app } = require("../app");

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Vous devez fournir une loacalisation'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {

        console.log(latitude, longitude)
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                adress: req.query.address
            })
        })
    })
})