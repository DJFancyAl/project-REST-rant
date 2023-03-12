const router = require('express').Router()

// Placeholders
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }]

// More code here in a moment
router.get('/', (req, res) => {      
    res.render('places/index', { places })
})

// Create New Place
router.get('/new', (req, res) => {
    res.render('places/new')
})

// Show Place
router.get('/:place', (req, res) => {
    let id = req.params.place
    let place = places[id];
    res.render('places/show', {place, id})
})

// Edit Place
router.get('/:place/edit', (req, res) => {
    let id = req.params.place
    let place = places[id];
    res.render('places/edit', {place, id})
})

module.exports = router