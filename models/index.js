require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abluemleiv:lJGbyrNuWhjnfJtS@cluster0.wfuup0h.mongodb.net/restrant', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')