"use strict";

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/movi',
        port: process.env.PORT || 3030
    },

    production: {
        rootPath: rootPath,
        db: 'TODO',
        port: process.env.PORT || 80
    }
};

