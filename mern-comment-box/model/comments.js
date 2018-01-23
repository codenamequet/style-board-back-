'use strict'

const mongoose              = require('mongoose')
const Schema                = mongoose.Schema

var CommentsSchema = new Schema({
    author: String,
    text: String
})

module.exports = mongoose.model('Comment', CommentsSchema)
