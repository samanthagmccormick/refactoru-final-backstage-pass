var User = require('../models/user.js');
var Volunteer = require('../models/volunteer.js');
var EventManager = require('../models/eventManager.js');
var Event = require('../models/event.js');

var indexController = {
	// display events on the homepage
	index: function(req, res) {
		Event.find({}, function(err, results) {
			// find all records, then render
			res.render('index', {
				events: results
			});
		});
	},
	addUser: function(req, res) {
	// Add a new account and immediately get routed to your dashboard.

		// Get the data from the form body
		var data = req.body;

		// Use the submitted data to create a new applicant instance
		var user = new User(data);

		// Save and THEN redirect
		user.save(function(err, result) {
			console.log('result: ', result);
			res.redirect('/user/' + result._id);
		});
	},
	renderUser: function(req, res) {
	// Render the new volunteer's dashboard

		console.log(req.params);
		// Find the volunteer that you just added to the database
		User.findOne({_id: req.params.id}, function(err, result) {
			console.log('User found: ', result);

			// Render the new volunteer's dashboard
			res.render('userDashboard', {
				user: result
				// user: req.user
			});
		});
	},
	// addVolunteer: function(req, res) {
	// // Add a new account and immediately get routed to your dashboard.

	// 	// Get the data from the form body
	// 	var data = req.body;

	// 	// Use the submitted data to create a new applicant instance
	// 	var vol = new Volunteer(data);

	// 	// Save and THEN redirect
	// 	vol.save(function(err, result) {
	// 		console.log('result: ', result);
	// 		res.redirect('/volunteer/' + result._id);
	// 	});
	// },
	// renderVolunteer: function(req, res) {
	// // Render the new volunteer's dashboard

	// 	console.log(req.params);
	// 	// Find the volunteer that you just added to the database
	// 	Volunteer.findOne({_id: req.params.id}, function(err, result) {
	// 		console.log('Volunteer found: ', result);

	// 		// Render the new volunteer's dashboard
	// 		res.render('volunteerDashboard', {
	// 			volunteer: result
	// 			// user: req.user
	// 		});
	// 	});
	// },
	// addEventManager: function(req, res) {
	// // Add a new account and immediately get routed to your dashboard. 

	// 	var data = req.body;

	// 	// Use the submitted data to create a new applicant instance
	// 	var eMgr = new EventManager(data);

	// 	// Save and THEN redirect
	// 	eMgr.save(function(err, result) {
	// 		console.log('result: ', result);
	// 		res.redirect('/eventManager/' + result._id);
	// 	});	
	// },
	// renderEventManager: function(req, res) {
	// 	console.log(req.params);
	// 	// Find the event that you just added to the database
	// 	EventManager.findOne({_id: req.params.id}, function(err, result) {
	// 		console.log('Event Manager found: ', result);

	// 		// Render the new eventManager dashboard
	// 		res.render('eventManagerDashboard', {
	// 			eventManager: result
	// 			// user: req.user
	// 		});
	// 	});
	// },
	addNewEvent: function(req, res) {
	// Add a new event and immediately get routed to that event page.

		var data = req.body;

		// Use the submitted data to create a new event instance
		var ev = new Event(data);

		// Save and THEN redirect
		ev.save(function(err, result) {
			console.log('result: ', result);
			res.redirect('/viewEvent/' + result._id);
		});
	},
	renderEvent: function(req, res) {
	// Render the new event's landing page

			console.log(req.params);
			// Find the event that you just added to the database
			Event.findOne({_id: req.params.id}, function(err, result) {
				console.log('Event found: ', result);

				// Render the new event page
				res.render('event', {
					e: result
				});
			});
	},
	becomeVolunteer: function(req, res) {
		// var id = req.params._id;
		// console.log(id);

		// Event.findOne({_id: id}, function(err, result) {
		// 	// console.log('Result: ', result);
		// 	result.volunteerIDs.push({
		// 		volunteer: 
		// 	});

		// });
	},
	userDash: function(req, res) {
	// Route for visiting your volunteer dashboard

		// Pull the ID property out of the URL
		var id = req.params.id;
		console.log('User ID: ', id);

		// find the volunteer that is logged in, based on ID
		User.findOne({id: id}, function(err, result) {
			// read User Authentication doc
			console.log('User found: ', result);
			// res.send(result);
			res.render('userDashboard', {
				user: result
			});
		});
	}
	// volunteerDash: function(req, res) {
	// // Route for visiting your volunteer dashboard

	// 	// Pull the ID property out of the URL
	// 	var id = req.params.id;
	// 	console.log('Volunteer ID: ', id);

	// 	// find the volunteer that is logged in, based on ID
	// 	Volunteer.findOne({id: id}, function(err, result) {
	// 		// read User Authentication doc
	// 		console.log('Volunteer found: ', result);
	// 		// res.send(result);
	// 		res.render('volunteerDashboard', {
	// 			volunteer: result
	// 		});
	// 	});
	// },
	// eventManagerDash: function(req, res) {
	// // Route for visiting your event manager dashboard

	// 	// Pull the ID property out of the URL
	// 	var id = req.params.id;

	// 	// find the volunteer that is logged in, based on ID
	// 	EventManager.findOne({id: id}, function(err, result) {
	// 		// read User Authentication doc
	// 		console.log('Event Manager found: ', result);
	// 		res.render('eventManagerDashboard', {
	// 			eventManager: result
	// 		});
	// 	});
	// }
};

module.exports = indexController;