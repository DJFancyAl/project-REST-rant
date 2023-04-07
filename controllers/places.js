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
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        res.status(404).render('error404')
    })
})

// Form page for editing an existing place
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch (err => {
        res.status(404).render('error404')
    })
})

// Delete a particular place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.status(404).render('error404')
    })
})
  

// Create a rant (comment) about a particular place
router.post('/:id/comment', (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
    })
    .catch(err => {
        res.status(404).render('error404')
    })
})

// Delete a rant (comment) about a particular place
router.delete('/:id/comment/:cid', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.cid)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        res.status(404).render('error404')
    })
})

// Wildcard Route
router.get('*', (req, res) => {
    res.status(404).render('error404')
})

module.exports = router