const dataBase = require('./customDB');
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();

const hbs = handlebars.create({
    extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    res.locals = {
        title: 'Home',
    };
    res.render('home', { layout: false })
});
app.get('/catalog', (req, res) => {
    res.locals = {
        dataBase,
        title: 'Catalog Page',
    };
    res.render('catalog', { layout: false })
});

app.get('/about', (req, res) => {
    res.locals = {
        title: 'About us Page',
    };
    res.render('about', { layout: false })
});

app.get('/create', (req, res) => {
    res.locals = {
        title: 'Create Topic Page',
    };
    res.render('create', { layout: false })
});

app.post('/api/create', (req, res) => {
    const body = req.body;
    dataBase.push(body);
    
    res.redirect("/catalog")
})

app.listen(3000);