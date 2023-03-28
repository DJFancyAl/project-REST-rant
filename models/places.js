const mongoose = require('mongoose')

const placeSchemma = new mongoose.Schema({
  name: {type: String, required: true},
  pic: String,
  cuisines: {type: Array, default: ["Unknown Cuisine"]},
  city: {type: String, default: "Anytown"},
  state: {type: String, default: "USA"},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchemma)