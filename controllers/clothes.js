const express       = require('express')
const Accessories   = require('../db/models/accessories.js')
const Shirts        = require('../db/models/shirts.js')
const Pants         = require('../db/models/pants.js')
const Shoes         = require('../db/models/shoes.js')

const router        = express.Router()

router.get('/', (req, res) => {
    Shoes.find({})
        .then(shoes => {
            res.render('closet', { shoes: shoes })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/closet', (req, res) => {
    res.render('closet')
})

router.get('/closet/accessories', (req, res) => {
    res.render('accessories')
})

router.get('/closet/shirts', (req, res) => {
    res.render('shirts')
})

router.get('/closet/pants', (req, res) => {
    res.render('pants')
})

router.get('/closet/shoes', (req, res) => {
    res.render('shoes')
})

router.get('/add-accessories', (req, res) => {
    res.render('add-accessories')
})

router.get('/add-shirts', (req, res) => {
    res.render('add-shirts')
})

router.get('/add-pants', (req, res) => {
    res.render('add-pants')
})

router.get('/add-shoes', (req, res) => {
    res.render('add-shoes')
})

router.get('/:name', (req, res) => {
    res.render('closet', { name: req.params.name })
})

router.post('/add-shoes', (req, res) => { 
    console.log("working")
    Shoes.create(req.body.shoes)
        .then(shoes => {
            res.redirect(`/closet/${shoes.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router
