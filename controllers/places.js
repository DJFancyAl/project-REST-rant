const router = require('express').Router()
const places = require('../models/places')

// Places index page
router.get('/', (req, res) => {      
    res.send('GET /places stub')
})

// Create new place
router.post('/', (req, res) => { 
    res.send('POST /places stub')
})


// Form page for creating a new place
router.get('/new', (req, res) => {
    res.send('GET /places/new stub')
})


// Details about a particular place
router.get('/:id', (req, res) => {
    res.send('GET /places/id stub')
})


// Update a particular place
router.put('/:id', (req, res) => {
    res.send('PUT /places/id stub')
})

// Form page for editing an existing place
router.get('/:id/edit', (req, res) => {
    res.send('GET /places/id/edit stub')
})

// Delete a particular place
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/id stub')
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