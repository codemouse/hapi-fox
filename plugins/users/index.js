'use strict';

const users = {
  'admin': {
    'id': '1',
    'username': 'admin',
    'password': '$2a$08$W00UQUlD7d7I723DvDCUBuO901fBTgPPXFHRI5FfpkIxwRPyvCNXi',  // 'password'
    'role': 'ADMIN'
  },
  'user': {
    'id': '1',
    'username': 'user',
    'password': '$2a$08$W00UQUlD7d7I723DvDCUBuO901fBTgPPXFHRI5FfpkIxwRPyvCNXi',  // 'password'
    'role': 'USER'
  },
};

exports.register = (server, options, next) => {
  server.decorate('server', 'users', users);
  return next();
};

exports.register.attributes = {
  name: 'users'
};
