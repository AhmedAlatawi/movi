"use strict";

var User = require('../models/user');
var Movie = require('../models/movie');


exports.createUser = function(userData, callback) {
    if (userData.password !== userData.passwordCheck) {
        callback('Error: entered passwords does not match!');
        return;
    }

    User.create(userData, function(err) {
        if (err) {
            if (err.code == '11000') {
                err.message.indexOf('username') > -1 ?
                    callback('Error: username already taken!') :
                    callback('Error: email already taken!');
            } else if (err.toString().indexOf('required') > - 1) {
                callback('Error: one or more fields are empty!');
            } else {
                callback('Error: something went wrong, please try again later!');
            }
        } else {
            callback(null);
        }
    });
};


exports.addToTracked = function (username, movieData, callback) {
    User.findOne({ username: username}, function(err, user) {
        if (err) {
            callback('User not found');
        } else {
            Movie.findOrCreate(movieData, function (err, movie) {
                user.tracked_movies.push(movie._id);
                callback(null)
            });
        }
    });
};