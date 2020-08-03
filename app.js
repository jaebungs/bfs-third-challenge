const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const app = express()

let cat = ["https://cdn2.thecatapi.com/images/5tg.gif", "https://cdn2.thecatapi.com/images/4j7.gif", "https://cdn2.thecatapi.com/images/csc.jpg", "https://cdn2.thecatapi.com/images/4gq.gif", "https://cdn2.thecatapi.com/images/MTgwMTA3MA.jpg"]


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index', {
        randomCatImg: cat[Math.floor(Math.random() * cat.length)]
    })
})



app.listen(port, function(){
    console.log('server started on port 3000')
})