const express       = require('express')
const Accessories   = require('../db/models/accessories.js')
const Shirts        = require('../db/models/shirts.js')
const Pants         = require('../db/models/pants.js')
const Shoes         = require('../db/models/shoes.js')

const router        = express.Router()



router.get('/clothes/about', (req, res) => {
    res.render('about')
})

router.get('/clothes/closet', (req, res) => {
    res.render('closet')
})

router.get('/clothes/accessories', (req, res) => {
    res.render('accessories')
})

router.get('/clothes/shirts', (req, res) => {
    res.render('shirts')
})

router.get('/clothes/pants', (req, res) => {
    res.render('pants')
})

router.get('/clothes/shoes', (req, res) => {
    res.render('shoes')
})

router.get('/:name', (req, res) => {
    res.render('closet', { name: req.params.name })
})

module.exports = router
