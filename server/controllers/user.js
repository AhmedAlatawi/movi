"use strict";

var User = require('../models/user');

exports.createUser = function(req, res) {
    var userData = req.body;

    if (userData.password !== userData.passwordCheck) {
        res.status(400);
        return res.send({
            success: false,
            msg: 'Error: entered passwords does not match!'
        });
    }

    // TODO: clean up this horrible code!
    User.findOne({ username: userData.username }, function(err, user) {
        if (user) {
            res.status(400);
            return res.send({
                success: false,
                msg: 'Error: username already taken!'
            });
        } else {
            User.findOne({ email: userData.email }, function(err, user) {
                if (user) {
                    res.status(400);
                    return res.send({
                        success: false,
                        msg: 'Error: email already taken!'
                    });
                } else {
                    User.create(userData, function(err) {
                        if (err) {
                            res.status(400);
                            return res.send({
                                success: false,
                                msg: 'Error: could not sign up. Please try again later!'
                            });
                        }
                        res.send({ success: true });
                    });
                }
            });
        }
    });

};