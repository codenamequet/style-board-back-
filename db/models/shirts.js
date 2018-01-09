const mongoose = require('./pants')

const ShirtsSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    images: String,
    tags: [String]
})

mongoose.model('Shirts', ShirtsSchema)

module.exports = mongoose
