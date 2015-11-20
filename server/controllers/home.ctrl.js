"use strict";

var Movie = require('../models/movie');

exports.getLatestAdded = function(callback) {
  Movie.find().sort('-createdAt').exec(function (err, movies) {
      callback(movies);
  })
};