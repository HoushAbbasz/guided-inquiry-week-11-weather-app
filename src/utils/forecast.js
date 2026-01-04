const request = require('request');

const forecast = (latitude, longitude, units, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b83a6494bb26c9d5141ff2d111444800&query=${latitude},${longitude}&units=${units}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const unitSymbol = units === 'f' ? '°F' : units === 's' ? 'K' : '°C';
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}${unitSymbol}. It feels like ${body.current.feelslike}${unitSymbol}.`);
        }
    });
}

module.exports = forecast;