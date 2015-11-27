"use strict";

var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');
require('../utils/format');


module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/movi',
        port: process.env.PORT || 3030
    },

    production: {
        rootPath: rootPath,
        db: 'mongodb://{0}:{1}@ds033754.mongolab.com:33754/movi'
                .format(process.env.DB_USR, process.env.DB_PWD),
        port: process.env.PORT || 80
    }
};

