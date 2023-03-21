require('dotenv').config()

const express = require('express');
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Import Controllers
app.use('/places', require('./controllers/places'))


// Home Page
app.get('/', (req, res) => {
    res.render('home')
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).render('error404')
})


// Server Listener
app.listen(process.env.PORT, () => {
    console.log('Rest-Rant Server Running...')
})
