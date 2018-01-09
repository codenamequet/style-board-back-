const express       = require('express')
const Accessories   = require('../db/models/accessories.js')
const Shirts        = require('../db/models/shirts.js')
const Pants         = require('../db/models/pants.js')
const Shoes         = require('../db/models/shoes.js')

const router        = express.Router()



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

router.get('/:name', (req, res) => {
    res.render('closet', { name: req.params.name })
})

router.post("/closet/accessories", (req, res) => { //might need route post on a seperate page
    console.log("working")
    Accessories.create(req.body.recipe)
        .then(recipe => {
            res.redirect(`/recipes/${recipe.name}`)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router
