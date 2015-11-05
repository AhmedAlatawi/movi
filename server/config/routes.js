"use strict";

var auth = require('../controllers/auth.js');


module.exports = function(app) {

    app.post('/login', auth.authenticate);

    app.get('/logout', function(req, res, next) {
       req.logout();
       res.redirect('/');
    });

    app.get('/logged-user', function(req, res) {
       res.json(req.user);
    });

    app.get('*', function(req, res) {
        res.render('index.html');
    });
};