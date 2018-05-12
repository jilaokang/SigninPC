const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    key:{
        type:Number,
        default:0
    },
    name: String,
    block: String,
    content: String,
    replay: String,
    completed: {
        type:Number,
        default:0
    },
    StudentId:Number
});