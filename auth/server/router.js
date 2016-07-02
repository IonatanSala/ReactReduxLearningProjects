const Auth = require('./controllers/auth_controller');

module.exports = function(app) {
  app.post('/signup', Auth.signup);
}
