const express       = require('express')
const Accessories   = require('../db/models/accessories.js').model('Accessories')
const Shirts        = require('../db/models/shirts.js').model('Shirts')
const Pants         = require('../db/models/pants.js').model('Pants')
const Shoes         = require('../db/models/shoes.js').model('Shoes')

const router        = express.Router()

router.get('/closet/shoes', (req, res) => {
    Shoes.find({})
        .then(shoes => {
            res.render('shoes', { shoes: shoes })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/closet/shirts', (req, res) => {
    Shirts.find({})
        .then(shirts => {
            res.render('shirts', { shirts: shirts })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/closet/pants', (req, res) => {
    Pants.find({})
        .then(pants => {
            res.render('pants', { pants: pants })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/closet/accessories', (req, res) => {
    Accessories.find({})
        .then(accessories => {
            res.render('accessories', { accessories: accessories })
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

// router.get('/closet/shirts', (req, res) => {
//     res.render('shirts')
// })

router.get('/closet/pants', (req, res) => {
    res.render('pants')
})

// router.get('/closet/shoes', (req, res) => {
//     res.render('shoes')
// })

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
