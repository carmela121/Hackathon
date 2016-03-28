var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
 name: { type: String, unique: true, required: true },
 clicked: { type: Boolean }
 
});

module.exports = mongoose.model("User", userSchema);