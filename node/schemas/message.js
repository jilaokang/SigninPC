const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    key: Number,
    name: String,
    block: String,
    content: String,
    replay: String,
    completed: Number
});