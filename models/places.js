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



// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: ['Thai', 'Sushi'],
//     pic: '/images/thai_chef.jpg'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: ['Fast-Food', 'French'],
//     pic: '/images/cyber_cafe.jpg'
//   }]