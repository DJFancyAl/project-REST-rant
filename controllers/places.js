const router = require('express').Router()
const places = require('../models/places')

// Places index page
router.get('/', (req, res) => {      
    res.render('places/index', { places })
})

// Create new place
router.post('/', (req, res) => { 
    if(!req.body.pic){
        req.body.pic = "http://placekitten.com/400/400"
    }
    if(!req.body.city){
        req.body.city = "Anytown"
    }
    if(!req.body.state){
        req.body.state = "USA"
    }
    if(!req.body.cuisines){
        req.body.cuisines = ["Unknown"]
    }
    places.push(req.body)
    res.redirect('/places')
})

// Form page for creating a new place
router.get('/new', (req, res) => {
    res.render('places/new')
})

// Details about a particular place
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else {
        res.render('places/show', {place: places[id], id})
    }
})


router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else {
    res.render('places/show')
  }
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
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
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