const router = require('express').Router()
const db = require('../models')
// const places = require('../models/places')

// Places index page
router.get('/', (req, res) => {    
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch(err => {
        res.status(404).render('error404')
    })  
})

// Create new place
router.post('/', (req, res) => {
    let body = req.body
    db.Place.create(body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError'){
            let message = 'Validation Error: '
            for(let field in err.errors){
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            res.render('places/new', {message, body})
        } else {
            res.status(404).render('error404')
        }
    })
})


// Form page for creating a new place
router.get('/new', (req, res) => {
    res.render('places/new')
})


// Details about a particular place
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        res.status(404).render('error404')
    })
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
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    res.redirect(`/places/${req.params.id}`)
})

// Delete a rant (comment) about a particular place
router.delete('/:id/comment/:id', (req, res) => {      
    res.send("Delete a rant (comment) about a particular place")
})

// Wildcard Route
router.get('*', (req, res) => {
    res.status(404).render('error404')
})

module.exports = router