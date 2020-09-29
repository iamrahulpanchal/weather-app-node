const axios = require('axios');

const getCoordinates = async (loc) => {
    // Suppose if there is ? in our search text, then it will become %3F. If we dont use encodeURIComponent, then the program would crash.
    loc = encodeURIComponent(loc);
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=pk.eyJ1IjoiaWFtcmFodWxwYW5jaGFsIiwiYSI6ImNrZm01ajExNzI5aTAycW8zaHdzcDhsdW0ifQ.lC085wAf1ccyP7RvRfP8CQ&limit=1`);
    return {
        latitude : response.data.features[0].center[1],
        longitude : response.data.features[0].center[0],
        location : response.data.features[0].place_name,
    }
}

const getWeather = async (loc) => {
    const coordResponse = await getCoordinates(loc);
    const lat = coordResponse.latitude;
    const lon = coordResponse.longitude;
    const location = coordResponse.location;
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=74e3a1e94efd425296657841f75a852f`);
    return {
        data: response.data.data,
        location: location
    }
}

module.exports = getWeather
