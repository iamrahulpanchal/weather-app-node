const weatherForm = document.querySelector('form');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = document.getElementById('search_text').value;
    fetch(`http://localhost:3000/weather?address=${search}`).then((resp) => {
        resp.json().then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(`Cant Fetch Data`);
        });
    });
})





