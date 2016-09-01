'use strict';

const enumify = require('enumify');

exports.register = (server, options, next) => {
  const users = {
    'admin': {
      'id': 1,
      'username': 'admin',
      'password': '$2a$08$W00UQUlD7d7I723DvDCUBuO901fBTgPPXFHRI5FfpkIxwRPyvCNXi',  // 'password'
      'role': server.role.ADMIN.name
    },
    'user': {
      'id': 2,
      'username': 'user',
      'password': '$2a$08$W00UQUlD7d7I723DvDCUBuO901fBTgPPXFHRI5FfpkIxwRPyvCNXi',  // 'password'
      'role': server.role.USER.name
    },
  };

  server.decorate('server', 'users', users);
  return next();
};

exports.register.attributes = {
  name: 'users'
};
