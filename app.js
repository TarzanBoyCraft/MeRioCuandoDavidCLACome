'use strict';

const express = require('express');
const app = express();
const hbs = require('express-handlebars');

//Aqui van configuradas las rutas, el view engine, los headers

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}));

app.use(express.static('views/images')); 

app.set('view engine', '.hbs');

app.get('/', function(req, res){
    res.render('juego')
});

module.exports = app;