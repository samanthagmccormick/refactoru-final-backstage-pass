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
	addEvent: function(req, res) {
	// Add a new event, and immediately show that new event within the dashboard.

		var data = req.body;
		var title = req.body.title;

		console.log(title);

		// // Use the submitted data to create a new applicant instance
		// var ev = new Event(data);

		// // Save and THEN redirect
		// ev.save(function(err, result) {
		// 	// find the event manager that just signed up, based on email
		// 	Event.findOne({title: title}, function(err, result) {
		// 		// read User Authentication doc
		// 		console.log('Event found: ', result);

		// 		res.render('eventManagerDashboard', {
		// 			e: result
		// 		});
		// 	});

		// });	
	},
	volunteerDash: function(req, res) {
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
	},
	getEvents: function(req, res) {
		var id = req.params.id; 

		// find ALL events belonging to this eventManager, then render
		Event.find({owner: id}, function(err, results) {
			res.send(results);
		});
	},
	addEvent: function(req, res) {

	}
};

module.exports = indexController;