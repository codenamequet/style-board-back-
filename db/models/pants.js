const mongoose = require('./accessories')

const PantsSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    images: String,
    tags: [String]
})

mongoose.model('Pants', PantsSchema)

module.exports = mongoose
