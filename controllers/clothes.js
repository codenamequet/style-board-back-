const express       = require('express')
const Accessories   = require('../db/models/accessories.js')

const router = express.Router()




app.get('/:name', (req, res) => {
    res.render('closet', { name: req.params.name })
})

router.get('/about', (req, res) => {
    res.render('about')
})


module.exports = router
