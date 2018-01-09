const Accessories = require('/models/accessories')
const Shirts = require('/models/shirts')
const Pants = require('/models/pants')
const Shoes = require('/models/shoes')
const seedData = require('seeds.json')

Accessories.remove({})
.then(() => {
    return Accessories.collection.insert(seedData)
})
.then(() => {
    process.exit()
})

Shirts.remove({})
.then(() => {
    return Shirts.collection.insert(seedData)
})
.then(() => {
    process.exit()
})

Pants.remove({})
.then(() => {
    return Pants.collection.insert(seedData)
})
.then(() => {
    process.exit()
})

Shoes.remove({})
.then(() => {
    return Shoes.collection.insert(seedData)
})
.then(() => {
    process.exit()
})
