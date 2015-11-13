var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    name: String,
    email: String,
    number: String
});

module.exports = mongoose.model('Post', postSchema);