const path = require('path');
const express = require('express');
const hbs = require('hbs'); 
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather World',
        name: 'Housh Abbaszadeh'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Housh Abbaszadeh',
        aboutText: `Hi, my name is Housh. I enjoy learning new things, especially things related to technology and mathematics.
        I am currently pursuing a Coding Apprenticeship with Road to Hire where I am expanding my skill set by learning full-stack web development technologies, including HTML, CSS, JavaScript, Node.js, React.js, Git, GitHub, SQL, and MySQL.`

    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: `Simply type in any city or area code to instantly get the weather!
        To get the best results, try entering both the city and region, such as a city and state or city and country, since more general searches may return results for a more well known location with the same name. For example, if you want the weather for London, Kentucky and search for "London", you will receive the weather for London, England.
        Choose your preferred temperature unit before hitting search, and you'll get current conditions plus the "feels like" temperature.`,
        name: 'Housh Abbaszadeh'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    const units = req.query.units || 'm'; 

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, units, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.use('/help/:anything', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Housh Abbaszadeh',
        errorMessage: 'Help article not found.'
    });
});


app.use((req, res) => {
    res.render('404', {
        title: '404',
        name: 'Housh Abbaszadeh',
        errorMessage: 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});