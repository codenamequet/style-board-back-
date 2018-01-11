const express           = require('express')
const hbs               = require ('express-handlebars')
const clothes           = require('./controllers/clothes.js') //why do I need .js at the end
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

app.use(parser.urlencoded( { extended: true } ))
app.use('/assets', express.static('public'))

app.get('/', (req,res) => {
    res.render('welcome')
})

app.use('/', clothes)

app.listen(app.set('port'), () => {
    console.log('It\'s aliiiiive on PORT', app.get('port'))
})
