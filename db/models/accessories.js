const mongoose = require('../connection')

const AccessoriesSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    images: String,
    tags: [String]
})

mongoose.model('Accessories', AccessoriesSchema)

module.exports = mongoose
