fetch(`http://localhost:3000/weather?address=bhy`).then((resp) => {
    resp.json().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(`Cant Fetch Data`);
    });
})

