const request = require('request')

const geocode = (address, callback) => {
    const APIKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + APIKey + '&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('[Mapbox]: Unable to connect to location server', undefined)
        } else if(body.message) {
            callback('[Mapbox]: Nothing provided to find or API is incorrect', undefined)
        } else if(body.features.length === 0) {
            callback('[Mapbox]: Unable to find location. Search something else', undefined)
        } else {
            callback(undefined, {
                latitude:  body.features[0].center[1],
                longitude: body.features[0].center[0],
                location:  body.features[0].place_name
            })
        }
    })
}

module.exports = geocode