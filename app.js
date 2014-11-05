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
mongoose.connect('mongodb://localhost/test');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/v/:id', indexController.volunteerDash);
app.get('/e/:id', indexController.eventManagerDash);

app.post('/addVolunteer', indexController.addVolunteer);

app.get('/getEvents/:id', indexController.getEvents);

var server = app.listen(9145, function() {
	console.log('Express server listening on port ' + server.address().port);
});
