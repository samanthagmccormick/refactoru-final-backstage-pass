var mongoose = require('mongoose');

var Event = require('./event');
var User = require('./user');
var ObjectId = User._id;

var eventSchema = mongoose.Schema({
	title: String,
	date: String,
	startTime: String,
	endTime: String,
	pm: Boolean,
	location: String,
	locationAddress: String,
	url: String,
	image: String,
	volunteerQuota: {
		type: Number,
		default: 0
	},
	volunteerTime: String,
	volunteerpm: Boolean,
	volunteerIDs: [ObjectId],
	volunteerPerks: String,
	owner: [ObjectId]
});

module.exports = mongoose.model('event', eventSchema);