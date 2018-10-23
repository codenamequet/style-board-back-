const express           = require('express')
const hbs               = require ('express-handlebars')
const clothes           = require('./controllers/clothes.js') //why do I need .js at the end
const app               = express()
const parser            = require('body-parser')
const methodOverride    = require('method-override')
const cors              = require('cors')

app.set('port', process.env.PORT || 8000)

app.use(cors())
app.options('*', cors())
app.use(parser.json())
app.use(parser.urlencoded( { extended: true } ))
app.use('/assets', express.static('public'))
app.use(methodOverride('_method'))
app.get('/', (req,res) => {
    res.render('welcome')
})

app.use('/', clothes)

app.listen(app.set('port'), () => {
    console.log('It\'s aliiiiive on PORT', app.get('port'))
})
