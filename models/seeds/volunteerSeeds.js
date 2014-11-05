// var volunteerSchema = mongoose.Schema({
// 	id: Number,
// 	name: String,
// 	image: String,
// 	email: String,
// 	mobile: Number,
// 	bio: String,
// 	location: String
// });
var mongoose = require('mongoose');
var Volunteer = require('../volunteer.js');

Volunteer.find({}, function(err, results) {
	if (results.length === 0) {
		var fake1 = new Volunteer({
			id: 1,
			name: 'Samantha McCormick',
			image: 'http://placehold.it/200x200',
			email: 'sam@gmail.com',
			mobile: '617-314-3773',
			bio: 'Freelance unicorn curator',
			location: 'Boulder, Colorado',
			confirmedEventIDs: [101, 102],
			pendingEventIDs: [103]
		});
	
		fake1.save();

		var fake2 = new Volunteer({
			id: 2,
			name: 'Jenn Berry',
			image: 'http://placehold.it/200x200',
			email: 'jenn@gmail.com',
			mobile: '781-555-6767',
			bio: 'Seahorse harness manufacturer',
			location: 'Chicopee, Massachusetts',
			confirmedEventIDs: [102, 103],
			pendingEventIDs: [101]
		});

		fake2.save();

		var fake3 = new Volunteer({
			id: 3,
			name: 'Chris Malvey',
			image: 'http://placehold.it/200x200',
			email: 'chris@gmail.com',
			mobile: '339-444-8888',
			bio: 'Devilishly good-looking mustard distributor',
			location: 'Gunbarrel, Colorado',
			confirmedEventIDs: [101, 103],
			pendingEventIDs: [102]
		});

		fake3.save();

		var fake4 = new Volunteer({
			id: 4,
			name: 'Mattie Schuler',
			image: 'http://placehold.it/200x200',
			email: 'mattie@gmail.com',
			mobile: '303-222-3999',
			bio: 'Shark tank mechanic',
			location: 'Boulder, Colorado',
			confirmedEventIDs: [101, 102],
			pendingEventIDs: [103]
		});

		fake4.save();

	} // end if statement


}); // stop finding