const express       = require('express')
const Accessories   = require('../db/models/accessories.js').model('Accessories')
const Shirts        = require('../db/models/shirts.js').model('Shirts')
const Pants         = require('../db/models/pants.js').model('Pants')
const Shoes         = require('../db/models/shoes.js').model('Shoes')

const parser        = require('body-parser')
const router        = express.Router()

//routes for rendering item pages pages

router.get('/closet/accessories', (req, res) => {
  Accessories.find({})
  .then(accessories => {
    res.json({ accessories: accessories })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/closet/shirts', (req, res) => {
  Shirts.find({})
  .then(shirts => {
    res.json({ shirts: shirts })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/closet/pants', (req, res) => {
  Pants.find({})
  .then(pants => {
    res.json({ pants: pants })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/closet/shoes', (req, res) => {
  Shoes.find({})
  .then(shoes => res.json({ shoes: shoes }))
  .catch(err => {
  console.log(err)
  })
})


// Routes for getting individual item pages
router.get('/closet/accessories/:name', (req, res) => {
  Accessories.findOne({ name: req.params.name })
  .then(accessory => {
    res.json({ accessory })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/closet/shirts/:name', (req, res) => {
  Shirts.findOne({ name: req.params.name })
  .then(shirt => {
    res.json({ shirt })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/closet/pants/:name', (req, res) => {
  Pants.findOne({ name: req.params.name })
  .then(pant => {
    res.json({ pant })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/closet/shoes/:name', (req, res) => {
  Shoes.findOne({ name: req.params.name })
  .then(shoe => { res.json({ shoe })})
  .catch(err => {
    console.log(err)
  })
})

router.get('/about', (req, res) => {
  res.json('about')
})

router.get('/closet', (req, res) => {
  res.send('closet')
})

//route for rendering "add" pages
router.get('/add-accessories', (req, res) => {
  res.json('add-accessories')
})

router.get('/add-shirts', (req, res) => {
  res.json('add-shirts')
})

router.get('/add-pants', (req, res) => {
  res.json('add-pants')
})

router.get('/add-shoes', (req, res) => {
  res.json('add-shoes')
})

router.post('/closet/shoes/', (req, res) => {
  Shoes.create(req.body.shoes)
  .then(res => {
    res.json({shoes})
  })
  .catch(err => {
    console.log(err)
  })
})

router.post('/closet/accessories', (req, res) => {
  Accessories.create(req.body.accessory)
  .then(accessory => { // the argument can't be req or res cuz we already declared them on line 125 and don't wanna overwrite
    res.json({accessory: accessory})
  })
  .catch(err => {
    console.log(err)
  })
})

router.post('/closet/shirts/:name', (req, res) => {
  Shirts.create(req.body.shirts)
  .then(res => {
    res.json({shirts})
  })
  .catch(err => {
    console.log(err)
  })
})

router.post('/closet/pants/:name', (req, res) => {
  Pants.create(req.body.pants)
  .then(res => {
    res.json({accessory})
  })
  .catch(err => {
    console.log(err)
  })
})

router.put('/closet/accessories/:name', (req, res) => {
    Accessories.findOneAndUpdate({ name: req.params.name }, req.body.accessories, { new: true })
        .then(accessory => {
            res.json({accessory})
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
