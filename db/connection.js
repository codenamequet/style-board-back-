const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/pdf", { useMongoClient: true }) //need to change the database name

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/pdf");
  }

mongoose.Promise = Promise

module.exports = mongoose
mongodb://p2admin:project2@ds249787.mlab.com:49787/clothes
