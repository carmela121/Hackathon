var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
 question: { type: String, unique: true, required: true }
 
});

module.exports = mongoose.model("Question", questionSchema);