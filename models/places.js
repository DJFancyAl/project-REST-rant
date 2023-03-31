const mongoose = require('mongoose')

const placeSchemma = new mongoose.Schema({
  name: {type: String, required: true},
  pic: String,
  cuisines: {type: Array, default: ["Unknown Cuisine"]},
  city: {type: String, default: "Anytown"},
  state: {type: String, default: "USA"},
  founded: Number
})

// Helper Methods
placeSchemma.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchemma)