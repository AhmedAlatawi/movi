var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    genres: { type: String, required: true },
    poster_url: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

var User = mongoose.model('Movie', movieSchema);

module.exports = User;