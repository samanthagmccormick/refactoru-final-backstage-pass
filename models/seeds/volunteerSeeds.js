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
			password: 'poopoo',
			mobile: '617-314-3773',
			bio: 'Freelance unicorn curator',
			location: 'Boulder, Colorado',
			confirmedEventIDs: [11, 12],
			pendingEventIDs: [13]
		});
	
		fake1.save();

		var fake2 = new Volunteer({
			id: 2,
			name: 'Jenn Berry',
			image: 'http://placehold.it/200x200',
			email: 'jenn@gmail.com',
			password: 'yolo',
			mobile: '781-555-6767',
			bio: 'Seahorse harness manufacturer',
			location: 'Chicopee, Massachusetts',
			confirmedEventIDs: [12, 13],
			pendingEventIDs: [11]
		});

		fake2.save();

		var fake3 = new Volunteer({
			id: 3,
			name: 'Chris Malvey',
			image: 'http://placehold.it/200x200',
			email: 'chris@gmail.com',
			password: 'whatup',
			mobile: '339-444-8888',
			bio: 'Devilishly good-looking mustard distributor',
			location: 'Gunbarrel, Colorado',
			confirmedEventIDs: [11, 13],
			pendingEventIDs: [12]
		});

		fake3.save();

		var fake4 = new Volunteer({
			id: 4,
			name: 'Mattie Schuler',
			image: 'http://placehold.it/200x200',
			email: 'mattie@gmail.com',
			password: 'sup',
			mobile: '303-222-3999',
			bio: 'Shark tank mechanic',
			location: 'Boulder, Colorado',
			confirmedEventIDs: [11, 12],
			pendingEventIDs: [13]
		});

		fake4.save();

	} // end if statement


}); // stop finding