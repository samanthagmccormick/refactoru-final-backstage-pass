var mongoose = require('mongoose');

var eventManagerSchema = mongoose.Schema({
	id: Number,
	name: String,
	email: String
});

module.exports = mongoose.model('eventManager', eventManagerSchema);