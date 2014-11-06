// var eventManagerSchema = mongoose.Schema({
// 	id: Number,
// 	name: String,
// 	email: String
// });

var mongoose = require('mongoose');
var EventManager = require('../eventManager.js');

EventManager.find({}, function(err, results) {
	if (results.length === 0) {
		var fakeEM1 = new EventManager({
			id: 101,
			name: 'James McDonald',
			email: 'james@gmail.com',
			password: 'bossman',
			events: [11, 12, 13]
		});

		fakeEM1.save();
	} // end if statement
}); // stop finding