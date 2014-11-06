var mongoose = require('mongoose');

var volunteerSchema = mongoose.Schema({
	id: Number,
  name: String,
	image: String,
	email: String,
	password: String,
	mobile: String,
	bio: String,
	location: String,
	confirmedEventIDs: [Number],
	pendingEventIDs: [Number]
});

module.exports = mongoose.model('volunteer', volunteerSchema);