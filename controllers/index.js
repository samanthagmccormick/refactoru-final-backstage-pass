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
	volunteerDashboard: function(req, res) {
		// Pull the ID property out of the URL
		var id = req.params.id;
		console.log('Volunteer ID: ', id);

		// find the volunteer that is logged in, based on ID
		Volunteer.findOne({id: id}, function(err, result) {
			// read User Authentication doc
			console.log('Volunteer found: ', result);
			res.render('volunteerDashboard', {
				volunteer: result
			});
		});

	},
	eventManagerDashboard: function(req, res) {
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

		// // find ALL events belonging to this eventManager, then render
		// Event.find({owner: id}, function(err, results) {
		// 	res.render('eventManagerDashboard', {
		// 		events: results,
		// 	})
		// });
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