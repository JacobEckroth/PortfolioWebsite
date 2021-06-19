const exphbs = require('express-handlebars')
const express = require('express')
const fs = require('fs');
const app = express()
const path = require('path')
var favicon = require('serve-favicon')
const config = require('./config.json')
const port = config.runPort;
app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    app.set('views', __dirname + '/views');
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        extname: 'handlebars',
        layoutsDir: path.join(__dirname, "/views/layouts"),
        partialsDir: [
            path.join(__dirname, "/views/partials")
        ],
        helpers: {
            section: function (name, options) {
                if (!this._sections) this._sections = {}
                this._sections[name] = options.fn(this)
                return null
            },
        }
    }));
    app.set('view engine', 'handlebars');

    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/',(req,res)=>{
    res.render('portfolioHomePage');
})
app.get('/chessPartOne', (req, res) => {
    res.render('chessPartOne')
})

app.get('*',(req,res)=>{
    res.status(404).render('404')
})


//no posts are allowed
app.post('*',(req,res)=>{
    res.status(403).end();
})


//no puts are allowed
app.put('*',(req,res)=>{
    res.status(403).end();
})


//no deletes are allowed
app.delete('*',(req,res)=>{
    res.status(403).end();
})

app.connect('*',(req,res)=>{
    res.status(403).end()
})

app.options('*',(req,res)=>{
    res.status(403).end()
})

app.trace('*',(req,res)=>{
    res.status(403).end()
})

app.patch('*',(req,res)=>{
    res.status(403).end()
})