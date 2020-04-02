const request = require('request')

const geocode = (adress, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1IjoidHVrb3ciLCJhIjoiY2s1azBxc2FuMDhqOTNmcHY2bjBzb3IzNSJ9.-AgAvoCEj8zerSyTmwL-_A`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather forecast service.', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    
    })
}

module.exports = geocode