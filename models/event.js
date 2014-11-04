var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
	title: String,
	date: String,
	time: String,
	pm: Boolean,
	location: String,
	locationAddress: String,
	url: String,
	image: String,
	volunteerQuota: Number,
	volunteerTime: String,
	volunteerpm: Boolean,
	volunteerIDs: [Number],
	volunteerPerks: String,
	owner: Number
});

module.exports = mongoose.model('event', eventSchema);