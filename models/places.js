// Dependencies
const mongoose = require('mongoose')

// Place Schema
const placeSchemma = new mongoose.Schema({
  name: {type: String, required: true},
  pic: {type: String, default: 'http://placekitten.com/350/350'},
  cuisines: {type: Array, default: ["Unknown Cuisine"]},
  city: {type: String, default: "Anytown"},
  state: {type: String, default: "USA"},
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear() + 2, `No...that doesn't seem right. Select a different year.`]
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

// Helper Methods
placeSchemma.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


// Exports
module.exports = mongoose.model('Place', placeSchemma)