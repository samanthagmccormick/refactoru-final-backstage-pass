var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Controllers
var indexController = require('./controllers/index.js');

// Seed the database
require('./models/seeds/volunteerSeeds.js');
require('./models/seeds/eventManagerSeeds.js');
require('./models/seeds/eventSeeds.js');

// Connect to Mongoose database
mongoose.connect('mongodb://localhost/test4');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


// MY CUSTOM ROUTES

app.get('/', indexController.index);

app.post('/addUser', indexController.addUser);
app.get('/user/:id', indexController.renderUser);

app.post('/addNewEvent', indexController.addNewEvent);
app.get('/viewEvent/:id', indexController.renderEvent);

app.get('/becomeVolunteer/:_id', indexController.becomeVolunteer);

// app.post('/addVolunteer', indexController.addVolunteer);
// app.post('/addEventManager', indexController.addEventManager);

// app.get('/volunteer/:id', indexController.renderVolunteer);
// app.get('/eventManager/:id', indexController.renderEventManager);

var server = app.listen(9145, function() {
	console.log('Express server listening on port ' + server.address().port);
});
