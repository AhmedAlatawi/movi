var mongoose = require('mongoose');
var encrypt = require('../utils/encrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: String,
    createdAt: Date
});

userSchema.pre('save', function(next) {
    // Create date
    var currentDate = new Date();
    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    // Hash password
    this.salt = encrypt.createSalt();
    this.password = encrypt.hashPassword(this.salt,  this.password);

    next();
});

userSchema.methods.validPassword = function(password) {
    return encrypt.hashPassword(this.salt, password) === this.password;
};

var User = mongoose.model('User', userSchema);

module.exports = User;