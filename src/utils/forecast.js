const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/c3b08a0db7c1d6292c78490e8d726de9/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?lang=fr&units=si`
    console.log(url)
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to get weather forecast',undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temperature = body.currently.temperature
            const rainProb = body.currently.precipProbability
            callback(undefined, `La température est de ${temperature} °C et la probabilité de précipitation de ${rainProb}`)
        }
    })
}

module.exports = forecast