require('dotenv').config()

const express = require('express');
const app = express();

// Home Page
app.get('/', (req, res) => {
    res.send('Hello World...')
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


// Server Listener
app.listen(process.env.PORT, () => {
    console.log('Rest-Rant Server Running...')
})