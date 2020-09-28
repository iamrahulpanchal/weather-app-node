const axios = require('axios');

const getCoordinates = async () => {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/Bhayandar.json?access_token=pk.eyJ1IjoiaWFtcmFodWxwYW5jaGFsIiwiYSI6ImNrZm01ajExNzI5aTAycW8zaHdzcDhsdW0ifQ.lC085wAf1ccyP7RvRfP8CQ&limit=1`);
    return response.data.features[0].geometry.coordinates;
}

const getWeather = async () => {
    const coordResponse = await getCoordinates();
    const lat = coordResponse[1];
    const lon = coordResponse[0];
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=74e3a1e94efd425296657841f75a852f`);
    return response.data.data;
}

getWeather().then((resp) => {
    console.log(`Temperature is ${resp[0].temp}`);
}).catch((err) => {
    console.log(`Unable to Connect to Weather Service. ${err}`);
});
