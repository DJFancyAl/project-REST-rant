const router = require('express').Router()

// Placeholders
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai_chef.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cyber_cafe.jpg'
  }]

// Places index page
router.get('/', (req, res) => {      
    res.render('places/index', { places })
})

// Create new place
router.post('/', (req, res) => { 
    console.log(req.body)     
    res.send("New place created!")
})

// Form page for creating a new place
router.get('/new', (req, res) => {
    res.render('places/new')
})

// Details about a particular place
router.get('/:id', (req, res) => {
    let id = req.params.id
    let place = places[id];
    res.render('places/show', {place, id})
})

// Update a particular place
router.put('/:id', (req, res) => {      
    res.send("Update a particular place.")
})

// Form page for editing an existing place
router.get('/:id/edit', (req, res) => {
    let id = req.params.id
    let place = places[id];
    res.render('places/edit', {place, id})
})

// Delete a particular place
router.delete('/:id', (req, res) => {      
    res.send("Delete a particular place.")
})

// Create a rant (comment) about a particular place
router.post('/:id/rant', (req, res) => {      
    res.send("Create a rant (comment) about a particular place")
})

// Delete a rant (comment) about a particular place
router.delete('/:id/rant/:id', (req, res) => {      
    res.send("Delete a rant (comment) about a particular place")
})

// Wildcard Route
router.get('*', (req, res) => {
    res.status(404).render('error404')
})

module.exports = router