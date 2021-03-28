const express = require('express');
const pug = require('pug');
const cookieParser = require('cookie-parser');


function setupExpress(app) {
    app.set('view engine', 'pug');
    
   
    
    app.use(express.static('public'))

    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser());

  
}

module.exports = setupExpress;