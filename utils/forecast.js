const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const APIKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('[OpenWeatherMap]: Unable to connect to weather server', undefined)
        } else if(body.cod === '404') {
            callback('[OpenWeatherMap]: Unable to find location', undefined)
        } else if(body.cod === '400') {
            callback('[OpenWeatherMap]: Nothing provided to find', undefined)
        } else if(body.cod === '401') {
            callback('[OpenWeatherMap]: Invalid API key', undefined)
        } else {
            callback(undefined, {
                temp: body.main.temp,
                location: body.name
            })
        }
    })
}

module.exports = forecast