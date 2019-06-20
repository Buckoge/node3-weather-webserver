const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/11fc93998f53e48d47c57cdbc99db7c0/' + latitude + ',' + longitude + '?lang=sr&units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' Trenutno je ' + body.currently.temperature + " stepeni napolju.  Najvisa dnevna temperatura " 
            + body.daily.data[0].temperatureHigh + " Najniza dnevna temperatura " 
            + body.daily.data[0].temperatureLow + " Verovatnoca "
            + body.currently.precipProbability + '% za padavine.')
        }
    })
}

module.exports = forecast