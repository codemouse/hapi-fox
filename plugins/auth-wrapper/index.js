'use strict';

const Bcrypt = require('bcrypt');
const BasicAuth = require('hapi-auth-basic');

exports.register = (server, options, next) => {
  const basicValidation = (request, username, password, callback) => {
    const user = server.users[username];

    if (!user) {
      return callback(null, false)
    }

    Bcrypt.compare(password, user.password, function (err, isValid) {
      callback(err, isValid, { 'id': user.id, 'username': user.username, 'role': user.role })
    })
  };

  server.register(BasicAuth);
  server.auth.strategy('simple', 'basic', { validateFunc: basicValidation });

  server.auth.default('simple');

  next()
};

exports.register.attributes = {
  name: 'auth-wrapper'
};
