const express       = require('express')
const Accessories   = require('../db/models/accessories.js').model('Accessories')
const Shirts        = require('../db/models/shirts.js').model('Shirts')
const Pants         = require('../db/models/pants.js').model('Pants')
const Shoes         = require('../db/models/shoes.js').model('Shoes')

const router        = express.Router()

//routes for rendering item pages pages

router.get('/closet/accessories', (req, res) => {
    Accessories.find({})
        .then(accessories => {
            res.render('accessories', { accessories: accessories })
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

router.get('/closet/shoes', (req, res) => {
    Shoes.find({})
        .then(shoes => {
            res.render('shoes', { shoes: shoes })
        })
        .catch(err => {
            console.log(err)
        })
})


// Routes for getting individual item pages
router.get('/closet/accessories/:name', (req, res) => {
    Accessories.findOne({ name: req.params.name })
        .then(accessory => {
            res.render('update-accessories', { accessory })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/closet/shirts/:name', (req, res) => {
    Shirts.findOne({ name: req.params.name })
        .then(shirt => {
            res.render('update-shirts', { shirt })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/closet/pants/:name', (req, res) => {
    Pants.findOne({ name: req.params.name })
        .then(pant => {
            res.render('update-pants', { pant })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/closet/shoes/:name', (req, res) => {
    Shoes.findOne({ name: req.params.name })
        .then(shoe => {
            res.render('item', { shoe })
        })
        .catch(err => {
            console.log(err)
        })
})

// router.get('/item/:name', (req, res) => {
    
// })


router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/closet', (req, res) => {
    res.render('closet')
})

//route for rendering "add" pages
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

router.post('/add-shoes', (req, res) => { 
    Shoes.create(req.body.shoes)
        .then(shoes => {
            res.redirect(`/closet/shoes/${shoes.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/add-accessories', (req, res) => { 
    Accessories.create(req.body.accessories)
        .then(accessories => {
            res.redirect(`/closet/accessories/${accessories.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/add-shirts', (req, res) => { 
    Shirts.create(req.body.shirts)
        .then(shirts => {
            res.redirect(`/closet/shirts/${shirts.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/add-pants', (req, res) => { 
    Pants.create(req.body.pants)
        .then(pants => {
            res.redirect(`/closet/pants/${pants.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/closet/shoes/:name', (req, res) => {
    Shoes.create(req.body.shoes)
        .then(shoe => {
            res.redirect('/closet/shoes/:name')
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/closet/accessories/:name', (req, res) => {
    Accessories.findOneAndUpdate({ name: req.params.name }, req.body.accessories, { new: true })
        .then(accessory => {
            res.redirect('/closet/accessories/:name')
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/closet/shirts/:name', (req, res) => {
    Shirts.findOneAndUpdate({ name: req.params.name }, req.body.shirts, { new: true })
        .then(shirt => {
            res.redirect('/closet/accessories/:name')
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/closet/pants/:name', (req, res) => {
    Pants.findOneAndUpdate({ name: req.params.name }, req.body.pants, { new: true })
        .then(pant => {
            res.redirect('/closet/pants/:name')
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/closet/shoes/:name', (req, res) => {
    Shoes.findOneAndUpdate({ name: req.params.name }, req.body.shoes, { new: true })
        .then(shoe => {
            res.redirect('/closet/shoes/:name')
        })
        .catch(err => {
            console.log(err)
        })
})

//routes for deleting stuff
router.delete('/closet/accessories/:name', (req, res) => {
    Accessories.findOneAndRemove({ name: req.params.name })
        .then(accessories => {
            res.redirect('/closet/accessories')
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete('/closet/shirts/:name', (req, res) => {
    Shirts.findOneAndRemove({ name: req.params.name })
        .then(shirts => {
            res.redirect('/closet/shirts')
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete('/closet/pants/:name', (req, res) => {
    Pants.findOneAndRemove({ name: req.params.name })
        .then(pants => {
            res.redirect('/closet/pants')
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete('/closet/shoes/:name', (req, res) => {
    Shoes.findOneAndRemove({ name: req.params.name })
        .then(shoes => {
            res.redirect('/closet/shoes')
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router
