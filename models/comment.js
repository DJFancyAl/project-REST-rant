// Dependencies
const mongoose = require('mongoose')


// Comment Schema
let commentSchema = new mongoose.Schema({
    author: {type: String, default: 'Anonymous'},
    rant: {type: Boolean, default: false},
    stars: {type: Number, required: true},
    content: {type: String, default: ''}
})


// Exports
module.exports = mongoose.model('Comment', commentSchema)