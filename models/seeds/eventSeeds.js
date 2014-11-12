
var mongoose = require('mongoose');
var Event = require('../event.js');

Event.find({}, function(err, results) {
	if (results.length === 0) {
		var tedxboulder = new Event({
			title: 'TEDxBoulder',
			date: 'Dec 21, 2014',
			startTime: '5:30pm',
			endTime: '10:00pm',
			pm: true,
			location: 'Macky Auditorium',
			locationAddress: '285 University Ave, Boulder, CO 80309',
			url: 'http://www.tedxboulder.com/',
			image: '/images/smallphoto/tedxboulder.png',
			img_lg: '/images/largephoto/tedxboulder.png',
			volunteerQuota: 50,
			volunteerTime: '3:00',
			volunteerpm: true,
			volunteerPerks: 'Free admission, tshirt, water bottle, and stickers. If you\'re 21+, you\'re also invited to the after-party!'
		});
	
		tedxboulder.save();

		var xgames = new Event({
			title: 'X-Games',
			date: 'Jan 22-25, 2015',
			startTime: '4:00pm',
			endTime: '9:30pm',
			pm: true,
			location: 'Buttermilk Mountain',
			locationAddress: 'Downtown Aspen, Colorado 81611',
			url: 'http://xgames.espn.go.com/',
			image: '/images/smallphoto/xgames.png',
			img_lg: '',
			volunteerQuota: 30,
			volunteerTime: '1:00pm',
			volunteerpm: true,
			volunteerPerks: 'Free all-access pass, free 4-show ticket, tshirt'
		});

		xgames.save();

		var frozendeadguydays = new Event({
			title: 'Frozen Dead Guy Days',
			date: 'Mar 13, 2014',
			startTime: '10:30am',
			endTime: '8:00pm',
			pm: true,
			location: 'Downtown Nederland',
			locationAddress: '1 Main Street, Nederland, CO, 80466',
			url: 'http://frozendeadguydays.org/',
			image: '/images/smallphoto/frozen.png',
			image_lg: '/images/largephoto/frozen.jpg',
			volunteerQuota: 80,
			volunteerTime: '12:00',
			volunteerpm: true,
			volunteerPerks: 'Free admission all weekend, free entry fee for 1 game/activity (please sign up online ahead of time), and 2 free drink tickets for the Beer Tent.'	
		});

		frozendeadguydays.save();

		var gabf = new Event({
			title: 'Great American Beer Festival',
			date: 'Sept 24-26, 2015',
			startTime: '10:00am',
			endTime: '10:00pm',
			pm: true,
			location: 'Colorado Convention Center',
			locationAddress: '700 14th Street, Hall F, Denver, Colorado 80202',
			url: 'http://www.greatamericanbeerfestival.com/',
			image: '/images/smallphoto/gabf.png',
			img_lg: '/images/largephoto/gabf.jpg',
			volunteerQuota: 100,
			volunteerTime: '12:00pm',
			volunteerpm: true,
			volunteerPerks: '1-day festival pass, unlimited beer tastings, 1 comped meal, free pint glass, free tshirt!'
		});

		gabf.save();

		var nitrofest = new Event({
			title: 'Nitrofest',
			date: 'Sept 15, 2014',
			startTime: '10:00am',
			endTime: '10:00pm',
			pm: true,
			location: 'Colorado Convention Center',
			locationAddress: '700 14th Street, Hall F, Denver, Colorado 80202',
			url: 'http://www.greatamericanbeerfestival.com/',
			image: '/images/smallphoto/nitrofest.png',
			img_lg: '/images/largephoto/nitrofest.jpg',
			volunteerQuota: 100,
			volunteerTime: '12:00pm',
			volunteerpm: true,
			volunteerPerks: 'Free admission, unlimited beer tastings, 1 comped meal, free pint glass, free tshirt!'
		});

		nitrofest.save();

		var higher = new Event({
			title: 'Higher: Premier at the Boulder Theater',
			date: 'Nov 21, 2014',
			startTime: '7:00pm',
			endTime: '9:30pm',
			pm: true,
			location: 'Boulder Theater',
			locationAddress: '2032 14th Street, Boulder, Colorado 80302',
			url: 'http://www.tetongravity.com/',
			image: '/images/smallphoto/higher.png',
			img_lg: '',
			volunteerQuota: 50,
			volunteerTime: '7:00am',
			volunteerpm: true,
			volunteerPerks: '1-day festival pass, free tshirt, free wine glass.'
		});

		higher.save();

	} // end if statement


}); // stop finding