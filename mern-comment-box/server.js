'use strict'

const express             = require('express')
const mongoose            = require('mongoose')
const bodyParser          = require('body-parser')
const Comment             = require('./model/comments')

const app                 = express()
const router              =express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
    res.setHeader('Cache-Control', 'no-cache')
    next()
})

router.get('/'), (req, res) => {
    res.json({ message: 'API Initialized!' })
}

router.get('/comments', (req,res) => {
    Comment.find(function(err, comments) {
        if (err)
        res.send(err)
        res.json(comments)
    })
})

router.post('/comments', (req, res) => {
    var comment = new Comment()
    comment.author = req.body.author
    comment.text = req.body.text
    comment.save(function(err) {
        if (err)
        res.send(err)
        res.json({ message: 'Comment successfully added!' })
    })
})

app.use('/api', router)

app.listen(port, function() {
    console.log(`api running on port ${port}`)
})

var port = process.env.API_PORT || 3001

mongoose.connect('mongodb://admin:comment123@ds257077.mlab.com:57077/mern-comment-box')
