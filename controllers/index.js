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
	addVolunteer: function(req, res) {
	// Add a new account and immediately get routed to your dashboard.

		// Get the data from the form body
		var data = req.body;
		var email = req.body.email;

		// Use the submitted data to create a new applicant instance
		var vol = new Volunteer(data);

		// Save and THEN redirect
		vol.save(function(err, result) {
			// find the volunteer that is logged in, based on email
			Volunteer.findOne({email: email}, function(err, result) {
				// read User Authentication doc
				console.log('Volunteer found: ', result);

				res.render('volunteerDashboard', {
					volunteer: result
				});
			});

		});
	},
	addEventManager: function(req, res) {
	// Add a new account and immediately get routed to your dashboard. 

		var data = req.body;
		var email = req.body.email;

		// Use the submitted data to create a new applicant instance
		var eMgr = new EventManager(data);

		// Save and THEN redirect
		eMgr.save(function(err, result) {
			// find the event manager that just signed up, based on email
			EventManager.findOne({email: email}, function(err, result) {
				// read User Authentication doc
				console.log('Event Manager found: ', result);

				res.render('eventManagerDashboard', {
					eventManager: result
				});
			});
		});	
	},
	addNewEvent: function(req, res) {
	// Add a new event and immediately get routed to that event page.

		var data = req.body;
		var title = req.body.title;

		console.log('Event Title: ', title);

		// Use the submitted data to create a new event instance
		var ev = new Event(data);

		// Save and THEN redirect
		ev.save(function(err, result) {

			// Find the event that you just added to the database
			Event.findOne({title: title}, function(err, result) {
				console.log('Event found: ', result);

				// Render the new event page
				res.render('event', {
					e: result
				});
			});
		});
	},
	volunteerDash: function(req, res) {
	// Route for visiting your volunteer dashboard

		// Pull the ID property out of the URL
		var id = req.params.id;
		console.log('Volunteer ID: ', id);

		// find the volunteer that is logged in, based on ID
		Volunteer.findOne({id: id}, function(err, result) {
			// read User Authentication doc
			console.log('Volunteer found: ', result);
			// res.send(result);
			res.render('volunteerDashboard', {
				volunteer: result
			});
		});
	},
	eventManagerDash: function(req, res) {
	// Route for visiting your event manager dashboard

		// Pull the ID property out of the URL
		var id = req.params.id;

		// find the volunteer that is logged in, based on ID
		EventManager.findOne({id: id}, function(err, result) {
			// read User Authentication doc
			console.log('Event Manager found: ', result);
			res.render('eventManagerDashboard', {
				eventManager: result
			});
		});
	}
};

module.exports = indexController;