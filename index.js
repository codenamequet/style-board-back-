const express           = require('express')
const hbs               = require ('express-handlebars')
// const pdf = require('../')
const app               = express()
const parser            = require('body-parser')
const methodOverride    = require('method-override')

app.set('port', process.env.PORT || 8000)

app.set('view engine', 'hbs')

app.engine(
    '.hbs',
    hbs({
        extname: '.hbs',
        partialsDir: 'views/',
        layoutsDir: 'views/',
        defaultLayout: 'layouts-main'
    })
)

app.get('/', (req,res) => {
    res.render('./welcome')
})

//only here until I can get the routes to go through clothes.js controller
app.get('/closet', (req, res) => {
    res.render('closet')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(app.set('port'), () => {
    console.log('It\'s aliiiiive on PORT', app.get('port'))
})
