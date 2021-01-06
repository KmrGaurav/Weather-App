const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const args = process.argv
const address = args[2]

if(args.length < 3)
    return console.log('Please provide location')
else if(args.length > 3)
    return console.log('Please provide only one argument')

geocode(address, (gError, { latitude, longitude, location } = {}) => {
    if(gError) {
        return console.log(gError)
    }

    forecast(latitude, longitude, (fError, forecastData) => {
        if(fError) {
            return console.log(fError)
        }

        console.log(location)
        console.log(forecastData)
    })
})
