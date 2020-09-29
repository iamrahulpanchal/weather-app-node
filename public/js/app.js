const getData = async () => {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/bhayandar.json?access_token=pk.eyJ1IjoiaWFtcmFodWxwYW5jaGFsIiwiYSI6ImNrZm01ajExNzI5aTAycW8zaHdzcDhsdW0ifQ.lC085wAf1ccyP7RvRfP8CQ&limit=1`);
    console.log(response.data);
}

getData();

console.log('Client Side');

