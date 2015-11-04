"use strict";

var passport = require('passport');

module.exports = function(app) {

    app.get('/login', function(req, res) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        });
    });

    app.get('*', function(req, res) {
        res.render('index.html');
    });
};