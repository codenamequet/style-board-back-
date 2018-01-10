// const mongoose = require('./shoes')
const mongoose = require('../connection.js')

const ShirtsSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    images: String,
    tags: [String]
})

mongoose.model('Shirts', ShirtsSchema)

module.exports = mongoose
