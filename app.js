const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// Iteration 2

// Add the route handlers here:

app.get('/', (req, res) => {
const imageBeer = "/images/beer.png"

  res.render('index', {imageBeer});

});

app.get('/beers', (req, res) => {
  punkAPI
  .getBeers()
  .then(beersFromApi => {console.log('Beers from the database: ', beersFromApi)
  res.render('beers', {beersFromApi});})
  .catch(error => console.log(error));
});

app.get('/beer-random', (req, res) => {
  punkAPI
  .getRandom()
  .then(responseFromAPI => {
    // your magic happens here
  res.render('Beer-Random');})
  .catch(error => console.log(error));
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
