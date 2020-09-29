const weatherForm = document.querySelector('form');
const tempEl = document.getElementById('temp');
const forecastEl = document.getElementById('forecast');
const locationEl = document.getElementById('location');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    tempEl.textContent = 'Loading...';
    forecastEl.textContent = '';
    locationEl.textContent = '';
    const search = document.getElementById('search_text').value;
    if(search.length > 0){
        fetch(`http://localhost:3000/weather?address=${search}`).then((resp) => {
            resp.json().then((data) => {
                // console.log(data);
                tempEl.textContent = `Temperature : ${data.temperature} Degrees`;
                forecastEl.textContent = `Forecast : ${data.forecast}`;
                locationEl.textContent = `Location : ${data.location}`;
            }).catch((err) => {
                console.log(`Cant Fetch Data`);
            });
        });
    } else {
        tempEl.textContent = 'Please Enter Location';
    }
})





