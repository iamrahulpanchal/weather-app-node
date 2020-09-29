// const getData = async () => {
//     const response = await axios.get(`http://localhost:3000/weather?address=bhy`);
//     console.log(response.data);
// }

fetch(`http://localhost:3000/weather?address=bhy`).then((resp) => {
    resp.json().then((data) => {
        console.log(data);
    })
})

