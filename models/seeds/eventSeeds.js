// var eventSchema = mongoose.Schema({
// 	title: String,
// 	date: String,
// 	time: Number,
// 	pm: Boolean,
// 	location: String,
// 	locationAddress: String,
// 	url: String,
// 	image: String,
// 	volunteerQuota: Number,
// 	volunteerTime: Number,
// 	volunteerpm: Boolean,
// 	volunteerIDs: [Number],
//  owner: Number
// });

var mongoose = require('mongoose');
var Event = require('../event.js');

Event.find({}, function(err, results) {
	if (results.length === 0) {
		var tedxboulder = new Event({
			id: 11,
			title: 'TEDxBoulder',
			date: 'December 21, 2014',
			startTime: '5:30',
			endTime: '10:00',
			pm: true,
			location: 'Macky Auditorium',
			locationAddress: '285 University Ave, Boulder, CO 80309',
			url: 'http://www.tedxboulder.com/',
			image: 'http://philanthropiece.org/wp-content/uploads/2013/10/TEDxBoulder-Creativewerd.jpg',
			volunteerQuota: 50,
			volunteerTime: '3:00',
			volunteerpm: true,
			volunteerIDs: [1, 2, 3],
			volunteerPerks: 'Free admission, tshirt, water bottle, and stickers. If you\'re 21+, you\'re also invited to the after-party!',
			owner: 101
		});
	
		tedxboulder.save();

		var frozendeadguydays = new Event({
			id: 12,
			title: 'Frozen Dead Guy Days',
			date: 'March 13, 2014',
			startTime: '10:30',
			endTime: '8:00',
			pm: true,
			location: 'Downtown Nederland',
			locationAddress: '1 Main Street, Nederland, CO, 80466',
			url: 'http://frozendeadguydays.org/',
			image: 'http://frozendeadguydays.org/wp-content/uploads/FDGD15_Banner.jpg',
			volunteerQuota: 80,
			volunteerTime: '12:00',
			volunteerpm: true,
			volunteerIDs: [2, 3, 4],
			volunteerPerks: 'Free admission all weekend, free entry fee for 1 game/activity (please sign up online ahead of time), and 2 free drink tickets for the Beer Tent.',
			owner: 101
		});

		frozendeadguydays.save();

		var igniteboulder = new Event({
			id: 13,
			title: 'Ignite Boulder',
			date: 'December 11, 2014',
			startTime: '5:30',
			endTime: '10:30',
			pm: true,
			location: 'The Boulder Theater',
			locationAddress: '2032 14th St, Boulder, CO 80302',
			url: 'http://igniteboulder.com/',
			image: 'http://igniteboulder.com/wp/wp-content/themes/ArtSee/images/logo.png',
			volunteerQuota: 30,
			volunteerTime: '4:00',
			volunteerpm: true,
			volunteerIDs: [1, 2, 4],
			volunteerPerks: 'Free admission, 1 free drink ticket for the bar, 1 free entry in a giveaway, and all the free stickers you could ever want....',
			owner: 101
		});

		igniteboulder.save();

	} // end if statement


}); // stop finding