const mongoose = require('./pants')

const ShirtsSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    images: String,
    tags: [String]
})

const Shirts = mongoose.model('Shirts', ShirtsSchema)

module.exports = Shirts
module.exports = mongoose