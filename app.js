const axios = require('axios');

const getWeather = async () => {
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=Mumbai&country=IN&key=74e3a1e94efd425296657841f75a852f`);
    return response.data.data;
}

getWeather().then((resp) => {
    console.log(`Temperature is ${resp[0].temp}`);
}).catch((err) => {
    console.log(err);
});