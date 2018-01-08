const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/pdf", { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
