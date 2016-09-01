'use strict';

const Authorization = require('hapi-authorization');

exports.register = (server, options, next) => {
  server.register(Authorization);

  Authorization.options = {
    'roles': [
      server.role.ADMIN.name,
      server.role.USER.name
    ]
  };

  next()
};

exports.register.attributes = {
  name: 'role-wrapper'
};
