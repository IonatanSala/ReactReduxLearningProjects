const User = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) return res.status(422).send({error: "You must provide email and password"});
  // see if user with gicen email exists
  User.findOne({ email: email}, function(err, existingUser) {
    // if user with email exists, return error
    if(err) return next(err);
    if(existingUser) return res.status(422).send({error: 'Email is in use'});

    // if a user with email does not exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if(err) return next(err);
      // respond to request
      res.json({success: true});
    });

  });
}
