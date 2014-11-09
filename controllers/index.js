var User = require('../models/user.js');
var Event = require('../models/event.js');

var indexController = {
	// display events on the homepage
	index: function(req, res) {
		Event.find({}, function(err, results) {
			// find all records, then render
			res.render('index', {
				events: results,
				user: req.user
			});
		});
	},
	renderUser: function(req, res) {
	// Render the new user's dashboard

		Event.find({owner: req.user._id}).populate('volunteerIDs', null, 'user').exec(function(err, myEvents) {
			console.log('All events: ', myEvents);

			// Find the user that you just added to the database
			User.findOne({_id: req.user._id}).populate('confirmedEventIDs', null, 'event').populate('volunteerIDs', null, 'user').exec(function(err, result) {
				// console.log('User found: ', result);

				console.log('All events in users ', myEvents);
				if (req.user.role === 'Volunteer') {
					// Render the new volunteer's dashboard
					res.render('volunteerDashboard', {
						user: result,
						events: myEvents
					});
				} else if (req.user.role === 'Event Manager') {
					res.render('eventManagerDashboard', {
						user: result,
						events: myEvents
					});
				}
			});


		});
	},
	addNewEvent: function(req, res) {
	// Add a new event and immediately show the new event on the user's dashboard

		var data = req.body;

		console.log('current user: ', req.user.name);

		// Use the submitted data to create a new event instance
		var ev = new Event(data);

		// Save and THEN redirect
		ev.save(function(err, ev) {

			// update this event to include this event manager's ID as the owner of the event
			ev.update({owner: req.user._id}, {$push: {owner: req.user._id}}, function(err, result) {
				console.log('updated event: ', result);
			});

			// Update the user to include this new event that he/she created!
			User.update({_id: req.user._id}, {$push: {confirmedEventIDs: ev._id}}, function(err, result){
				// Refresh their dashboard with this new info (see jade file)
				res.redirect('/user/' + req.user.username);
			});

			console.log('Updated user: ', req.user);
		});
	},
	renderEvent: function(req, res) {
	// Render the new event's landing page

		// Find the event that you just added to the database, search by event ID
		Event.findOne({_id: req.params.id}).populate('volunteerIDs', null, 'user').exec(function(err, result) {
			console.log('Event found: ', result);

			// Render the new event page
			res.render('event', {
				e: result,
				user: req.user
			});
		});
	},
	becomeVolunteer: function(req, res) {
		// if (!req.user) {
		// 	console.log('sorry, youre not logged in!');
		// 	res.redirect('/auth/login');
		// } else {

		console.log('Current logged in user: ', req.user.name, 'current user ID: ', req.user._id);
		console.log('Current event: ', req.params._id);

			// Update the user to include info about this new event
			User.update({_id: req.user._id}, {$push: {confirmedEventIDs: req.params._id}}, function(err, result) {
				console.log('updated user: ', result);

				// Find the user that you just added to the database
				User.findOne({_id: req.user._id}).populate('confirmedEventIDs', null, 'event').exec(function(err, result) {
					// console.log('User found: ', result);
				});

			});

			// Update the event to include this new volunteer!
			Event.update({_id: req.params._id}, {$push: {volunteerIDs: req.user._id}}, function(err, result){
				// Refresh their dashboard with this new info (see jade file)
				console.log('updated event: ', result);
				res.redirect('/user/' + req.user.username);
			});

		}
	// }
};

module.exports = indexController;