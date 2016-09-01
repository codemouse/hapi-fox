'use strict';

const enumify = require('enumify');

class Role extends enumify.Enum {}
Role.initEnum(['ADMIN', 'USER']);

exports.register = (server, options, next) => {
  server.decorate('server', 'role', Role);
  return next();
};

exports.register.attributes = {
  name: 'roles'
};