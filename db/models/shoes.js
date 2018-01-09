const mongoose = require('./shirts')

const ShoesSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    images: String,
    tags: [String]
})

mongoose.model('Shoes', ShoesSchema)

module.exports = mongoose
