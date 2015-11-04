var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: Date
});

userSchema.pre('save', function(next) {
    var currentDate = new Date();

    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

userSchema.methods.validPassword = function(password) {
    return this.password === password;
};

var User = mongoose.model('User', userSchema);

module.exports = User;