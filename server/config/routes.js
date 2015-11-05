"use strict";

var passport = require('passport'),
    auth = require('../controllers/auth.js');


module.exports = function(app) {

    app.post('/login', auth.authenticate);

    app.get('/logged-user', function(req, res) {
       res.json(req.user);
    });

    app.get('*', function(req, res) {
        res.render('index.html');
    });
};