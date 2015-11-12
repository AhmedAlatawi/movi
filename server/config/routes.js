"use strict";

var auth = require('../controllers/auth.ctrl.js'),
    users = require('../controllers/users.ctrl.js');

module.exports = function(app) {

    app.post('/login', auth.authenticate);

    app.get('/logout', function(req, res) {
       req.logout();
       res.redirect('/');
    });

    app.post('/register', function(req, res, next) {
        users.createUser(req.body, function (msg) {
            if (msg) {
                res.status(400).send({
                    success: false,
                    msg: msg
                });
            } else {
                res.send({
                    success: true
                });
            }
        });
    });

    app.get('/logged-user', function(req, res) {
       res.json(req.user);
    });

    app.get('/add-tracked', function (req, res) {
        movies.addToTracked(req.body.username, req.body.movieData, function(msg) {
            if (msg) {
                res.status(400).send({
                    success: false,
                    msg: msg
                });
            } else {
                res.send({
                    success: true
                });
            }
        })
    });

    app.get('*', function(req, res) {
        res.render('index.html');
    });
};