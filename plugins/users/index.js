'use strict';

const enumify = require('enumify');

exports.register = (server, options, next) => {
  const users = {
    'admin': {
      'username': 'admin',
      'password': '$2a$08$W00UQUlD7d7I723DvDCUBuO901fBTgPPXFHRI5FfpkIxwRPyvCNXi',  // 'password'
      'role': server.role.ADMIN
    },
    'user': {
      'username': 'user',
      'password': '$2a$08$W00UQUlD7d7I723DvDCUBuO901fBTgPPXFHRI5FfpkIxwRPyvCNXi',  // 'password'
      'role': server.role.USER
    },
  };

  server.decorate('server', 'users', users);
  return next();
};

exports.register.attributes = {
  name: 'users'
};
