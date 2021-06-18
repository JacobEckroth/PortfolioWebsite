const exphbs = require('express-handlebars')
const express = require('express')
const fs = require('fs');
const app = express()
const path = require('path')

const config = require('./config.json')
const port = config.runPort;




app.get('/', (req, res) => {
    res.render('chessPartOne')
})

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
    app.use(express.static(__dirname + '/public'));
    console.log(`Example app listening at http://localhost:${port}`)
})