const weatherForm = document.querySelector('form');
const tempEl = document.getElementById('temp');
const forecastEl = document.getElementById('forecast');
const locationEl = document.getElementById('location');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = document.getElementById('search_text').value;
    fetch(`http://localhost:3000/weather?address=${search}`).then((resp) => {
        resp.json().then((data) => {
            console.log(data);
            // tempEl.value = data.temperature;
            // forecastEl.value = data.forecast;
            // locationEl.value = data.location;
        }).catch((err) => {
            console.log(`Cant Fetch Data`);
        });
    });
})





