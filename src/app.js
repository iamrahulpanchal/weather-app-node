const path = require('path');
const express = require('express');
const hbs = require('hbs');
const getWeather = require('./utils/weather');

const app = express();
const port = process.env.PORT || 3000;

// Define Paths for Express Config
const publicDir = path.join(__dirname, '../public');
// Custom views path, by default it looks for views folder.
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Rahul Panchal'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Rahul Panchal'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Rahul Panchal',
        msg: 'If you need some help, Contact Me...' 
    });
});

app.get('/weather', (req, res) => {
    if(req.query.address === undefined || req.query.address === ''){
        return res.send({
            error: 'You Must Provide Address in Parameter'
        });
    }

    getWeather(req.query.address).then((data) => {
        res.send({
            temperature: data.data[0].temp,
            forecast: data.data[0].weather.description,
            location: data.location,
            address: req.query.address
        })
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Help Article Not Found',
        name: 'Rahul Panchal'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: 'Page Not Found',
        name: 'Rahul Panchal'
    })
});

app.listen(port, () => {
    console.log('Server Started!');
});