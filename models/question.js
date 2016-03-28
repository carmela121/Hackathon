var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
 question: { type: String, unique: true, required: true },
 answer: []
 
});

module.exports = mongoose.model("Question", questionSchema);