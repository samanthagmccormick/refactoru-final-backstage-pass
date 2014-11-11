var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// This allows express to parse incoming files from forms
var multer = require('multer');

// Controllers
var indexController = require('./controllers/index.js');
// Passport controller:
var authenticationController = require('./controllers/authentication');

// Express Session allows us to use Cookies to keep track of
// a user across multiple pages. We also need to be able to load
// those cookies using the cookie parser
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Flash allows us to store quick one-time-use messages
// between views that are removed once they are used.
// Useful for error messages.
var flash = require('connect-flash');

// Load in the base passport library so we can inject its hooks
// into express middleware.
var passport = require('passport');

// Load in our passport configuration that decides how passport
// actually runs and authenticates
var passportConfig = require('./config/passport');

// Seed the database
require('./models/seeds/eventSeeds.js');

// Connect to Mongoose database
mongoose.connect('mongodb://localhost/test8');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


// Add in the cookieParser and flash middleware so we can
// use them later
app.use(cookieParser());
app.use(flash());

// Initialize the express session. Needs to be given a secret property
app.use(session({secret: 'secret'}));

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());


// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);



// MY CUSTOM ROUTES

app.get('/', indexController.index);

// app.post('/addUser', indexController.addUser);

app.post('/addNewEvent', indexController.addNewEvent);
app.get('/viewEvent/:id', indexController.renderEvent);

app.get('/becomeVolunteer/:_id', indexController.becomeVolunteer);

// app.post('/addVolunteer', indexController.addVolunteer);
// app.post('/addEventManager', indexController.addEventManager);

// app.get('/volunteer/:id', indexController.renderVolunteer);
// app.get('/eventManager/:id', indexController.renderEventManager);



// ***** IMPORTANT ***** //
// By including this middleware (defined in our config/passport.js module.exports),
// We can prevent unauthorized access to any route handler defined after this call
// to .use()
app.use(passportConfig.ensureAuthenticated);
app.get('/user/:username', indexController.renderUser);

var server = app.listen(9145, function() {
	console.log('Express server listening on port ' + server.address().port);
});
