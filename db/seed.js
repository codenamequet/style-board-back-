const mongoose          = require('./connection')
const Accessories       = require('./models/accessories').model('Accessories')
const Shirts            = require('./models/shirts').model('Shirts')
const Pants             = require('./models/pants').model('Pants')
const Shoes             = require('./models/shoes').model('Shoes')

const accessoriesSeeds  = require('./accessories-seeds.json')
const shirtsSeeds       = require('./shirts-seeds.json')
const pantsSeeds        = require('./pants-seeds.json')
const shoesSeeds        = require('./shoes-seeds.json')

Accessories.remove({})
    .then(() => {
    return Accessories.collection.insert(accessoriesSeeds)
})
    .then(() => {
    process.exit()
})

Shirts.remove({})
.then(() => {
    return Shirts.collection.insert(shirtsSeeds)
})
.then(() => {
    process.exit()
})

Pants.remove({})
.then(() => {
    return Pants.collection.insert(pantsSeeds)
})
.then(() => {
    process.exit()
})

Shoes.remove({})
.then(() => {
    return Shoes.collection.insert(shoesSeeds)
})
.then(() => {
    process.exit()
})
