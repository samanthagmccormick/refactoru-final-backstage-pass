// We'll need access to passport in order to call authentication methods
var passport = require('passport');

// We also will be using our User model
var User = require('../models/user');


/**
 * A utility function (since we'll use it a couple times)
 * to abstract out the actual login procedure, which can
 * be used during authentication or signup. Because it
 * mirrors the middleware that calls it, the parameter
 * structure matches. We also need to know the user model
 * we want to log in.
 */
var performLogin = function(req, res, next, user){
  // Passport injects functionality into the express ecosystem,
  // so we are able to call req.login and pass the user we want
  // logged in.
  req.login(user, function(err){
    // If there was an error, allow execution to move to the next middleware
    if(err) return next(err);

    // Otherwise, send the user to their dashboard
    return res.redirect('/user/' + user.username);
  });
};

/**
 * Our base authentication controller object
 */
var authenticationController = {

  // The route-handler for the /auth/login route. Meant to be
  // a page view that only shows login forms
  login: function(req, res){
    // Render the login jade template.
    // We are using the "flash" system, which are variables
    // that can be sent from view to view and are removed
    // after use. Useful for quick messages like "failed to login."
    // In this case, we pull any existing flash message id'd as "error"
    // and pass it to the view.
    res.render('login', {
      error: req.flash('error')
    });
  },

  // This is the post handler for any incoming login attempts.
  // Passing "next" allows us to easily handle any errors that may occur.
  processLogin: function(req, res, next){

    // Passport's "authenticate" method returns a method, so we store it
    // in a variable and call it with the proper arguments afterwards.
    // We are using the "local" strategy defined (and used) in the
    // config/passport.js file
    var authFunction = passport.authenticate('local', function(err, user, info){

      // If there was an error, allow execution to move to the next middleware
      if(err) return next(err);

      // If the user was not successfully logged in due to not being in the
      // database or a password mismatch, set a flash variable to show the error
      // which will be read and used in the "login" handler above and then redirect
      // to that handler.
      if(!user) {
        req.flash('error', 'Error logging in. Please try again.');
        return res.redirect('/auth/login');
      }
      
      // If we make it this far, the user has correctly authenticated with passport
      // so now, we'll just log the user in to the system.
      performLogin(req, res, next, user);
    });

    // Now that we have the authentication method created, we'll call it here.
    authFunction(req, res, next);
  },

  // Slightly different from our login procedure, the signup process
  // will allow new users to create an account. It will immediately try to
  // create the new user and rely on mongoose to throw any duplication errors.
  // If none are found, the user is successfully added to the DB, it is safe to
  // assume that they are ready to log in, so we do that as well.
  processSignup: function(req, res, next){

    // Random images
    var images = ['http://oi62.tinypic.com/4jxe01.jpg', 'http://oi61.tinypic.com/xnhsn8.jpg', 'http://oi57.tinypic.com/2ir7ns8.jpg', 'http://oi59.tinypic.com/14vpbma.jpg', 'http://oi61.tinypic.com/mvnpc3.jpg', 'http://oi59.tinypic.com/k2b60h.jpg'];
   
    // Create a new instance of the User model with the data passed to this
    // handler. By using "param," we can safely assume that this route will
    // work regardless of how the data is sent (post, get).
    // It is safer to send as post, however, because the actual data won't
    // show up in browser history.
    var user = new User({
      role: req.param('role'),
      name: req.param('name'),
      username: req.param('username'),
      password: req.param('password'),
      image: images[Math.floor(Math.random()*(images.length-1))],
      email: req.param('email'),
      mobile: req.param('mobile'),
      location: req.param('location'),
      bio: req.param('bio')
    });

    // Now that the user is created, we'll attempt to save them to the
    // database.
    user.save(function(err, user){

      // If there is an error, it will come with some special codes and
      // information. We can customize the printed message based on
      // the error mongoose encounters
      if(err) {

        // By default, we'll show a generic message...
        var errorMessage = 'An error occured, please try again';

        // If we encounter this error, the duplicate key error,
        // this means that one of our fields marked as "unique"
        // failed to validate on this object.
        if(err.code === 11000){
          errorMessage = 'This user already exists.';
        }

        // Flash the message and redirect to the login view to
        // show it.
        req.flash('error', errorMessage);
        return res.redirect('/auth/login');
      }

      // If we make it this far, we are ready to log the user in.
      performLogin(req, res, next, user);
    });
  },

  // Handle logout requests
  logout: function(req, res){

    // Passport injects the logout method for us to call
    req.logout();

    // Redirect back to the login page
    res.redirect('/auth/login');
  }
};

// Export our controller methods
module.exports = authenticationController;